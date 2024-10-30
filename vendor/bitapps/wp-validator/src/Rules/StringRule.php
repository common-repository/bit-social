<?php

namespace BitApps\Social\Deps\BitApps\WPValidator\Rules;

use BitApps\Social\Deps\BitApps\WPValidator\Rule;

class StringRule extends Rule
{
    protected $message = "The :attribute field should be string";

    public function validate($value)
    {
        return is_string($value);
    }

    public function message()
    {
        return $this->message;
    }
}
