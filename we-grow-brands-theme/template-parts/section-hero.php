<?php
/**
 * Hero Section Template Part
 *
 * @package WeGrowBrands
 */
?>
<section class="hero">
    <div class="hero-top-accent"></div>

    <!-- Floating App Icons -->
    <div class="curved-icons-container">
        <div class="curved-path-wrapper">
            <div class="app-icon">🎨</div>
            <div class="app-icon">📱</div>
            <div class="app-icon">💬</div>
            <div class="app-icon">📊</div>
            <div class="app-icon">🔧</div>
            <div class="app-icon">📧</div>
            <div class="app-icon">🛒</div>
            <div class="app-icon">📝</div>
            <div class="app-icon">⚡</div>
            <div class="app-icon">🔍</div>
            <div class="app-icon">💻</div>
            <div class="app-icon">🎯</div>
            <div class="app-icon">📈</div>
            <div class="app-icon">🌐</div>
            <div class="app-icon">💎</div>
            <div class="app-icon">🚀</div>
            <div class="app-icon">✨</div>
            <div class="app-icon">🔗</div>
            <div class="app-icon">📌</div>
            <div class="app-icon">🏆</div>
        </div>
    </div>

    <div class="hero-content">
        <!-- Platform Pills -->
        <div class="platform-pills">
            <span class="pill">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                WordPress
            </span>
            <span class="pill">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                Webflow
            </span>
            <span class="pill">
                <svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                Custom Code
            </span>
        </div>

        <h1><?php echo esc_html(wgb_get_option('wgb_hero_title', 'High-end websites voor mooie merken')); ?></h1>
        <p class="hero-subtitle"><?php echo esc_html(wgb_get_option('wgb_hero_subtitle', 'Professionele websites die uw merk versterken en converteren. Nu ook bereikbaar voor ambitieuze ondernemers dankzij flexibele betalingsmogelijkheden.')); ?></p>
        <a href="#diensten" class="hero-btn"><?php esc_html_e('Bekijk ons werk', 'we-grow-brands'); ?></a>
    </div>

    <div class="hero-bottom-accent"></div>
</section>
