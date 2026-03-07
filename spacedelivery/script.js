document.addEventListener('DOMContentLoaded', () => {

    /* --- Animated Starfield Background (Canvas) --- */
    const canvas = document.getElementById('starfield-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const PARTICLE_COUNT = 120;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Create particles
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                speed: Math.random() * 0.4 + 0.1,
                opacity: Math.random() * 0.5 + 0.1
            });
        }

        function drawParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                ctx.fill();

                // Move diagonally
                p.x += p.speed * 0.5;
                p.y += p.speed;

                // Wrap around
                if (p.y > canvas.height) { p.y = 0; p.x = Math.random() * canvas.width; }
                if (p.x > canvas.width) { p.x = 0; }
            });
            requestAnimationFrame(drawParticles);
        }
        drawParticles();
    }

    /* --- Demo Signup Popup --- */
    const demoPopup = document.getElementById('demo-popup');
    const closeDemoBtn = document.getElementById('close-demo-popup');
    const demoForm = demoPopup ? demoPopup.querySelector('.demo-form') : null;
    let demoPopupShown = false;
    const DEMO_KEY = 'sd_demo_dismissed';

    function showDemoPopup() {
        if (demoPopupShown || localStorage.getItem(DEMO_KEY)) return;
        demoPopupShown = true;
        if (demoPopup) {
            demoPopup.classList.add('show');
            document.body.style.overflow = 'hidden'; // lock scroll
        }
    }

    function hideDemoPopup() {
        if (demoPopup) {
            demoPopup.classList.remove('show');
            document.body.style.overflow = ''; // unlock scroll
            localStorage.setItem(DEMO_KEY, 'true');
        }
    }

    // Trigger popup when user scrolls to Key Features section
    window.addEventListener('scroll', () => {
        const featuresSection = document.querySelector('.features-section');
        if (featuresSection && !demoPopupShown) {
            const rect = featuresSection.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                showDemoPopup();
            }
        }
    });

    if (closeDemoBtn) {
        closeDemoBtn.addEventListener('click', hideDemoPopup);
    }

    // Close on overlay click (outside the box)
    if (demoPopup) {
        demoPopup.addEventListener('click', (e) => {
            if (e.target === demoPopup) {
                hideDemoPopup();
            }
        });
    }

    // --- Google Apps Script Form Submission ---
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzYl7-xyzTVN9DLpr3L3sNcpr1mxda09wG2_HKAI-D7Kzt0xkjAL8rR_x0rdwF4CQaIJg/exec';

    // Helper: handle form submission for any demo signup form
    function handleDemoFormSubmit(form, btn, feedback) {
        if (!form) return;
        form.addEventListener('submit', e => {
            e.preventDefault();

            // High-stakes sci-fi feedback
            btn.disabled = true;
            btn.innerText = 'ESTABLISHING CONNECTION...';

            const formData = new FormData(form);
            const urlParams = new URLSearchParams();
            formData.forEach((value, key) => urlParams.append(key, value));

            fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: urlParams })
                .then(response => {
                    // Success: Hide form and show the "Transmission Received" message
                    form.style.display = 'none';
                    feedback.style.display = 'block';
                    feedback.innerHTML = `
                        <h3>TRANSMISSION RECEIVED.</h3>
                        <p>You're on the manifest, Commander. We'll alert you the moment the demo drops.</p>
                        <a href="https://store.steampowered.com/app/4141230/Space_Delivery/" class="wishlist-btn steam-button small-btn" target="_blank">Wishlist on Steam</a>
                    `;
                    localStorage.setItem(DEMO_KEY, 'signed_up');

                    // Close popup if it was the popup form
                    if (form.id === 'demo-signup-form') {
                        setTimeout(() => hideDemoPopup(), 3000);
                    }

                    // Sync: also update the other form if it exists
                    const inlineForm = document.getElementById('demo-signup-form-inline');
                    const inlineFeedback = document.getElementById('form-feedback-inline');
                    const popupForm = document.getElementById('demo-signup-form');
                    const popupFeedback = document.getElementById('form-feedback');
                    if (form.id === 'demo-signup-form' && inlineForm) {
                        inlineForm.style.display = 'none';
                        if (inlineFeedback) {
                            inlineFeedback.style.display = 'block';
                            inlineFeedback.innerHTML = feedback.innerHTML;
                        }
                    } else if (form.id === 'demo-signup-form-inline' && popupForm) {
                        popupForm.style.display = 'none';
                        if (popupFeedback) {
                            popupFeedback.style.display = 'block';
                            popupFeedback.innerHTML = feedback.innerHTML;
                        }
                    }
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    btn.disabled = false;
                    btn.innerText = 'RETRY TRANSMISSION';
                });
        });
    }

    // Popup form
    const popupForm = document.getElementById('demo-signup-form');
    const popupBtn = document.getElementById('submit-btn');
    const popupFeedback = document.getElementById('form-feedback');
    handleDemoFormSubmit(popupForm, popupBtn, popupFeedback);

    // Inline form
    const inlineForm = document.getElementById('demo-signup-form-inline');
    const inlineBtn = document.getElementById('submit-btn-inline');
    const inlineFeedback = document.getElementById('form-feedback-inline');
    handleDemoFormSubmit(inlineForm, inlineBtn, inlineFeedback);

    // If already signed up, hide both forms and show confirmation
    if (localStorage.getItem(DEMO_KEY) === 'signed_up') {
        const successHTML = `
            <h3>TRANSMISSION RECEIVED.</h3>
            <p>You're on the manifest, Commander. We'll alert you the moment the demo drops.</p>
            <a href="https://store.steampowered.com/app/4141230/Space_Delivery/" class="wishlist-btn steam-button small-btn" target="_blank">Wishlist on Steam</a>
        `;
        if (popupForm) popupForm.style.display = 'none';
        if (popupFeedback) { popupFeedback.style.display = 'block'; popupFeedback.innerHTML = successHTML; }
        if (inlineForm) inlineForm.style.display = 'none';
        if (inlineFeedback) { inlineFeedback.style.display = 'block'; inlineFeedback.innerHTML = successHTML; }
    }

    // GSAP Registration
    gsap.registerPlugin(ScrollTrigger);

    const body = document.body;
    let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* --- Custom Cursor --- */
    const cursor = document.querySelector('.custom-cursor');
    if (cursor && !prefersReducedMotion) {
        window.addEventListener('mousemove', e => {
            // Using requestAnimationFrame or GSAP for smooth tracking
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
        });
    } else if (cursor) {
        cursor.style.display = 'none';
        document.documentElement.style.cursor = 'auto';
        document.querySelectorAll('*').forEach(el => el.style.cursor = 'auto');
    }

    /* --- Boot Sequence Loader --- */
    const loaderMessages = [
        "Initializing Lost Cargo OS...",
        "Establishing connection to Galactic Network...",
        "Bypassing company security protocols...",
        "Syncing daily quota targets...",
        "Calibrating life support systems (WARNING: Suboptimal)",
        "Loading planetary data...",
        "Boot sequence complete. Welcome to the Division."
    ];

    const textContainer = document.getElementById('loader-text-container');
    const loadingBar = document.getElementById('loader-bar');
    const loaderWrapper = document.getElementById('loader-wrapper');

    let messageIndex = 0;

    function showNextMessage() {
        if (messageIndex < loaderMessages.length) {
            const p = document.createElement('p');
            p.textContent = "> " + loaderMessages[messageIndex];
            textContainer.appendChild(p);

            // Auto scroll down
            textContainer.scrollTop = textContainer.scrollHeight;

            // Advance progress bar
            const progress = ((messageIndex + 1) / loaderMessages.length) * 100;
            gsap.to(loadingBar, { width: `${progress}%`, duration: 0.2 });

            messageIndex++;
            // Random delay between messages to simulate loading
            const delay = Math.random() * 500 + 400; // 400ms to 900ms
            setTimeout(showNextMessage, delay);
        } else {
            // Loading complete, fade out
            setTimeout(() => {
                gsap.to(loaderWrapper, {
                    opacity: 0,
                    duration: 1,
                    onComplete: () => {
                        loaderWrapper.style.display = 'none';
                        body.classList.remove('loading-state');
                        initPageAnimations(); // Trigger standard page anims after load
                    }
                });
            }, 800);
        }
    }

    // Start loader
    if (!prefersReducedMotion) {
        setTimeout(showNextMessage, 500);
    } else {
        loaderWrapper.style.display = 'none';
        body.classList.remove('loading-state');
        initPageAnimations();
    }


    /* --- Wishlist Popup Reminder & Audio --- */
    const popup = document.getElementById('wishlist-popup');
    const closePopupBtn = document.getElementById('close-popup');

    const audioNotification = document.getElementById('audio-notification');
    const audioHover = document.getElementById('audio-hover');
    const audioClick = document.getElementById('audio-click');

    // Add audio to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .action-btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (audioHover && !prefersReducedMotion) {
                audioHover.currentTime = 0;
                audioHover.play().catch(e => { });
            }
        });
        el.addEventListener('click', () => {
            if (audioClick && !prefersReducedMotion) {
                audioClick.currentTime = 0;
                audioClick.play().catch(e => { });
            }
        });
    });

    let popupTriggered = false;
    let timeElapsed = false;
    let scrolledToMiddle = false;

    // Show after 8 seconds AND scrolled to middle
    setTimeout(() => {
        timeElapsed = true;
        checkPopupCondition();
    }, 8000);

    window.addEventListener('scroll', () => {
        if (!scrolledToMiddle) {
            const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
            if (scrollPercent >= 0.5) {
                scrolledToMiddle = true;
                checkPopupCondition();
            }
        }
    });

    function checkPopupCondition() {
        if (timeElapsed && scrolledToMiddle && !popupTriggered) {
            popupTriggered = true;
            if (popup) {
                popup.classList.add('show');
                if (audioNotification && !prefersReducedMotion) {
                    audioNotification.currentTime = 0;
                    audioNotification.play().catch(e => { });
                }
            }
        }
    }

    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', () => {
            popup.classList.remove('show');
        });
    }

    /* --- GSAP Scroll Animations --- */
    function initPageAnimations() {
        if (prefersReducedMotion) return;

        // Hero Parallax Subtle
        gsap.to('.hero-logo', {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // Fade in sci-fi panels as they enter viewport
        const panels = document.querySelectorAll('.sci-fi-panel');
        panels.forEach((panel, i) => {
            // Don't animate the popup panel with scroll logic
            if (panel.closest('#wishlist-popup')) return;

            gsap.from(panel, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                scrollTrigger: {
                    trigger: panel,
                    start: "top 85%", // when top of panel hits 85% of viewport
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Typewriter effect for tagline
        const tagline = document.querySelector('.tagline.type-writer');
        if (tagline) {
            const text = tagline.innerHTML;
            tagline.innerHTML = "";
            let i = 0;
            let isTag = false;
            let textNode = "";

            // Custom typewriter that handles HTML tags silently
            function typeWriter() {
                if (i < text.length) {
                    let char = text.charAt(i);
                    if (char === '<') {
                        isTag = true;
                        textNode = "<";
                        i++;
                        // Fast forward to end of tag
                        while (i < text.length && text.charAt(i) !== '>') {
                            textNode += text.charAt(i);
                            i++;
                        }
                        textNode += ">";
                        tagline.innerHTML += textNode;
                        i++; // Move past the '>'
                        setTimeout(typeWriter, 0); // Immediately type the next character after tag
                        return;
                    }

                    tagline.innerHTML += char;
                    i++;
                    setTimeout(typeWriter, 30);
                }
            }
            setTimeout(typeWriter, 500);
        }

        // Scroll to trailer click event
        const scrollBtn = document.getElementById('scroll-to-trailer');
        if (scrollBtn) {
            scrollBtn.addEventListener('click', () => {
                const trailer = document.querySelector('.trailer-section');
                if (trailer) {
                    trailer.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }

    /* --- Surveillance Carousel --- */
    const thumbnails = document.querySelectorAll('.thumb');
    const mainImg = document.getElementById('carousel-main-img');
    const sysTimeEl = document.getElementById('sys-time');

    if (thumbnails.length > 0 && mainImg) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function () {
                // Update active class
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                // Scroll thumbnail container so clicked thumb is in view
                const container = document.querySelector('.carousel-thumbnails');
                if (container) {
                    const scrollTarget = this.offsetLeft - (container.clientWidth / 2) + (this.clientWidth / 2);
                    container.scrollTo({
                        left: scrollTarget,
                        behavior: 'smooth'
                    });
                }

                // Quick blur/glitch effect for transition
                mainImg.style.filter = "contrast(1.5) blur(5px) sepia(100%) hue-rotate(-50deg)";
                mainImg.style.opacity = 0.5;

                setTimeout(() => {
                    mainImg.src = this.src;
                    mainImg.style.filter = "none";
                    mainImg.style.opacity = 1;

                    // Play sound
                    if (audioClick && !prefersReducedMotion) {
                        audioClick.currentTime = 0;
                        audioClick.play().catch(e => { });
                    }
                }, 150);
            });
        });

        // Update system time dynamically
        setInterval(() => {
            if (sysTimeEl) {
                const now = new Date();
                const hours = String(now.getHours()).padStart(2, '0');
                const minutes = String(now.getMinutes()).padStart(2, '0');
                const seconds = String(now.getSeconds()).padStart(2, '0');
                sysTimeEl.textContent = `${hours}:${minutes}:${seconds}`;
            }
        }, 1000);
    }

});
