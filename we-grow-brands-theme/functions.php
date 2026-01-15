<?php
/**
 * We Grow Brands Theme Functions
 *
 * @package WeGrowBrands
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function wgb_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'we-grow-brands'),
        'footer'  => __('Footer Menu', 'we-grow-brands'),
    ));
}
add_action('after_setup_theme', 'wgb_theme_setup');

/**
 * Enqueue Scripts and Styles
 */
function wgb_enqueue_assets() {
    // Google Fonts
    wp_enqueue_style(
        'wgb-google-fonts',
        'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'wgb-main-style',
        get_template_directory_uri() . '/assets/css/main.css',
        array('wgb-google-fonts'),
        wp_get_theme()->get('Version')
    );

    // Main JavaScript
    wp_enqueue_script(
        'wgb-main-script',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        wp_get_theme()->get('Version'),
        true
    );
}
add_action('wp_enqueue_scripts', 'wgb_enqueue_assets');

/**
 * Custom Walker for Navigation Menu
 */
class WGB_Nav_Walker extends Walker_Nav_Menu {
    public function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $output .= '<li>';

        $atts = array(
            'href' => !empty($item->url) ? $item->url : '',
        );

        $attributes = '';
        foreach ($atts as $attr => $value) {
            if (!empty($value)) {
                $attributes .= ' ' . $attr . '="' . esc_attr($value) . '"';
            }
        }

        $output .= '<a' . $attributes . '>' . esc_html($item->title) . '</a>';
    }

    public function end_el(&$output, $item, $depth = 0, $args = null) {
        $output .= '</li>';
    }
}

/**
 * Customizer Settings
 */
function wgb_customizer_settings($wp_customize) {
    // Contact Section
    $wp_customize->add_section('wgb_contact_section', array(
        'title'    => __('Contact Informatie', 'we-grow-brands'),
        'priority' => 30,
    ));

    // Email
    $wp_customize->add_setting('wgb_email', array(
        'default'           => 'hello@wegrowbrands.nl',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('wgb_email', array(
        'label'   => __('Email Adres', 'we-grow-brands'),
        'section' => 'wgb_contact_section',
        'type'    => 'email',
    ));

    // Phone
    $wp_customize->add_setting('wgb_phone', array(
        'default'           => '+31 6 12345678',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('wgb_phone', array(
        'label'   => __('Telefoonnummer', 'we-grow-brands'),
        'section' => 'wgb_contact_section',
        'type'    => 'text',
    ));

    // KvK
    $wp_customize->add_setting('wgb_kvk', array(
        'default'           => '12345678',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('wgb_kvk', array(
        'label'   => __('KvK Nummer', 'we-grow-brands'),
        'section' => 'wgb_contact_section',
        'type'    => 'text',
    ));

    // Social Media Section
    $wp_customize->add_section('wgb_social_section', array(
        'title'    => __('Social Media', 'we-grow-brands'),
        'priority' => 35,
    ));

    // LinkedIn
    $wp_customize->add_setting('wgb_linkedin', array(
        'default'           => '#',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('wgb_linkedin', array(
        'label'   => __('LinkedIn URL', 'we-grow-brands'),
        'section' => 'wgb_social_section',
        'type'    => 'url',
    ));

    // Instagram
    $wp_customize->add_setting('wgb_instagram', array(
        'default'           => '#',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('wgb_instagram', array(
        'label'   => __('Instagram URL', 'we-grow-brands'),
        'section' => 'wgb_social_section',
        'type'    => 'url',
    ));

    // WhatsApp
    $wp_customize->add_setting('wgb_whatsapp', array(
        'default'           => '#',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('wgb_whatsapp', array(
        'label'   => __('WhatsApp Link', 'we-grow-brands'),
        'section' => 'wgb_social_section',
        'type'    => 'url',
    ));

    // Hero Section
    $wp_customize->add_section('wgb_hero_section', array(
        'title'    => __('Hero Sectie', 'we-grow-brands'),
        'priority' => 40,
    ));

    // Hero Title
    $wp_customize->add_setting('wgb_hero_title', array(
        'default'           => 'High-end websites voor mooie merken',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('wgb_hero_title', array(
        'label'   => __('Hero Titel', 'we-grow-brands'),
        'section' => 'wgb_hero_section',
        'type'    => 'text',
    ));

    // Hero Subtitle
    $wp_customize->add_setting('wgb_hero_subtitle', array(
        'default'           => 'Professionele websites die uw merk versterken en converteren. Nu ook bereikbaar voor ambitieuze ondernemers dankzij flexibele betalingsmogelijkheden.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('wgb_hero_subtitle', array(
        'label'   => __('Hero Subtitel', 'we-grow-brands'),
        'section' => 'wgb_hero_section',
        'type'    => 'textarea',
    ));
}
add_action('customize_register', 'wgb_customizer_settings');

/**
 * Helper function to get theme mod with default
 */
function wgb_get_option($option, $default = '') {
    return get_theme_mod($option, $default);
}
