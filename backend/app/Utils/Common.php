<?php

namespace BitApps\Social\Utils;

use BitApps\Social\Config;
use BitApps\Social\HTTP\Controllers\AccountController;

trait Common
{
    public $platformLimitations = [
        'facebook'              => 63206,
        'twitter'               => 280,
        'linkedin'              => 3000,
        'pinterest'             => 497,
        'discord'               => 2000,
        'tumblr'                => 4096,
        'googleBusinessProfile' => 750
    ];

    /**
     * @param int|array $scheduleIdentifier
     *
     * @return bool|array
     */
    public function removeScheduleHook($scheduleIdentifier)
    {
        if (empty($scheduleIdentifier)) {
            return false;
        }

        if (\is_array($scheduleIdentifier)) {
            $clearedHooks = [];

            foreach ($scheduleIdentifier as $id) {
                $clearedHooks[$id] = $this->clearScheduleById($id);
            }

            return $clearedHooks;
        }

        return $this->clearScheduleById($scheduleIdentifier);
    }

    public function clearScheduleById($id)
    {
        $actionHook = Config::VAR_PREFIX . $id . '_cron_exec';

        return wp_clear_scheduled_hook($actionHook, [['schedule_id' => $id]]);
    }

    public function replacePostContent($id, $template)
    {
        $pattern = '/{([^}]*)}/';
        $content = $template->content;
        $featureImage = '';
        $link = '';
        $allImages = '';
        $video = '';
        $button = $template->button ?? '';

        if (!property_exists($template, 'trimMessage')) {
            $templateOptions = Config::getOption('templates_settings');
            $trimMessage = $templateOptions[$template->platform]['trimMessage'];
            $template->trimMessage = $trimMessage;
        }

        preg_match_all($pattern, $content, $matches);
        if (empty($matches[1])) {
            $content = $template->content;
        }
        $tags = $matches[1];

        $smartTag = new SmartTag();
        $post = get_post($id);

        if (!$post) {
            return '';
        }

        $propertyTagMap = [
            'isFeaturedImage' => SmartTag::tag('featuredImageUrl'),
            'isProductImage'  => SmartTag::tag('productImageUrl'),
            'isLinkCard'      => SmartTag::tag('postLink'),
            'isAllImages'     => 'all_images',
        ];

        // Variable initialization to ensure there's no conflict
        $featureImage = null;
        $link = null;
        $allImages = null;

        foreach ($tags as $tag) {
            $value = $smartTag->getSmartTagValue($tag, $post);

            // Remove placeholder if no value
            if ($value === '') {
                $content = str_replace('{' . $tag . '} ', '', $content);
            }

            // Replace content tags with the smart tag values
            $content = str_replace('{' . $tag . '}', $value, $content);
        }

        if (property_exists($template, 'trimMessage') && $template->trimMessage) {
            $content = $this->clipText($template->platform, $content, $link);
        }

        // Handle properties and assign values without overwriting
        foreach ($propertyTagMap as $property => $smartTagValue) {
            if ((property_exists($template, $property) && $template->{$property})
                || (property_exists($template, 'postingType') && $template->postingType === $property)) {
                switch ($property) {
                    case 'isFeaturedImage':
                        $featureImage = $smartTag->getSmartTagValue($smartTagValue, $post);

                        break;
                    case 'isProductImage':
                        $featureImage = $smartTag->getSmartTagValue($smartTagValue, $post);

                        break;
                    case 'isLinkCard':
                        $link = $smartTag->getSmartTagValue($smartTagValue, $post);

                        break;
                    case 'isAllImages':
                        $allImages = $smartTag->getSmartTagValue($smartTagValue, $post);

                        break;
                    case 'isVideo':
                        $video = $smartTag->getSmartTagValue($smartTagValue, $post);

                        break;
                }
            }
        }

        return [
            'title'        => get_the_title($id),
            'content'      => $content,
            'featureImage' => $featureImage,
            'link'         => $link,
            'allImages'    => $allImages,
            'video'        => $video,
            'button'       => $button
        ];
    }

    public function isPlatFormExists($accountId)
    {
        $accountInfo = AccountController::isExists($accountId);
        if (!$accountInfo) {
            return false;
        }

        $platform = $accountInfo->platform;
        $details = $accountInfo->details;

        $platformDir = 'BitApps\Social\HTTP\Services\Social';

        if (class_exists('BitApps\SocialPro\HTTP\Services\Social' . '\\' . ucfirst($platform) . 'Service' . '\\' . 'PostPublish' . ucfirst($platform) . 'Service') && $platform !== 'facebook' && $platform !== 'linkedin') {
            $platformDir = 'BitApps\SocialPro\HTTP\Services\Social';
        }

        if (!class_exists($platformDir . '\\' . ucfirst($platform) . 'Service' . '\\' . 'PostPublish' . ucfirst($platform) . 'Service')) {
            return false;
        }

        return [
            'class'    => $platformDir . '\\' . ucfirst($platform) . 'Service' . '\\' . 'PostPublish' . ucfirst($platform) . 'Service',
            'platform' => $platform,
            'details'  => \is_string($details) ? json_decode($details) : $details,
        ];
    }

    public function clipText($platform, $content, $link)
    {
        $backSlashNCount = substr_count($content, "\n");
        $textLength = \strlen($content) - $backSlashNCount;
        $maxLength = $this->platformLimitations[$platform] ?? $textLength;

        if ($platform === 'twitter' && !empty($link)) {
            $maxLength = $maxLength - \strlen($link); // twitter count characters for a link also
        }

        if ($textLength > $maxLength) {
            return substr($content, 0, $maxLength);
        }

        return $content;
    }
}
