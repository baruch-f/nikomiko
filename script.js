document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const title = document.querySelector('.parallax-title');
    const subtitle = document.querySelector('.parallax-subtitle');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Parallax effect for hero background only, not for title and subtitle
        if (scrollPosition < window.innerHeight) {
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(7, 7, 20, 0.95)';
        } else {
            header.style.padding = '20px 0';
            header.style.backgroundColor = 'rgba(15, 15, 26, 0.8)';
        }
    });
    
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.section-title, .app-card, .about-content, .team-grid, .team-contact, .technologies-grid, .contact-content');
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('revealed');
            }
        });
    }
    
    // Add CSS for reveal animations
    const style = document.createElement('style');
    style.textContent = `
        .section-title, .app-card, .about-content, .team-grid, .team-contact, .technologies-grid, .contact-content {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .revealed {
            opacity: 1;
            transform: translateY(0);
        }
        
        .app-card:nth-child(2), .team-member:nth-child(2), .technology-item:nth-child(2), .technology-item:nth-child(5) {
            transition-delay: 0.2s;
        }
        
        .app-card:nth-child(3), .team-member:nth-child(3), .technology-item:nth-child(3), .technology-item:nth-child(6) {
            transition-delay: 0.4s;
        }
    `;
    document.head.appendChild(style);
    
    // Initial check for elements in view
    revealOnScroll();
    
    // Check for elements in view on scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Mouse parallax effect for hero section
    hero.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        // Apply mouse parallax to logo only, not to title and subtitle
        const heroLogo = document.querySelector('.hero-logo-image');
        if (heroLogo) {
            heroLogo.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px) scale(${1 + Math.abs(mouseX * 0.05)})`;
        }
    });
    
    // Reset parallax on mouse leave
    hero.addEventListener('mouseleave', function() {
        const heroLogo = document.querySelector('.hero-logo-image');
        if (heroLogo) {
            heroLogo.style.transform = 'translate(0, 0) scale(1)';
        }
    });
});
