<?php

namespace BitApps\Social\Utils;

use BitApps\SocialPro\Config as ProConfig;

use Exception;

class SmartTag
{
    use PostInfo;

    public static $smartTagNameList = [
        'postId'                  => ['key' => 'post_id', 'label' => 'Post ID', 'description' => 'Post ID', 'type' => 'free'],
        'postAuthor'              => ['key' => 'post_author', 'label' => 'Post Author Name', 'description' => 'Post author name', 'type' => 'free'],
        'postTitle'               => ['key' => 'post_title', 'label' => 'Post Title', 'description' => 'Post title', 'type' => 'free'],
        'postTags'                => ['key' => 'post_tags', 'label' => 'Post Tags', 'description' => 'Post tags', 'type' => 'free'],
        'postCategories'          => ['key' => 'post_categories', 'label' => 'Post Categories', 'description' => 'Post Categories', 'type' => 'free'],
        'uniqId'                  => ['key' => 'uniq_id', 'label' => 'Unique ID', 'description' => 'Post unique ID', 'type' => 'free'],
        'customField'             => ['key' => 'custom_field_[your_key_name]', 'label' => 'Custom Field', 'description' => 'Custom field', 'type' => 'pro'],
        'featuredImageUrl'        => ['key' => 'featured_image_url', 'label' => 'Featured Image URL', 'description' => 'Post featured image URL', 'type' => 'free'],
        'postContentFull'         => ['key' => 'post_content_full', 'label' => 'Post Full Content', 'description' => 'Post full content', 'type' => 'free'],
        'postContent40'           => ['key' => 'post_content_short_40', 'label' => 'Post Content Short 40', 'description' => 'Post content share default first 40 characters, You can set the number whatever you want', 'type' => 'free'],
        'postExcerpt'             => ['key' => 'post_excerpt', 'label' => 'Post Excerpt', 'description' => 'Post excerpt', 'type' => 'free'],
        'postLink'                => ['key' => 'post_link', 'label' => 'Post Link', 'description' => 'Post link', 'type' => 'free'],
        'productName'             => ['key' => 'product_name', 'label' => 'Product Name', 'description' => 'WC Product name', 'type' => 'pro'],
        'productDescription'      => ['key' => 'product_description', 'label' => 'Product Description', 'description' => 'WC Product description', 'type' => 'pro'],
        'productShortDescription' => ['key' => 'product_short_description', 'label' => 'Product Sort Description', 'description' => 'WC Product short Description', 'type' => 'pro'],
        'productPrice'            => ['key' => 'product_price', 'label' => 'Product Price', 'description' => 'WC Product price', 'type' => 'pro'],
        'productSalePrice'        => ['key' => 'product_sale_price', 'label' => 'Product Sale Price', 'description' => 'WC Product sale price', 'type' => 'pro'],
        'productRegularPrice'     => ['key' => 'product_regular_price', 'label' => 'Product Regular price', 'description' => 'WC Product regular price', 'type' => 'pro'],
        'productStockQuantity'    => ['key' => 'product_stock_quantity', 'label' => 'Product Stock Quantity', 'description' => 'WC Product stock quantity', 'type' => 'pro'],
        'productWeight'           => ['key' => 'product_weight', 'label' => 'Product Weight', 'description' => 'WC Product weight', 'type' => 'pro'],
        'productLength'           => ['key' => 'product_length', 'label' => 'Product Length', 'description' => 'WC Product length', 'type' => 'pro'],
        'productWidth'            => ['key' => 'product_width', 'label' => 'Product Width', 'description' => 'WC Product width', 'type' => 'pro'],
        'productHeight'           => ['key' => 'product_height', 'label' => 'Product height', 'description' => 'WC Product height', 'type' => 'pro'],
        'productDimensions'       => ['key' => 'product_dimensions', 'label' => 'Product Dimensions', 'description' => 'WC Product dimensions', 'type' => 'pro'],
        'productImageUrl'         => ['key' => 'product_image_url', 'label' => 'Product image url', 'description' => 'WC Product image url', 'type' => 'pro'],
    ];

    public static function tag($tag)
    {
        if (!$tag) {
            return;
        }

        if ($tag) {
            return SmartTag::$smartTagNameList[$tag]['key'];
        } elseif ($tag !== SmartTag::$smartTagNameList[$tag]) {
            throw new Exception('Invalid tag');
        }
    }

    public function getSmartTagValue($key, $post)
    {
        $value = '';
        switch ($key) {
            case 'post_id':
                $value = $post->ID;

                break;
            case 'post_author':
                $value = get_the_author_meta('display_name', $post->post_author);

                break;
            case 'post_title':
                $value = $post->post_title;

                break;
            case 'post_tags':
                $value = $this->getPostTerms($post->ID, 'post_tag');

                break;
            case 'post_categories':
                $value = $this->getPostTerms($post->ID, 'category');

                break;
            case 'post_short_link':
                $value = wp_get_shortlink();

                break;
            case 'uniq_id':
                $value = uniqid();

                break;

            case 'post_content_short_40':

                $value = strip_tags($post->post_content);
                $value = $this->getPostContentShort($value, 40);

                break;
            case 'featured_image_url':
                $value = $this->getFeaturedImageUrl($post->ID);

                break;

            case 'post_content_full':

                $value = wp_strip_all_tags($post->post_content);

                break;
            case 'post_excerpt':
                $value = $post->post_excerpt;

                break;
            case 'post_link':
                $value = get_permalink($post->ID);

                break;
            case 'all_images':
                $value = $this->getAllImages($post->ID);

                break;
            case 'all_video':
                $value = $this->getVideo($post->ID);

                break;

            default:
                if (preg_match('/^post_content_short_(\d+)$/', $key, $matches)) {
                    $length = \intval($matches[1]); // Get the integer value after 'short_'
                    $value = wp_strip_all_tags($post->post_content);
                    $value = $this->getPostContentShort($value, $length); // Pass the length dynamically
                }

                break;
        }

        if (class_exists(ProConfig::class) && empty($value)) {
            return apply_filters(ProConfig::VAR_PREFIX . 'smart_tags', $key, $post->ID);
        }

        return $value;
    }

    private function getPostTerms($postId, $taxonomyFieldName)
    {
        $postType = get_post_type($postId);

        if ($postType === 'product') {
            $taxonomyFieldName = $taxonomyFieldName === 'post_tag' ? 'product_tag' : 'product_cat';
        }

        $postTerms = wp_get_post_terms($postId, $taxonomyFieldName, ['fields' => 'names']);

        return implode(' ', $postTerms);
    }
}
