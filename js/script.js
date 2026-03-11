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

    /* --- Localization Setup --- */
    const translations = {
        "en": {
            "meta_desc": "Cortez Productions is an indie game development studio specializing in immersive and terrifying horror games.",
            "hero_tagline": "Crafting profoundly immersive and terrifying horror games that captivate players globally.",
            "nav_projects": "Projects",
            "nav_services": "Services",
            "nav_bio": "Bio",
            "nav_contact": "Contact",
            "projects_title": "PROJECTS",
            "exp_genre": "Psychological Horror",
            "exp_desc": "A first-person psychological horror game immersing players in the lingering horrors of war as a WWII soldier struggling with PTSD.",
            "tblt_genre": "Liminal Spaces, Psychological Horror",
            "tblt_desc": "An immersive walking simulator through the mysterious and unsettling world of the Backrooms, separated by Tapes (Chapters).",
            "sd_genre": "Co-op Horror",
            "sd_desc": "Grab your crew for a high-stakes co-op horror run. You have 5 days to meet the quota. Haul valuable and dangerous, cargo from procedural levels and surreal, shifting dimensions. Survive deadly entities and daily Galactic Events. Get paid. Get upgraded. Survive the week.",
            "at_genre": "Psychological Horror",
            "at_desc": "Play as a Russian police officer investigating a creepy, old farmhouse where you must spot and report anomalies to survive.",
            "btn_view_website": "View Website",
            "btn_view_steam": "View on Steam",
            "btn_unreleased": "Unreleased",
            "services_title": "OUR SERVICES",
            "srv_fab_title": "Digital Assets on FAB",
            "srv_fab_desc": "Explore our collection of high-quality digital projects and assets available on the Epic Games FAB store.",
            "btn_visit_fab": "Visit FAB Store",
            "srv_remake_title": "Classic Horror Remakes",
            "srv_remake_desc": "Hire our specialized team to breathe new life into classic horror games with modern graphics, audio, and gameplay mechanics.",
            "bio_title": "OUR STORY",
            "bio_p1": "Cortez Productions began as a small team of four individuals who collaborated in their spare time to create a horror game driven by their shared passion. The release of the <strong>EXP: War Trauma Demo</strong> on October 31, 2021, received widespread acclaim from players worldwide, generating significant demand for a full game experience. This enthusiastic response motivated us to expand our vision and pursue development with greater ambition.",
            "bio_p2": "Today, Cortez Productions has grown into a dedicated indie game studio, driven by a talented team of developers united by a common mission: to craft profoundly immersive and terrifying horror games that captivate players globally.",
            "contact_title": "GET IN TOUCH",
            "contact_name": "Your Name",
            "contact_email": "Your Email",
            "contact_msg": "Your Message",
            "btn_send": "Send Message",
            "footer_copy": "&copy; 2025 Cortez Productions. All Rights Reserved."
        },
        "pt-br": {
            "meta_desc": "Cortez Productions é um estúdio independente de desenvolvimento de jogos especializado em jogos de terror imersivos e aterrorizantes.",
            "hero_tagline": "Criando jogos de terror profundamente imersivos e aterrorizantes que cativam jogadores globalmente.",
            "nav_projects": "Projetos",
            "nav_services": "Serviços",
            "nav_bio": "História",
            "nav_contact": "Contato",
            "projects_title": "PROJETOS",
            "exp_genre": "Terror Psicológico",
            "exp_desc": "Um jogo de terror psicológico em primeira pessoa que imerge os jogadores nos horrores duradouros da guerra como um soldado da Segunda Guerra Mundial lutando contra o TEPT.",
            "tblt_genre": "Espaços Liminares, Terror Psicológico",
            "tblt_desc": "Um simulador de caminhada imersivo através do mundo misterioso e perturbador de Backrooms, separado por Fitas (Capítulos).",
            "sd_genre": "Terror Cooperativo",
            "sd_desc": "Reúna sua equipe para uma corrida de terror cooperativo de alto risco. Você tem 5 dias para atingir a cota. Transporte cargas valiosas e perigosas de níveis procedurais e dimensões surreais em constante mudança. Sobreviva a entidades mortais e eventos galácticos diários. Seja pago. Seja aprimorado. Sobreviva à semana.",
            "at_genre": "Terror Psicológico",
            "at_desc": "Jogue como um policial russo investigando uma fazenda antiga e assustadora, onde você deve identificar e relatar anomalias para sobreviver.",
            "btn_view_website": "Ver Site",
            "btn_view_steam": "Ver no Steam",
            "btn_unreleased": "Não Lançado",
            "services_title": "NOSSOS SERVIÇOS",
            "srv_fab_title": "Ativos Digitais no FAB",
            "srv_fab_desc": "Explore nossa coleção de projetos digitais e ativos de alta qualidade disponíveis na loja FAB da Epic Games.",
            "btn_visit_fab": "Visitar Loja FAB",
            "srv_remake_title": "Remakes de Terror Clássico",
            "srv_remake_desc": "Contrate nossa equipe especializada para dar uma nova vida aos jogos de terror clássicos com gráficos, áudio e mecânicas de jogo modernos.",
            "bio_title": "NOSSA HISTÓRIA",
            "bio_p1": "A Cortez Productions começou como uma pequena equipe de quatro indivíduos que colaboraram em seu tempo livre para criar um jogo de terror impulsionado por sua paixão compartilhada. O lançamento da <strong>Demo de EXP: War Trauma</strong> em 31 de outubro de 2021, recebeu aclamação generalizada de jogadores de todo o mundo, gerando uma demanda significativa por uma experiência de jogo completa. Essa resposta entusiástica nos motivou a expandir nossa visão e buscar o desenvolvimento com maior ambição.",
            "bio_p2": "Hoje, a Cortez Productions cresceu e se tornou um estúdio dedicado a jogos independentes, impulsionado por uma talentosa equipe de desenvolvedores unidos por uma missão comum: criar jogos de terror profundamente imersivos e aterrorizantes que cativam jogadores globalmente.",
            "contact_title": "ENTRE EM CONTATO",
            "contact_name": "Seu Nome",
            "contact_email": "Seu Email",
            "contact_msg": "Sua Mensagem",
            "btn_send": "Enviar Mensagem",
            "footer_copy": "&copy; 2025 Cortez Productions. Todos os Direitos Reservados."
        },
        "ru": {
            "meta_desc": "Cortez Productions — независимая студия по разработке игр, специализирующаяся на захватывающих и пугающих хоррор-играх.",
            "hero_tagline": "Создаем глубоко захватывающие и пугающие хоррор-игры, которые очаровывают игроков по всему миру.",
            "nav_projects": "Проекты",
            "nav_services": "Услуги",
            "nav_bio": "О нас",
            "nav_contact": "Контакты",
            "projects_title": "ПРОЕКТЫ",
            "exp_genre": "Психологический хоррор",
            "exp_desc": "Психологический хоррор от первого лица, погружающий игроков в непреходящие ужасы войны в роли солдата Второй мировой войны, борющегося с ПТСР.",
            "tblt_genre": "Лиминальные пространства, Психологический хоррор",
            "tblt_desc": "Захватывающий симулятор ходьбы по таинственному и тревожному миру Закулисья, разделенному на Кассеты (Главы).",
            "sd_genre": "Кооперативный хоррор",
            "sd_desc": "Соберите команду для рискованного кооперативного хоррора. У вас есть 5 дней, чтобы выполнить квоту. Перевозите ценный и опасный груз из процедурных уровней и сюрреалистичных, меняющихся измерений. Выживайте среди смертоносных сущностей и ежедневных галактических событий. Получайте деньги. Улучшайтесь. Выживите эту неделю.",
            "at_genre": "Психологический хоррор",
            "at_desc": "Играйте за российского полицейского, расследующего жуткий старый фермерский дом, где вы должны выявлять и сообщать об аномалиях, чтобы выжить.",
            "btn_view_website": "Перейти на сайт",
            "btn_view_steam": "Смотреть в Steam",
            "btn_unreleased": "Не выпущено",
            "services_title": "НАШИ УСЛУГИ",
            "srv_fab_title": "Цифровые активы на FAB",
            "srv_fab_desc": "Исследуйте нашу коллекцию высококачественных цифровых проектов и активов, доступных в магазине FAB от Epic Games.",
            "btn_visit_fab": "Посетить магазин FAB",
            "srv_remake_title": "Ремейки классических хорроров",
            "srv_remake_desc": "Наймите нашу специализированную команду, чтобы вдохнуть новую жизнь в классические хоррор-игры с помощью современной графики, звука и игровой механики.",
            "bio_title": "НАША ИСТОРИЯ",
            "bio_p1": "Cortez Productions началась как небольшая команда из четырех человек, которые в свободное время вместе создавали хоррор-игру, движимые общей страстью. Выпуск <strong>Демоверсии EXP: War Trauma</strong> 31 октября 2021 года получил широкое признание игроков со всего мира, породив значительный спрос на полноценную игру. Этот восторженный отклик побудил нас расширить наше видение и заняться разработкой с большими амбициями.",
            "bio_p2": "Сегодня Cortez Productions выросла в преданную своему делу инди-студию, движимую талантливой командой разработчиков, объединенных общей миссией: создавать глубоко захватывающие и пугающие хоррор-игры, которые очаровывают игроков по всему миру.",
            "contact_title": "СВЯЗАТЬСЯ С НАМИ",
            "contact_name": "Ваше имя",
            "contact_email": "Ваш email",
            "contact_msg": "Ваше сообщение",
            "btn_send": "Отправить сообщение",
            "footer_copy": "&copy; 2025 Cortez Productions. Все права защищены."
        },
        "de": {
            "meta_desc": "Cortez Productions ist ein Indie-Spieleentwicklungsstudio, das sich auf immersive und furchterregende Horrorspiele spezialisiert hat.",
            "hero_tagline": "Wir erschaffen zutiefst immersive und furchterregende Horrorspiele, die Spieler weltweit fesseln.",
            "nav_projects": "Projekte",
            "nav_services": "Dienste",
            "nav_bio": "Über uns",
            "nav_contact": "Kontakt",
            "projects_title": "PROJEKTE",
            "exp_genre": "Psychologischer Horror",
            "exp_desc": "Ein psychologisches First-Person-Horrorspiel, das Spieler in die nachklingenden Schrecken des Krieges als WWII-Soldat eintauchen lässt, der mit PTBS zu kämpfen hat.",
            "tblt_genre": "Liminal Spaces, Psychologischer Horror",
            "tblt_desc": "Ein immersiver Walking-Simulator durch die mysteriöse und beunruhigende Welt der Backrooms, unterteilt in Tapes (Kapitel).",
            "sd_genre": "Koop-Horror",
            "sd_desc": "Schnapp dir deine Crew für einen risikoreichen Koop-Horror-Run. Ihr habt 5 Tage Zeit, um die Quote zu erfüllen. Transportiert wertvolle und gefährliche Fracht aus prozeduralen Levels und surrealen, sich verändernden Dimensionen. Überlebt tödliche Entitäten und tägliche galaktische Ereignisse. Werdet bezahlt. Verbessert euch. Überlebt die Woche.",
            "at_genre": "Psychologischer Horror",
            "at_desc": "Spiele als russischer Polizist, der ein gruseliges, altes Bauernhaus untersucht, in dem du Anomalien entdecken und melden musst, um zu überleben.",
            "btn_view_website": "Website ansehen",
            "btn_view_steam": "Auf Steam ansehen",
            "btn_unreleased": "Unveröffentlicht",
            "services_title": "UNSERE DIENSTE",
            "srv_fab_title": "Digitale Assets bei FAB",
            "srv_fab_desc": "Entdecken Sie unsere Sammlung hochwertiger digitaler Projekte und Assets, die im Epic Games FAB-Store erhältlich sind.",
            "btn_visit_fab": "FAB Store besuchen",
            "srv_remake_title": "Klassische Horror-Remakes",
            "srv_remake_desc": "Beauftragen Sie unser spezialisiertes Team, um klassischen Horrorspielen mit moderner Grafik, Audio und Gameplay-Mechaniken neues Leben einzuhauchen.",
            "bio_title": "UNSERE GESCHICHTE",
            "bio_p1": "Cortez Productions begann als kleines Team von vier Personen, die in ihrer Freizeit zusammenarbeiteten, um von ihrer gemeinsamen Leidenschaft angetrieben ein Horrorspiel zu entwickeln. Die Veröffentlichung der <strong>EXP: War Trauma Demo</strong> am 31. Oktober 2021 erhielt weltweit großen Zuspruch von Spielern und weckte eine erhebliche Nachfrage nach einem vollständigen Spielerlebnis. Diese begeisterte Resonanz motivierte uns, unsere Vision zu erweitern und die Entwicklung mit größerem Ehrgeiz zu verfolgen.",
            "bio_p2": "Heute ist Cortez Productions zu einem engagierten Indie-Spielestudio herangewachsen, angetrieben von einem talentierten Entwicklerteam, das durch eine gemeinsame Mission vereint ist: zutiefst immersive und furchterregende Horrorspiele zu entwickeln, die Spieler weltweit in ihren Bann ziehen.",
            "contact_title": "KONTAKTIEREN SIE UNS",
            "contact_name": "Dein Name",
            "contact_email": "Deine E-Mail",
            "contact_msg": "Deine Nachricht",
            "btn_send": "Nachricht senden",
            "footer_copy": "&copy; 2025 Cortez Productions. Alle Rechte vorbehalten."
        },
        "zh": {
            "meta_desc": "Cortez Productions 是一家独立游戏开发工作室，专注于令人身临其境且恐怖的游戏。",
            "hero_tagline": "制作令人身临其境、毛骨悚然的恐怖游戏，吸引全球玩家。",
            "nav_projects": "项目",
            "nav_services": "服务",
            "nav_bio": "关于我们",
            "nav_contact": "联系",
            "projects_title": "项目",
            "exp_genre": "心理恐怖",
            "exp_desc": "一款第一人称心理恐怖游戏，让玩家扮演一名与创伤后应激障碍（PTSD）作斗争的二战士兵，沉浸在战争挥之不去的恐怖中。",
            "tblt_genre": "阈限空间，心理恐怖",
            "tblt_desc": "一款身临其境的步行模拟器，穿越神秘且令人不安的后室世界，通过录像带（章节）分隔开来。",
            "sd_genre": "合作恐怖",
            "sd_desc": "召集您的团队，进行一场高风险的合作恐怖行动。您有 5 天的时间来完成配额。从程序生成的关卡和超现实的、转移的维度中拖运有价值且危险的货物。在致命实体和日常星系事件中存活。获得报酬。获得升级。撑过这个星期。",
            "at_genre": "心理恐怖",
            "at_desc": "扮演一名俄罗斯警察，调查一座令人毛骨悚然的旧农舍，您必须发现并报告异常现象才能生存。",
            "btn_view_website": "访问网站",
            "btn_view_steam": "在 Steam 上查看",
            "btn_unreleased": "未发行",
            "services_title": "我们的服务",
            "srv_fab_title": "FAB 上的数字资产",
            "srv_fab_desc": "探索我们在 Epic Games FAB 商店提供的高品质数字项目和资产集合。",
            "btn_visit_fab": "访问 FAB 商店",
            "srv_remake_title": "经典恐怖游戏重制",
            "srv_remake_desc": "聘请我们的专业团队，利用现代图形、音频和游戏机制为经典恐怖游戏注入新的生命。",
            "bio_title": "我们的故事",
            "bio_p1": "Cortez Productions 最初是一个四人小团队，在业余时间受共同的热情驱使合作开发恐怖游戏。2021 年 10 月 31 日发布的 <strong>EXP: War Trauma 演示版</strong> 受到了全球玩家的广泛好评，从而产生了对完整游戏体验的巨大需求。这种热烈的反响激励我们扩展愿景，并以更大的野心追求发展。",
            "bio_p2": "如今，Cortez Productions 已发展成为一家专注的独立游戏工作室，由一群才华横溢的开发者组成，他们为了一个共同的使命而团结在一起：制作令人身临其境且恐怖的游戏，吸引全球玩家。",
            "contact_title": "联系我们",
            "contact_name": "您的姓名",
            "contact_email": "您的邮箱",
            "contact_msg": "您的留言",
            "btn_send": "发送留言",
            "footer_copy": "&copy; 2025 Cortez Productions. 版权所有."
        },
        "fr": {
            "meta_desc": "Cortez Productions est un studio de développement de jeux indépendant spécialisé dans les jeux d'horreur immersifs et terrifiants.",
            "hero_tagline": "Créer des jeux d'horreur profondément immersifs et terrifiants qui captivent les joueurs du monde entier.",
            "nav_projects": "Projets",
            "nav_services": "Services",
            "nav_bio": "Histoire",
            "nav_contact": "Contact",
            "projects_title": "PROJETS",
            "exp_genre": "Horreur Psychologique",
            "exp_desc": "Un jeu d'horreur psychologique à la première personne plongeant les joueurs dans les horreurs persistantes de la guerre dans la peau d'un soldat de la Seconde Guerre mondiale aux prises avec le SSPT.",
            "tblt_genre": "Espaces Liminaux, Horreur Psychologique",
            "tblt_desc": "Un simulateur de marche immersif à travers le monde mystérieux et troublant des Backrooms, séparé par des Cassettes (Chapitres).",
            "sd_genre": "Horreur Coopérative",
            "sd_desc": "Rassemblez votre équipe pour une course d'horreur en coopération aux enjeux considérables. Vous avez 5 jours pour atteindre le quota. Transportez des marchandises précieuses et dangereuses à partir de niveaux procéduraux et de dimensions surréalistes et changeantes. Survivez aux entités mortelles et aux événements galáctiques quotidiens. Soyez payé. Améliorez-vous. Survivez à la semaine.",
            "at_genre": "Horreur Psychologique",
            "at_desc": "Incarnez un policier russe enquêtant sur une vieille ferme effrayante où vous devez repérer et signaler les anomalies pour survivre.",
            "btn_view_website": "Voir le Site",
            "btn_view_steam": "Voir sur Steam",
            "btn_unreleased": "Non Publié",
            "services_title": "NOS SERVICES",
            "srv_fab_title": "Actifs Numériques sur FAB",
            "srv_fab_desc": "Explorez notre collection de projets et d'actifs numériques de haute qualité disponibles sur la boutique FAB d'Epic Games.",
            "btn_visit_fab": "Visiter la Boutique FAB",
            "srv_remake_title": "Remakes d'Horreur Classique",
            "srv_remake_desc": "Engagez notre équipe spécialisée pour donner une nouvelle vie aux jeux d'horreur classiques avec des graphismes, un son et des mécanismes de jeu modernes.",
            "bio_title": "NOTRE HISTOIRE",
            "bio_p1": "Cortez Productions a commencé comme une petite équipe de quatre personnes qui ont collaboré pendant leur temps libre pour créer un jeu d'horreur motivé par leur passion commune. La sortie de la <strong>Démo d'EXP: War Trauma</strong> le 31 octobre 2021 a été largement acclamée par les joueurs du monde entier, générant une demande importante pour une expérience de jeu complète. Cette réponse enthousiaste nous a motivés à élargir notre vision et à poursuivre le développement avec plus d'ambition.",
            "bio_p2": "Aujourd'hui, Cortez Productions est devenu un studio de jeux indépendant dévoué, dirigé par une équipe talentueuse de développeurs unis par une mission commune : créer des jeux d'horreur profondément immersifs et terrifiants qui captivent les joueurs du monde entier.",
            "contact_title": "NOUS CONTACTER",
            "contact_name": "Votre Nom",
            "contact_email": "Votre E-mail",
            "contact_msg": "Votre Message",
            "btn_send": "Envoyer le Message",
            "footer_copy": "&copy; 2025 Cortez Productions. Tous Droits Réservés."
        }
    };

    let currentLang = 'en';

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('cortez_language', lang);

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

        // Update custom dropdown
        const langToggleBtn = document.getElementById('lang-toggle');
        const langOptions = document.querySelectorAll('.lang-option');
        
        if (langOptions.length > 0) {
            langOptions.forEach(opt => {
                const optLang = opt.getAttribute('data-lang');
                if (optLang === lang) {
                    opt.classList.add('active');
                    if (langToggleBtn) {
                        langToggleBtn.innerHTML = `${opt.textContent} <span class="arrow">▼</span>`;
                    }
                } else {
                    opt.classList.remove('active');
                }
            });
        }
    }

    function initLanguage() {
        const savedLang = localStorage.getItem('cortez_language');
        if (savedLang) {
            currentLang = savedLang;
        } else {
            const browserLang = (navigator.language || navigator.userLanguage).toLowerCase();
            if (browserLang.startsWith('pt')) {
                currentLang = 'pt-br';
            } else if (browserLang.startsWith('ru')) {
                currentLang = 'ru';
            } else if (browserLang.startsWith('de')) {
                currentLang = 'de';
            } else if (browserLang.startsWith('zh')) {
                currentLang = 'zh';
            } else if (browserLang.startsWith('fr')) {
                currentLang = 'fr';
            } else {
                currentLang = 'en';
            }
        }
        applyLanguage(currentLang);
    }

    // Dropdown event listeners
    const langDropdown = document.querySelector('.lang-dropdown');
    const langToggleBtn = document.getElementById('lang-toggle');
    const langOptions = document.querySelectorAll('.lang-option');

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });
    }

    langOptions.forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.stopPropagation();
            applyLanguage(opt.getAttribute('data-lang'));
            langDropdown.classList.remove('open');
        });
    });

    // Close dropdown on click outside
    document.addEventListener('click', () => {
        if (langDropdown) {
            langDropdown.classList.remove('open');
        }
    });

    initLanguage();

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
        const steamLink = card.querySelector('a[href*="store.steampowered.com/app/"]');
        const genreEl = card.querySelector('.project-genre');

        // Skip cards without a Steam link
        if (!steamLink) {
            return;
        }

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
    
    // --- Google Ads Conversion Tracking: Space Delivery Wishlist ---
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a');
        
        // Check if it's the Space Delivery Steam link
        if (target && target.href && target.href.includes('store.steampowered.com/app/4141230')) {
            // Prevent default to ensure event fires before navigation
            e.preventDefault();
            const url = target.href;
            
            gtag('event', 'conversion', {
                'send_to': 'AW-747890922/B2e4CM7M0IYcEOrRz-QC',
                'event_callback': function() {
                    window.open(url, '_blank');
                }
            });
            
            // Fallback in case gtag doesn't fire
            setTimeout(function() {
                window.open(url, '_blank');
            }, 500);
        }
    });
});
