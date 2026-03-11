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
        },
        "ru": {
            "meta_desc": "Собирайте команду для кооперативного хоррор-забега с высокими ставками. У вас есть 5 дней, чтобы выполнить квоту.",
            "nav_back": "&lt; СИСТЕМА.ВЕРНУТЬСЯ_В_ГЛАВНОЕ_МЕНЮ",
            "popup_header": "ВХОДЯЩЕЕ СООБЩЕНИЕ",
            "popup_body": "Не забудьте сдать квоту. Добавьте в список желаемого сегодня.",
            "popup_btn_wishlist": "В желаемое",
            "popup_btn_dismiss": "Закрыть",
            "demo_popup_headline": "Скоро выйдет демоверсия.",
            "demo_popup_sub": "Доступна ограниченное время. Подпишитесь, чтобы получить мгновенное уведомление о выходе демо.",
            "demo_placeholder": "Введите ваш адрес электронной почты",
            "demo_btn_notify": "УВЕДОМИТЬ МЕНЯ",
            "hero_tagline": "Собирайте команду для кооперативного хоррор-забега. <br> У вас есть 5 дней, чтобы выполнить квоту.",
            "hero_btn_wishlist": "В ЖЕЛАЕМОЕ В STEAM",
            "trailer_title": "КООПЕРАТИВНЫЙ ЭКСТРАКШН-ХОРРОР - ГЕЙМПЛЕЙНЫЙ ТРЕЙЛЕР",
            "about_title": "ОБ ЭТОЙ ИГРЕ",
            "about_p1": "Space Delivery — это кооперативный хоррор на выживание, ориентированный на добычу. Игроки должны работать вместе, чтобы выполнить еженедельную квоту по прибыли, путешествуя по разным планетам и измерениям для поиска потерянного груза.",
            "about_p2": "Вооружившись рюкзаком, в который нужно складывать предметы, команда сталкивается со сложной задачей: в каждом пункте назначения их ждут уникальные испытания, враги, ловушки и головоломки.",
            "surveillance_title": "КАМЕРЫ НАБЛЮДЕНИЯ",
            "features_title": "КЛЮЧЕВЫЕ ОСОБЕННОСТИ",
            "feature1_title": "СЮЖЕТ",
            "feature1_p1": "Вы являетесь частью 'Дивизиона потерянных грузов' — команды, которой поручено возвращать поставки, потерянные покупателями по всей вселенной.",
            "feature1_p2": "В начале миссии вам назначается финансовая квота, которую нужно выполнить за 5 дней. В случае успеха квота увеличивается на следующую неделю, как и общая сложность работы.",
            "feature2_title": "ГОЛОСОВОЙ ЧАТ ПО БЛИЗОСТИ",
            "feature2_p1": "Связь жизненно важна, но опасна. В игре есть система позиционного голосового чата, где враги могут слышать разговоры игроков. Хотя в игре есть бои, скрытность часто является более разумным выбором.",
            "feature2_p2": "Оружие громкое, и сущности стягиваются на шум, включая голосовой чат вашей команды. Это создает напряженные моменты, где тишина — это механика выживания.",
            "feature3_title": "БЕСКОНЕЧНАЯ РЕИГРАБЕЛЬНОСТЬ",
            "feature3_p1": "Нет двух одинаковых матчей. Фактор повторного прохождения обусловлен глубокой процедурной генерацией и динамическими системами, гарантируя, что игроки всегда получают новый опыт.",
            "feature3_p2": "Все сценарии генерируются процедурно с различными темами. Каждый уровень предлагает новое испытание: где-то есть уникальные ловушки или дыры, где-то полно врагов, а где-то строгие ограничения по времени из-за уровня кислорода.",
            "hazards_title": "ОПЕРАЦИОННЫЕ УГРОЗЫ",
            "hazard1_title": "ГЕЙМПЛЕЙ НА БАЗЕ ФИЗИКИ",
            "hazard1_p": "Управление инвентарем тактильно и стратегично. Игроки должны складывать 'Потерянный груз' себе на спину, и каждый предмет обладает активной физикой. Движение имеет значение — столкновение с другим игроком может опрокинуть его стопку. Некоторые предметы взрывоопасны или радиоактивны!",
            "hazard2_title": "АДАПТИВНЫЕ ВРАГИ",
            "hazard2_p": "Существуют различные враги, каждый со своим уникальным визуальным дизайном и моделью поведения. Игрокам приходится постоянно адаптировать свои стратегии, чтобы пережить эти встречи и сохранить активы компании.",
            "hazard3_title": "ПРОГРЕССИЯ И ЭКОНОМИКА",
            "hazard3_p": "Риск ведет к награде. На корабле есть магазин, где игроки могут потратить свои бонусы на предметы, оружие, расходные материалы, косметические костюмы и улучшения корабля. Магазин динамичный, инвентарь пополняется только после выполнения квоты.",
            "demo_inline_title": "Скоро выйдет демоверсия.",
            "demo_inline_sub": "Доступна ограниченное время. Подпишитесь, чтобы получить мгновенное уведомление о выходе демо.",
            "demo_inline_confirm": "✓ Вы в списке. Мы уведомим вас, когда выйдет демоверсия.",
            "footer_prop": "Дивизион потерянных грузов - Собственность Cortez Productions",
            "footer_links_title": "БАЗЫ ДАННЫХ",
            "footer_link_steam": "МАГАЗИН STEAM",
            "footer_link_press": "ПРЕСС-КИТ",
            "footer_link_discord": "СВЯЗЬ В DISCORD",
            "footer_link_twitter": "X (TWITTER)",
            "footer_warning": "ВНИМАНИЕ: Работа в Дивизионе потерянных грузов может привести к расчленению, радиационному отравлению или спонтанному перемещению во враждебные измерения. Компания не несет ответственности за гибель людей или потерю личных вещей.",
            "footer_copy": "&copy; 2026 Cortez Productions. Все права защищены. Не настоящее подразделение. Наверное.",
            "loader_1": "Инициализация ОС Потерянного Груза...",
            "loader_2": "Установка соединения с Галактической Сетью...",
            "loader_3": "Обход протоколов безопасности компании...",
            "loader_4": "Синхронизация ежедневных целей по квотам...",
            "loader_5": "Калибровка систем жизнеобеспечения (ВНИМАНИЕ: Субоптимально)",
            "loader_6": "Загрузка планетарных данных...",
            "loader_7": "Последовательность загрузки завершена. Добро пожаловать.",
            "form_establishing": "УСТАНОВКА СОЕДИНЕНИЯ...",
            "form_received": "ПЕРЕДАЧА ПОЛУЧЕНА.",
            "form_manifest": "Вы в списке, Командир. Мы сообщим, как только выйдет демоверсия.",
            "form_wishlist": "В желаемое в Steam",
            "form_retry": "ПОВТОРИТЬ ПЕРЕДАЧУ"
        },
        "de": {
            "meta_desc": "Trommeln Sie Ihre Crew für einen kooperativen Horror-Run mit hohen Einsätzen zusammen. Sie haben 5 Tage, um die Quote zu erfüllen.",
            "nav_back": "&lt; SYSTEM.ZURÜCK_ZUM_HAUPTMENÜ",
            "popup_header": "EINGEHENDE NACHRICHT",
            "popup_body": "Vergessen Sie nicht, Ihre Quote abzugeben. Fügen Sie das Spiel noch heute Ihrer Wunschliste hinzu.",
            "popup_btn_wishlist": "Auf die Wunschliste",
            "popup_btn_dismiss": "Schließen",
            "demo_popup_headline": "Zeitlich begrenzte Demo erscheint bald.",
            "demo_popup_sub": "Nur für begrenzte Zeit verfügbar. Melden Sie sich an, um eine sofortige Benachrichtigung zu erhalten, wenn eine Demo live geht.",
            "demo_placeholder": "Geben Sie Ihre E-Mail-Adresse ein",
            "demo_btn_notify": "BENACHRICHTIGEN",
            "hero_tagline": "Trommeln Sie Ihre Crew für einen kooperativen Horror-Run zusammen. <br> Sie haben 5 Tage, um die Quote zu erfüllen.",
            "hero_btn_wishlist": "AUF STEAM WÜNSCHEN",
            "trailer_title": "KOOP-MULTIPLAYER-EXTRAKTIONS-HORROR - GAMEPLAY-TRAILER",
            "about_title": "ÜBER DIESES SPIEL",
            "about_p1": "Space Delivery ist ein Koop-Survival-Horror-Spiel, bei dem es um Extraktion und das Sammeln von Gegenständen geht. Die Spieler müssen zusammenarbeiten, um eine wöchentliche Gewinnquote zu erfüllen, indem sie zu verschiedenen Planeten und Dimensionen reisen, um verlorene Fracht zu bergen.",
            "about_p2": "Ausgestattet mit einem Rucksack, in dem Gegenstände gestapelt werden müssen, steht das Team vor einer schwierigen Aufgabe: Jedes Reiseziel bietet einzigartige Herausforderungen, Feinde, Fallen und Rätsel.",
            "surveillance_title": "ÜBERWACHUNGSFEEDS",
            "features_title": "HAUPTMERKMALE",
            "feature1_title": "GESCHICHTE & PRÄMISSE",
            "feature1_p1": "Sie sind Teil der 'Lost Cargo Division', einem Team, das beauftragt ist, Sendungen zurückzuholen, die von Käufern im ganzen Universum verlegt wurden.",
            "feature1_p2": "Zu Beginn der Mission erhalten Sie eine finanzielle Quote, die innerhalb von 5 Tagen erfüllt werden muss. Wenn Sie erfolgreich sind, steigt die Quote für die nächste Woche, ebenso wie der allgemeine Schwierigkeitsgrad der Aufgabe.",
            "feature2_title": "PROXIMITY VOICE CHAT",
            "feature2_p1": "Kommunikation ist wichtig, aber gefährlich. Das Spiel verfügt über ein positionsbezogenes Voice-Chat-System, bei dem Feinde die Spieler sprechen hören können. Obwohl das Spiel Kämpfe beinhaltet, ist Schleichen oft die klügere Wahl.",
            "feature2_p2": "Waffen sind laut, und die Entitäten werden von Lärm angezogen, einschließlich des Voice-Chats Ihres Teams. Dies sorgt für hochspannende Momente, in denen Stille eine Überlebensmechanik ist.",
            "feature3_title": "UNENDLICHE WIEDERSPIELBARKEIT",
            "feature3_p1": "Kein Spiel gleicht dem anderen. Der Wiederspielwert wird durch eine tiefe prozedurale Generierung und dynamische Systeme angetrieben, die sicherstellen, dass die Spieler immer eine neue Erfahrung machen.",
            "feature3_p2": "Alle Szenarien werden prozedural mit verschiedenen Themen generiert. Jedes Level führt eine neue umweltbedingte Herausforderung ein: Einige haben einzigartige Fallen oder Löcher, andere wimmeln von Feinden, und einige haben aufgrund der Sauerstoffwerte strenge Zeitlimits.",
            "hazards_title": "OPERATIONELLE GEFAHREN",
            "hazard1_title": "PHYSIK-BASIERTES GAMEPLAY",
            "hazard1_p": "Das Inventarmanagement ist taktil und strategisch. Die Spieler müssen 'Verlorene Fracht' auf ihrem Rücken stapeln, und jeder Gegenstand hat eine aktive Physik. Bewegung ist wichtig – das Zusammenstoßen mit einem anderen Spieler kann seinen Stapel umwerfen. Einige Gegenstände sind explosiv oder radioaktiv!",
            "hazard2_title": "ADAPTIVE FEINDE",
            "hazard2_p": "Es gibt verschiedene Feinde, jeder mit einem einzigartigen visuellen Design und Verhaltensmuster. Die Spieler müssen ihre Strategien ständig anpassen, um diese Begegnungen zu überleben und die Vermögenswerte des Unternehmens zu sichern.",
            "hazard3_title": "FORTSCHRITT & WIRTSCHAFT",
            "hazard3_p": "Risiko führt zur Belohnung. Das Schiff verfügt über einen Laden, in dem die Spieler ihre Boni für Gegenstände, Waffen, Verbrauchsmaterialien, kosmetische Anzüge und Schiffs-Upgrades ausgeben können. Der Laden ist dynamisch, das Inventar wird erst aufgefüllt, nachdem die Quote erfüllt wurde.",
            "demo_inline_title": "Zeitlich begrenzte Demo erscheint bald.",
            "demo_inline_sub": "Nur für begrenzte Zeit verfügbar. Melden Sie sich an, um benachrichtigt zu werden, sobald eine Demo live geht.",
            "demo_inline_confirm": "✓ Sie stehen auf der Liste. Wir benachrichtigen Sie, wenn die Demo erscheint.",
            "footer_prop": "Lost Cargo Division - Eigentum von Cortez Productions",
            "footer_links_title": "DATENBANKEN",
            "footer_link_steam": "STEAM-SHOP",
            "footer_link_press": "PRESSEMAPPE",
            "footer_link_discord": "DISCORD COMM-LINK",
            "footer_link_twitter": "X (TWITTER)",
            "footer_warning": "WARNUNG: Eine Beschäftigung bei der Lost Cargo Division kann zu Zerstückelung, Strahlenvergiftung oder spontaner Verschiebung in feindliche Dimensionen führen. Das Unternehmen haftet nicht für den Verlust von Menschenleben oder persönlichen Gegenständen.",
            "footer_copy": "&copy; 2026 Cortez Productions. Alle Rechte vorbehalten. Keine echte Abteilung. Wahrscheinlich.",
            "loader_1": "Lost Cargo OS wird initialisiert...",
            "loader_2": "Verbindung zum Galaktischen Netzwerk wird hergestellt...",
            "loader_3": "Sicherheitsprotokolle des Unternehmens werden umgangen...",
            "loader_4": "Tägliche Quoten werden synchronisiert...",
            "loader_5": "Lebenserhaltungssysteme werden kalibriert (WARNUNG: Suboptimal)",
            "loader_6": "Planetare Daten werden geladen...",
            "loader_7": "Startsequenz abgeschlossen. Willkommen in der Division.",
            "form_establishing": "VERBINDUNG WIRD HERGESTELLT...",
            "form_received": "ÜBERTRAGUNG ERHALTEN.",
            "form_manifest": "Sie stehen auf der Liste, Commander. Wir benachrichtigen Sie, sobald die Demo da ist.",
            "form_wishlist": "Auf Steam wünschen",
            "form_retry": "ÜBERTRAGUNG WIEDERHOLEN"
        },
        "zh": {
            "meta_desc": "召集你的船员，进行一场高风险的合作恐怖逃生冒险。你有5天时间完成配额。",
            "nav_back": "&lt; 系统.返回主菜单",
            "popup_header": "收到新消息",
            "popup_body": "不要忘记提交你的配额。今天就加入愿望单吧。",
            "popup_btn_wishlist": "加入愿望单",
            "popup_btn_dismiss": "忽略",
            "demo_popup_headline": "限时试玩即将推出。",
            "demo_popup_sub": "仅限时提供。立即注册以便在试玩版上线时收到第一时间通知。",
            "demo_placeholder": "输入您的电子邮件地址",
            "demo_btn_notify": "通知我",
            "hero_tagline": "召集你的船员，进行一场高风险的合作恐怖冒险。<br> 你有5天时间完成配额。",
            "hero_btn_wishlist": "在STEAM上添加愿望单",
            "trailer_title": "多人合作撤离恐怖游戏 - 实机演示预告片",
            "about_title": "关于本游戏",
            "about_p1": "《Space Delivery》是一款主打物品收集和撤离的合作生存恐怖游戏。玩家必须通力合作，通过前往不同星球和维度回收丢失的货物来完成每周的利润配额。",
            "about_p2": "团队只配备了用于堆叠物品的背包，面临着艰巨的任务：每个目的地都有独特的挑战、敌人、陷阱和谜题。",
            "surveillance_title": "监控画面",
            "features_title": "主要特色",
            "feature1_title": "故事与背景",
            "feature1_p1": "你是“丢失货物专员”的一员，这支队伍的任务是找回全宇宙买家错放的货物。",
            "feature1_p2": "在任务开始时，你会得到一个必须在5天内完成的财务配额。如果你成功了，下周的配额会增加，同时工作的整体难度也会提升。",
            "feature2_title": "距离语音聊天",
            "feature2_p1": "沟通至关重要，但也充满危险。游戏采用位置语音聊天系统，敌人能听到玩家说话。虽然游戏包含战斗，但潜行通常是更明智的选择。",
            "feature2_p2": "武器声音很大，而各种实体会被噪音吸引，包括你们团队的语音聊天。这创造了极度紧张的时刻，沉默成为了一种生存机制。",
            "feature3_title": "无限重玩性",
            "feature3_p1": "没有两局比赛是完全相同的。深度程序化生成和动态系统带来了极高的重玩价值，确保玩家始终面临新鲜的体验。",
            "feature3_p2": "所有场景均可通过不同主题进行程序化生成。每一级都会引入新的环境挑战：有些有独特的陷阱或坑洞，有些成群结队的敌人，还有一些会因氧气水平而有严格的时间限制。",
            "hazards_title": "操作危险",
            "hazard1_title": "基于物理的玩法",
            "hazard1_p": "库存管理具有触感和策略性。玩家必须在背上堆叠“丢失货物”，每个物品都有活跃的物理引擎响应。移动要小心——撞到其他玩家可能会撞翻他们的货堆。有些物品具有爆炸性或放射性！",
            "hazard2_title": "自适应敌人",
            "hazard2_p": "游戏中有多种不同的敌人，每种都有独特的视觉设计和行为模式。玩家必须不断调整策略才能在这些遭遇战中幸存下来并保住公司的资产。",
            "hazard3_title": "进度与经济",
            "hazard3_p": "风险带来回报。飞船上设有商店，玩家可利用奖金购买物品、武器、消耗品、外观套装以及飞船升​​级。商店的商品是动态调整的，只有在完成配额后才会进货。",
            "demo_inline_title": "限时试玩即将推出。",
            "demo_inline_sub": "仅限时提供。立即注册以便在试玩版上线时收到第一时间通知。",
            "demo_inline_confirm": "✓ 您已在名单中。试玩版发布时我们将通知您。",
            "footer_prop": "丢失货物专员 - Cortez Productions 财产",
            "footer_links_title": "数据库",
            "footer_link_steam": "STEAM 商店",
            "footer_link_press": "新闻媒体包",
            "footer_link_discord": "DISCORD 交流频道",
            "footer_link_twitter": "X (TWITTER)",
            "footer_warning": "警告：受雇于丢失货物专员可能导致肢体断裂、辐射中毒或被随机传送到敌对维度。公司对生命或个人财物损失概不负责。",
            "footer_copy": "&copy; 2026 Cortez Productions。保留所有权利。不是一个真实的部门。大概吧。",
            "loader_1": "正在初始化丢失货物操作系统...",
            "loader_2": "正在连接银河网络...",
            "loader_3": "正在绕过公司安全协议...",
            "loader_4": "正在同步每日配额目标...",
            "loader_5": "正在校准生命支持系统（警告：未达到最佳状态）",
            "loader_6": "正在加载行星数据...",
            "loader_7": "启动程序完成。欢迎来到部门。",
            "form_establishing": "正在建立连接...",
            "form_received": "数据传输已接收。",
            "form_manifest": "指挥官，您已在名单上。试玩版上线时我们会通知您。",
            "form_wishlist": "在 Steam 上添加愿望单",
            "form_retry": "重试传输"
        },
        "fr": {
            "meta_desc": "Rassemblez votre équipage pour une mission coopérative d'horreur à haut risque. Vous avez 5 jours pour atteindre le quota.",
            "nav_back": "&lt; SYSTÈME.RETOUR_AU_MENU_PRINCIPAL",
            "popup_header": "MESSAGE ENTRANT",
            "popup_body": "N'oubliez pas de soumettre votre quota. Ajoutez-le à votre liste de souhaits aujourd'hui.",
            "popup_btn_wishlist": "Liste de souhaits",
            "popup_btn_dismiss": "Fermer",
            "demo_popup_headline": "Démo à durée limitée bientôt disponible.",
            "demo_popup_sub": "Disponible pour une durée limitée seulement. Inscrivez-vous pour recevoir une alerte instantanée dès le lancement d'une démo.",
            "demo_placeholder": "Entrez votre adresse e-mail",
            "demo_btn_notify": "M'INFORMER",
            "hero_tagline": "Rassemblez votre équipage pour une mission d'horreur coopérative à haut risque. <br> Vous avez 5 jours pour atteindre le quota.",
            "hero_btn_wishlist": "LISTE DE SOUHAITS SUR STEAM",
            "trailer_title": "SURVIE COOPÉRATIVE MULTIJOUEUR - BANDE-ANNONCE DE JOUABILITÉ",
            "about_title": "À PROPOS DE CE JEU",
            "about_p1": "Space Delivery est un jeu d'horreur de survie en coopération axé sur l'extraction et la collecte d'objets. Les joueurs doivent travailler ensemble pour atteindre un quota de profit hebdomadaire en voyageant vers différentes planètes et dimensions pour récupérer des cargaisons perdues.",
            "about_p2": "Armée d'un sac à dos où les objets doivent être empilés, l'équipe fait face à une tâche difficile : chaque destination présente des défis uniques, des ennemis, des pièges et des énigmes.",
            "surveillance_title": "FLUX DE SURVEILLANCE",
            "features_title": "CARACTÉRISTIQUES PRINCIPALES",
            "feature1_title": "HISTOIRE & PRÉMISSE",
            "feature1_p1": "Vous faites partie de la « Division des Cargaisons Perdues », une équipe chargée de récupérer les expéditions égarées par des acheteurs à travers l'univers.",
            "feature1_p2": "Au début de la mission, on vous attribue un quota financier qui doit être atteint dans les 5 jours. Si vous réussissez, le quota augmente pour la semaine d'après, tout comme la difficulté globale du travail.",
            "feature2_title": "CHAT VOCAL DE PROXIMITÉ",
            "feature2_p1": "La communication est vitale, mais dangereuse. Le jeu dispose d'un système de chat vocal positionnel où les ennemis peuvent entendre les joueurs parler. Bien que le jeu inclue des combats, la furtivité est souvent le choix le plus judicieux.",
            "feature2_p2": "Les armes sont bruyantes et les entités sont attirées par le bruit, y compris le chat vocal de votre équipe. Cela crée des moments de haute tension où le silence est un mécanisme de survie.",
            "feature3_title": "REJOUABILITÉ INFINIE",
            "feature3_p1": "Il n'y a pas deux parties identiques. Le facteur de relecture est motivé par une génération procédurale profonde et des systèmes dynamiques, garantissant que les joueurs font toujours face à une expérience nouvelle.",
            "feature3_p2": "Tous les scénarios sont générés de manière procédurale avec différents thèmes. Chaque niveau introduit un nouveau défi environnemental : certains ont des pièges ou des trous uniques, d'autres grouillent d'ennemis et d'autres ont des limites de temps strictes en raison des niveaux d'oxygène.",
            "hazards_title": "RISQUES OPÉRATIONNELS",
            "hazard1_title": "JOUABILITÉ BASÉE SUR LA PHYSIQUE",
            "hazard1_p": "La gestion de l'inventaire est tactile et stratégique. Les joueurs doivent empiler la « Cargaison Perdue » sur leur dos, et chaque objet possède une physique active. Les mouvements comptent : bousculer un autre joueur peut renverser sa pile. Certains objets sont explosifs ou radioactifs !",
            "hazard2_title": "ENNEMIS ADAPTATIFS",
            "hazard2_p": "Il existe des monstres distincts, chacun avec une conception visuelle unique et un modèle de comportement. Les joueurs doivent constamment adapter leurs stratégies pour survivre à ces rencontres et sécuriser les actifs de l'entreprise.",
            "hazard3_title": "PROGRESSION & ÉCONOMIE",
            "hazard3_p": "Le risque mène à la récompense. Le vaisseau dispose d'une boutique où les joueurs peuvent dépenser leurs bonus en objets, armes, consommables, combinaisons cosmétiques et améliorations de vaisseau. La boutique est dynamique, l'inventaire n'est réapprovisionné qu'après avoir atteint le quota.",
            "demo_inline_title": "Démo à durée limitée bientôt disponible.",
            "demo_inline_sub": "Disponible pour une durée limitée seulement. Inscrivez-vous pour obtenir une alerte lorsque la démo sera en ligne.",
            "demo_inline_confirm": "✓ Vous êtes sur la liste. Nous vous préviendrons de la sortie de la démo.",
            "footer_prop": "Division des Cargaisons Perdues - Propriété de Cortez Productions",
            "footer_links_title": "BANQUES DE DONNÉES",
            "footer_link_steam": "BOUTIQUE STEAM",
            "footer_link_press": "KIT DE PRESSE",
            "footer_link_discord": "COMM-LINK DISCORD",
            "footer_link_twitter": "X (TWITTER)",
            "footer_warning": "AVERTISSEMENT : L'emploi à la Division des Cargaisons Perdues peut entraîner un démembrement, un empoisonnement aux radiations ou un déplacement spontané dans des dimensions hostiles. La Société n'est pas responsable des pertes de vie ou d'objets personnels.",
            "footer_copy": "&copy; 2026 Cortez Productions. Tous droits réservés. Pas une vraie division. Probablement.",
            "loader_1": "Initialisation du système d'exploitation...",
            "loader_2": "Établissement de la connexion au Réseau Galactique...",
            "loader_3": "Contournement des protocoles de sécurité de l'entreprise...",
            "loader_4": "Synchronisation des objectifs de quota quotidiens...",
            "loader_5": "Étalonnage des systèmes de survie (AVERTISSEMENT : sous-optimal)",
            "loader_6": "Chargement des données planétaires...",
            "loader_7": "Séquence de démarrage terminée. Bienvenue dans la Division.",
            "form_establishing": "ÉTABLISSEMENT DE LA CONNEXION...",
            "form_received": "TRANSMISSION REÇUE.",
            "form_manifest": "Vous êtes sur le manifeste, Commandant. Nous vous préviendrons dès le lancement de la démo.",
            "form_wishlist": "Liste de souhaits sur Steam",
            "form_retry": "RÉESSAYER LA TRANSMISSION"
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

        // Custom update for document title (optional SEO/Tab header update, fallback handling)
        const titles = {
            'en': "Space Delivery - A Cortez Productions Game",
            'pt-br': "Space Delivery - Um Jogo de Cortez Productions",
            'ru': "Space Delivery - Игра от Cortez Productions",
            'de': "Space Delivery - Ein Cortez Productions Spiel",
            'zh': "Space Delivery - Cortez Productions 出品",
            'fr': "Space Delivery - Un Jeu Cortez Productions"
        };
        document.title = titles[lang] || titles['en'];
    }

    function initLanguage() {
        const savedLang = localStorage.getItem('sd_language');
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
            // Play click sound if exists
            const audioClick = document.getElementById('audio-click');
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (audioClick && !prefersReducedMotion) {
                audioClick.currentTime = 0;
                audioClick.play().catch(() => {});
            }
        });
    }

    langOptions.forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.stopPropagation();
            applyLanguage(opt.getAttribute('data-lang'));
            langDropdown.classList.remove('open');
            
            const audioClick = document.getElementById('audio-click');
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (audioClick && !prefersReducedMotion) {
                audioClick.currentTime = 0;
                audioClick.play().catch(() => {});
            }
        });
    });

    // Close dropdown on click outside
    document.addEventListener('click', () => {
        if (langDropdown) {
            langDropdown.classList.remove('open');
        }
    });

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
