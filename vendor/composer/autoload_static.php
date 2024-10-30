<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite35094ba4c18925f08088b9071902458
{
    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'TypistTech\\Imposter\\Plugin\\' => 27,
            'TypistTech\\Imposter\\' => 20,
        ),
        'B' => 
        array (
            'BitApps\\WPValidator\\' => 20,
            'BitApps\\WPTelemetry\\' => 20,
            'BitApps\\WPKit\\' => 14,
            'BitApps\\WPDatabase\\' => 19,
            'BitApps\\Social\\' => 15,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'TypistTech\\Imposter\\Plugin\\' => 
        array (
            0 => __DIR__ . '/..' . '/typisttech/imposter-plugin/src',
        ),
        'TypistTech\\Imposter\\' => 
        array (
            0 => __DIR__ . '/..' . '/typisttech/imposter/src',
        ),
        'BitApps\\WPValidator\\' => 
        array (
            0 => __DIR__ . '/..' . '/bitapps/wp-validator/src',
        ),
        'BitApps\\WPTelemetry\\' => 
        array (
            0 => __DIR__ . '/..' . '/bitapps/wp-telemetry/src',
        ),
        'BitApps\\WPKit\\' => 
        array (
            0 => __DIR__ . '/..' . '/bitapps/wp-kit/src',
        ),
        'BitApps\\WPDatabase\\' => 
        array (
            0 => __DIR__ . '/..' . '/bitapps/wp-database/src',
        ),
        'BitApps\\Social\\' => 
        array (
            0 => __DIR__ . '/../..' . '/backend/app',
        ),
    );

    public static $classMap = array (
        'BitApps\\Social\\Config' => __DIR__ . '/../..' . '/backend/app/Config.php',
        'BitApps\\Social\\Deps\\BitApps\\WPDatabase\\Blueprint' => __DIR__ . '/..' . '/bitapps/wp-database/src/Blueprint.php',
        'BitApps\\Social\\Deps\\BitApps\\WPDatabase\\Connection' => __DIR__ . '/..' . '/bitapps/wp-database/src/Connection.php',
        'BitApps\\Social\\Deps\\BitApps\\WPDatabase\\Model' => __DIR__ . '/..' . '/bitapps/wp-database/src/Model.php',
        'BitApps\\Social\\Deps\\BitApps\\WPDatabase\\QueryBuilder' => __DIR__ . '/..' . '/bitapps/wp-database/src/QueryBuilder.php',
        'BitApps\\Social\\Deps\\BitApps\\WPDatabase\\Relations' => __DIR__ . '/..' . '/bitapps/wp-database/src/Relations.php',
        'BitApps\\Social\\Deps\\BitApps\\WPDatabase\\Schema' => __DIR__ . '/..' . '/bitapps/wp-database/src/Schema.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Configs\\JsonConfig' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Configs/JsonConfig.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Helpers\\Arr' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Helpers/Arr.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Helpers\\DateTimeHelper' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Helpers/DateTimeHelper.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Helpers\\JSON' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Helpers/JSON.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Helpers\\Slug' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Helpers/Slug.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Hooks\\Hooks' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Hooks/Hooks.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Hooks\\HooksWrapper' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Hooks/HooksWrapper.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Http\\Client\\Http' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Client/Http.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Http\\Client\\HttpClient' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Client/HttpClient.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Http\\IpTool' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/IpTool.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Http\\RequestType' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/RequestType.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Http\\Request\\Request' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Request/Request.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Http\\Request\\Validator\\RuleInterface' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Request/Validator/RuleInterface.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Http\\Response' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Response.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Http\\Router\\APIRouter' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Router/APIRouter.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Http\\Router\\AjaxRouter' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Router/AjaxRouter.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Http\\Router\\Route' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Router/Route.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Http\\Router\\RouteBase' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Router/RouteBase.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Http\\Router\\RouteRegister' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Router/RouteRegister.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Http\\Router\\Router' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Router/Router.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Installer' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Installer.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Migration\\Migration' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Migration/Migration.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Migration\\MigrationHelper' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Migration/MigrationHelper.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Shortcode\\Shortcode' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Shortcode/Shortcode.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Shortcode\\ShortcodeWrapper' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Shortcode/ShortcodeWrapper.php',
        'BitApps\\Social\\Deps\\BitApps\\WPKit\\Utils\\Capabilities' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Utils/Capabilities.php',
        'BitApps\\Social\\Deps\\BitApps\\WPTelemetry\\Telemetry\\Feedback\\Feedback' => __DIR__ . '/..' . '/bitapps/wp-telemetry/src/Telemetry/Feedback/Feedback.php',
        'BitApps\\Social\\Deps\\BitApps\\WPTelemetry\\Telemetry\\Report\\Report' => __DIR__ . '/..' . '/bitapps/wp-telemetry/src/Telemetry/Report/Report.php',
        'BitApps\\Social\\Deps\\BitApps\\WPTelemetry\\Telemetry\\Report\\ReportInfo' => __DIR__ . '/..' . '/bitapps/wp-telemetry/src/Telemetry/Report/ReportInfo.php',
        'BitApps\\Social\\Deps\\BitApps\\WPTelemetry\\Telemetry\\Telemetry' => __DIR__ . '/..' . '/bitapps/wp-telemetry/src/Telemetry/Telemetry.php',
        'BitApps\\Social\\Deps\\BitApps\\WPTelemetry\\Telemetry\\TelemetryConfig' => __DIR__ . '/..' . '/bitapps/wp-telemetry/src/Telemetry/TelemetryConfig.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\ErrorBag' => __DIR__ . '/..' . '/bitapps/wp-validator/src/ErrorBag.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Exception\\InvalidArgumentException' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Exception/InvalidArgumentException.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Exception\\MethodNotFoundException' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Exception/MethodNotFoundException.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Exception\\RuleErrorException' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Exception/RuleErrorException.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Helpers' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Helpers.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\InputDataContainer' => __DIR__ . '/..' . '/bitapps/wp-validator/src/InputDataContainer.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\AcceptedRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/AcceptedRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\ArrayRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/ArrayRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\BetweenRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/BetweenRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\BooleanRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/BooleanRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\DateRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/DateRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\DigitBetweenRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/DigitBetweenRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\DigitsRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/DigitsRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\EmailRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/EmailRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\IP4Rule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/IP4Rule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\IP6Rule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/IP6Rule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\IPRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/IPRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\IntegerRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/IntegerRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\JsonRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/JsonRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\LowercaseRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/LowercaseRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\MacAddressRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/MacAddressRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\MaxRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/MaxRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\MinRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/MinRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\NullableRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/NullableRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\NumericRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/NumericRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\ObjectRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/ObjectRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\RequiredRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/RequiredRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\SameRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/SameRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\SizeRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/SizeRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\StringRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/StringRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\UppercaseRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/UppercaseRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Rules\\UrlRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/UrlRule.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\SanitizationMethods' => __DIR__ . '/..' . '/bitapps/wp-validator/src/SanitizationMethods.php',
        'BitApps\\Social\\Deps\\BitApps\\WPValidator\\Validator' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Validator.php',
        'BitApps\\Social\\Dotenv' => __DIR__ . '/../..' . '/backend/app/Dotenv.php',
        'BitApps\\Social\\HTTP\\Controllers\\AccountController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/AccountController.php',
        'BitApps\\Social\\HTTP\\Controllers\\AnalyticsController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/AnalyticsController.php',
        'BitApps\\Social\\HTTP\\Controllers\\AuthController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/AuthController.php',
        'BitApps\\Social\\HTTP\\Controllers\\AutoPostController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/AutoPostController.php',
        'BitApps\\Social\\HTTP\\Controllers\\BitSocialAnalyticsController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/BitSocialAnalyticsController.php',
        'BitApps\\Social\\HTTP\\Controllers\\ChangelogController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/ChangelogController.php',
        'BitApps\\Social\\HTTP\\Controllers\\CustomAppController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/CustomAppController.php',
        'BitApps\\Social\\HTTP\\Controllers\\DebugLogController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/DebugLogController.php',
        'BitApps\\Social\\HTTP\\Controllers\\GroupController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/GroupController.php',
        'BitApps\\Social\\HTTP\\Controllers\\LogController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/LogController.php',
        'BitApps\\Social\\HTTP\\Controllers\\PluginImprovementController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/PluginImprovementController.php',
        'BitApps\\Social\\HTTP\\Controllers\\RedirectController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/RedirectController.php',
        'BitApps\\Social\\HTTP\\Controllers\\RetryController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/RetryController.php',
        'BitApps\\Social\\HTTP\\Controllers\\ScheduleController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/ScheduleController.php',
        'BitApps\\Social\\HTTP\\Controllers\\SettingsController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/SettingsController.php',
        'BitApps\\Social\\HTTP\\Controllers\\ShareNowController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/ShareNowController.php',
        'BitApps\\Social\\HTTP\\Controllers\\SocialTemplateController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/SocialTemplateController.php',
        'BitApps\\Social\\HTTP\\Controllers\\UserInfoController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/UserInfoController.php',
        'BitApps\\Social\\HTTP\\Controllers\\WpPostController' => __DIR__ . '/../..' . '/backend/app/HTTP/Controllers/WpPostController.php',
        'BitApps\\Social\\HTTP\\Middleware\\NonceCheckerMiddleware' => __DIR__ . '/../..' . '/backend/app/HTTP/Middleware/NonceCheckerMiddleware.php',
        'BitApps\\Social\\HTTP\\Requests\\AuthorizeRequest' => __DIR__ . '/../..' . '/backend/app/HTTP/Requests/AuthorizeRequest.php',
        'BitApps\\Social\\HTTP\\Requests\\ScheduleStoreRequest' => __DIR__ . '/../..' . '/backend/app/HTTP/Requests/ScheduleStoreRequest.php',
        'BitApps\\Social\\HTTP\\Requests\\SettingsUpdateRequest' => __DIR__ . '/../..' . '/backend/app/HTTP/Requests/SettingsUpdateRequest.php',
        'BitApps\\Social\\HTTP\\Services\\Factories\\AuthServiceFactory' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Factories/AuthServiceFactory.php',
        'BitApps\\Social\\HTTP\\Services\\Factories\\PlatformAppInfoResolverFactory' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Factories/PlatformAppInfoResolverFactory.php',
        'BitApps\\Social\\HTTP\\Services\\Interfaces\\AuthServiceInterface' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Interfaces/AuthServiceInterface.php',
        'BitApps\\Social\\HTTP\\Services\\Interfaces\\PlatformAppInfoResolverInterface' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Interfaces/PlatformAppInfoResolverInterface.php',
        'BitApps\\Social\\HTTP\\Services\\Interfaces\\SocialInterface' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Interfaces/SocialInterface.php',
        'BitApps\\Social\\HTTP\\Services\\Schedule\\CustomSchedule' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Schedule/CustomSchedule.php',
        'BitApps\\Social\\HTTP\\Services\\Schedule\\ScheduleInfo' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Schedule/ScheduleInfo.php',
        'BitApps\\Social\\HTTP\\Services\\Schedule\\SocialExecution' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Schedule/SocialExecution.php',
        'BitApps\\Social\\HTTP\\Services\\Social\\AppInfo\\FacebookAppInfoResolver' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Social/AppInfo/FacebookAppInfoResolver.php',
        'BitApps\\Social\\HTTP\\Services\\Social\\AppInfo\\LinkedinAppInfoResolver' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Social/AppInfo/LinkedinAppInfoResolver.php',
        'BitApps\\Social\\HTTP\\Services\\Social\\FacebookService\\FacebookOAuth2Service' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Social/FacebookService/FacebookOAuth2Service.php',
        'BitApps\\Social\\HTTP\\Services\\Social\\FacebookService\\PostPublishFacebookService' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Social/FacebookService/PostPublishFacebookService.php',
        'BitApps\\Social\\HTTP\\Services\\Social\\FacebookService\\RefreshFacebookService' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Social/FacebookService/RefreshFacebookService.php',
        'BitApps\\Social\\HTTP\\Services\\Social\\LinkedinService\\Helper' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Social/LinkedinService/Helper.php',
        'BitApps\\Social\\HTTP\\Services\\Social\\LinkedinService\\LinkedinOAuth2Service' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Social/LinkedinService/LinkedinOAuth2Service.php',
        'BitApps\\Social\\HTTP\\Services\\Social\\LinkedinService\\LinkedinRefreshTokenService' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Social/LinkedinService/LinkedinRefreshTokenService.php',
        'BitApps\\Social\\HTTP\\Services\\Social\\LinkedinService\\PostPublishLinkedinService' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Social/LinkedinService/PostPublishLinkedinService.php',
        'BitApps\\Social\\HTTP\\Services\\Social\\Social' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Social/Social.php',
        'BitApps\\Social\\HTTP\\Services\\Social\\SocialValidator' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Social/SocialValidator.php',
        'BitApps\\Social\\HTTP\\Services\\Traits\\LoggerTrait' => __DIR__ . '/../..' . '/backend/app/HTTP/Services/Traits/LoggerTrait.php',
        'BitApps\\Social\\Model\\Account' => __DIR__ . '/../..' . '/backend/app/Model/Account.php',
        'BitApps\\Social\\Model\\CustomApp' => __DIR__ . '/../..' . '/backend/app/Model/CustomApp.php',
        'BitApps\\Social\\Model\\Group' => __DIR__ . '/../..' . '/backend/app/Model/Group.php',
        'BitApps\\Social\\Model\\Log' => __DIR__ . '/../..' . '/backend/app/Model/Log.php',
        'BitApps\\Social\\Model\\Schedule' => __DIR__ . '/../..' . '/backend/app/Model/Schedule.php',
        'BitApps\\Social\\Plugin' => __DIR__ . '/../..' . '/backend/app/Plugin.php',
        'BitApps\\Social\\Providers\\HookProvider' => __DIR__ . '/../..' . '/backend/app/Providers/HookProvider.php',
        'BitApps\\Social\\Providers\\InstallerProvider' => __DIR__ . '/../..' . '/backend/app/Providers/InstallerProvider.php',
        'BitApps\\Social\\Providers\\ScheduleActionHook' => __DIR__ . '/../..' . '/backend/app/Providers/ScheduleActionHook.php',
        'BitApps\\Social\\Utils\\Common' => __DIR__ . '/../..' . '/backend/app/Utils/Common.php',
        'BitApps\\Social\\Utils\\Hash' => __DIR__ . '/../..' . '/backend/app/Utils/Hash.php',
        'BitApps\\Social\\Utils\\PostInfo' => __DIR__ . '/../..' . '/backend/app/Utils/PostInfo.php',
        'BitApps\\Social\\Utils\\SmartTag' => __DIR__ . '/../..' . '/backend/app/Utils/SmartTag.php',
        'BitApps\\Social\\Utils\\WpPost' => __DIR__ . '/../..' . '/backend/app/Utils/WpPost.php',
        'BitApps\\Social\\Views\\Body' => __DIR__ . '/../..' . '/backend/app/Views/Body.php',
        'BitApps\\Social\\Views\\Head' => __DIR__ . '/../..' . '/backend/app/Views/Head.php',
        'BitApps\\Social\\Views\\Layout' => __DIR__ . '/../..' . '/backend/app/Views/Layout.php',
        'BitApps\\Social\\Views\\PluginPageActions' => __DIR__ . '/../..' . '/backend/app/Views/PluginPageActions.php',
        'BitApps\\Social\\Views\\SideBarMenu' => __DIR__ . '/../..' . '/backend/app/Views/SideBarMenu.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'TypistTech\\Imposter\\ArrayUtil' => __DIR__ . '/..' . '/typisttech/imposter/src/ArrayUtil.php',
        'TypistTech\\Imposter\\Config' => __DIR__ . '/..' . '/typisttech/imposter/src/Config.php',
        'TypistTech\\Imposter\\ConfigCollection' => __DIR__ . '/..' . '/typisttech/imposter/src/ConfigCollection.php',
        'TypistTech\\Imposter\\ConfigCollectionFactory' => __DIR__ . '/..' . '/typisttech/imposter/src/ConfigCollectionFactory.php',
        'TypistTech\\Imposter\\ConfigCollectionInterface' => __DIR__ . '/..' . '/typisttech/imposter/src/ConfigCollectionInterface.php',
        'TypistTech\\Imposter\\ConfigFactory' => __DIR__ . '/..' . '/typisttech/imposter/src/ConfigFactory.php',
        'TypistTech\\Imposter\\ConfigInterface' => __DIR__ . '/..' . '/typisttech/imposter/src/ConfigInterface.php',
        'TypistTech\\Imposter\\Filesystem' => __DIR__ . '/..' . '/typisttech/imposter/src/Filesystem.php',
        'TypistTech\\Imposter\\FilesystemInterface' => __DIR__ . '/..' . '/typisttech/imposter/src/FilesystemInterface.php',
        'TypistTech\\Imposter\\Imposter' => __DIR__ . '/..' . '/typisttech/imposter/src/Imposter.php',
        'TypistTech\\Imposter\\ImposterFactory' => __DIR__ . '/..' . '/typisttech/imposter/src/ImposterFactory.php',
        'TypistTech\\Imposter\\ImposterInterface' => __DIR__ . '/..' . '/typisttech/imposter/src/ImposterInterface.php',
        'TypistTech\\Imposter\\Plugin\\AutoloadMerger' => __DIR__ . '/..' . '/typisttech/imposter-plugin/src/AutoloadMerger.php',
        'TypistTech\\Imposter\\Plugin\\ImposterPlugin' => __DIR__ . '/..' . '/typisttech/imposter-plugin/src/ImposterPlugin.php',
        'TypistTech\\Imposter\\Plugin\\Transformer' => __DIR__ . '/..' . '/typisttech/imposter-plugin/src/Transformer.php',
        'TypistTech\\Imposter\\ProjectConfig' => __DIR__ . '/..' . '/typisttech/imposter/src/ProjectConfig.php',
        'TypistTech\\Imposter\\ProjectConfigInterface' => __DIR__ . '/..' . '/typisttech/imposter/src/ProjectConfigInterface.php',
        'TypistTech\\Imposter\\StringUtil' => __DIR__ . '/..' . '/typisttech/imposter/src/StringUtil.php',
        'TypistTech\\Imposter\\Transformer' => __DIR__ . '/..' . '/typisttech/imposter/src/Transformer.php',
        'TypistTech\\Imposter\\TransformerInterface' => __DIR__ . '/..' . '/typisttech/imposter/src/TransformerInterface.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite35094ba4c18925f08088b9071902458::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite35094ba4c18925f08088b9071902458::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInite35094ba4c18925f08088b9071902458::$classMap;

        }, null, ClassLoader::class);
    }
}