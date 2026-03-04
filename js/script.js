document.addEventListener('DOMContentLoaded', function () {

    // --- Loading Screen Fadeout ---
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader-wrapper');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500); // Wait for CSS transition to finish
        }
    });

    // --- Custom Cursor Logic ---
    const cursor = document.querySelector('.custom-cursor');
    const cursorFollower = document.querySelector('.custom-cursor-follower');

    // Only init custom cursor on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches && cursor && cursorFollower) {
        let mouseX = 0;
        let mouseY = 0;
        let followerX = 0;
        let followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Move inner cursor instantly
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        });

        // Smoothly animate the follower (lerp)
        function animateFollower() {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;

            cursorFollower.style.left = `${followerX}px`;
            cursorFollower.style.top = `${followerY}px`;

            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        // Add hover effects for interactive elements
        const iteractives = document.querySelectorAll('a, button, .project-card, .service-card');
        iteractives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hovering');
                cursorFollower.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovering');
                cursorFollower.classList.remove('hovering');
            });
        });
    }

    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('.nav-link, .nav-logo, .scroll-indicator');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            // Only apply smooth scrolling if the link is an anchor on the current page
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetSection.offsetTop - 70, // Adjust for fixed navbar height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Intersection Observer for Scroll Animations ---
    const sections = document.querySelectorAll('section');
    const options = {
        root: null, // viewport
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';

                // Add staggered animation to child cards if they exist
                const cards = entry.target.querySelectorAll('.project-card, .service-card');
                if (cards.length > 0) {
                    cards.forEach((card, index) => {
                        // Initially hide and translate down
                        if (!card.dataset.animated) {
                            card.style.opacity = '0';
                            card.style.transform = 'translateY(30px)';
                            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.4s ease, border-color 0.4s ease';

                            // Trigger reflow
                            void card.offsetWidth;

                            // Apply staggered delay
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, index * 150 + 200); // 150ms stagger, 200ms initial delay
                            card.dataset.animated = "true";
                        }
                    });
                }

                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- Advanced Card 3D Tilt & Interactive Glare Effect ---
    const cards = document.querySelectorAll('.project-card, .service-card');

    cards.forEach(card => {
        // Create glare element dynamically
        const glare = document.createElement('div');
        glare.classList.add('glare');
        card.appendChild(glare);

        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top; // y position within the element

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate rotation based on pointer distance from center
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

            // Calculate angle for the glare gradient
            const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) - 90;
            // Calculate position for the glare based on mouse distance from the edges
            const glareX = (x / rect.width) * 100;
            const glareY = (y / rect.height) * 100;

            glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;
            glare.style.opacity = '1';
        });

        // Reset transform and glare when mouse leaves
        card.addEventListener('mouseleave', function () {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
            glare.style.opacity = '0';
        });
    });

    // --- Parallax Effect on Hero Elements ---
    const headerLogo = document.querySelector('.header-logo');
    const tagline = document.querySelector('.tagline');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        // Only animate if we are near the top (optimization)
        if (scrolled < window.innerHeight && headerLogo && tagline) {
            headerLogo.style.transform = `translateY(${scrolled * 0.3}px)`;
            tagline.style.transform = `translateY(${scrolled * 0.15}px)`;
            tagline.style.opacity = Math.max(0, 1 - (scrolled / 500));
        }
    });

    // --- Contact Form Submission using Formspree ---
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        try {
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.textContent = "Thanks for your submission!";
                formStatus.style.color = 'lightgreen';
                form.reset();
            } else {
                // Handle server-side errors
                const responseData = await response.json();
                if (Object.hasOwn(responseData, 'errors')) {
                    formStatus.textContent = responseData["errors"].map(error => error["message"]).join(", ");
                } else {
                    formStatus.textContent = "Oops! There was a problem submitting your form.";
                }
                formStatus.style.color = 'red';
            }
        } catch (error) {
            // Handle network errors
            formStatus.textContent = "Oops! There was a problem submitting your form.";
            formStatus.style.color = 'red';
        }
    }

    form.addEventListener("submit", handleSubmit);

    // --- Steam API Integration for Reviews and Tags ---
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(async (card) => {
        const steamLink = card.querySelector('.steam-link');
        const genreEl = card.querySelector('.project-genre');

        // Skip cards without a Steam link
        if (!steamLink || !steamLink.href || !steamLink.href.includes('store.steampowered.com/app/')) {
            return;
        }

        if (steamLink && steamLink.href && steamLink.href.includes('store.steampowered.com/app/')) {
            const urlParts = steamLink.href.split('/');
            const appidIndex = urlParts.indexOf('app') + 1;
            const appid = urlParts[appidIndex];

            if (appid) {
                // 1. Fetch Reviews
                try {
                    const reviewResponse = await fetch(`https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent('https://store.steampowered.com/appreviews/' + appid + '?json=1&filter=all&language=all&review_type=all&purchase_type=all&num_per_page=0')}`);
                    const reviewData = await reviewResponse.json();

                    if (reviewData && reviewData.query_summary && reviewData.query_summary.total_reviews > 0) {
                        const summary = reviewData.query_summary;

                        let reviewColor = '#a3a3a3'; // Default mixed/grey
                        const desc = summary.review_score_desc.toLowerCase();
                        if (desc.includes('positive')) {
                            reviewColor = '#8bc53f'; // Green for positive
                        } else if (desc.includes('negative')) {
                            reviewColor = '#c23f3f'; // Red for negative
                        }

                        const reviewHTML = `
                            <div class="steam-reviews">
                                <span class="review-label">All Reviews:</span>
                                <span class="review-score" style="color: ${reviewColor};">${summary.review_score_desc}</span>
                                <span class="review-count">(${summary.total_reviews})</span>
                            </div>
                        `;

                        const titleEl = card.querySelector('.project-title');
                        titleEl.insertAdjacentHTML('afterend', reviewHTML);
                    }
                } catch (e) {
                    console.error("Error fetching Steam reviews for", appid, e);
                }

                // 2. Fetch Tags (inserted after genre, not replacing it)
                try {
                    const tagsResponse = await fetch(`https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent('https://steamspy.com/api.php?request=appdetails&appid=' + appid)}`);
                    const tagsData = await tagsResponse.json();

                    if (tagsData && tagsData.tags) {
                        const tags = Object.keys(tagsData.tags).slice(0, 4);
                        const tagsHTML = `<div class="steam-tags-container">${tags.map(tag => `<span class="steam-tag">${tag}</span>`).join('')}</div>`;

                        if (genreEl) {
                            genreEl.insertAdjacentHTML('afterend', tagsHTML);
                        }
                    }
                } catch (e) {
                    console.error("Error fetching Steam tags for", appid, e);
                }
            }
        }
    });

    // --- Matrix Rain Effect for Contact Section ---
    const canvas = document.getElementById('matrix-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        const contactSection = document.getElementById('contact');

        // Set initial canvas size
        function resizeCanvas() {
            canvas.width = contactSection.offsetWidth;
            canvas.height = contactSection.offsetHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Latin letters and numerals as requested
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        // Increased font size for better visibility
        const fontSize = 28;
        let columns = Math.ceil(canvas.width / fontSize);
        let drops = [];

        // Initialize drops array
        for (let x = 0; x < columns; x++) {
            drops[x] = Math.random() * -100; // Start off-screen
        }

        function drawMatrix() {
            // Recalculate if canvas resizes
            const currentCols = Math.ceil(canvas.width / fontSize);
            if (currentCols !== columns) {
                columns = currentCols;
                while (drops.length < columns) drops.push(Math.random() * -100);
            }

            // Create trail effect
            ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Subtle white text
            ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];

                const x = i * fontSize;
                const y = drops[i] * fontSize;

                ctx.fillText(text, x, y);

                // Reset drop randomly after it passes the bottom
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Move drop down
                drops[i]++;
            }
        }

        // Run animation ~30 FPS
        setInterval(drawMatrix, 33);
    }
});
