// ==================== PARTICLES.JS CONFIGURATION ====================
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00d4ff'
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: 0.5,
            random: false,
        },
        size: {
            value: 3,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00d4ff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// ==================== TYPING EFFECT ====================
const typingText = document.querySelector('.typing-text');
const texts = [
    'Android Developer 📱',
    'Mobile Technology Enthusiast 🚀',
    'Kotlin Expert 💻',
    'Open Source Contributor ✨'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }
    
    setTimeout(type, typingSpeed);
}

// Start typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});

// ==================== NAVIGATION ====================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate toggle button
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(-5px, 6px)' : '';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(-5px, -6px)' : '';
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.about-card, .skill-category, .project-card, .stat-card, .contact-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// ==================== PROJECT SCREENSHOTS TOGGLE ====================
function toggleScreenshots(projectId) {
    const screenshotsGallery = document.getElementById(`${projectId}-screenshots`);
    const button = event.target.closest('.btn-toggle');
    
    if (screenshotsGallery.classList.contains('hidden')) {
        screenshotsGallery.classList.remove('hidden');
        screenshotsGallery.style.maxHeight = screenshotsGallery.scrollHeight + 'px';
        button.innerHTML = '<i class="fas fa-times"></i> Hide Screenshots';
    } else {
        screenshotsGallery.classList.add('hidden');
        screenshotsGallery.style.maxHeight = '0';
        button.innerHTML = '<i class="fas fa-images"></i> View Screenshots';
    }
}

// ==================== BACK TO TOP BUTTON ====================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== CURSOR EFFECT ====================
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    
    document.body.appendChild(cursor);
    
    setTimeout(() => {
        cursor.remove();
    }, 1000);
});

// Add cursor trail CSS
const style = document.createElement('style');
style.textContent = `
    .cursor-trail {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(0, 212, 255, 0.5);
        pointer-events: none;
        animation: cursorTrail 1s ease-out forwards;
        z-index: 9999;
    }
    
    @keyframes cursorTrail {
        to {
            transform: scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== PRELOADER ====================
window.addEventListener('load', () => {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="loader">
            <div class="spinner"></div>
            <p>Loading...</p>
        </div>
    `;
    
    const preloaderStyle = document.createElement('style');
    preloaderStyle.textContent = `
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #050816;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            transition: opacity 0.5s ease-out;
        }
        
        .loader {
            text-align: center;
        }
        
        .spinner {
            width: 60px;
            height: 60px;
            border: 4px solid rgba(0, 212, 255, 0.2);
            border-top-color: #00d4ff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        .loader p {
            color: #00d4ff;
            font-size: 1.2rem;
            font-weight: 600;
        }
    `;
    
    document.head.appendChild(preloaderStyle);
    document.body.insertBefore(preloader, document.body.firstChild);
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 1500);
});

// ==================== STATS COUNTER ANIMATION ====================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// ==================== PARALLAX EFFECT ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-image');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== COPY TO CLIPBOARD ====================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show toast notification
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = 'Copied to clipboard!';
        toast.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--gradient-3);
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            font-weight: 600;
            z-index: 10000;
            animation: slideUp 0.3s ease-out;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideDown 0.3s ease-out';
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    });
}

// Add toast animations
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    @keyframes slideUp {
        from {
            transform: translateX(-50%) translateY(100px);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(toastStyle);

// ==================== IMAGE LAZY LOADING ====================
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

console.log('%c👋 Hi there!', 'font-size: 24px; color: #00d4ff; font-weight: bold;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 16px; color: #7f52ff;');
console.log('%cIf you have any questions or want to collaborate, feel free to reach out!', 'font-size: 14px; color: #b8b8d4;');
