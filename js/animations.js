// Initialize AOS
export function initAnimations() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true
    });
    
    // Typing animation
    const typed = new Typed('#typing-text', {
        strings: ['Around the World', 'With Unique Experiences'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
    
    // Counter animations
    animateCounters();
}

function animateCounters() {
    // Counter animation logic
}