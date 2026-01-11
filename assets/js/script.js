/**
 * Hyundai Electric Vehicles - Interstitial Page
 * Interactive JavaScript functionality
 */

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeInterstitial();
});

/**
 * Main initialization function
 */
function initializeInterstitial() {
    setupCloseButton();
    setupEVCards();
    setupCTAButtons();
    animateOnScroll();
    trackInteractions();
}

/**
 * Close button functionality
 */
function setupCloseButton() {
    const closeBtn = document.getElementById('closeBtn');

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closeInterstitial();
        });
    }

    // Allow ESC key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeInterstitial();
        }
    });
}

/**
 * Close interstitial with animation
 */
function closeInterstitial() {
    const container = document.querySelector('.interstitial-container');

    if (container) {
        container.style.animation = 'fadeOut 0.4s ease-out';

        setTimeout(() => {
            // In a real implementation, this would redirect or close the overlay
            // For now, we'll just hide it
            container.style.display = 'none';

            // You can add your close logic here, such as:
            // window.close();
            // window.location.href = 'https://www.hyundai.com/tr';
            console.log('Interstitial closed');
        }, 400);
    }
}

/**
 * Setup interactive EV cards
 */
function setupEVCards() {
    const evCards = document.querySelectorAll('.ev-card');

    evCards.forEach((card, index) => {
        // Stagger animation on load
        card.style.animationDelay = `${index * 0.1}s`;

        // Click event
        card.addEventListener('click', function() {
            const model = this.getAttribute('data-model');
            handleEVCardClick(model);
        });

        // Add ripple effect on click
        card.addEventListener('click', function(e) {
            createRipple(e, this);
        });
    });
}

/**
 * Handle EV card click
 */
function handleEVCardClick(model) {
    console.log(`EV Model clicked: ${model}`);

    // Track analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'ev_model_click', {
            'event_category': 'engagement',
            'event_label': model
        });
    }

    // You can add navigation to model-specific pages here
    // window.location.href = `/models/${model}`;
}

/**
 * Create ripple effect on card click
 */
function createRipple(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    // Add ripple styles
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(0, 212, 255, 0.4)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    ripple.style.pointerEvents = 'none';

    element.style.position = 'relative';
    element.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

/**
 * Setup CTA buttons
 */
function setupCTAButtons() {
    const ctaButtons = document.querySelectorAll('.btn');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            handleCTAClick(href);
        });
    });
}

/**
 * Handle CTA button clicks
 */
function handleCTAClick(href) {
    console.log(`CTA clicked: ${href}`);

    // Track analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'cta_click', {
            'event_category': 'engagement',
            'event_label': href
        });
    }

    // Add your navigation logic here
    // For example:
    if (href === '#explore') {
        // Navigate to models page
        // window.location.href = 'https://www.hyundai.com/tr/models/electric';
        console.log('Navigate to explore page');
    } else if (href === '#test-drive') {
        // Navigate to test drive page
        // window.location.href = 'https://www.hyundai.com/tr/test-drive';
        console.log('Navigate to test drive page');
    }
}

/**
 * Animate elements on scroll
 */
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe feature items
    const features = document.querySelectorAll('.feature-item');
    features.forEach(feature => {
        observer.observe(feature);
    });
}

/**
 * Track user interactions for analytics
 */
function trackInteractions() {
    // Track time spent on page
    const startTime = Date.now();

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        maxScroll = Math.max(maxScroll, scrollPercent);
    });

    // Send analytics before page unload
    window.addEventListener('beforeunload', function() {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);

        console.log('Analytics:', {
            timeSpent: timeSpent + 's',
            maxScroll: Math.round(maxScroll) + '%'
        });

        // Send to analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'interstitial_engagement', {
                'event_category': 'engagement',
                'time_spent': timeSpent,
                'scroll_depth': Math.round(maxScroll)
            });
        }
    });
}

/**
 * Add custom CSS for ripple animation
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .animate-in {
        animation: slideUp 0.6s ease-out;
    }
`;
document.head.appendChild(style);

/**
 * Preload critical resources
 */
function preloadResources() {
    // Preload logo image if needed
    const logo = new Image();
    logo.src = 'assets/images/hyundai-logo.png';
}

// Initialize preloading
preloadResources();

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        closeInterstitial,
        handleEVCardClick,
        handleCTAClick
    };
}
