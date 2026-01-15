/**
 * We Grow Brands - Main JavaScript
 *
 * @package WeGrowBrands
 */

(function() {
    'use strict';

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for floating icons
    document.addEventListener('mousemove', function(e) {
        const icons = document.querySelectorAll('.app-icon');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        icons.forEach(function(icon, index) {
            const speed = ((index % 5) + 1) * 0.3;
            const x = (mouseX - 0.5) * speed * 30;
            const y = (mouseY - 0.5) * speed * 30;
            icon.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .testimonial-card, .feature-visual').forEach(function(el) {
        observer.observe(el);
    });

})();
