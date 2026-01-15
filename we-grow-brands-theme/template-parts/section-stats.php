<?php
/**
 * Stats Section Template Part
 *
 * @package WeGrowBrands
 */
?>
<section class="stats-section">
    <div class="stats-container">
        <h2 class="stats-title"><?php esc_html_e('Premium kwaliteit, snelle realisatie', 'we-grow-brands'); ?></h2>
        <p class="stats-subtitle">
            <?php esc_html_e('Voor mooie merken die uitblinken. Wij leveren high-end websites met professionele kwaliteit, zonder concessies te doen aan snelheid of bereikbaarheid. Ook voor startende ondernemers nu toegankelijk.', 'we-grow-brands'); ?>
        </p>

        <div class="cta-buttons">
            <a href="#contact" class="cta-btn-primary">
                <span>🚀</span> <?php esc_html_e('Start Project', 'we-grow-brands'); ?>
            </a>
            <a href="#diensten" class="cta-btn-secondary">
                <span>📋</span> <?php esc_html_e('Bekijk Pakketten', 'we-grow-brands'); ?>
            </a>
        </div>

        <!-- Comparison Cards -->
        <div class="comparison-wrapper">
            <div class="comparison-card small">
                <div class="comparison-label"><?php esc_html_e('Traditioneel Bureau', 'we-grow-brands'); ?></div>
                <div class="comparison-value">12 <span><?php esc_html_e('weken', 'we-grow-brands'); ?></span></div>
            </div>
            <div class="comparison-card large">
                <div class="card-bg"></div>
                <div class="card-content">
                    <div class="comparison-label"><?php esc_html_e('We Grow Brands', 'we-grow-brands'); ?></div>
                    <div class="comparison-value">2-4 <span><?php esc_html_e('weken', 'we-grow-brands'); ?></span></div>
                </div>
                <div class="curved-text">
                    <svg viewBox="0 0 500 60">
                        <defs>
                            <path id="curve" d="M 50 50 Q 250 0 450 50" fill="transparent"/>
                        </defs>
                        <text>
                            <textPath href="#curve" startOffset="50%" text-anchor="middle">
                                <?php esc_html_e('Professioneel. Bereikbaar. Resultaatgericht.', 'we-grow-brands'); ?>
                            </textPath>
                        </text>
                    </svg>
                </div>
                <div class="mic-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 1v11M5 12h14"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</section>
