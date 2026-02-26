document.addEventListener('DOMContentLoaded', function () {

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
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
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

        // If there's no steam link with an ID, let's at least style the existing genre as a tag
        if (genreEl && (!steamLink || !steamLink.href || !steamLink.href.includes('store.steampowered.com/app/'))) {
            const text = genreEl.textContent;
            genreEl.innerHTML = `<span class="steam-tag">${text}</span>`;
            genreEl.classList.add('steam-tags-container');
            genreEl.classList.remove('project-genre');
            return;
        }

        if (steamLink && steamLink.href && steamLink.href.includes('store.steampowered.com/app/')) {
            const urlParts = steamLink.href.split('/');
            const appidIndex = urlParts.indexOf('app') + 1;
            const appid = urlParts[appidIndex];

            if (appid) {
                // 1. Fetch Reviews
                try {
                    const reviewResponse = await fetch(`https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent('https://store.steampowered.com/appreviews/' + appid + '?json=1')}`);
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

                // 2. Fetch Tags
                try {
                    const tagsResponse = await fetch(`https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent('https://steamspy.com/api.php?request=appdetails&appid=' + appid)}`);
                    const tagsData = await tagsResponse.json();

                    if (tagsData && tagsData.tags) {
                        const tags = Object.keys(tagsData.tags).slice(0, 4);
                        const tagsHTML = tags.map(tag => `<span class="steam-tag">${tag}</span>`).join('');

                        if (genreEl) {
                            genreEl.innerHTML = tagsHTML;
                            genreEl.classList.add('steam-tags-container');
                            genreEl.classList.remove('project-genre');
                        }
                    }
                } catch (e) {
                    console.error("Error fetching Steam tags for", appid, e);
                }
            }
        }
    });

});
