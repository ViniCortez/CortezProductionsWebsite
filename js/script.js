document.addEventListener('DOMContentLoaded', () => {
    // --- Original C-Logo Loader ---
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('loaded');
            }, 500);
        });
    }

    // --- NEW Magnetic Cursor Logic ---
    const magneticCursor = document.getElementById("magnetic-cursor");
    const magneticCursorDot = document.getElementById("magnetic-cursor-dot");
    const magneticTargets = document.querySelectorAll(".magnetic-target"); 

    const CURSOR_DEFAULT_WIDTH = 35; 
    const CURSOR_DOT_WIDTH = 8; 
    const CURSOR_PADDING = 10; 

    let mouseX = 0;
    let mouseY = 0;
    let isMagnetic = false;
    let currentTarget = null; 

    gsap.set(magneticCursor, { 
        width: CURSOR_DEFAULT_WIDTH, 
        height: CURSOR_DEFAULT_WIDTH,
        xPercent: -50, yPercent: -50, 
        autoAlpha: 0, position: 'fixed', top: 0, left: 0
    });
    gsap.set(magneticCursorDot, { 
        width: CURSOR_DOT_WIDTH, height: CURSOR_DOT_WIDTH,
        xPercent: -50, yPercent: -50, 
        autoAlpha: 0, position: 'fixed', top: 0, left: 0
    });

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.to(magneticCursorDot, {
            x: mouseX, y: mouseY, autoAlpha: 1, duration: 0.08, ease: "power2.out"
        });
        
        if (!isMagnetic) {
             gsap.to(magneticCursor, {
                x: mouseX, y: mouseY, autoAlpha: 1,
                width: CURSOR_DEFAULT_WIDTH, 
                height: CURSOR_DEFAULT_WIDTH,
                opacity: 1, 
                duration: 0.15, 
                ease: "power2.out" 
            });
        } else if (currentTarget) { 
            const rect = currentTarget.getBoundingClientRect();
            const targetCenterX = rect.left + rect.width / 2;
            const targetCenterY = rect.top + rect.height / 2;
            const deltaX = mouseX - targetCenterX;
            const deltaY = mouseY - targetCenterY;
            const pullStrength = 0.3; 

            gsap.to(magneticCursor, { 
                x: targetCenterX + deltaX * pullStrength,
                y: targetCenterY + deltaY * pullStrength,
                duration: 0.2,
                ease: "power2.out"
            });
        }
    });

    magneticTargets.forEach(target => {
        let enterTween, dotEnterTween; 

        target.addEventListener("mouseenter", (e) => {
            currentTarget = e.currentTarget; 
            isMagnetic = true;
            magneticCursor.classList.add("attracted");    
            magneticCursorDot.classList.add("attracted-dot"); 

            const rect = target.getBoundingClientRect();
            const targetCenterX = rect.left + rect.width / 2;
            const targetCenterY = rect.top + rect.height / 2;
            
            const cursorBoxWidth = rect.width + CURSOR_PADDING * 2;
            const cursorBoxHeight = rect.height + CURSOR_PADDING * 2;
            
            if(enterTween) enterTween.kill(); 
            if(dotEnterTween) dotEnterTween.kill();

            enterTween = gsap.to(magneticCursor, {
                x: targetCenterX, y: targetCenterY, 
                width: cursorBoxWidth, height: cursorBoxHeight,
                opacity: 1, duration: 0.25, ease: "power2.out", overwrite: "auto"
            });

            dotEnterTween = gsap.to(magneticCursorDot, {
                x: targetCenterX, y: targetCenterY,
                scale: 1.8, 
                duration: 0.2, ease: "power2.out", overwrite: "auto"
            });
        });

        target.addEventListener("mouseleave", () => {
            isMagnetic = false;
            currentTarget = null; 
            magneticCursor.classList.remove("attracted");
            magneticCursorDot.classList.remove("attracted-dot");

            if(enterTween) enterTween.kill();
            if(dotEnterTween) dotEnterTween.kill();

            gsap.to(magneticCursorDot, {
                scale: 1, duration: 0.2, ease: "power2.out", overwrite: "auto"
            });
            gsap.to(magneticCursor, {
                width: CURSOR_DEFAULT_WIDTH, height: CURSOR_DEFAULT_WIDTH,
                opacity: 1, duration: 0.3, ease: "power2.out", overwrite: "auto"
            });
        });
    });
    
    document.body.classList.add('custom-cursor-active');
    // END OF NEW Magnetic Cursor Logic


    // --- Interactive Background (Original) ---
    const canvas = document.getElementById('interactive-background');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let particles = [];
        const particleCount = Math.floor(width * height / 20000); 
        class Particle { constructor() { this.x = Math.random() * width; this.y = Math.random() * height; this.vx = (Math.random() - 0.5) * 0.3; this.vy = (Math.random() - 0.5) * 0.3; this.radius = Math.random() * 1.5 + 0.5; this.opacity = Math.random() * 0.3 + 0.1; } draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); ctx.fillStyle = `rgba(240, 240, 240, ${this.opacity})`; ctx.fill(); } update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > width) this.vx *= -1; if (this.y < 0 || this.y > height) this.vy *= -1; } }
        function initParticles() { particles = []; for (let i = 0; i < particleCount; i++) particles.push(new Particle()); }
        let mouse = { x: null, y: null, radius: 100 }; 
        window.addEventListener('mousemove', (event) => { mouse.x = event.clientX; mouse.y = event.clientY; }); // This listener is fine, it's for the background
        window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });
        function connectParticles() { for (let a = 0; a < particles.length; a++) { for (let b = a + 1; b < particles.length; b++) { const dx = particles[a].x - particles[b].x; const dy = particles[a].y - particles[b].y; const distance = Math.sqrt(dx * dx + dy * dy); if (distance < 80) { const opacity = 1 - (distance / 80); ctx.beginPath(); ctx.moveTo(particles[a].x, particles[a].y); ctx.lineTo(particles[b].x, particles[b].y); ctx.strokeStyle = `rgba(58, 125, 255, ${opacity * 0.2})`; ctx.lineWidth = 0.5; ctx.stroke(); } } if (mouse.x && mouse.y) { /* Check if mouse object has coordinates before using them */ const dxMouse = particles[a].x - mouse.x; const dyMouse = particles[a].y - mouse.y; const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse); if (distanceMouse < mouse.radius) { const opacity = 1 - (distanceMouse / mouse.radius); ctx.beginPath(); ctx.moveTo(particles[a].x, particles[a].y); ctx.lineTo(mouse.x, mouse.y); ctx.strokeStyle = `rgba(58, 125, 255, ${opacity * 0.1})`; ctx.lineWidth = 0.3; ctx.stroke(); } } } }
        let canvasAnimationId; function animateCanvas() { if(!canvas.isConnected){ if(canvasAnimationId) cancelAnimationFrame(canvasAnimationId); return;} ctx.clearRect(0, 0, width, height); particles.forEach(p => { p.update(); p.draw(); }); connectParticles(); canvasAnimationId = requestAnimationFrame(animateCanvas); }
        window.addEventListener('resize', () => { if(!canvas.isConnected) return; width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; if(mouse) mouse.radius = Math.min(width, height) / 8; initParticles(); });
        initParticles(); animateCanvas();
    }

    // --- Navigation & Smooth Scroll & Active Link (Original - with Plus Morph integration) ---
    const mainNav = document.getElementById('main-nav');
    const navLinksElements = document.querySelectorAll('.nav-link'); // Changed from navLinks to avoid conflict
    const sections = document.querySelectorAll('section');
    const menuToggle = document.getElementById('menu-toggle'); 
    const navLinksContainer = document.getElementById('nav-links');
    let lastScrollTop = 0;

    if(mainNav){
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > mainNav.offsetHeight) {
                mainNav.classList.add('nav-hidden');
            } else {
                mainNav.classList.remove('nav-hidden');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);
    }

    if (menuToggle && navLinksContainer) {
        gsap.set(menuToggle, { rotation: 0 }); 
        menuToggle.addEventListener('click', () => {
            const isActive = menuToggle.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
            document.body.classList.toggle('no-scroll-mobile');
            if (isActive) {
                gsap.to(menuToggle, { rotation: 405, ease: "power2.inOut", duration: 0.7 });
            } else {
                gsap.to(menuToggle, { rotation: 0, ease: "power2.inOut", duration: 0.7 });
            }
        });
    }
    
    if(navLinksElements.length > 0 && sections.length > 0){
        navLinksElements.forEach(link => {
            link.addEventListener('click', function(e) {
                if (this.getAttribute('href').startsWith('#')) {
                    if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                        navLinksContainer.classList.remove('active');
                        if(menuToggle) {
                            menuToggle.classList.remove('active');
                             gsap.to(menuToggle, { 
                                rotation: 0,
                                ease: "power2.inOut",
                                duration: 0.7
                            });
                        }
                        document.body.classList.remove('no-scroll-mobile');
                    }
                }
            });
        });
        const observerOptions = { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 };
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinksElements.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${entry.target.id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);
        sections.forEach(section => sectionObserver.observe(section));
    }

    // --- Scroll Animations for elements (Original) ---
    const animatedElements = document.querySelectorAll('.anim-on-scroll');
    if(animatedElements.length > 0){
        const elementObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = parseFloat(entry.target.dataset.animDelay) || 0;
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, delay * 1000);
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(el => elementObserver.observe(el));
    }

    // --- Project Modal (Original) ---
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalTitle = document.getElementById('modal-project-title');
    const modalImage = document.getElementById('modal-project-image');
    const modalDescription = document.getElementById('modal-project-description');
    const modalGenre = document.getElementById('modal-project-genre');
    const modalTech = document.getElementById('modal-project-tech');

    if(projectCards.length > 0 && modal){
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                if (modalTitle) modalTitle.textContent = card.dataset.title;
                if (modalImage) { modalImage.src = card.dataset.image; modalImage.alt = card.dataset.title + " Image"; }
                if (modalDescription) modalDescription.textContent = card.dataset.description;
                if (modalGenre) modalGenre.innerHTML = `<strong>Genre:</strong> ${card.dataset.genre}`;
                if (modalTech) modalTech.innerHTML = `<strong>Technology:</strong> ${card.dataset.tech}`;
                modal.style.display = 'flex';
                setTimeout(() => modal.classList.add('open'), 10);
                document.body.style.overflow = 'hidden';
            });
        });
    }
    function closeModal() { if (modal) { modal.classList.remove('open'); setTimeout(() => modal.style.display = 'none', 300); } document.body.style.overflow = 'auto'; }
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === "Escape" && modal && modal.style.display === 'flex') closeModal(); });

    // --- Contact Form (Original) ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            const nameInput = contactForm.querySelector('#name');
            const emailInput = contactForm.querySelector('#email');
            const messageInput = contactForm.querySelector('#message');
            let isValid = true;
            if (!nameInput || !nameInput.value) isValid = false;
            if (!emailInput || !emailInput.value) isValid = false;
            if (!messageInput || !messageInput.value) isValid = false;
            if(isValid) {
                formStatus.textContent = 'TRANSMISSION_SENDING...';
                formStatus.style.color = 'var(--nebula-blue)';
            } else {
                e.preventDefault();
                formStatus.textContent = 'ERROR: DATA_CORRUPTION // COMPLETE_ALL_FIELDS';
                formStatus.style.color = '#FF4A4A';
                setTimeout(() => { formStatus.textContent = ''; }, 5000);
            }
        });
    }

    // --- Footer Year (Original) ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});