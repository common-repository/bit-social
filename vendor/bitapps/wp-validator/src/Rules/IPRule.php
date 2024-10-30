<?php
namespace BitApps\Social\Deps\BitApps\WPValidator\Rules;

use BitApps\Social\Deps\BitApps\WPValidator\Rule;

class IPRule extends Rule
{
    private $message = "The :attribute must be a valid IP address";

    public function validate($value)
    {
        return filter_var($value, FILTER_VALIDATE_IP) !== false;
    }

    public function message()
    {
        return $this->message;
    }
}
