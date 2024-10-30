<?php

use BitApps\Social\Config;
use BitApps\Social\Deps\BitApps\WPDatabase\Blueprint;
use BitApps\Social\Deps\BitApps\WPDatabase\Connection;
use BitApps\Social\Deps\BitApps\WPDatabase\Schema;
use BitApps\Social\Deps\BitApps\WPKit\Migration\Migration;

if (!defined('ABSPATH')) {
    exit;
}

final class BSGroupsMigration extends Migration
{
    public function up()
    {
        Schema::withPrefix(Connection::wpPrefix() . Config::VAR_PREFIX)->create('groups', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('account_ids');
            $table->boolean('status')->defaultValue(1);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::withPrefix(Connection::wpPrefix() . Config::VAR_PREFIX)->drop('groups');
    }
}
