<?php

namespace BitApps\Social\HTTP\Services\Social\LinkedinService;

use AllowDynamicProperties;
use BitApps\Social\Deps\BitApps\WPKit\Http\Client\HttpClient;
use BitApps\Social\HTTP\Services\Interfaces\SocialInterface;
use BitApps\Social\HTTP\Services\Traits\LoggerTrait;
use BitApps\Social\Model\Schedule;
use BitApps\Social\Utils\Common;
use BitApps\Social\Utils\Hash;
use Exception;

#[AllowDynamicProperties]
class PostPublishLinkedinService implements SocialInterface
{
    use Common, LoggerTrait;

    public const LINKEDIN_VERSION = 20240101;

    private $httpHandler;

    /**
     * @var RefreshService $refreshHandler
     */
    private $refreshHandler;

    private $baseUrl = 'https://api.linkedin.com';

    private $postUrl = 'https://www.linkedin.com/feed/update';

    public function __construct()
    {
        $this->httpHandler = new HttpClient();
        $this->refreshHandler = new LinkedinRefreshTokenService();
    }
    // publish post in page and group

    public function publishPost($data)
    {
        $post = $data['post'] ?? null;
        $postId = $post['ID'] ?? null;
        $post_data = [];
        $retry = $data['retry'] ?? false;
        $logId = $data['log_id'] ?? null;

        $template = (object) $data['template'];
        $scheduleType = $data['schedule_type'] ?? null;
        $account_detail = $data['account_details'];
        $schedule_id = $data['schedule_id'] ?? null;
        $account_id = $account_detail->account_id;
        $account_name = $account_detail->account_name;

        $access_token = Hash::decrypt($account_detail->access_token);
        $expires_in = $account_detail->expires_in;
        $refresh_token = Hash::decrypt($account_detail->refresh_token);
        $refresh_token_expires_in = $account_detail->refresh_token_expires_in;

        $client_id = Hash::decrypt($account_detail->client_id);
        $client_secret = Hash::decrypt($account_detail->client_secret);

        $tokenUpdateData = $this->refreshHandler->tokenExpiryCheck($client_id, $client_secret, $access_token, $expires_in, $refresh_token, $refresh_token_expires_in);

        if ($tokenUpdateData->access_token !== $access_token) {
            $account_detail->access_token = Hash::encrypt($tokenUpdateData->access_token);
            $account_detail->expires_in = $tokenUpdateData->expires_in;
            $account_detail->refresh_token = Hash::encrypt($tokenUpdateData->refresh_token);
            $account_detail->refresh_token_expires_in = $tokenUpdateData->refresh_token_expires_in;
            $this->refreshHandler->saveRefreshedToken($account_detail);
        }

        if ($scheduleType === Schedule::scheduleType['DIRECT_SHARE']) {
            $templateMedia = array_map(function ($item) {
                return $item['url'];
            }, $template->media);

            $post_data['content'] = $template->content ?? null;
            $post_data['images'] = $templateMedia ?? null;
            $post_data['link'] = $template->link ?? null;

            $template->isFeaturedImage = false;
            $template->isLinkCard = false;

            if (!empty($templateMedia)) {
                $template->isFeaturedImage = true;
            }

            if (empty($templateMedia) && !empty($template->link)) {
                $template->isLinkCard = true;
            }
        } else {
            $template->platform = 'linkedin';
            $post_data = $this->replacePostContent($postId, $template);
        }

        $postPublishResponse = $this->linkedinPostPublish($post_data, $account_detail, $access_token, $postId, $scheduleType);

        if (\array_key_exists('keepLogs', $data) && !$data['keepLogs']) {
            return;
        }

        $this->logAndRetry($schedule_id, $account_id, $account_name, $postId, $postPublishResponse, $retry, $logId);
    }

    public function linkedinPostPublish($post_data, $account_detail, $access_token, $post_id, $scheduleType)
    {
        $ownerUrn = $account_detail->urn;
        $post_content = $post_data['content'] ?? null;
        $feature_image = $post_data['featureImage'] ?? null;
        $allImages = $post_data['allImages'] ?? null;
        $post_link = $post_data['link'] ?? null;
        $video_url = $post_data['video'] ?? null;

        if ($scheduleType === Schedule::scheduleType['DIRECT_SHARE']) {
            $feature_image = $post_data['images'][0] ?? null;
            $allImages = $post_data['images'] ?? null;
        }

        if (!empty($post_content) && empty($feature_image) && empty($post_link) && empty($allImages) && empty($video_url)) {
            return $this->textPublish($ownerUrn, $post_content, $access_token);
        } elseif (!empty($post_content) && !empty($post_link)) {
            $feature_image = wp_get_attachment_url(get_post_thumbnail_id($post_id));

            return $this->linkCardPublish($ownerUrn, $post_content, $access_token, $post_link, $feature_image, $post_id);
        } elseif (!empty($feature_image) || !empty($allImages)) {
            $allImageUrns = $this->uploadImage($access_token, $ownerUrn, $feature_image, $allImages);

            return $this->linkedinPhotoPost($access_token, $ownerUrn, $allImageUrns, $post_content);
        } elseif (!empty($video_url)) {
            $uploadVideoUrn = $this->uploadVideo($access_token, $ownerUrn, $video_url, $post_content);

            return $this->uploadVideoPost($access_token, $ownerUrn, $uploadVideoUrn, $post_content, $post_id);
        }
    }

    public function textPublish($ownerUrn, $post_content, $access_token)
    {
        $postPublishUrl = $this->baseUrl . '/v2/posts';
        $header = Helper::publishHeader($access_token);

        $data = Helper::commonParams($ownerUrn, $post_content);

        $requestBody = $this->httpHandler->request($postPublishUrl, 'POST', json_encode($data), $header, null);
        $responseHeader = $this->httpHandler->getResponseHeaders();

        if (isset($responseHeader['x-restli-id'])) {
            return [
                'status'  => 1,
                'message' => $responseHeader['x-restli-id']
            ];
        }

        return [
            'status'  => 0,
            'message' => $requestBody->message
        ];
    }

    public function linkCardPublish($ownerUrn, $post_content, $access_token, $post_link, $feature_image, $post_id)
    {
        $postPublishUrl = $this->baseUrl . '/v2/posts';
        $header = Helper::publishHeader($access_token);

        $commonDataParams = Helper::commonParams($ownerUrn, $post_content);

        if (!empty($feature_image)) {
            $feature_image = $this->uploadImage($access_token, $ownerUrn, $feature_image, []);
        }
        $linkData = [
            'content' => [
                'article' => [
                    'source'    => $post_link,
                    'thumbnail' => $feature_image ? $feature_image : '',
                    'title'     => $post_id ? get_the_title($post_id) : '',
                ]
            ],
        ];

        if (empty($linkData['content']['article']['thumbnail'])) {
            unset($linkData['content']['article']['thumbnail']);
        }

        $data = array_merge($commonDataParams, $linkData);

        $this->httpHandler->request($postPublishUrl, 'POST', json_encode($data), $header, null);

        $responseHeader = $this->httpHandler->getResponseHeaders();

        if (isset($responseHeader['x-restli-id'])) {
            return [
                'status'  => 1,
                'message' => $responseHeader['x-restli-id']
            ];
        }

        return [
            'status'  => 0,
            'message' => 'Link are not send, please try again'
        ];
    }

    public function uploadImage($access_token, $ownerUrn, $feature_image, $allImages)
    {
        $initializeImageUrl = $this->baseUrl . '/v2/images?action=initializeUpload';
        $params = json_encode([
            'initializeUploadRequest' => [
                'owner' => $ownerUrn,
            ]
        ]);
        $initializeHeader = Helper::initializeHeader($access_token);

        return Helper::imageUpload($initializeImageUrl, $params, $initializeHeader, $feature_image, $allImages, $access_token, $this->httpHandler);
    }

    public function linkedinPhotoPost($accessToken, $ownerUrn, $allImageUrns, $post_content)
    {
        $postPublish = $this->baseUrl . '/v2/posts';

        $commonDataParams = Helper::commonParams($ownerUrn, $post_content);
        $dataContent['content'] = Helper::makeImageContent($allImageUrns);

        $postData = array_merge($commonDataParams, $dataContent);
        $params = json_encode($postData);

        $commonHeader = Helper::publishHeader($accessToken);
        $header = array_merge($commonHeader, ['Content-Length' => \strlen($params)]);

        $this->httpHandler->request($postPublish, 'POST', $params, $header);

        $responseHeader = $this->httpHandler->getResponseHeaders();

        if (isset($responseHeader['x-restli-id'])) {
            return [
                'status'  => 1,
                'message' => $responseHeader['x-restli-id']
            ];
        }

        return [
            'status'  => 0,
            'message' => 'Photo are not send, please try again'
        ];
    }

    public function uploadVideo($access_token, $ownerUrn, $video_url)
    {
        $initVideoUrl = $this->baseUrl . '/v2/videos?action=initializeUpload';

        $fileContent = Helper::getContents($video_url);

        $initData = json_encode([
            'initializeUploadRequest' => [
                'owner'           => $ownerUrn,
                'fileSizeBytes'   => \strlen($fileContent),
                'uploadCaptions'  => false,
                'uploadThumbnail' => false
            ]
        ]);

        $initHeader = Helper::initializeHeader($access_token);

        $res = '';
        $etags = [];

        try {
            $res = $this->httpHandler->request($initVideoUrl, 'POST', $initData, $initHeader);
        } catch (Exception $e) {
            return false;
        }

        if (! isset($res->value->uploadInstructions) || ! isset($res->value->video)) {
            return false;
        }

        $videoUrn = $res->value->video;
        $uploadToken = isset($res->value->uploadToken) ? $res->value->uploadToken : '';
        $uploadInstructions = $res->value->uploadInstructions;

        foreach ($uploadInstructions as $part) {
            try {
                $headers = [
                    'X-RestLi-Protocol-Version' => '2.0.0',
                    'Authorization'             => 'Bearer ' . $access_token,
                    'LinkedIn-Version'          => static::LINKEDIN_VERSION,
                    'Content-Type'              => 'application/octet-stream'
                ];

                $bodyParams = substr($fileContent, $part->firstByte, $part->lastByte - $part->firstByte + 1);

                $partUrl = $part->uploadUrl;
                $this->httpHandler->request($partUrl, 'POST', $bodyParams, $headers);

                $resHeader = $this->httpHandler->getResponseHeaders();

                if (! isset($resHeader['etag'])) {
                    return false;
                }

                $etags[] = $resHeader['etag'];
            } catch (Exception $e) {
                return false;
            }
        }

        $final = [
            'finalizeUploadRequest' => [
                'video'           => $videoUrn,
                'uploadToken'     => $uploadToken,
                'uploadedPartIds' => $etags
            ]
        ];

        try {
            $finalUploadVideo = $this->baseUrl . '/v2/videos?action=finalizeUpload';

            $finalUploadVideoHeader = [
                'Content-Type'              => 'application/json',
                'X-RestLi-Protocol-Version' => '2.0.0',
                'Authorization'             => 'Bearer ' . $access_token,
                'LinkedIn-Version'          => static::LINKEDIN_VERSION
            ];

            $finalVideoBody = json_encode($final);

            $finalUploadVideoRes = $this->httpHandler->request($finalUploadVideo, 'POST', $finalVideoBody, $finalUploadVideoHeader);
            if (empty($finalUploadVideoRes)) {
                return $videoUrn;
            }
        } catch (Exception $e) {
            return false;
        }

        return false;
    }

    public function uploadVideoPost($access_token, $ownerUrn, $uploadVideoUrn, $post_content, $post_id)
    {
        $post_publish_url = $this->baseUrl . '/v2/posts';

        $videoContentParams = [
            'content' => [
                'media' => [
                    'title' => $post_id ? get_the_title($post_id) : '',
                    'id'    => $uploadVideoUrn
                ]
            ]
        ];

        $commonDataParams = Helper::commonParams($ownerUrn, $post_content);
        $finalVideoData = json_encode(array_merge($commonDataParams, $videoContentParams));

        $sendVideoHeaders = array_merge(Helper::publishHeader($access_token), ['LinkedIn-Version' => static::LINKEDIN_VERSION]);

        try {
            $this->httpHandler->request($post_publish_url, 'POST', $finalVideoData, $sendVideoHeaders);
            $videoPostHeaderRes = $this->httpHandler->getResponseHeaders();
            if (isset($videoPostHeaderRes['x-restli-id'])) {
                return [
                    'status'  => 1,
                    'message' => $videoPostHeaderRes['x-restli-id']
                ];
            }

            return [
                'status'  => 0,
                'message' => 'Video are not send, Please try again'
            ];
        } catch (Exception $e) {
            return [
                'status'  => 0,
                'message' => 'Video are not send, Please try again'
            ];
        }
    }

    private function logAndRetry($schedule_id, $account_id, $account_name, $postId, $postPublishResponse, $retry, $logId)
    {
        $responseData = [
            'schedule_id' => $schedule_id,
            'details'     => [
                'account_id'   => $account_id,
                'account_name' => $account_name,
                'post_id'      => $postId ?? null,
                'response'     => $postPublishResponse,
                'post_url'     => $postPublishResponse['status'] === 0 ? $postPublishResponse['message'] : "{$this->postUrl}/{$postPublishResponse['message']}"
            ],
            'platform' => 'linkedin',
            'status'   => $postPublishResponse['status'] ?? 0
        ];

        if ($retry) {
            $this->logUpdate($responseData, $logId);

            return;
        }

        $this->logCreate($responseData);
    }
}
