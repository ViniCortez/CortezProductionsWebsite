document.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(ScrollTrigger, SplitText);

    const body = document.body;
    let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- JITTER TOGGLE ---
    const jitterToggle = document.getElementById('toggle-jitter');
    if (jitterToggle) {
        jitterToggle.addEventListener('click', () => {
            body.classList.toggle('reduced-motion');
            const isReduced = body.classList.contains('reduced-motion');
            jitterToggle.textContent = isReduced ? 'Enable Jitter Effects' : 'Disable Jitter Effects';
        });
    }

    if (prefersReducedMotion) {
        body.classList.add('reduced-motion');
         if(jitterToggle) jitterToggle.textContent = 'Enable Jitter Effects';
    }

    // --- CURSOR & CLICK EFFECT ---
    const cursor = document.querySelector('.custom-cursor');
    if (cursor && !prefersReducedMotion) {
        window.addEventListener('mousemove', e => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
        });

        window.addEventListener('click', e => {
            const crack = document.createElement('div');
            crack.className = 'crack-decal';
            body.appendChild(crack);
            gsap.set(crack, {
                x: e.clientX - 50,
                y: e.clientY - 50,
                rotation: Math.random() * 360
            });
            gsap.to(crack, {
                opacity: 0.7,
                duration: 0.1,
                onComplete: () => {
                    gsap.to(crack, {
                        opacity: 0,
                        duration: 0.4,
                        delay: 0.1,
                        onComplete: () => {
                            crack.remove();
                        }
                    });
                }
            });
        });
    }


    // --- HERO ANIMATIONS ---
    gsap.from('.hero-logo', {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 0.5
    });
    gsap.to('.tagline', {
        opacity: 1,
        duration: 1,
        delay: 1
    });

    // --- PTSD FLASHBACK EFFECT ---
    const ptsdIcons = document.querySelectorAll('.ptsd-icon');
    const flashbackSound = document.getElementById('flashback-sound');
    let flashbackTriggered = false;

    ptsdIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            if (!flashbackTriggered && !prefersReducedMotion) {
                flashbackTriggered = true;
                
                // Play sound
                if (flashbackSound) {
                    flashbackSound.currentTime = 0;
                    flashbackSound.play().catch(e => console.error("Audio play failed:", e));
                }

                // Flash effect
                gsap.timeline()
                    .add(() => body.classList.add('flashback'))
                    .add(() => body.classList.remove('flashback'), "+=0.05")
                    .add(() => body.classList.add('flashback'), "+=0.1")
                    .add(() => body.classList.remove('flashback'), "+=0.05");
            }
        });
    });

});

