document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // --- ACCESSIBILITY: REDUCED MOTION ---
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const jitterToggleButton = document.getElementById('toggle-jitter');

    if (reducedMotion) {
        document.body.classList.add('reduced-motion');
    }

    jitterToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('reduced-motion');
        const isJitterDisabled = document.body.classList.contains('reduced-motion');
        jitterToggleButton.textContent = isJitterDisabled ? 'Enable Jitter Effects' : 'Disable Jitter Effects';
    });


    // --- CUSTOM CURSOR EFFECT ---
    const cursor = document.querySelector('.custom-cursor');
    if (!reducedMotion) {
        window.addEventListener('mousemove', e => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1
            });
        });

        window.addEventListener('click', e => {
            const crack = document.createElement('div');
            crack.className = 'crack-decal';
            document.body.appendChild(crack);

            gsap.fromTo(crack, {
                x: e.clientX - 50,
                y: e.clientY - 50,
                rotation: Math.random() * 360,
                opacity: 1,
                scale: 0.5
            }, {
                opacity: 0,
                scale: 1,
                duration: 0.6,
                onComplete: () => crack.remove()
            });
        });
    } else {
        cursor.style.display = 'none';
    }


    // --- GSAP ANIMATIONS ---
    // 1. Hero Content Fade-in
    gsap.to('.tagline', {
        opacity: 1,
        duration: 1.5,
        delay: 0.5
    });
    gsap.from('.hero-logo', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.2
    });

    // 2. Typewriter effect for summary
    const summaryText = document.getElementById('summary-text');
    if (summaryText) {
        const split = new SplitText(summaryText, { type: "chars, words" });
        gsap.from(split.chars, {
            duration: 0.05,
            opacity: 0,
            stagger: 0.01,
            ease: "power1.in",
            scrollTrigger: {
                trigger: ".summary-section",
                start: "top 60%",
                toggleActions: "play none none none"
            }
        });
    }
    
    // 3. Shaking text for "EXP"
    const expText = document.querySelector('.exp-text');
    if (expText && !reducedMotion) {
         gsap.to(expText, {
            keyframes: [
                {rotate: 2, x: 1},
                {rotate: -2, x: -1},
                {rotate: 1, x: 1},
                {rotate: 0, x: 0}
            ],
            duration: 0.2,
            repeat: -1,
            repeatDelay: 1,
            ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})"
        });
    }

});
