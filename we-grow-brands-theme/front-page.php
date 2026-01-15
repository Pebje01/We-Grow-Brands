<?php
/**
 * Front Page Template
 *
 * @package WeGrowBrands
 */

get_header();
?>

<!-- Hero Section -->
<?php get_template_part('template-parts/section', 'hero'); ?>

<!-- Stats Section -->
<?php get_template_part('template-parts/section', 'stats'); ?>

<!-- Trusted By -->
<?php get_template_part('template-parts/section', 'trusted'); ?>

<!-- Features Section -->
<?php get_template_part('template-parts/section', 'features'); ?>

<!-- Services Section -->
<?php get_template_part('template-parts/section', 'services'); ?>

<!-- Testimonials -->
<?php get_template_part('template-parts/section', 'testimonials'); ?>

<!-- CTA Section -->
<?php get_template_part('template-parts/section', 'cta'); ?>

<?php
get_footer();
