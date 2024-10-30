<?php

namespace BitApps\Social\Model;

use BitApps\Social\Config;
use BitApps\Social\Deps\BitApps\WPDatabase\Model;

final class Group extends Model
{
    protected $fillable = [
        'name',
        'account_ids',
        'status',
    ];

    protected $casts = [
        'id'          => 'int',
        'account_ids' => 'string',
        'status'      => 'int',
        'name'        => 'string'
    ];

    protected $prefix = Config::VAR_PREFIX;
}
