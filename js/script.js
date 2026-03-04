document.addEventListener('DOMContentLoaded', function () {
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
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for fixed navbar height
                    behavior: 'smooth'
                });
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

});
