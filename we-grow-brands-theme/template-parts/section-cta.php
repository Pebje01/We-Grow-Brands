<?php
/**
 * CTA Section Template Part
 *
 * @package WeGrowBrands
 */

$email = wgb_get_option('wgb_email', 'hello@wegrowbrands.nl');
$whatsapp = wgb_get_option('wgb_whatsapp', '#');
?>
<section class="cta-section" id="contact">
    <div class="cta-container">
        <h2 class="cta-title"><?php esc_html_e('Begin uw digitale transformatie', 'we-grow-brands'); ?></h2>
        <p class="cta-subtitle"><?php esc_html_e('Plan een persoonlijk strategiegesprek en ontdek hoe wij uw merk naar een hoger niveau tillen.', 'we-grow-brands'); ?></p>

        <div class="cta-buttons">
            <a href="mailto:<?php echo esc_attr($email); ?>" class="cta-btn-primary">
                🚀 <?php esc_html_e('Plan Gratis Gesprek', 'we-grow-brands'); ?>
            </a>
            <a href="#diensten" class="cta-btn-secondary">
                📋 <?php esc_html_e('Bekijk Pakketten', 'we-grow-brands'); ?>
            </a>
        </div>

        <div class="cta-box">
            <span class="cta-box-text">💬 <?php esc_html_e('Nog niet zeker? Stel een snelle vraag via WhatsApp', 'we-grow-brands'); ?></span>
            <a href="<?php echo esc_url($whatsapp); ?>" class="cta-box-btn"><?php esc_html_e('Open Chat', 'we-grow-brands'); ?></a>
        </div>
    </div>
</section>
