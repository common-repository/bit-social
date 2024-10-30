<?php
namespace BitApps\Social\Deps\BitApps\WPValidator\Rules;

use BitApps\Social\Deps\BitApps\WPValidator\Rule;

class NullableRule extends Rule
{

    private $message = '';

    public function validate($value)
    {
        return true;
    }

    public function message()
    {
        return $this->message;
    }
}
