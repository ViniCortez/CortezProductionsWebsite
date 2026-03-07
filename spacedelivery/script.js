document.addEventListener('DOMContentLoaded', () => {

    /* --- Localization Setup --- */
    const translations = {
        "en": {
            "meta_desc": "Grab your crew for a high-stakes co-op horror run. You have 5 days to meet the quota.",
            "nav_back": "&lt; SYSTEM.RETURN_TO_MAIN",
            "popup_header": "INCOMING MESSAGE",
            "popup_body": "Do not forget to submit your quota. Add to your Wishlist today.",
            "popup_btn_wishlist": "Wishlist Now",
            "popup_btn_dismiss": "Dismiss",
            "demo_popup_headline": "Limited-Time Demo Launching Soon.",
            "demo_popup_sub": "Available for a limited time only. Sign up to get an instant alert when a Demo goes live.",
            "demo_placeholder": "Enter your email address",
            "demo_btn_notify": "NOTIFY ME",
            "hero_tagline": "Grab your crew for a high-stakes co-op horror run. <br> You have 5 days to meet the quota.",
            "hero_btn_wishlist": "WISHLIST ON STEAM",
            "trailer_title": "CO-OP MULTIPLAYER EXTRACTION HORROR - GAMEPLAY TRAILER",
            "about_title": "ABOUT THIS GAME",
            "about_p1": "Space Delivery is a co-op survival horror game focused on extraction and item collection. Players must work together to meet a weekly profit quota by traveling to different planets and dimensions to recover lost cargo.",
            "about_p2": "Armed with a backpack where items must be stacked, the team faces a difficult task: every destination features unique challenges, enemies, traps, and puzzles.",
            "surveillance_title": "SURVEILLANCE FEEDS",
            "features_title": "KEY FEATURES",
            "feature1_title": "STORY & PREMISE",
            "feature1_p1": "You are part of the \"Lost Cargo Division,\" a team tasked with recovering shipments that were misplaced by buyers across the universe.",
            "feature1_p2": "At the start of the mission, you are assigned a financial quota that must be met within 5 days. If you succeed, the quota increases for the next week, as does the overall difficulty of the job.",
            "feature2_title": "PROXIMITY VOICE CHAT",
            "feature2_p1": "Communication is vital, but dangerous. The game features a Positional Voice Chat system where enemies can hear players speaking. While the game includes combat, stealth is often the smarter choice.",
            "feature2_p2": "Weapons are loud, and the entities are drawn to noise, including your team's voice chat. This creates high-tension moments where silence is a survival mechanic.",
            "feature3_title": "INFINITE REPLAYABILITY",
            "feature3_p1": "No two matches are the same. The replay factor is driven by deep procedural generation and dynamic systems, ensuring players always face a fresh experience.",
            "feature3_p2": "All scenarios are generated procedurally with various themes. Each level introduces a new environmental challenge: some have unique traps or holes, others are swarming with enemies, and some have strict time limits due to oxygen levels.",
            "hazards_title": "OPERATIONAL HAZARDS",
            "hazard1_title": "PHYSICS-BASED GAMEPLAY",
            "hazard1_p": "Inventory management is tactile and strategic. Players must stack \"Lost Cargo\" on their backs, and every item has active physics. Movement matters—bumping into another player can knock over their stack. Some items are explosive or radioactive!",
            "hazard2_title": "ADAPTIVE ENEMIES",
            "hazard2_p": "There are distinct enemies, each with a unique visual design and behavior pattern. Players must constantly adapt their strategies to survive these encounters and secure the company's assets.",
            "hazard3_title": "PROGRESSION & ECONOMY",
            "hazard3_p": "Risk leads to reward. The ship features a shop where players can spend their bonuses on items, weapons, consumables, cosmetic suits, and ship upgrades. The shop is dynamic, inventory is replenished only after meeting the quota.",
            "demo_inline_title": "Limited-Time Demo Launching Soon.",
            "demo_inline_sub": "Available for a limited time only. Sign up to get an instant alert when a Demo goes live.",
            "demo_inline_confirm": "✓ You're on the list. We'll notify you when the demo drops.",
            "footer_prop": "Lost Cargo Division - Property of Cortez Productions",
            "footer_links_title": "DATABANKS",
            "footer_link_steam": "STEAM STORE",
            "footer_link_press": "PRESS KIT",
            "footer_link_discord": "DISCORD COMM-LINK",
            "footer_link_twitter": "X (TWITTER)",
            "footer_warning": "WARNING: Employment at Lost Cargo Division may result in dismemberment, radiation poisoning, or spontaneous displacement into hostile dimensions. The Company is not liable for loss of life or personal items.",
            "footer_copy": "&copy; 2026 Cortez Productions. All Rights Reserved. Not a real division. Probably.",
            "loader_1": "Initializing Lost Cargo OS...",
            "loader_2": "Establishing connection to Galactic Network...",
            "loader_3": "Bypassing company security protocols...",
            "loader_4": "Syncing daily quota targets...",
            "loader_5": "Calibrating life support systems (WARNING: Suboptimal)",
            "loader_6": "Loading planetary data...",
            "loader_7": "Boot sequence complete. Welcome to the Division.",
            "form_establishing": "ESTABLISHING CONNECTION...",
            "form_received": "TRANSMISSION RECEIVED.",
            "form_manifest": "You're on the manifest, Commander. We'll alert you the moment the demo drops.",
            "form_wishlist": "Wishlist on Steam",
            "form_retry": "RETRY TRANSMISSION"
        },
        "pt-br": {
            "meta_desc": "Reúna sua equipe para uma corrida de horror cooperativa de alto risco. Você tem 5 dias para atingir a cota.",
            "nav_back": "&lt; SISTEMA.VOLTAR_AO_PRINCIPAL",
            "popup_header": "MENSAGEM RECEBIDA",
            "popup_body": "Não se esqueça de enviar sua cota. Adicione à sua Lista de Desejos hoje.",
            "popup_btn_wishlist": "Adicionar à Lista",
            "popup_btn_dismiss": "Dispensar",
            "demo_popup_headline": "Demo por Tempo Limitado em Breve.",
            "demo_popup_sub": "Disponível apenas por tempo limitado. Inscreva-se para receber um alerta imediato quando a Demo for lançada.",
            "demo_placeholder": "Digite seu endereço de email",
            "demo_btn_notify": "ME NOTIFIQUE",
            "hero_tagline": "Reúna sua equipe para uma corrida de horror cooperativa de alto risco. <br> Você tem 5 dias para atingir a cota.",
            "hero_btn_wishlist": "ADICIONAR À LISTA NO STEAM",
            "trailer_title": "HORROR DE EXTRAÇÃO COOPERATIVO MULTIJOGADOR - TRAILER DE GAMEPLAY",
            "about_title": "SOBRE ESTE JOGO",
            "about_p1": "Space Delivery é um jogo de survival horror cooperativo focado em extração e coleta de itens. Os jogadores devem trabalhar juntos para atingir uma cota de lucro semanal, viajando para diferentes planetas e dimensões para recuperar cargas perdidas.",
            "about_p2": "Armados com uma mochila onde os itens devem ser empilhados, a equipe enfrenta uma tarefa difícil: cada destino apresenta desafios únicos, inimigos, armadilhas e quebra-cabeças.",
            "surveillance_title": "FEEDS DE VIGILÂNCIA",
            "features_title": "RECURSOS PRINCIPAIS",
            "feature1_title": "HISTÓRIA E PREMISSA",
            "feature1_p1": "Você faz parte da \"Divisão de Carga Perdida\", uma equipe encarregada de recuperar remessas que foram extraviadas por compradores de todo o universo.",
            "feature1_p2": "No início da missão, você recebe uma cota financeira que deve ser atingida em 5 dias. Se você for bem-sucedido, a cota aumenta para a próxima semana, assim como a dificuldade geral do trabalho.",
            "feature2_title": "CHAT DE VOZ POR PROXIMIDADE",
            "feature2_p1": "A comunicação é vital, mas perigosa. O jogo possui um sistema de Chat de Voz Posicional onde os inimigos podem ouvir os jogadores falando. Embora o jogo inclua combate, a furtividade geralmente é a escolha mais inteligente.",
            "feature2_p2": "Armas são barulhentas e as entidades são atraídas pelo som, incluindo o chat de voz da sua equipe. Isso cria momentos de alta tensão onde o silêncio é uma mecânica de sobrevivência.",
            "feature3_title": "REJOGABILIDADE INFINITA",
            "feature3_p1": "Nenhuma partida é igual à outra. O fator de rejogabilidade é impulsionado por geração procedural profunda e sistemas dinâmicos, garantindo que os jogadores sempre enfrentem uma experiência nova.",
            "feature3_p2": "Todos os cenários são gerados proceduralmente com vários temas. Cada nível introduz um novo desafio ambiental: alguns têm armadilhas ou buracos únicos, outros estão cheios de inimigos e alguns têm limites de tempo estritos devido aos níveis de oxigênio.",
            "hazards_title": "PERIGOS OPERACIONAIS",
            "hazard1_title": "GAMEPLAY BASEADO EM FÍSICA",
            "hazard1_p": "O gerenciamento de inventário é tátil e estratégico. Os jogadores devem empilhar a \"Carga Perdida\" em suas costas e cada item possui física ativa. O movimento importa—esbarrar em outro jogador pode derrubar a pilha dele. Alguns itens são explosivos ou radioativos!",
            "hazard2_title": "INIMIGOS ADAPTIVOS",
            "hazard2_p": "Existem inimigos distintos, cada um com um design visual único e padrão de comportamento. Os jogadores devem adaptar constantemente suas estratégias para sobreviver a esses encontros e proteger os ativos da empresa.",
            "hazard3_title": "PROGRESSÃO E ECONOMIA",
            "hazard3_p": "Risco leva a recompensas. A nave possui uma loja onde os jogadores podem gastar seus bônus em itens, armas, consumíveis, trajes cosméticos e melhorias para a nave. A loja é dinâmica; o estoque só é reabastecido após atingir a cota.",
            "demo_inline_title": "Demo por Tempo Limitado em Breve.",
            "demo_inline_sub": "Disponível apenas por tempo limitado. Inscreva-se para receber um alerta imediato quando a Demo for lançada.",
            "demo_inline_confirm": "✓ Você está na lista. Nós o notificaremos quando a demo for lançada.",
            "footer_prop": "Divisão de Carga Perdida - Propriedade de Cortez Productions",
            "footer_links_title": "BANCOS DE DADOS",
            "footer_link_steam": "LOJA STEAM",
            "footer_link_press": "KIT DE IMPRENSA",
            "footer_link_discord": "LINHA DE COMUNICAÇÃO DISCORD",
            "footer_link_twitter": "X (TWITTER)",
            "footer_warning": "AVISO: O emprego na Divisão de Carga Perdida pode resultar em desmembramento, envenenamento por radiação ou deslocamento espontâneo para dimensões hostis. A Empresa não se responsabiliza por perda de vidas ou itens pessoais.",
            "footer_copy": "&copy; 2026 Cortez Productions. Todos os Direitos Reservados. Não é uma divisão real. Provavelmente.",
            "loader_1": "Inicializando SO Carga Perdida...",
            "loader_2": "Estabelecendo conexão com a Rede Galáctica...",
            "loader_3": "Ignorando protocolos de segurança da empresa...",
            "loader_4": "Sincronizando metas de cotas diárias...",
            "loader_5": "Calibrando sistemas de suporte de vida (AVISO: Subideal)",
            "loader_6": "Carregando dados planetários...",
            "loader_7": "Sequência de inicialização concluída. Bem-vindo à Divisão.",
            "form_establishing": "ESTABELECENDO CONEXÃO...",
            "form_received": "TRANSMISSÃO RECEBIDA.",
            "form_manifest": "Você está no manifesto, Comandante. Avisaremos no momento em que a demo for lançada.",
            "form_wishlist": "Adicionar à Lista no Steam",
            "form_retry": "TENTAR TRANSMISSÃO NOVAMENTE"
        }
    };

    let currentLang = 'en';

    function i18n(key) {
        return translations[currentLang]?.[key] || translations['en'][key] || key;
    }

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('sd_language', lang);

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-meta]').forEach(el => {
            const key = el.getAttribute('data-i18n-meta');
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute('content', translations[lang][key]);
            }
        });

        const btnEn = document.getElementById('lang-en');
        const btnPt = document.getElementById('lang-pt');
        if (btnEn) btnEn.classList.toggle('active', lang === 'en');
        if (btnPt) btnPt.classList.toggle('active', lang === 'pt-br');

        // Custom update for document title (optional SEO/Tab header update, fallback handling)
        document.title = (lang === 'pt-br') ? "Space Delivery - Um Jogo de Cortez Productions" : "Space Delivery - A Cortez Productions Game";
    }

    function initLanguage() {
        const savedLang = localStorage.getItem('sd_language');
        if (savedLang) {
            currentLang = savedLang;
        } else {
            const browserLang = navigator.language || navigator.userLanguage;
            if (browserLang.toLowerCase().startsWith('pt')) {
                currentLang = 'pt-br';
            }
        }
        applyLanguage(currentLang);
    }

    const btnEn = document.getElementById('lang-en');
    const btnPt = document.getElementById('lang-pt');
    if (btnEn) btnEn.addEventListener('click', () => applyLanguage('en'));
    if (btnPt) btnPt.addEventListener('click', () => applyLanguage('pt-br'));

    initLanguage();

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
            btn.innerText = i18n('form_establishing');

            const formData = new FormData(form);
            const urlParams = new URLSearchParams();
            formData.forEach((value, key) => urlParams.append(key, value));

            fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: urlParams })
                .then(response => {
                    // Success: Hide form and show the "Transmission Received" message
                    form.style.display = 'none';
                    feedback.style.display = 'block';
                    feedback.innerHTML = `
                        <h3>${i18n('form_received')}</h3>
                        <p>${i18n('form_manifest')}</p>
                        <a href="https://store.steampowered.com/app/4141230/Space_Delivery/" class="wishlist-btn steam-button small-btn" target="_blank">${i18n('form_wishlist')}</a>
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
                    btn.innerText = i18n('form_retry');
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
            <h3>${i18n('form_received')}</h3>
            <p>${i18n('form_manifest')}</p>
            <a href="https://store.steampowered.com/app/4141230/Space_Delivery/" class="wishlist-btn steam-button small-btn" target="_blank">${i18n('form_wishlist')}</a>
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
        "loader_1",
        "loader_2",
        "loader_3",
        "loader_4",
        "loader_5",
        "loader_6",
        "loader_7"
    ];

    const textContainer = document.getElementById('loader-text-container');
    const loadingBar = document.getElementById('loader-bar');
    const loaderWrapper = document.getElementById('loader-wrapper');

    let messageIndex = 0;

    function showNextMessage() {
        if (messageIndex < loaderMessages.length) {
            const p = document.createElement('p');
            p.textContent = "> " + i18n(loaderMessages[messageIndex]);
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
