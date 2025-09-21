// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add click handlers for CTA buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add a ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Here you would typically handle the actual button action
        if (this.textContent.includes('Start Free Trial')) {
            // Handle free trial signup
            console.log('Starting free trial...');
        } else if (this.textContent.includes('Schedule Demo') || this.textContent.includes('Watch Demo')) {
            // Handle demo scheduling
            console.log('Scheduling demo...');
        } else if (this.textContent.includes('Contact Sales')) {
            // Handle sales contact
            console.log('Contacting sales...');
        }
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Typing animation for hero text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Instagram Chat Animation
function animateInstagramChat() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const messages = [
        { type: 'received', text: 'Cao! Ja bih zelela korekciju noktiju, tuđji rad', time: '09:15' },
        { type: 'sent', text: 'Korekcija – tuđi rad. 🗓️ Trajanje: 1 sat i 30 min. 💰 Ukupna cena: 2.600 RSD.', time: '09:16' },
        { type: 'sent', text: 'Prvi slobodan termin je utorak, 02.09.2025 u 09:00h. Da li vam to odgovara ili želite da proverim neki kasniji termin? 😊', time: '09:16' },
        { type: 'received', text: 'Odgovara, hvala', time: '09:17' },
        { type: 'sent', text: 'Super! 👍 Samo mi recite vaše ime i broj telefona pa da potvrdim rezervaciju 😊', time: '09:17' },
        { type: 'received', text: 'Marija, 0607270397', time: '09:18' },
        { type: 'sent', text: 'Odlično! ✅ Termin je rezervisan za utorak, 02.09.2025. u 09:00. Molimo dođite 5 minuta ranije. Vidimo se! 💅', time: '09:18' }
    ];
    
    // Clear existing messages except date separator
    const dateSeparator = chatMessages.querySelector('.date-separator');
    chatMessages.innerHTML = '';
    if (dateSeparator) {
        chatMessages.appendChild(dateSeparator);
    }
    
    let messageIndex = 0;
    
    // Add typing indicator
    function showTypingIndicator() {
        const typingElement = document.createElement('div');
        typingElement.className = 'message sent typing-indicator';
        typingElement.innerHTML = `
            <div class="message-content">
                <p class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </p>
            </div>
        `;
        chatMessages.appendChild(typingElement);
        chatMessages.scrollTo({
            top: chatMessages.scrollHeight,
            behavior: 'smooth'
        });
        return typingElement;
    }

    function addMessage() {
        if (messageIndex >= messages.length) {
            // Restart animation after a pause
            setTimeout(() => {
                messageIndex = 0;
                const dateSeparator = chatMessages.querySelector('.date-separator');
                chatMessages.innerHTML = '';
                if (dateSeparator) {
                    chatMessages.appendChild(dateSeparator);
                }
                addMessage();
            }, 4000);
            return;
        }
        
        const message = messages[messageIndex];
        
        // Show typing indicator for sent messages
        let typingIndicator = null;
        if (message.type === 'sent') {
            typingIndicator = showTypingIndicator();
            
            // Wait a bit before showing the actual message
            setTimeout(() => {
                if (typingIndicator) {
                    typingIndicator.remove();
                }
                showActualMessage();
            }, 1500);
        } else {
            showActualMessage();
        }
        
        function showActualMessage() {
            const messageElement = document.createElement('div');
            messageElement.className = `message ${message.type}`;
            
            messageElement.innerHTML = `
                <div class="message-content">
                    <p>${message.text}</p>
                    <span class="message-time">${message.time}</span>
                </div>
            `;
            
            chatMessages.appendChild(messageElement);
            
            // Smooth scroll to bottom with delay for visual effect
            setTimeout(() => {
                chatMessages.scrollTo({
                    top: chatMessages.scrollHeight,
                    behavior: 'smooth'
                });
            }, 100);
            
            // Add bounce pop-up effect when message appears
            messageElement.style.transform = 'scale(0.8) translateY(20px)';
            messageElement.style.opacity = '0';
            
            setTimeout(() => {
                messageElement.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                messageElement.style.transform = 'scale(1) translateY(0)';
                messageElement.style.opacity = '1';
            }, 100);
            
            messageIndex++;
            
            // Add next message after a shorter delay since no typing animation
            const delay = message.type === 'sent' ? 2000 : 1200;
            setTimeout(addMessage, delay);
        }
    }
    
    // Start the animation
    setTimeout(addMessage, 1000);
}

// Phone Carousel Functionality
function initCarousel() {
    const carouselLabels = document.querySelectorAll('.carousel-label');
    const phoneContainers = document.querySelectorAll('.phone-container');
    
    function switchToPhone(targetId) {
        // Remove active class from all elements
        phoneContainers.forEach(container => container.classList.remove('active'));
        carouselLabels.forEach(label => label.classList.remove('active'));
        
        // Add active class to target elements
        const targetContainer = document.getElementById(targetId);
        let targetLabelIndex;
        if (targetId === 'instagramPhone') targetLabelIndex = 0;
        else if (targetId === 'calendarPhone') targetLabelIndex = 1;
        else if (targetId === 'whatsappPhone') targetLabelIndex = 2;
        
        if (targetContainer) targetContainer.classList.add('active');
        if (carouselLabels[targetLabelIndex]) carouselLabels[targetLabelIndex].classList.add('active');
    }
    
    function circularSwitch() {
        const activeContainer = document.querySelector('.phone-container.active');
        let nextId;
        
        if (activeContainer.id === 'instagramPhone') {
            nextId = 'calendarPhone';
        } else if (activeContainer.id === 'calendarPhone') {
            nextId = 'whatsappPhone';
        } else if (activeContainer.id === 'whatsappPhone') {
            nextId = 'instagramPhone';
        }
        
        switchToPhone(nextId);
    }
    
    // Add click handlers to labels only
    carouselLabels.forEach((label, index) => {
        label.addEventListener('click', () => {
            let targetId;
            if (index === 0) targetId = 'instagramPhone';
            else if (index === 1) targetId = 'calendarPhone';
            else if (index === 2) targetId = 'whatsappPhone';
            switchToPhone(targetId);
        });
    });
    
    // Auto-cycle through phones
    let autoSwitch = true;
    let autoSwitchTimer;
    
    function startAutoSwitch() {
        clearTimeout(autoSwitchTimer);
        if (!autoSwitch) return;
        
        autoSwitchTimer = setTimeout(() => {
            circularSwitch();
            startAutoSwitch(); // Restart the timer
        }, 5000); // Switch every 5 seconds
    }
    
    function pauseAutoSwitch() {
        autoSwitch = false;
        clearTimeout(autoSwitchTimer);
    }
    
    function resumeAutoSwitch() {
        autoSwitch = true;
        startAutoSwitch();
    }
    
    // Reset timer on label click
    carouselLabels.forEach(label => {
        label.addEventListener('click', () => {
            pauseAutoSwitch();
            setTimeout(resumeAutoSwitch, 3000); // Resume after 3 seconds of no interaction
        });
    });
    
    // Start auto-cycle
    setTimeout(startAutoSwitch, 5000);
}

// Initialize animations when page loads
window.addEventListener('load', () => {
    // Initialize carousel
    initCarousel();
    
    // Start Instagram chat animation with slight delay to let hero animate first
    setTimeout(animateInstagramChat, 1500);
});


// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add loading state for buttons
function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Loading...';
    button.disabled = true;
    button.style.opacity = '0.7';
    
    // Simulate loading time
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        button.style.opacity = '1';
    }, 2000);
}

// Form validation (if forms are added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Cookie consent (simple implementation)
function showCookieConsent() {
    if (!localStorage.getItem('cookieConsent')) {
        const banner = document.createElement('div');
        banner.innerHTML = `
            <div style="
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 20px;
                z-index: 10000;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 20px;
            ">
                <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
                <button onclick="acceptCookies()" style="
                    background: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                ">Accept</button>
            </div>
        `;
        document.body.appendChild(banner);
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'true');
    document.querySelector('[style*="position: fixed"][style*="bottom: 0"]').remove();
}

// Initialize cookie consent
setTimeout(showCookieConsent, 1000);

// Analytics tracking (placeholder)
function trackEvent(eventName, properties = {}) {
    console.log('Event tracked:', eventName, properties);
    // Here you would integrate with your analytics service
    // Example: gtag('event', eventName, properties);
}

// Track button clicks
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn-primary, .btn-secondary, .btn-outline')) {
        trackEvent('button_click', {
            button_text: e.target.textContent,
            button_location: e.target.closest('section')?.id || 'unknown'
        });
    }
});

// Performance monitoring
window.addEventListener('load', () => {
    // Log page load time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log('Page load time:', loadTime + 'ms');
    
    trackEvent('page_load', {
        load_time: loadTime,
        user_agent: navigator.userAgent
    });
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    trackEvent('javascript_error', {
        message: e.message,
        filename: e.filename,
        line: e.lineno
    });
});

// Add accessibility improvements
document.addEventListener('DOMContentLoaded', () => {
    // Add ARIA labels to buttons without text
    document.querySelectorAll('button:not([aria-label])').forEach(button => {
        if (!button.textContent.trim()) {
            button.setAttribute('aria-label', 'Button');
        }
    });
    
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        border-radius: 4px;
    `;
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main landmark
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.setAttribute('id', 'main');
        heroSection.setAttribute('role', 'main');
    }
});