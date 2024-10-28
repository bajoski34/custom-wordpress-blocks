<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// print_r($attributes);

$variant   = $attributes['variant'];
$amount    = floatval($attributes['amount']);
$currency  = $attributes['currency'];
$bg_color  = $attributes['backgroundColor'];
$fg_color  = $attributes['fontColor'];
$alignment = $attributes['align'];
$label     = $attributes['label'];
$current_user = wp_get_current_user();
$email     = $current_user->user_email ?? 'none';

// Prepare data attributes
$data_attributes = sprintf(
    'data-variant="%s" data-amount="%s" data-currency="%s" data-bg-color="%s" data-fg-color="%s" data-alignment="%s" data-label="%s" data-email="%s"',
    esc_attr($variant),
    esc_attr($amount),
    esc_attr($currency),
    esc_attr($bg_color),
    esc_attr($fg_color),
    esc_attr($alignment),
    esc_attr($label),
    esc_attr($email)
);
?>
    <div class="flutterwave-v4-payment-button" <?php echo get_block_wrapper_attributes(); ?>  <?php echo $data_attributes; ?>></div>

