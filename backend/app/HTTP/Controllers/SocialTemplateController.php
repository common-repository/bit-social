<?php

namespace BitApps\Social\HTTP\Controllers;

use BitApps\Social\Config;
use BitApps\Social\Deps\BitApps\WPKit\Http\Request\Request;
use BitApps\Social\Deps\BitApps\WPKit\Http\Response;

class SocialTemplateController
{
    public $defaultTemplateSettings = [
        'facebook' => [
            'postingType' => 'onlyMessage',
            'content'     => '{post_title}',
            'trimMessage' => true
        ],
        'linkedin' => [
            'postingType' => 'onlyMessage',
            'content'     => '{post_title}',
            'trimMessage' => true
        ],
        'twitter' => [
            'postingType' => 'onlyMessage',
            'content'     => '{post_title}',
            'trimMessage' => true
        ],
        'pinterest' => [
            'postingType' => 'isFeaturedImage',
            'content'     => '{post_title}',
            'trimMessage' => true
        ],
        'discord' => [
            'postingType' => 'onlyMessage',
            'content'     => '{post_title}',
            'trimMessage' => true
        ],
        'tumblr' => [
            'postingType' => 'onlyMessage',
            'content'     => '{post_title}',
            'trimMessage' => true
        ],
        'googleBusinessProfile' => [
            'postingType' => 'onlyMessage',
            'content'     => '{post_title}',
            'button'      => 'none',
            'trimMessage' => true
        ]
    ];

    public function socialTemplates()
    {
        return Response::success($this->getSocialTemplates());
    }

    public function update(Request $request)
    {
        Config::updateOption('templates_settings', $request->socialTemplates);

        return Response::success('Social template updated.');
    }

    public function getSocialTemplates()
    {
        $templateSettings = Config::getOption('templates_settings');

        if (!$templateSettings) {
            Config::updateOption('templates_settings', $this->defaultTemplateSettings);

            $templateSettings = $this->defaultTemplateSettings;
        }

        $keyDiff = array_diff_key($this->defaultTemplateSettings, $templateSettings);

        if (\count($keyDiff) !== 0) {
            $templateSettings = $templateSettings + $keyDiff;

            Config::updateOption('templates_settings', $templateSettings);
        }

        return $templateSettings;
    }
}
