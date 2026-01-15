<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Navigation -->
<nav id="navbar">
    <a href="<?php echo esc_url(home_url('/')); ?>" class="logo">
        <div class="logo-icon">
            <span class="logo-bar"></span>
            <span class="logo-bar"></span>
            <span class="logo-bar"></span>
            <span class="logo-bar"></span>
        </div>
        <?php bloginfo('name'); ?>
    </a>

    <?php if (has_nav_menu('primary')) : ?>
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'container'      => false,
            'menu_class'     => 'nav-links',
            'items_wrap'     => '<ul class="%2$s">%3$s</ul>',
            'walker'         => new WGB_Nav_Walker(),
        ));
        ?>
    <?php else : ?>
        <ul class="nav-links">
            <li><a href="#diensten"><?php esc_html_e('Diensten', 'we-grow-brands'); ?></a></li>
            <li><a href="#features"><?php esc_html_e('Voordelen', 'we-grow-brands'); ?></a></li>
            <li><a href="#reviews"><?php esc_html_e('Reviews', 'we-grow-brands'); ?></a></li>
            <li><a href="#contact"><?php esc_html_e('Contact', 'we-grow-brands'); ?></a></li>
        </ul>
    <?php endif; ?>

    <div class="nav-right">
        <a href="#contact" class="nav-cta"><?php esc_html_e('Start Project', 'we-grow-brands'); ?> &rarr;</a>
    </div>
</nav>
