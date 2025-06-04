document.addEventListener('DOMContentLoaded', () => {
    // --- Loader ---
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => { // Ensure all assets are likely loaded
                loader.classList.add('loaded');
            }, 500); // Give a bit more time after load event
        });
    }

    // --- Custom Cursor ---
    const cursor = document.getElementById('custom-cursor');
    const cursorDot = document.getElementById('cursor-dot');
    const hoverables = document.querySelectorAll('a, button, .project-card, .team-member img, .menu-toggle, .close-modal');

    if (cursor && cursorDot) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
            cursorDot.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        });

        document.addEventListener('mousedown', () => cursor.classList.add('click-effect'));
        document.addEventListener('mouseup', () => cursor.classList.remove('click-effect'));

        hoverables.forEach(item => {
            item.addEventListener('mouseover', () => cursor.classList.add('hover-link'));
            item.addEventListener('mouseout', () => cursor.classList.remove('hover-link'));
        });
    }

    // --- Interactive Background ---
    const canvas = document.getElementById('interactive-background');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let particles = [];
        const particleCount = Math.floor(width * height / 20000); // Adjust density
        const nebulaBlue = '#3A7DFF'; // Store color

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.3; // Slower movement
                this.vy = (Math.random() - 0.5) * 0.3;
                this.radius = Math.random() * 1.5 + 0.5; // Smaller particles
                this.opacity = Math.random() * 0.3 + 0.1; // More subtle
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(240, 240, 240, ${this.opacity})`; // Starlight White with opacity
                ctx.fill();
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        let mouse = { x: null, y: null, radius: 100 }; // Interaction radius

        window.addEventListener('mousemove', (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });


        function connectParticles() {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 80) { // Connection distance
                        const opacity = 1 - (distance / 80);
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.strokeStyle = `rgba(58, 125, 255, ${opacity * 0.2})`; // Faint Nebula Blue lines
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
                // Interaction with mouse
                if (mouse.x && mouse.y) {
                    const dxMouse = particles[a].x - mouse.x;
                    const dyMouse = particles[a].y - mouse.y;
                    const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                    if (distanceMouse < mouse.radius) {
                        const opacity = 1 - (distanceMouse / mouse.radius);
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = `rgba(58, 125, 255, ${opacity * 0.1})`; // Even fainter lines to mouse
                        ctx.lineWidth = 0.3;
                        ctx.stroke();
                    }
                }
            }
        }


        function animate() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connectParticles();
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            mouse.radius = Math.min(width, height) / 8; // Adjust interaction radius on resize
            initParticles();
        });

        initParticles();
        animate();
    }


    // --- Navigation & Smooth Scroll & Active Link ---
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.getElementById('nav-links');
    let lastScrollTop = 0;

    // Hide nav on scroll down, show on scroll up
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > mainNav.offsetHeight) {
            mainNav.classList.add('nav-hidden');
        } else {
            mainNav.classList.remove('nav-hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }, false);


    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            menuToggle.classList.toggle('active');
            document.body.classList.toggle('no-scroll-mobile'); // Prevent scrolling when mobile menu is open
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                // e.preventDefault(); // Default behavior is fine for same-page links
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    // targetSection.scrollIntoView({ behavior: 'smooth' }); // Native smooth scroll
                    if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                        navLinksContainer.classList.remove('active');
                        menuToggle.classList.remove('active');
                        document.body.classList.remove('no-scroll-mobile');
                    }
                }
            }
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- Scroll Animations for elements ---
    const animatedElements = document.querySelectorAll('.anim-on-scroll');
    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseFloat(entry.target.dataset.animDelay) || 0;
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, delay * 1000);
                // observer.unobserve(entry.target); // Optional: Unobserve after animation
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => elementObserver.observe(el));

    // --- Project Modal ---
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalTitle = document.getElementById('modal-project-title');
    const modalImage = document.getElementById('modal-project-image');
    const modalDescription = document.getElementById('modal-project-description');
    const modalGenre = document.getElementById('modal-project-genre');
    const modalTech = document.getElementById('modal-project-tech');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            if (modalTitle) modalTitle.textContent = card.dataset.title;
            if (modalImage) {
                modalImage.src = card.dataset.image;
                modalImage.alt = card.dataset.title + " Image";
            }
            if (modalDescription) modalDescription.textContent = card.dataset.description;
            if (modalGenre) modalGenre.innerHTML = `<strong>Genre:</strong> ${card.dataset.genre}`;
            if (modalTech) modalTech.innerHTML = `<strong>Technology:</strong> ${card.dataset.tech}`;
            
            if (modal) {
                modal.style.display = 'flex';
                setTimeout(() => modal.classList.add('open'), 10); // For transition
            }
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        if (modal) {
            modal.classList.remove('open');
            setTimeout(() => modal.style.display = 'none', 300); // Match CSS transition
        }
        document.body.style.overflow = 'auto';
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && modal && modal.style.display === 'flex') {
            closeModal();
        }
    });


    // --- Contact Form ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                if (formStatus) {
                    formStatus.textContent = 'TRANSMISSION_RECEIVED // STANDBY_FOR_RESPONSE';
                    formStatus.style.color = 'var(--nebula-blue)';
                }
                contactForm.reset();
            } else {
                if (formStatus) {
                    formStatus.textContent = 'ERROR: DATA_CORRUPTION // COMPLETE_ALL_FIELDS';
                    formStatus.style.color = '#FF4A4A'; // A contrasting error red
                }
            }
            setTimeout(() => { if (formStatus) formStatus.textContent = ''; }, 5000);
        });
    }

    // --- Footer Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

});