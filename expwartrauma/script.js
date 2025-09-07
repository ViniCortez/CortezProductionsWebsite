document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // --- GSAP ANIMATIONS ---

    // 1. Hero Tagline Fade-in
    gsap.to('.tagline', {
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
        ease: 'power1.inOut'
    });

    // 2. Typewriter effect for Sealed Briefing
    const summaryText = document.getElementById('summary-text');
    if (summaryText) {
        const split = new SplitText(summaryText, { type: 'chars, words' });
        gsap.from(split.chars, {
            duration: 0.05,
            opacity: 0,
            stagger: 0.02,
            ease: 'power1.in',
            scrollTrigger: {
                trigger: '.summary-section',
                start: 'top 60%',
                toggleActions: 'play none none none'
            }
        });
    }

    // --- CURSOR EFFECTS ---
    const cursor = document.querySelector('.custom-cursor');
    if (window.matchMedia("(pointer: fine)").matches) { // Only run on devices with mouse
        window.addEventListener('mousemove', e => {
            cursor.style.top = `${e.clientY}px`;
            cursor.style.left = `${e.clientX}px`;
        });

        document.addEventListener('click', e => {
            const decal = document.createElement('div');
            decal.className = 'crack-decal';
            document.body.appendChild(decal);

            decal.style.top = `${e.clientY - 50}px`;
            decal.style.left = `${e.clientX - 50}px`;

            gsap.to(decal, {
                opacity: 1,
                duration: 0.1,
                onComplete: () => {
                    gsap.to(decal, {
                        opacity: 0,
                        duration: 0.4,
                        delay: 0.2,
                        onComplete: () => {
                            decal.remove();
                        }
                    });
                }
            });
        });
    } else {
        cursor.style.display = 'none';
    }


    // --- JITTER TOGGLE ---
    const toggleButton = document.getElementById('toggle-jitter');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('reduced-motion');
            toggleButton.textContent = document.body.classList.contains('reduced-motion') 
                ? 'Enable Jitter Effects' 
                : 'Disable Jitter Effects';
        });
    }
    
    // --- VIDEO GALLERY ---
    const gallery = document.getElementById('video-gallery');
    if (gallery) {
        lightGallery(gallery, {
            plugins: [lgYoutube],
            speed: 500,
            selector: '.gallery-item',
        });
    }

    // --- PTSD FLASHBACK EFFECT ---
    let flashbackPlayed = false;
    const ptsdIcons = document.querySelectorAll('.ptsd-icon');
    const flashbackSound = new Audio('../sounds/flashback.mp3');

    ptsdIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            if (!flashbackPlayed) {
                flashbackPlayed = true;

                // Play sound
                flashbackSound.play().catch(e => console.error("Audio play failed:", e));

                // Flash effect
                document.body.classList.add('flashback');
                setTimeout(() => {
                    document.body.classList.remove('flashback');
                }, 200); // Effect duration in milliseconds
            }
        });
    });

});

