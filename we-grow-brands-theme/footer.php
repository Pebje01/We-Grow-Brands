<!-- Footer -->
<footer>
    <div class="footer-container">
        <div class="footer-grid">
            <div class="footer-brand">
                <div class="footer-logo">
                    <div class="logo-icon" style="display: flex; gap: 2px;">
                        <span style="width: 3px; height: 10px; background: white; border-radius: 1px;"></span>
                        <span style="width: 3px; height: 16px; background: white; border-radius: 1px;"></span>
                        <span style="width: 3px; height: 12px; background: white; border-radius: 1px;"></span>
                        <span style="width: 3px; height: 18px; background: white; border-radius: 1px;"></span>
                    </div>
                    <?php bloginfo('name'); ?>
                </div>
                <p class="footer-desc"><?php echo esc_html(get_bloginfo('description')); ?></p>
            </div>

            <div class="footer-col">
                <h4><?php esc_html_e('Diensten', 'we-grow-brands'); ?></h4>
                <ul class="footer-links">
                    <li><a href="#"><?php esc_html_e('Webdesign', 'we-grow-brands'); ?></a></li>
                    <li><a href="#"><?php esc_html_e('Branding', 'we-grow-brands'); ?></a></li>
                    <li><a href="#"><?php esc_html_e('SEO', 'we-grow-brands'); ?></a></li>
                    <li><a href="#"><?php esc_html_e('Fotografie', 'we-grow-brands'); ?></a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4><?php esc_html_e('Bedrijf', 'we-grow-brands'); ?></h4>
                <ul class="footer-links">
                    <li><a href="#"><?php esc_html_e('Over Ons', 'we-grow-brands'); ?></a></li>
                    <li><a href="#"><?php esc_html_e('Portfolio', 'we-grow-brands'); ?></a></li>
                    <li><a href="#"><?php esc_html_e('Blog', 'we-grow-brands'); ?></a></li>
                    <li><a href="#"><?php esc_html_e('Contact', 'we-grow-brands'); ?></a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4><?php esc_html_e('Contact', 'we-grow-brands'); ?></h4>
                <ul class="footer-links">
                    <?php $email = wgb_get_option('wgb_email', 'hello@wegrowbrands.nl'); ?>
                    <li><a href="mailto:<?php echo esc_attr($email); ?>"><?php echo esc_html($email); ?></a></li>
                    <?php $phone = wgb_get_option('wgb_phone', '+31 6 12345678'); ?>
                    <li><a href="tel:<?php echo esc_attr(preg_replace('/\s+/', '', $phone)); ?>"><?php echo esc_html($phone); ?></a></li>
                    <?php $kvk = wgb_get_option('wgb_kvk', '12345678'); ?>
                    <li><a href="#">KvK: <?php echo esc_html($kvk); ?></a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p class="footer-copyright">&copy; <?php echo esc_html(date('Y')); ?> <?php bloginfo('name'); ?>. <?php esc_html_e('Alle rechten voorbehouden.', 'we-grow-brands'); ?></p>
            <div class="footer-socials">
                <?php $linkedin = wgb_get_option('wgb_linkedin', '#'); ?>
                <a href="<?php echo esc_url($linkedin); ?>" class="social-icon" target="_blank" rel="noopener noreferrer">in</a>
                <?php $instagram = wgb_get_option('wgb_instagram', '#'); ?>
                <a href="<?php echo esc_url($instagram); ?>" class="social-icon" target="_blank" rel="noopener noreferrer">ig</a>
                <?php $whatsapp = wgb_get_option('wgb_whatsapp', '#'); ?>
                <a href="<?php echo esc_url($whatsapp); ?>" class="social-icon" target="_blank" rel="noopener noreferrer">wa</a>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
