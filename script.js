// Global state
let currentStep = 1;
let selectedCategory = '';
let selectedColor = '#00AAD2';

// Model data based on category
const modelData = {
    electric: {
        name: 'IONIQ 5',
        description: 'Yeni Nesil Elektrikli'
    },
    suv: {
        name: 'TUCSON',
        description: 'Güçlü ve Şık SUV'
    },
    sedan: {
        name: 'i30',
        description: 'Konforlu Sedan'
    }
};

// Navigate between steps
function goToStep(step) {
    const screens = document.querySelectorAll('.screen');
    const currentScreen = screens[currentStep - 1];
    const nextScreen = screens[step - 1];

    // Exit animation for current screen
    currentScreen.classList.remove('active');
    currentScreen.classList.add('exit-left');

    // Remove exit class after animation
    setTimeout(() => {
        currentScreen.classList.remove('exit-left');
    }, 400);

    // Enter animation for next screen
    setTimeout(() => {
        nextScreen.classList.add('active');
        currentStep = step;

        // Add entrance animations for cards
        if (step === 2) {
            animateCards();
        }
    }, 100);

    // Track step change
    trackEvent('step_change', { from: currentStep, to: step });
}

// Animate category cards
function animateCards() {
    const cards = document.querySelectorAll('.category-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Select category
function selectCategory(category) {
    selectedCategory = category;
    const model = modelData[category];

    // Update model name
    document.getElementById('modelName').textContent = model.name;

    // Add selection animation
    const cards = document.querySelectorAll('.category-card');
    cards.forEach(card => {
        card.style.transform = 'scale(0.95)';
        card.style.opacity = '0.5';
    });

    // Navigate to model screen
    setTimeout(() => {
        goToStep(3);
    }, 300);

    // Track category selection
    trackEvent('category_selected', { category: category, model: model.name });
}

// Select color
function selectColor(color) {
    selectedColor = color;

    // Update active state
    const circles = document.querySelectorAll('.color-circle');
    circles.forEach(circle => {
        circle.classList.remove('active');
        if (circle.dataset.color === color || circle.getAttribute('onclick').includes(color)) {
            circle.classList.add('active');
        }
    });

    // Update car color with animation
    const carBody = document.getElementById('carBody');
    if (carBody) {
        carBody.style.transition = 'fill 0.3s ease';
        carBody.style.fill = color;

        // Add pulse animation
        const silhouette = document.getElementById('carSilhouette');
        silhouette.style.transform = 'scale(1.05)';
        setTimeout(() => {
            silhouette.style.transform = 'scale(1)';
        }, 200);
    }

    // Track color selection
    trackEvent('color_selected', { color: color, category: selectedCategory });
}

// Event tracking function (for analytics)
function trackEvent(eventName, eventData) {
    console.log('Event:', eventName, eventData);

    // Here you can add your analytics tracking code
    // Example: Google Analytics, Facebook Pixel, etc.

    // For demonstration purposes
    if (window.gtag) {
        window.gtag('event', eventName, eventData);
    }

    // Custom tracking for ad platforms
    if (window.trackingCallback) {
        window.trackingCallback(eventName, eventData);
    }
}

// Add click tracking for CTA
document.addEventListener('DOMContentLoaded', function() {
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            trackEvent('cta_clicked', {
                category: selectedCategory,
                color: selectedColor,
                model: modelData[selectedCategory]?.name
            });
        });
    }

    // Add touch feedback for mobile
    const buttons = document.querySelectorAll('button, .category-card, .color-circle, .cta-btn');
    buttons.forEach(btn => {
        btn.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        });
        btn.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });

    // Track initial load
    trackEvent('interstitial_loaded', {
        timestamp: new Date().toISOString(),
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight
        }
    });

    // Track engagement time
    let startTime = Date.now();
    window.addEventListener('beforeunload', function() {
        const engagementTime = Math.round((Date.now() - startTime) / 1000);
        trackEvent('interstitial_closed', {
            engagement_time_seconds: engagementTime,
            completed_steps: currentStep,
            selected_category: selectedCategory,
            selected_color: selectedColor
        });
    });
});

// Prevent double-tap zoom on mobile
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Add keyboard navigation (for testing)
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' && currentStep < 4) {
        goToStep(currentStep + 1);
    } else if (e.key === 'ArrowLeft' && currentStep > 1) {
        goToStep(currentStep - 1);
    }
});
