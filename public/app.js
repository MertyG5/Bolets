(function () {
    const dom = {
        grid: document.getElementById("mushroom-grid"),
        count: document.getElementById("species-count"),
        searchInput: document.getElementById("search-input"),
        seasonFilter: document.getElementById("season-filter"),
        seasonFilterLabel: document.getElementById("season-filter-label"),
        culinaryFilter: document.getElementById("culinary-filter"),
        toxicityFilter: document.getElementById("toxicity-filter"),
        culinaryFilterLabel: document.getElementById("culinary-filter-label"),
        toxicityFilterLabel: document.getElementById("toxicity-filter-label"),
        applyFiltersButton: document.getElementById("apply-filters"),
        clearFiltersButton: document.getElementById("clear-filters"),
        mapModal: document.getElementById("map-modal"),
        mapContainer: document.getElementById("map"),
        openMapBtn: document.getElementById("open-map-btn"),
        openMapBtnHeader: document.getElementById("open-map-btn-header"),
        languageCaButton: document.getElementById("btn-ca"),
        languageEnButton: document.getElementById("btn-en"),
        heroEyebrow: document.getElementById("hero-eyebrow"),
        heroTitle: document.getElementById("hero-title"),
        heroDescription: document.getElementById("hero-description"),
        heroCatalog: document.getElementById("hero-cta-catalog"),
        heroScrollLink: document.getElementById("hero-scroll-link"),
        brandTitle: document.getElementById("brand-title"),
        brandSubtitle: document.getElementById("brand-subtitle"),
        navCatalog: document.getElementById("nav-catalog"),
        navGame: document.getElementById("nav-game"),
        searchLabel: document.getElementById("search-label"),
        sidebarTitle: document.getElementById("sidebar-title"),
        seasonTitle: document.getElementById("season-title"),
        seasonSpring: document.getElementById("season-spring"),
        seasonSummer: document.getElementById("season-summer"),
        seasonAutumn: document.getElementById("season-autumn"),
        seasonWinter: document.getElementById("season-winter"),
        culinaryTitle: document.getElementById("culinary-title"),
        toxicityTitle: document.getElementById("toxicity-title"),
        infoCardTitle: document.getElementById("info-card-title"),
        infoCardBody: document.getElementById("info-card-body"),
        catalogHeading: document.getElementById("catalog-heading"),
        closeMapBtn: document.getElementById("close-map-btn"),
        getLocationBtn: document.getElementById("get-location-btn"),
        catalogView: document.getElementById("catalog-view"),
        detailView: document.getElementById("detail-view"),
        detailBackButton: document.getElementById("detail-back-btn"),
        detailHeroImg: document.getElementById("detail-hero-img"),
        detailHeroSourceAvif: document.getElementById("detail-hero-source-avif"),
        detailHeroSourceWebp: document.getElementById("detail-hero-source-webp"),
        detailBreadcrumbName: document.getElementById("detail-breadcrumb-name"),
        detailMushroomName: document.getElementById("detail-mushroom-name"),
        detailMushroomScientific: document.getElementById("detail-mushroom-scientific"),
        detailCulinaryStars: document.getElementById("detail-culinary-stars"),
        detailCulinaryText: document.getElementById("detail-culinary-text"),
        detailToxicityStars: document.getElementById("detail-toxicity-stars"),
        detailToxicityText: document.getElementById("detail-toxicity-text"),
        detailSeasonText: document.getElementById("detail-season-text"),
        detailCharacteristics: document.getElementById("detail-characteristics-text"),
        detailHabitat: document.getElementById("detail-habitat-text"),
        detailExtra1: document.getElementById("detail-extra-1"),
        detailExtra2: document.getElementById("detail-extra-2"),
        detailExtra3: document.getElementById("detail-extra-3"),
        detailRecipeTitle: document.getElementById("detail-recipe-title"),
        detailRecipeDescription: document.getElementById("detail-recipe-description"),
        detailRecipeLink: document.getElementById("detail-recipe-link"),
        audioButton: document.getElementById("btn-audio"),
        audioButtonIcon: document.getElementById("btn-audio-icon"),
        audioButtonText: document.getElementById("btn-audio-text"),
        audioStatus: document.getElementById("audio-status"),
        ttsLiveRegion: document.getElementById("tts-live-region"),
        detailMap: document.getElementById("detail-map"),
        detailLocationName: document.getElementById("detail-location-name"),
        detailCharacteristicsTitle: document.getElementById("detail-characteristics-title"),
        detailHabitatTitle: document.getElementById("detail-habitat-title"),
        detailLocationTitle: document.getElementById("detail-location-title"),
        audioTitle: document.getElementById("audio-title"),
        summaryTitle: document.getElementById("summary-title"),
        detailCulinaryLabel: document.getElementById("detail-culinary-label"),
        detailToxicityLabel: document.getElementById("detail-toxicity-label"),
        detailSeasonTitle: document.getElementById("detail-season-title"),
        gameView: document.getElementById("game-view"),
        gameIntro: document.getElementById("game-intro"),
        gameQuestion: document.getElementById("game-question"),
        gameResults: document.getElementById("game-results"),
        gameIntroTitle: document.getElementById("game-intro-title"),
        gameIntroSubtitle: document.getElementById("game-intro-subtitle"),
        gameTotalQ: document.getElementById("game-total-q"),
        gameTimeLabel: document.getElementById("game-time-label"),
        gameStartBtn: document.getElementById("game-start-btn"),
        gameStartLabel: document.getElementById("game-start-label"),
        gameExitBtn: document.getElementById("game-exit-btn"),
        gameScoreDisplay: document.getElementById("game-score-display"),
        gameQuestionCounter: document.getElementById("game-question-counter"),
        gameProgressPct: document.getElementById("game-progress-pct"),
        gameProgressBar: document.getElementById("game-progress-bar"),
        gameProgressBarWrap: document.getElementById("game-progress-bar-wrap"),
        gameQuestionText: document.getElementById("game-question-text"),
        gameImageWrap: document.getElementById("game-image-wrap"),
        gameQuestionImg: document.getElementById("game-question-img"),
        gameOptions: document.getElementById("game-options"),
        gameFeedback: document.getElementById("game-feedback"),
        gameFeedbackIcon: document.getElementById("game-feedback-icon"),
        gameFeedbackTitle: document.getElementById("game-feedback-title"),
        gameFeedbackExplanation: document.getElementById("game-feedback-explanation"),
        gameNextBtn: document.getElementById("game-next-btn"),
        gameNextLabel: document.getElementById("game-next-label"),
        gameResultsIcon: document.getElementById("game-results-icon"),
        gameResultsTitle: document.getElementById("game-results-title"),
        gameResultsSubtitle: document.getElementById("game-results-subtitle"),
        gameScoreRing: document.getElementById("game-score-ring"),
        gameFinalScore: document.getElementById("game-final-score"),
        gameFinalPct: document.getElementById("game-final-pct"),
        gameCorrectCount: document.getElementById("game-correct-count"),
        gameWrongCount: document.getElementById("game-wrong-count"),
        gameCorrectLabel: document.getElementById("game-correct-label"),
        gameWrongLabel: document.getElementById("game-wrong-label"),
        gameReplayBtn: document.getElementById("game-replay-btn"),
        gameReplayLabel: document.getElementById("game-replay-label"),
        gameCatalogBtn: document.getElementById("game-catalog-btn"),
        gameCatalogLabel: document.getElementById("game-catalog-label"),
        detailExtraLabel1: document.getElementById("detail-extra-label-1"),
        detailExtraLabel2: document.getElementById("detail-extra-label-2"),
        detailExtraLabel3: document.getElementById("detail-extra-label-3"),
        recipeTitleLabel: document.getElementById("recipe-title-label"),
        recipeLinkLabel: document.getElementById("detail-recipe-link"),
        mapModalTitle: document.getElementById("map-modal-title"),
        mapModalSubtitle: document.getElementById("map-modal-subtitle"),
        mapFooterTitle: document.getElementById("map-footer-title"),
        mapFooterText: document.getElementById("map-footer-text"),
        aboutUsTitle: document.getElementById("about-us-title"),
        aboutUsSubtitle: document.getElementById("about-us-subtitle"),
        creatorName1: document.getElementById("creator-name-1"),
        creatorName2: document.getElementById("creator-name-2"),
        main: document.getElementById("main-content"),
        sidebar: document.querySelector("#main-content > aside"),
        landingHero: document.getElementById("landing-hero")
    };

    if (!dom.grid) return;

    const CARD_FALLBACK = "img/Agaricus_bernardii.jpg";
    const HERO_FALLBACK = "img/Agaricus_bernardii.jpg";
    const LANG_STORAGE_KEY = "bolets-lang";

    const translations = {
        ca: {
            pageTitle: "Bolets de Mallorca - Catàleg de bolets",
            heroEyebrow: "Guia micològica balear",
            heroTitle: "Descobreix els bolets de Mallorca",
            heroDescription: "Explora el fascinant món de la micologia balear. Aprèn a identificar, recol·legir i cuinar les espècies més emblemàtiques de la nostra illa.",
            heroCatalog: "Explorar catàleg",
            heroMap: "Veure mapa",
            heroScroll: "Desplaçar-se",
            brandSubtitle: "Guia micològica balear",
            navCatalog: "Catàleg",
            navMap: "Mapa de descobertes",
            navGame: "Joc",
            searchPlaceholder: "Cercar bolet...",
            searchLabel: "Cercar bolet per nom o descripció",
            sidebarTitle: "Filtres",
            seasonTitle: "Temporada",
            seasonSpring: "Primavera",
            seasonSummer: "Estiu",
            seasonAutumn: "Tardor",
            seasonWinter: "Hivern",
            seasonNone: "Cap temporada seleccionada",
            seasonSelected: (value) => `Temporada: ${value}`,
            culinaryTitle: "Valor culinari",
            culinaryNone: "Mínim 3 forquilles",
            culinaryAll: "Sense mínim de forquilles",
            toxicityTitle: "Nivell de toxicitat",
            toxicityNone: "Mostrar només segures",
            toxicityAll: "Sense límit de toxicitat",
            applyFilters: "Aplicar filtres",
            clearFilters: "Neteja filtres",
            infoCardTitle: "Sabies que...?",
            infoCardBody: "L'<b>Esclata-sang</b> és el bolet més preat en la gastronomia mallorquina, recollit principalment en pinars durant la tardor.",
            catalogHeading: "Espècies de temporada",
            speciesCount: (count) => `${count} espècies trobades`,
            backToCatalog: "Tornar al catàleg",
            detailCharacteristics: "Característiques",
            detailHabitat: "Hàbitat",
            detailLocation: "Ubicació geogràfica",
            audioTitle: "Escoltar audiodescripció",
            audioPlay: "Escolta",
            audioPause: "Pausa",
            audioResume: "Reprendre",
            audioStop: "Atura",
            audioLoading: "Carregant veus...",
            audioReady: "Preparat",
            audioPlaying: "Reproduint",
            audioPaused: "En pausa",
            summaryTitle: "Resum de l'espècie",
            culinaryLabel: "Valor culinari",
            toxicityLabel: "Nivell de toxicitat",
            seasonDetailTitle: "Millor temporada de recol·lecció",
            extraLabel1: "Canvi de color",
            extraLabel2: "Preferència de sòl",
            extraLabel3: "Preparació",
            recipeLabel: "Recepta recomanada",
            recipeVideo: (title) => `Vídeo: ${title}`,
            recipeVideoDefault: "Vídeo: preparació recomanada",
            recipeLink: "Veure a YouTube",
            mapTitle: "Mapa de descobertes",
            mapSubtitle: "Visualitza tots els bolets de Mallorca i la teva ubicació",
            mapLocationButton: "La meva ubicació",
            mapFooterTitle: "Sobre la geolocalització",
            mapFooterText: "El mapa utilitza la teva ubicació per mostrar zones properes on es poden trobar bolets. L'aplicació mai emmagatzema ni comparteix les teves dades de localització. Pots denegar el permís en qualsevol moment des de la configuració del navegador.",
            mushroomSeasonPrefix: "Època habitual de recol·lecció",
            mushroomTreePrefix: "Arbre associat principal",
            mushroomCulinaryHigh: "Bolet molt valorat gastronòmicament en receptes tradicionals i modernes.",
            mushroomCulinaryMid: "Bolet amb valor culinari moderat; convé una identificació correcta abans de cuinar-lo.",
            mushroomToxicHigh: "Cal extremar la precaució: possible toxicitat segons preparació i identificació.",
            mushroomToxicLow: "Generalment considerat segur quan està ben identificat.",
            mushroomLocationPrefix: "Aquesta espècie es pot trobar a",
            mushroomNoCoords: "No hi ha coordenades disponibles per aquest bolet.",
            mushroomNoRecipe: "No hi ha recepta associada per aquest bolet.",
            mushroomResponsible: "Consum responsable",
            recipeIngredientsPrefix: "Ingredients destacats",
            placeholderMapButton: "Veure mapa",
            aboutUsTitle: "Sobre nosaltres",
            aboutUsSubtitle: "Equip creador d'aquest projecte",
            creatorName1: "Joan Matemalas Rosselló",
            creatorName2: "Martí Garau Conde",
            gameIntroTitle: "Quiz de Bolets",
            gameIntroSubtitle: "Posa a prova els teus coneixements sobre les espècies de bolets de les Illes Balears.",
            gameTotalQ: (n) => `${n} preguntes`,
            gameTimeLabel: "Sense límit de temps",
            gameStartLabel: "Començar el quiz",
            gameQuestionCounter: (current, total) => `Pregunta ${current} de ${total}`,
            gameNextLabel: "Següent pregunta",
            gameLastLabel: "Veure resultats",
            gameFeedbackCorrect: "Correcte!",
            gameFeedbackWrong: "Incorrecte",
            gameScoreDisplay: (score, total) => `${score} / ${total}`,
            gameResultsTitlePerfect: "Perfecte! Ets un expert!",
            gameResultsTitleGreat: "Excel·lent! Molt bé!",
            gameResultsTitleGood: "Bé! Segueix aprenent!",
            gameResultsTitleFail: "Continua practicant!",
            gameResultsSubtitle: (score, total) => `Has encertat ${score} de ${total} preguntes.`,
            gameCorrectLabel: "Correctes",
            gameWrongLabel: "Incorrectes",
            gameReplayLabel: "Tornar a jugar",
            gameCatalogLabel: "Veure catàleg",
            gameLoadError: "No s'ha pogut carregar el quiz. Torna-ho a intentar."
        },
        en: {
            pageTitle: "Mushrooms of Mallorca - Mushroom catalog",
            heroEyebrow: "Balearic mycology guide",
            heroTitle: "Discover the mushrooms of Mallorca",
            heroDescription: "Explore the fascinating world of Balearic mycology. Learn to identify, forage, and cook the most emblematic species of our island.",
            heroCatalog: "Browse catalog",
            heroMap: "View map",
            heroScroll: "Scroll",
            brandSubtitle: "Balearic mycology guide",
            navCatalog: "Catalog",
            navMap: "Discovery map",
            navGame: "Game",
            searchPlaceholder: "Search mushroom...",
            searchLabel: "Search mushroom by name or description",
            sidebarTitle: "Filters",
            seasonTitle: "Season",
            seasonSpring: "Spring",
            seasonSummer: "Summer",
            seasonAutumn: "Autumn",
            seasonWinter: "Winter",
            seasonNone: "No season selected",
            seasonSelected: (value) => `Season: ${value}`,
            culinaryTitle: "Culinary value",
            culinaryNone: "Minimum 3 forks",
            culinaryAll: "No minimum forks",
            toxicityTitle: "Toxicity level",
            toxicityNone: "Show only safe ones",
            toxicityAll: "No toxicity limit",
            applyFilters: "Apply filters",
            clearFilters: "Clear filters",
            infoCardTitle: "Did you know...?",
            infoCardBody: "<b>Esclata-sang</b> is the most prized mushroom in Mallorcan cuisine, mostly harvested in pine woods during autumn.",
            catalogHeading: "Seasonal species",
            speciesCount: (count) => `${count} species found`,
            backToCatalog: "Back to catalog",
            detailCharacteristics: "Characteristics",
            detailHabitat: "Habitat",
            detailLocation: "Geographic location",
            audioTitle: "Listen to audio description",
            audioPlay: "Listen",
            audioPause: "Pause",
            audioResume: "Resume",
            audioStop: "Stop",
            audioLoading: "Loading voices...",
            audioReady: "Ready",
            audioPlaying: "Playing",
            audioPaused: "Paused",
            summaryTitle: "Species summary",
            culinaryLabel: "Culinary value",
            toxicityLabel: "Toxicity level",
            seasonDetailTitle: "Best harvesting season",
            extraLabel1: "Color change",
            extraLabel2: "Soil preference",
            extraLabel3: "Preparation",
            recipeLabel: "Recommended recipe",
            recipeVideo: (title) => `Video: ${title}`,
            recipeVideoDefault: "Video: recommended preparation",
            recipeLink: "Watch on YouTube",
            mapTitle: "Discovery map",
            mapSubtitle: "View all the mushrooms of Mallorca and your location",
            mapLocationButton: "My location",
            mapFooterTitle: "About geolocation",
            mapFooterText: "The map uses your location to show nearby areas where mushrooms can be found. The application never stores or shares your location data. You can deny permission at any time from your browser settings.",
            mushroomSeasonPrefix: "Typical harvesting season",
            mushroomTreePrefix: "Main associated tree",
            mushroomCulinaryHigh: "A highly valued mushroom in traditional and modern recipes.",
            mushroomCulinaryMid: "A mushroom with moderate culinary value; correct identification is important before cooking.",
            mushroomToxicHigh: "Use extreme caution: possible toxicity depending on preparation and identification.",
            mushroomToxicLow: "Generally considered safe when correctly identified.",
            mushroomLocationPrefix: "This species can be found in",
            mushroomNoCoords: "No coordinates available for this mushroom.",
            mushroomNoRecipe: "No recipe associated with this mushroom.",
            mushroomResponsible: "Responsible consumption",
            recipeIngredientsPrefix: "Highlighted ingredients",
            placeholderMapButton: "View map",
            aboutUsTitle: "About us",
            aboutUsSubtitle: "Team behind this project",
            creatorName1: "Joan Matemalas Rosselló",
            creatorName2: "Martí Garau Conde",
            gameIntroTitle: "Mushroom Quiz",
            gameIntroSubtitle: "Test your knowledge of the mushroom species of the Balearic Islands.",
            gameTotalQ: (n) => `${n} questions`,
            gameTimeLabel: "No time limit",
            gameStartLabel: "Start quiz",
            gameQuestionCounter: (current, total) => `Question ${current} of ${total}`,
            gameNextLabel: "Next question",
            gameLastLabel: "See results",
            gameFeedbackCorrect: "Correct!",
            gameFeedbackWrong: "Incorrect",
            gameScoreDisplay: (score, total) => `${score} / ${total}`,
            gameResultsTitlePerfect: "Perfect! You're an expert!",
            gameResultsTitleGreat: "Excellent! Well done!",
            gameResultsTitleGood: "Good! Keep learning!",
            gameResultsTitleFail: "Keep practising!",
            gameResultsSubtitle: (score, total) => `You got ${score} out of ${total} questions right.`,
            gameCorrectLabel: "Correct",
            gameWrongLabel: "Incorrect",
            gameReplayLabel: "Play again",
            gameCatalogLabel: "View catalog",
            gameLoadError: "Failed to load the quiz. Please try again."
        }
    };

    const state = {
        entries: [],
        filteredEntries: [],
        imageManifest: {},
        lang: localStorage.getItem(LANG_STORAGE_KEY) === "en" ? "en" : "ca",
        searchQuery: "",
        selectedSeason: null,
        minCulinary: null,
        maxToxicity: null,
        selectedEntry: null,
        speechText: "",
        utterance: null,
        speechState: "stopped",
        speechJobId: 0,
        voices: [],
        voicesReady: false,
        voiceLoadPromise: null,
        map: null,
        mapMarker: null,
        detailMap: null,
        detailMapMarker: null,
        allMarkers: [],
        gameQuestions: [],
        gameCurrentIndex: 0,
        gameScore: 0,
        gameAnswered: false
    };

    const escapeHtml = (value) => String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");

    const clampScore = (value) => {
        const parsed = Number(value);
        if (!Number.isFinite(parsed)) return 1;
        return Math.min(5, Math.max(0, Math.round(parsed)));
    };

    const getSpeechSynthesis = () => (typeof window !== "undefined" ? window.speechSynthesis || null : null);

    const normalizeVoiceLabel = (value) => String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

    const announceSpeechStatus = (message) => {
        if (dom.audioStatus) dom.audioStatus.textContent = message;
        if (dom.ttsLiveRegion) dom.ttsLiveRegion.textContent = message;
    };

    const selectBestVoice = (voices, lang) => {
        if (!Array.isArray(voices) || voices.length === 0) return null;

        const targetPrefixes = lang === "en"
            ? ["en-us", "en-gb", "en-au", "en-ca", "en"]
            : ["ca-es", "ca"];
        const languageHints = lang === "en"
            ? ["english"]
            : ["catalan", "catalana", "catala"];

        return voices
            .map((voice) => {
                const voiceLang = normalizeVoiceLabel(voice.lang);
                const voiceName = normalizeVoiceLabel(voice.name);
                let score = 0;

                if (targetPrefixes.some((prefix) => voiceLang.startsWith(prefix))) score += 100;
                if (voiceLang === lang) score += 90;
                if (voice.localService) score += 20;
                if (voice.default) score += 10;
                if (languageHints.some((hint) => voiceName.includes(hint))) score += 25;

                return { voice, score };
            })
            .sort((left, right) => right.score - left.score)[0]?.voice || null;
    };

    const ensureVoicesReady = () => {
        const synth = getSpeechSynthesis();
        if (!synth) return Promise.resolve([]);

        const initialVoices = synth.getVoices();
        if (initialVoices.length > 0) {
            state.voices = initialVoices;
            state.voicesReady = true;
            return Promise.resolve(initialVoices);
        }

        if (state.voiceLoadPromise) return state.voiceLoadPromise;

        state.voiceLoadPromise = new Promise((resolve) => {
            let settled = false;
            let timeoutId = 0;

            const finish = () => {
                if (settled) return;
                settled = true;
                if (typeof synth.removeEventListener === "function") {
                    synth.removeEventListener("voiceschanged", handleVoicesChanged);
                }
                if (synth.onvoiceschanged === handleVoicesChanged) {
                    synth.onvoiceschanged = null;
                }
                window.clearTimeout(timeoutId);
                const loadedVoices = synth.getVoices();
                state.voices = loadedVoices;
                state.voicesReady = loadedVoices.length > 0;
                resolve(loadedVoices);
            };

            const handleVoicesChanged = () => finish();

            if (typeof synth.addEventListener === "function") {
                synth.addEventListener("voiceschanged", handleVoicesChanged, { once: true });
            } else {
                synth.onvoiceschanged = handleVoicesChanged;
            }

            timeoutId = window.setTimeout(finish, 1500);
        }).finally(() => {
            state.voiceLoadPromise = null;
        });

        return state.voiceLoadPromise;
    };

    const t = (key, ...args) => {
        const value = translations[state.lang]?.[key] ?? translations.ca[key] ?? key;
        return typeof value === "function" ? value(...args) : value;
    };

    const getLocalizedItemValue = (item, key, fallback = "") => {
        const localized = item?.translations?.[state.lang]?.[key];
        if (localized !== undefined && localized !== null && localized !== "") return localized;
        return fallback;
    };

    const getLocalizedArrayValue = (item, key, fallback = []) => {
        const localized = item?.translations?.[state.lang]?.[key];
        if (Array.isArray(localized) && localized.length > 0) return localized;
        return fallback;
    };

    const getLocalizedSeasonLabel = (season) => {
        const seasonMap = {
            Primavera: t("seasonSpring"),
            Estiu: t("seasonSummer"),
            Tardor: t("seasonAutumn"),
            Hivern: t("seasonWinter")
        };
        return seasonMap[season] || season || "";
    };

    const normalizeImagePath = (src) => String(src || "").replace(/^\.\//, "");
    const isRemote = (src) => /^https?:\/\//i.test(String(src || ""));

    const getPropertyValue = (item, propName) => {
        const props = Array.isArray(item?.additionalProperty) ? item.additionalProperty : [];
        const found = props.find((prop) => String(prop?.name || "").toLowerCase() === String(propName).toLowerCase());
        return found?.value || "";
    };

    const getScores = (item) => ({
        culinary: clampScore(getPropertyValue(item, "Valor culinari (1-5)")),
        toxicity: clampScore(getPropertyValue(item, "Toxicitat (1-5)"))
    });

    const renderRatingIcons = (iconName, active, activeClass, mutedClass) => {
        let html = "";
        for (let i = 0; i < 5; i += 1) {
            const isActive = i < active;
            const fillStyle = isActive ? " style=\"font-variation-settings: 'FILL' 1\"" : "";
            html += `<span class=\"material-symbols-outlined text-sm ${isActive ? activeClass : mutedClass}\"${fillStyle}>${iconName}</span>`;
        }
        return html;
    };

    const buildSrcSet = (variants) => (Array.isArray(variants)
        ? variants.map((variant) => `${variant.src} ${variant.width}w`).join(", ")
        : "");

    const getImageMeta = (src) => {
        if (!src || isRemote(src)) return null;
        const key = normalizeImagePath(src);
        return state.imageManifest[key] || null;
    };

    const getLargestVariant = (variants) => {
        if (!Array.isArray(variants) || variants.length === 0) return "";
        return variants[variants.length - 1].src;
    };

    const buildCardImageMarkup = (src, alt, extraClass) => {
        const safeAlt = escapeHtml(alt);
        const safeSrc = escapeHtml(src || CARD_FALLBACK);
        const meta = getImageMeta(src);

        if (!meta) {
            return `<img class=\"w-full h-full object-cover ${extraClass}\" alt=\"${safeAlt}\" loading=\"lazy\" decoding=\"async\" fetchpriority=\"low\" width=\"640\" height=\"426\" src=\"${safeSrc}\" onerror=\"this.onerror=null;this.src='${CARD_FALLBACK}';this.srcset=''\"/>`;
        }

        const avifSrcSet = buildSrcSet(meta.variants?.avif);
        const webpSrcSet = buildSrcSet(meta.variants?.webp);
        const jpgSrcSet = buildSrcSet(meta.variants?.jpg);
        const fallback = getLargestVariant(meta.variants?.jpg) || safeSrc;
        const sizes = "(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw";

        return `
            <picture>
                ${avifSrcSet ? `<source type=\"image/avif\" srcset=\"${avifSrcSet}\" sizes=\"${sizes}\"/>` : ""}
                ${webpSrcSet ? `<source type=\"image/webp\" srcset=\"${webpSrcSet}\" sizes=\"${sizes}\"/>` : ""}
                <img class=\"w-full h-full object-cover ${extraClass}\" alt=\"${safeAlt}\" loading=\"lazy\" decoding=\"async\" fetchpriority=\"low\" width=\"${meta.width}\" height=\"${meta.height}\" src=\"${fallback}\" srcset=\"${jpgSrcSet}\" sizes=\"${sizes}\" onerror=\"this.onerror=null;this.src='${CARD_FALLBACK}';this.srcset=''\"/>
            </picture>
        `;
    };

    const setDetailHeroImage = (src, alt) => {
        if (!dom.detailHeroImg) return;

        const safeAlt = alt || "Imatge del bolet";
        const safeSrc = src || HERO_FALLBACK;
        const meta = getImageMeta(src);

        dom.detailHeroImg.alt = safeAlt;
        dom.detailHeroImg.decoding = "async";
        dom.detailHeroImg.loading = "eager";
        dom.detailHeroImg.fetchPriority = "high";

        if (!meta) {
            const localCandidate = !isRemote(safeSrc) ? safeSrc : HERO_FALLBACK;
            if (dom.detailHeroSourceAvif) dom.detailHeroSourceAvif.srcset = "";
            if (dom.detailHeroSourceWebp) dom.detailHeroSourceWebp.srcset = "";
            dom.detailHeroImg.srcset = "";
            dom.detailHeroImg.sizes = "100vw";
            dom.detailHeroImg.width = 1440;
            dom.detailHeroImg.height = 900;
            dom.detailHeroImg.src = localCandidate;
            return;
        }

        const avifSrcSet = buildSrcSet(meta.variants?.avif);
        const webpSrcSet = buildSrcSet(meta.variants?.webp);
        const jpgSrcSet = buildSrcSet(meta.variants?.jpg);
        const fallback = getLargestVariant(meta.variants?.jpg) || safeSrc;
        const sizes = "(min-width: 1024px) 960px, 100vw";

        if (dom.detailHeroSourceAvif) {
            dom.detailHeroSourceAvif.srcset = avifSrcSet;
            dom.detailHeroSourceAvif.sizes = sizes;
        }
        if (dom.detailHeroSourceWebp) {
            dom.detailHeroSourceWebp.srcset = webpSrcSet;
            dom.detailHeroSourceWebp.sizes = sizes;
        }

        dom.detailHeroImg.srcset = jpgSrcSet;
        dom.detailHeroImg.sizes = sizes;
        dom.detailHeroImg.width = meta.width;
        dom.detailHeroImg.height = meta.height;
        dom.detailHeroImg.src = fallback;
    };

    const setFilterButtonsUI = () => {
        // Season filter UI
        if (dom.seasonFilter) {
            const buttons = dom.seasonFilter.querySelectorAll("button[data-season]");
            buttons.forEach((button) => {
                const season = button.dataset.season;
                const active = state.selectedSeason === season;
                button.setAttribute("aria-pressed", active ? "true" : "false");

                if (active) {
                    button.className = "flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-lg text-sm font-medium transition-colors shadow-md";
                    const icon = button.querySelector(".material-symbols-outlined");
                    if (icon) icon.classList.add("text-white");
                } else {
                    button.className = "flex items-center gap-2 px-3 py-2 bg-background-light hover:bg-primary/10 rounded-lg text-sm font-medium transition-colors";
                    const icon = button.querySelector(".material-symbols-outlined");
                    if (icon) {
                        icon.classList.remove("text-white");
                        // Restaurar color original según temporada
                        if (season === "Primavera") icon.className = "material-symbols-outlined text-primary text-lg";
                        else if (season === "Estiu") icon.className = "material-symbols-outlined text-orange-400 text-lg";
                        else if (season === "Tardor") icon.className = "material-symbols-outlined text-[#618968] text-lg";
                        else if (season === "Hivern") icon.className = "material-symbols-outlined text-blue-400 text-lg";
                    }
                }
            });
        }

        if (dom.culinaryFilter) {
            const buttons = dom.culinaryFilter.querySelectorAll("button[data-score]");
            buttons.forEach((button) => {
                const score = Number(button.dataset.score || "1");
                const active = state.minCulinary !== null && score <= state.minCulinary;
                button.className = active
                    ? "p-1 text-[#111812] hover:text-primary"
                    : "p-1 text-[#dbe6dd] hover:text-primary";
            });
        }

        if (dom.toxicityFilter) {
            const buttons = dom.toxicityFilter.querySelectorAll("button[data-score]");
            buttons.forEach((button) => {
                const score = Number(button.dataset.score || "1");
                const active = state.maxToxicity !== null && score <= state.maxToxicity;
                const icon = button.querySelector(".material-symbols-outlined");
                button.className = active ? "p-1 text-red-500" : "p-1 text-[#dbe6dd]";
                if (icon) icon.style.fontVariationSettings = active ? "'FILL' 1" : "'FILL' 0";
            });
        }

        if (dom.culinaryFilterLabel) {
            dom.culinaryFilterLabel.textContent = state.minCulinary === null
                ? "Sense mínim de forquilles"
                : `Mínim ${state.minCulinary} forquilles`;
        }

        if (dom.toxicityFilterLabel) {
            dom.toxicityFilterLabel.textContent = state.maxToxicity === null
                ? "Sense límit de toxicitat"
                : `Toxicitat màxima ${state.maxToxicity}/5`;
        }

        if (dom.seasonFilterLabel) {
            dom.seasonFilterLabel.textContent = state.selectedSeason === null
                ? t("seasonNone")
                : t("seasonSelected", getLocalizedSeasonLabel(state.selectedSeason));
        }
    };

    const applyLanguage = () => {
        document.documentElement.lang = state.lang;
        document.title = t("pageTitle");

        if (dom.heroEyebrow) dom.heroEyebrow.textContent = t("heroEyebrow");
        if (dom.heroTitle) {
            const heroText = state.lang === "en"
                ? "Discover the <span class=\"text-primary\">mushrooms</span> of Mallorca"
                : "Descobreix els <span class=\"text-primary\">bolets</span> de Mallorca";
            dom.heroTitle.innerHTML = heroText;
        }
        if (dom.heroDescription) dom.heroDescription.textContent = t("heroDescription");
        if (dom.heroCatalog) dom.heroCatalog.textContent = t("heroCatalog");
        if (dom.openMapBtn) dom.openMapBtn.textContent = t("heroMap");
        if (dom.heroScrollLink) {
            const heroScrollLabel = dom.heroScrollLink.querySelector("span");
            if (heroScrollLabel) heroScrollLabel.textContent = t("heroScroll");
        }

        if (dom.brandTitle) dom.brandTitle.textContent = state.lang === "en" ? "Mushrooms of Mallorca" : "Bolets de Mallorca";
        if (dom.brandSubtitle) dom.brandSubtitle.textContent = t("brandSubtitle");
        if (dom.navCatalog) dom.navCatalog.textContent = t("navCatalog");
        if (dom.openMapBtnHeader) dom.openMapBtnHeader.textContent = t("navMap");
        if (dom.navGame) dom.navGame.textContent = t("navGame");
        if (dom.searchInput) dom.searchInput.placeholder = t("searchPlaceholder");
        if (dom.searchLabel) dom.searchLabel.textContent = t("searchLabel");

        if (dom.sidebarTitle) dom.sidebarTitle.innerHTML = `<span class="material-symbols-outlined text-primary">filter_list</span> ${t("sidebarTitle")}`;
        if (dom.seasonTitle) dom.seasonTitle.textContent = t("seasonTitle");
        if (dom.seasonSpring) dom.seasonSpring.lastChild.textContent = ` ${t("seasonSpring")}`;
        if (dom.seasonSummer) dom.seasonSummer.lastChild.textContent = ` ${t("seasonSummer")}`;
        if (dom.seasonAutumn) dom.seasonAutumn.lastChild.textContent = ` ${t("seasonAutumn")}`;
        if (dom.seasonWinter) dom.seasonWinter.lastChild.textContent = ` ${t("seasonWinter")}`;
        if (dom.culinaryTitle) dom.culinaryTitle.textContent = t("culinaryTitle");
        if (dom.toxicityTitle) dom.toxicityTitle.textContent = t("toxicityTitle");
        if (dom.applyFiltersButton) dom.applyFiltersButton.textContent = t("applyFilters");
        if (dom.clearFiltersButton) dom.clearFiltersButton.textContent = t("clearFilters");
        if (dom.infoCardTitle) dom.infoCardTitle.textContent = t("infoCardTitle");
        if (dom.infoCardBody) dom.infoCardBody.innerHTML = t("infoCardBody");
        if (dom.catalogHeading) dom.catalogHeading.textContent = t("catalogHeading");

        if (dom.detailBackButton) dom.detailBackButton.innerHTML = `<span class="material-symbols-outlined text-sm">arrow_back</span> ${t("backToCatalog")}`;
        if (dom.detailCharacteristicsTitle) dom.detailCharacteristicsTitle.textContent = t("detailCharacteristics");
        if (dom.detailHabitatTitle) dom.detailHabitatTitle.textContent = t("detailHabitat");
        if (dom.detailLocationTitle) dom.detailLocationTitle.textContent = t("detailLocation");
        if (dom.audioTitle) dom.audioTitle.textContent = t("audioTitle");
        if (dom.audioStatus && state.speechState === "stopped") dom.audioStatus.textContent = t("audioReady");
        if (dom.ttsLiveRegion && state.speechState === "stopped") dom.ttsLiveRegion.textContent = t("audioReady");
        if (dom.summaryTitle) dom.summaryTitle.innerHTML = `<span class="material-symbols-outlined text-primary">analytics</span> ${t("summaryTitle")}`;
        if (dom.detailCulinaryLabel) dom.detailCulinaryLabel.textContent = t("culinaryLabel");
        if (dom.detailToxicityLabel) dom.detailToxicityLabel.textContent = t("toxicityLabel");
        if (dom.detailSeasonTitle) dom.detailSeasonTitle.innerHTML = `<span class="material-symbols-outlined text-primary">calendar_month</span> ${t("seasonDetailTitle")}`;
        if (dom.detailExtraLabel1) dom.detailExtraLabel1.textContent = t("extraLabel1");
        if (dom.detailExtraLabel2) dom.detailExtraLabel2.textContent = t("extraLabel2");
        if (dom.detailExtraLabel3) dom.detailExtraLabel3.textContent = t("extraLabel3");
        if (dom.recipeTitleLabel) dom.recipeTitleLabel.textContent = t("recipeLabel");
        if (dom.recipeLinkLabel) {
            const recipeLinkText = dom.recipeLinkLabel.querySelectorAll("span")[1];
            if (recipeLinkText) recipeLinkText.textContent = t("recipeLink");
        }

        if (dom.mapModalTitle) dom.mapModalTitle.innerHTML = `<span class="material-symbols-outlined text-primary text-3xl">map</span> ${t("mapTitle")}`;
        if (dom.mapModalSubtitle) dom.mapModalSubtitle.textContent = t("mapSubtitle");
        if (dom.getLocationBtn) {
            const locationButtonText = dom.getLocationBtn.querySelectorAll("span")[1];
            if (locationButtonText) locationButtonText.textContent = t("mapLocationButton");
        }
        if (dom.mapFooterTitle) dom.mapFooterTitle.textContent = t("mapFooterTitle");
        if (dom.mapFooterText) dom.mapFooterText.textContent = t("mapFooterText");
        if (dom.aboutUsTitle) dom.aboutUsTitle.textContent = t("aboutUsTitle");
        if (dom.aboutUsSubtitle) dom.aboutUsSubtitle.textContent = t("aboutUsSubtitle");
        if (dom.creatorName1) dom.creatorName1.textContent = t("creatorName1");
        if (dom.creatorName2) dom.creatorName2.textContent = t("creatorName2");

        // Game intro text (only when on intro screen)
        if (dom.gameIntroTitle) dom.gameIntroTitle.textContent = t("gameIntroTitle");
        if (dom.gameIntroSubtitle) dom.gameIntroSubtitle.textContent = t("gameIntroSubtitle");
        if (dom.gameTotalQ) dom.gameTotalQ.textContent = t("gameTotalQ", state.gameQuestions.length || 16);
        if (dom.gameTimeLabel) dom.gameTimeLabel.textContent = t("gameTimeLabel");
        if (dom.gameStartLabel) dom.gameStartLabel.textContent = t("gameStartLabel");
        if (dom.gameCorrectLabel) dom.gameCorrectLabel.textContent = t("gameCorrectLabel");
        if (dom.gameWrongLabel) dom.gameWrongLabel.textContent = t("gameWrongLabel");
        if (dom.gameReplayLabel) dom.gameReplayLabel.textContent = t("gameReplayLabel");
        if (dom.gameCatalogLabel) dom.gameCatalogLabel.textContent = t("gameCatalogLabel");

        if (dom.languageCaButton && dom.languageEnButton) {
            const activeButtonClass = "px-3 py-1 rounded-full text-xs font-bold transition-all bg-primary text-white shadow-sm";
            const inactiveButtonClass = "px-3 py-1 rounded-full text-xs font-bold transition-all text-[#618968]";
            dom.languageCaButton.className = state.lang === "ca" ? activeButtonClass : inactiveButtonClass;
            dom.languageEnButton.className = state.lang === "en" ? activeButtonClass : inactiveButtonClass;
            dom.languageCaButton.setAttribute("aria-pressed", state.lang === "ca" ? "true" : "false");
            dom.languageEnButton.setAttribute("aria-pressed", state.lang === "en" ? "true" : "false");
        }
    };

    const setLanguage = (lang) => {
        const nextLang = lang === "en" ? "en" : "ca";
        if (state.lang === nextLang) return;
        state.lang = nextLang;
        localStorage.setItem(LANG_STORAGE_KEY, nextLang);
        applyLanguage();
        setFilterButtonsUI();

        const currentPos = Number(new URLSearchParams(window.location.search).get("pos"));
        if (dom.detailView && !dom.detailView.classList.contains("hidden") && currentPos) {
            const entry = state.entries.find((current) => Number(current?.position) === currentPos);
            if (entry) showDetailView(entry, false);
            return;
        }

        applyFilters();
    };

    const renderCard = (entry) => {
        const item = entry?.item || {};
        const position = Number(entry?.position) || 1;
        const commonName = getItemLocalizedName(item);
        const scientificName = item.name || "Taxon desconegut";
        const image = item.image || CARD_FALLBACK;

        const scores = getScores(item);
        const isToxic = scores.toxicity >= 3;
        const isLethal = scores.toxicity >= 5;

        const cardBorder = isToxic ? "border border-red-200 ring-1 ring-red-100" : "border border-primary/5";
        const imageStyle = isToxic ? "grayscale" : "";
        const nameClass = isToxic ? "text-lg font-bold text-red-700" : "text-lg font-bold text-[#111812] group-hover:text-primary transition-colors";
        const badge = isToxic
            ? `<span class=\"absolute top-3 right-3 ${isLethal ? "bg-red-600" : "bg-red-500"} px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white shadow-sm\">${isLethal ? "Molt tòxic" : "Tòxic"}</span>`
            : "<span class=\"absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm\">Comestible</span>";

        const imageMarkup = buildCardImageMarkup(image, commonName, `group-hover:scale-105 transition-transform duration-500 ${imageStyle}`);

        return `
            <button type=\"button\" data-pos=\"${position}\" class=\"open-detail text-left block w-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow ${cardBorder} group\">
                <div class=\"h-48 overflow-hidden relative\">
                    ${imageMarkup}
                    ${isToxic ? "<div class=\"absolute inset-0 bg-red-900/10 group-hover:bg-transparent transition-colors\"></div>" : ""}
                    ${badge}
                </div>
                <div class=\"p-5\">
                    <h4 class=\"${nameClass}\">${escapeHtml(commonName)}</h4>
                    <p class=\"text-sm italic text-[#618968] mb-4\">${escapeHtml(scientificName)}</p>
                    <div class=\"flex items-center justify-between pt-4 border-t border-background-light\">
                        <div class=\"flex items-center gap-1\">
                            ${renderRatingIcons("restaurant", scores.culinary, "text-primary", "text-[#dbe6dd]")}
                        </div>
                        <div class=\"flex items-center gap-1\">
                            ${renderRatingIcons("skull", scores.toxicity, isToxic ? "text-red-600" : "text-[#dbe6dd]", "text-[#dbe6dd]")}
                        </div>
                    </div>
                </div>
            </button>
        `;
    };

    const applyFilters = () => {
        state.filteredEntries = state.entries.filter((entry) => {
            const item = entry?.item || {};
            const scores = getScores(item);

            // Search filter
            let searchOk = true;
            if (state.searchQuery.trim() !== "") {
                const query = state.searchQuery.toLowerCase();
                const scientificName = (item.name || "").toLowerCase();
                const commonNames = getLocalizedArrayValue(item, "alternateName", Array.isArray(item.alternateName) ? item.alternateName : [])
                    .join(" ")
                    .toLowerCase();
                const description = getItemLocalizedDescription(item).toLowerCase();

                searchOk = scientificName.includes(query) ||
                    commonNames.includes(query) ||
                    description.includes(query);
            }

            // Season filter
            const season = getPropertyValue(item, "Època") || "";
            const seasonOk = state.selectedSeason === null ||
                season.toLowerCase().includes(state.selectedSeason.toLowerCase());

            // Culinary filter
            const culinaryOk = state.minCulinary === null || scores.culinary >= state.minCulinary;

            // Toxicity filter
            const toxicityOk = state.maxToxicity === null || scores.toxicity >= state.maxToxicity;

            return searchOk && seasonOk && culinaryOk && toxicityOk;
        });

        if (dom.count) dom.count.textContent = t("speciesCount", state.filteredEntries.length);
        dom.grid.innerHTML = state.filteredEntries.map((entry) => renderCard(entry)).join("");
    };

    const setAudioButtonState = (mode) => {
        if (!dom.audioButton || !dom.audioButtonIcon || !dom.audioButtonText) return;

        if (mode === "loading") {
            dom.audioButton.setAttribute("aria-pressed", "false");
            dom.audioButtonIcon.textContent = "progress_activity";
            dom.audioButtonText.textContent = t("audioLoading");
            announceSpeechStatus(t("audioLoading"));
            return;
        }

        if (mode === "playing") {
            dom.audioButton.setAttribute("aria-pressed", "true");
            dom.audioButtonIcon.textContent = "stop";
            dom.audioButtonText.textContent = t("audioStop");
            announceSpeechStatus(t("audioPlaying"));
            return;
        }

        if (mode === "paused") {
            dom.audioButton.setAttribute("aria-pressed", "true");
            dom.audioButtonIcon.textContent = "play_arrow";
            dom.audioButtonText.textContent = t("audioResume");
            announceSpeechStatus(t("audioPaused"));
            return;
        }

        dom.audioButton.setAttribute("aria-pressed", "false");
        dom.audioButtonIcon.textContent = "play_arrow";
        dom.audioButtonText.textContent = t("audioPlay");
        announceSpeechStatus(t("audioReady"));
    };

    const stopSpeech = () => {
        const synth = getSpeechSynthesis();
        if (synth) synth.cancel();
        state.speechJobId += 1;
        state.utterance = null;
        state.speechState = "stopped";
        setAudioButtonState("stopped");
    };

    const pauseSpeech = () => {
        const synth = getSpeechSynthesis();
        if (!synth || !synth.speaking) return;

        synth.pause();
        state.speechState = "paused";
        setAudioButtonState("paused");
    };

    const resumeSpeech = () => {
        const synth = getSpeechSynthesis();
        if (!synth || !synth.paused) return;

        synth.resume();
        state.speechState = "playing";
        setAudioButtonState("playing");
    };

    const playSpeech = async () => {
        const synth = getSpeechSynthesis();
        if (!synth || !state.speechText) return;

        const speechJobId = state.speechJobId + 1;
        state.speechJobId = speechJobId;
        state.speechState = "loading";
        setAudioButtonState("loading");

        const voices = await ensureVoicesReady();
        if (state.speechJobId !== speechJobId) return;

        const selectedVoice = selectBestVoice(voices, state.lang);

        synth.cancel();

        const utterance = new SpeechSynthesisUtterance(state.speechText);
        const targetLang = state.lang === "en" ? "en-GB" : "ca-ES";

        utterance.lang = selectedVoice?.lang || targetLang;
        utterance.voice = selectedVoice || null;
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;

        utterance.onstart = () => {
            if (state.utterance !== utterance) return;
            state.speechState = "playing";
            setAudioButtonState("playing");
        };

        utterance.onend = () => {
            if (state.utterance !== utterance) return;
            state.utterance = null;
            state.speechState = "stopped";
            setAudioButtonState("stopped");
        };

        utterance.onerror = () => {
            if (state.utterance !== utterance) return;
            state.utterance = null;
            state.speechState = "stopped";
            setAudioButtonState("stopped");
        };

        state.utterance = utterance;

        try {
            synth.speak(utterance);
        } catch (error) {
            state.utterance = null;
            state.speechState = "stopped";
            setAudioButtonState("stopped");
            console.error("Speech synthesis error:", error);
        }
    };

    const toggleSpeech = async () => {
        const synth = getSpeechSynthesis();
        if (!synth || !state.speechText) return;

        if (state.speechState === "playing" && synth.speaking) {
            stopSpeech();
            return;
        }

        if (state.speechState === "paused" && synth.paused) {
            resumeSpeech();
            return;
        }

        if (state.speechState === "loading") {
            stopSpeech();
            return;
        }

        await playSpeech();
    };

    const renderStars = (node, active, activeClass, mutedClass) => {
        if (!node) return;
        let html = "";
        for (let i = 0; i < 5; i += 1) {
            const isActive = i < active;
            const fill = isActive ? " style=\"font-variation-settings: 'FILL' 1\"" : "";
            html += `<span class=\"material-symbols-outlined ${isActive ? activeClass : mutedClass} text-[20px]\"${fill}>star</span>`;
        }
        node.innerHTML = html;
    };

    const getItemLocalizedName = (item) => {
        const fallbackCommonName = Array.isArray(item?.alternateName) && item.alternateName.length > 0
            ? item.alternateName[0]
            : item?.name || "Bolet";

        return getLocalizedItemValue(item, "displayName", fallbackCommonName);
    };

    const getItemLocalizedDescription = (item) => getLocalizedItemValue(item, "description", item?.description || "Sense descripció.");

    const getItemLocalizedTree = (item) => getLocalizedItemValue(item, "tree", getPropertyValue(item, "Arbre associat") || "No especificat");

    const getItemLocalizedSeason = (item) => getLocalizedItemValue(item, "season", getPropertyValue(item, "Època") || "No especificada");

    const getItemLocalizedLocation = (item) => getLocalizedItemValue(item, "locationName", item?.contentLocation?.name || "Ubicació no especificada");

    const getItemLocalizedRecipe = (item) => {
        const localizedRecipe = item?.translations?.[state.lang]?.recipe;
        if (localizedRecipe && typeof localizedRecipe === "object") return localizedRecipe;
        return item?.subjectOf && item.subjectOf["@type"] === "Recipe" ? item.subjectOf : null;
    };

    const showCatalogView = (scrollToCatalog = true) => {
        stopSpeech();
        dom.catalogView?.classList.remove("hidden");
        dom.detailView?.classList.add("hidden");
        dom.sidebar?.classList.remove("hidden");
        dom.landingHero?.classList.remove("hidden");
        dom.gameView?.classList.add("hidden");
        if (scrollToCatalog) {
            dom.main?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const showDetailView = (entry, pushHistory) => {
        if (!entry?.item) return;

        state.selectedEntry = entry;
        const item = entry.item;

        const commonName = getItemLocalizedName(item);
        const scientific = item.name || "Taxon";
        const description = getItemLocalizedDescription(item);
        const image = item.image || HERO_FALLBACK;
        const tree = getItemLocalizedTree(item);
        const season = getItemLocalizedSeason(item);
        const culinaryScore = clampScore(getPropertyValue(item, "Valor culinari (1-5)"));
        const toxicityScore = clampScore(getPropertyValue(item, "Toxicitat (1-5)"));
        const isToxic = toxicityScore >= 3;

        document.title = state.lang === "en"
            ? `Mushrooms of Mallorca - ${commonName}`
            : `Bolets de Mallorca - ${commonName}`;

        if (dom.detailBreadcrumbName) dom.detailBreadcrumbName.textContent = commonName;
        if (dom.detailMushroomName) dom.detailMushroomName.textContent = commonName;
        if (dom.detailMushroomScientific) dom.detailMushroomScientific.textContent = scientific;
        setDetailHeroImage(image, commonName);

        if (dom.detailCharacteristics) dom.detailCharacteristics.textContent = description;
        if (dom.detailHabitat) dom.detailHabitat.textContent = `${t("mushroomTreePrefix")}: ${tree}.`;
        if (dom.detailSeasonText) dom.detailSeasonText.textContent = `${t("mushroomSeasonPrefix")}: ${season}.`;

        if (dom.detailCulinaryText) {
            dom.detailCulinaryText.textContent = culinaryScore >= 4
                ? t("mushroomCulinaryHigh")
                : t("mushroomCulinaryMid");
        }

        if (dom.detailToxicityText) {
            dom.detailToxicityText.textContent = isToxic
                ? t("mushroomToxicHigh")
                : t("mushroomToxicLow");
        }

        renderStars(dom.detailCulinaryStars, culinaryScore, "text-primary", "text-[#dbe6dd]");
        renderStars(dom.detailToxicityStars, toxicityScore, isToxic ? "text-red-500" : "text-red-200", "text-red-200");

        if (dom.detailExtra1) dom.detailExtra1.textContent = season;
        if (dom.detailExtra2) dom.detailExtra2.textContent = tree;

        const recipe = getItemLocalizedRecipe(item);
        const ingredients = Array.isArray(recipe?.recipeIngredient) ? recipe.recipeIngredient : [];
        const videoUrl = recipe?.video?.contentUrl || "#";

        if (dom.detailExtra3) {
            dom.detailExtra3.textContent = ingredients.length > 0
                ? ingredients.slice(0, 3).join(" + ")
                : t("mushroomResponsible");
        }

        if (dom.detailRecipeTitle) {
            dom.detailRecipeTitle.textContent = recipe?.name
                ? t("recipeVideo", recipe.name)
                : t("recipeVideoDefault");
        }

        if (dom.detailRecipeDescription) {
            dom.detailRecipeDescription.textContent = ingredients.length > 0
                ? `${t("recipeIngredientsPrefix")}: ${ingredients.join(", ")}.`
                : t("mushroomNoRecipe");
        }

        if (dom.detailRecipeLink) {
            dom.detailRecipeLink.href = videoUrl;
            dom.detailRecipeLink.classList.toggle("pointer-events-none", videoUrl === "#");
            dom.detailRecipeLink.classList.toggle("opacity-50", videoUrl === "#");
        }

        // Mostrar ubicación geográfica
        const contentLocation = item.contentLocation;
        const locationName = getItemLocalizedLocation(item);
        const latitude = contentLocation?.geo?.latitude;
        const longitude = contentLocation?.geo?.longitude;

        if (dom.detailLocationName) {
            dom.detailLocationName.textContent = `${t("mushroomLocationPrefix")} ${locationName}.`;
        }

        // Inicializar mapa de detalle si hay coordenadas
        if (latitude && longitude) {
            // Esperar un momento para que el DOM esté visible antes de inicializar el mapa
            setTimeout(() => {
                initDetailMap(latitude, longitude, locationName, commonName);
            }, 100);
        } else if (dom.detailMap) {
            dom.detailMap.innerHTML = `<p class="text-sm text-[#618968] p-4">${t("mushroomNoCoords")}</p>`;
        }

        state.speechText = `${item.name || commonName}. ${description}`.trim();
        stopSpeech();

        dom.landingHero?.classList.add("hidden");
        dom.sidebar?.classList.add("hidden");
        dom.catalogView?.classList.add("hidden");
        dom.detailView?.classList.remove("hidden");
        dom.main?.scrollIntoView({ behavior: "smooth", block: "start" });

        if (pushHistory) {
            const url = new URL(window.location.href);
            url.searchParams.set("pos", String(entry.position));
            window.history.pushState({ pos: entry.position }, "", url);
        }
    };

    const openDetailByPosition = (position, pushHistory) => {
        const entry = state.entries.find((current) => Number(current?.position) === Number(position));
        if (entry) {
            showDetailView(entry, pushHistory);
            return;
        }
        showCatalogView();
    };

    dom.grid.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        const button = target.closest(".open-detail[data-pos]");
        if (!button) return;

        const pos = Number(button.getAttribute("data-pos") || "1");
        openDetailByPosition(pos, true);
    });

    dom.detailBackButton?.addEventListener("click", () => {
        const url = new URL(window.location.href);
        url.searchParams.delete("pos");
        window.history.pushState({}, "", url);
        showCatalogView();
    });

    dom.audioButton?.addEventListener("click", toggleSpeech);

    dom.detailHeroImg?.addEventListener("error", () => {
        if (!dom.detailHeroImg) return;
        dom.detailHeroImg.srcset = "";
        dom.detailHeroImg.src = HERO_FALLBACK;
        if (dom.detailHeroSourceAvif) dom.detailHeroSourceAvif.srcset = "";
        if (dom.detailHeroSourceWebp) dom.detailHeroSourceWebp.srcset = "";
    });

    dom.searchInput?.addEventListener("input", (event) => {
        state.searchQuery = event.target.value;
        applyFilters();
    });

    dom.languageCaButton?.addEventListener("click", () => setLanguage("ca"));
    dom.languageEnButton?.addEventListener("click", () => setLanguage("en"));

    dom.seasonFilter?.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        const button = target.closest("button[data-season]");
        if (!button) return;
        const selectedSeason = button.dataset.season;
        state.selectedSeason = state.selectedSeason === selectedSeason ? null : selectedSeason;
        setFilterButtonsUI();
        applyFilters();
    });

    dom.culinaryFilter?.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        const button = target.closest("button[data-score]");
        if (!button) return;
        const selectedScore = clampScore(button.dataset.score);
        state.minCulinary = state.minCulinary === selectedScore ? null : selectedScore;
        setFilterButtonsUI();
        applyFilters();
    });

    dom.toxicityFilter?.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        const button = target.closest("button[data-score]");
        if (!button) return;
        const selectedScore = clampScore(button.dataset.score);
        state.maxToxicity = state.maxToxicity === selectedScore ? null : selectedScore;
        setFilterButtonsUI();
        applyFilters();
    });

    dom.applyFiltersButton?.addEventListener("click", applyFilters);

    dom.clearFiltersButton?.addEventListener("click", () => {
        state.searchQuery = "";
        if (dom.searchInput) dom.searchInput.value = "";
        state.selectedSeason = null;
        state.minCulinary = null;
        state.maxToxicity = null;
        setFilterButtonsUI();
        applyFilters();
    });

    window.addEventListener("popstate", () => {
        const params = new URLSearchParams(window.location.search);
        const pos = Number(params.get("pos"));
        if (pos) {
            openDetailByPosition(pos, false);
            return;
        }
        showCatalogView();
    });

    window.addEventListener("beforeunload", stopSpeech);

    window.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        if (dom.mapModal && !dom.mapModal.classList.contains("hidden")) {
            closeMapModal();
            return;
        }
        stopSpeech();
    });

    const fetchJson = (url, fallbackValue) => fetch(url)
        .then((response) => (response.ok ? response.json() : fallbackValue))
        .catch(() => fallbackValue);

    Promise.all([
        fetchJson("./bolets.json", null),
        fetchJson("./img/image-manifest.json", {})
    ])
        .then(([boletsData, imageManifest]) => {
            if (!boletsData) throw new Error("No s'ha pogut carregar bolets.json");

            state.imageManifest = imageManifest && typeof imageManifest === "object" ? imageManifest : {};

            const graph = Array.isArray(boletsData?.["@graph"]) ? boletsData["@graph"] : [];
            const list = graph.find((node) => node?.["@type"] === "ItemList");
            const elements = Array.isArray(list?.itemListElement) ? list.itemListElement : [];

            state.entries = elements;
            applyLanguage();
            setFilterButtonsUI();
            applyFilters();

            const pos = Number(new URLSearchParams(window.location.search).get("pos"));
            if (pos) {
                openDetailByPosition(pos, false);
                return;
            }
            window.scrollTo(0, 0);
            showCatalogView(false);
        })
        .catch(() => {
            dom.grid.innerHTML = "";
            if (dom.count) dom.count.textContent = "0 espècies trobades";
        });

    // ============================================
    // MAP FUNCTIONALITY (Geolocation API + Leaflet)
    // ============================================

    const initMap = () => {
        if (!dom.mapContainer || typeof L === "undefined") return;

        // Inicializar mapa centrado en Mallorca
        state.map = L.map(dom.mapContainer).setView([39.6953, 3.0176], 10);

        // Capa base OpenStreetMap
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(state.map);

        // Cargar y mostrar todos los bolets
        loadAllMushroomsOnMap();
    };

    const initDetailMap = (latitude, longitude, locationName, mushroomName) => {
        if (!dom.detailMap || typeof L === "undefined") return;
        if (!latitude || !longitude) return;

        // Destruir mapa anterior si existe
        if (state.detailMap) {
            state.detailMap.remove();
            state.detailMap = null;
            state.detailMapMarker = null;
        }

        // Crear nuevo mapa centrado en la ubicación del bolet
        state.detailMap = L.map(dom.detailMap).setView([latitude, longitude], 12);

        // Capa base OpenStreetMap
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(state.detailMap);

        // Marcador para la ubicación del bolet
        state.detailMapMarker = L.marker([latitude, longitude])
            .addTo(state.detailMap)
            .bindPopup(`<strong>${mushroomName}</strong><br>${locationName}`)
            .openPopup();
    };

    const loadAllMushroomsOnMap = () => {
        if (!state.map) return;

        // Limpiar marcadores anteriores
        state.allMarkers.forEach(marker => marker.remove());
        state.allMarkers = [];

        // Crear icono personalizado según toxicidad
        const getMarkerIcon = (toxicity) => {
            const color = toxicity >= 4 ? '#ef4444' : toxicity >= 3 ? '#f97316' : '#11d432';
            return L.divIcon({
                className: 'custom-marker',
                html: `<div style="background-color: ${color}; width: 25px; height: 25px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
                iconSize: [25, 25],
                iconAnchor: [12, 12],
                popupAnchor: [0, -12]
            });
        };

        // Agregar marcador para cada bolet
        state.entries.forEach(entry => {
            const item = entry.item;
            if (!item) return;

            const contentLocation = item.contentLocation;
            const latitude = contentLocation?.geo?.latitude;
            const longitude = contentLocation?.geo?.longitude;

            if (!latitude || !longitude) return;

            const commonName = Array.isArray(item.alternateName) && item.alternateName.length > 0
                ? item.alternateName[0]
                : item.name || "Bolet";
            const scientific = item.name || "Taxon";
            const locationName = contentLocation?.name || "Ubicació desconeguda";
            const toxicity = getPropertyValue(item, "Toxicitat (1-5)") || 1;
            const culinary = getPropertyValue(item, "Valor culinari (1-5)") || 1;
            const season = getPropertyValue(item, "Època") || "No especificada";
            const image = item.image || CARD_FALLBACK;

            // Crear popup con información
            const popupContent = `
                <div style="min-width: 250px;">
                    <img src="${image}" alt="${commonName}" 
                         style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;" />
                    <h3 style="font-size: 1.1rem; font-weight: bold; margin: 0 0 4px 0; color: #111812;">
                        ${commonName}
                    </h3>
                    <p style="font-size: 0.85rem; font-style: italic; color: #618968; margin: 0 0 8px 0;">
                        ${scientific}
                    </p>
                    <p style="font-size: 0.85rem; margin: 4px 0; color: #4a5f4d;">
                        <strong>📍</strong> ${locationName}
                    </p>
                    <p style="font-size: 0.85rem; margin: 4px 0; color: #4a5f4d;">
                        <strong>🍴</strong> Culinari: ${culinary}/5
                    </p>
                    <p style="font-size: 0.85rem; margin: 4px 0; color: ${toxicity >= 3 ? '#dc2626' : '#4a5f4d'};">
                        <strong>☠️</strong> Toxicitat: ${toxicity}/5
                    </p>
                    <p style="font-size: 0.85rem; margin: 4px 0; color: #4a5f4d;">
                        <strong>📅</strong> ${season}
                    </p>
                </div>
            `;

            // Agregar marcador al mapa
            const marker = L.marker([latitude, longitude], { icon: getMarkerIcon(toxicity) })
                .addTo(state.map)
                .bindPopup(popupContent, { maxWidth: 300 });

            state.allMarkers.push(marker);
        });
    };

    const getUserLocation = () => {
        if (!navigator.geolocation) {
            alert("El teu navegador no suporta geolocalització. Prova amb un navegador modern com Chrome, Firefox o Safari.");
            return;
        }

        if (!state.map) initMap();

        // Cambiar botón a estado "cargando"
        if (dom.getLocationBtn) {
            const originalHTML = dom.getLocationBtn.innerHTML;
            dom.getLocationBtn.disabled = true;
            dom.getLocationBtn.innerHTML = '<span class="material-symbols-outlined animate-spin">progress_activity</span><span>Obtenint ubicació...</span>';

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    const accuracy = position.coords.accuracy;

                    // Centrar mapa en la ubicación del usuario
                    state.map.setView([lat, lon], 14);

                    // Eliminar marcador anterior si existe
                    if (state.mapMarker) {
                        state.map.removeLayer(state.mapMarker);
                    }

                    // Añadir nuevo marcador
                    state.mapMarker = L.marker([lat, lon])
                        .addTo(state.map)
                        .bindPopup(`
                            <div class="text-center">
                                <strong>📍 La teva ubicació</strong><br>
                                <small>Lat: ${lat.toFixed(5)}</small><br>
                                <small>Lon: ${lon.toFixed(5)}</small><br>
                                <small class="text-gray-500">Precisió: ${Math.round(accuracy)}m</small>
                            </div>
                        `)
                        .openPopup();

                    // Círculo de precisión
                    L.circle([lat, lon], {
                        color: '#11d432',
                        fillColor: '#11d432',
                        fillOpacity: 0.1,
                        radius: accuracy
                    }).addTo(state.map);

                    // Restaurar botón
                    dom.getLocationBtn.disabled = false;
                    dom.getLocationBtn.innerHTML = originalHTML;
                },
                (error) => {
                    // Restaurar botón
                    dom.getLocationBtn.disabled = false;
                    dom.getLocationBtn.innerHTML = originalHTML;

                    let message = "No s'ha pogut obtenir la teva ubicació. ";

                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            message += "Has denegat el permís de geolocalització. Pots habilitar-lo des de la configuració del navegador.";
                            break;
                        case error.POSITION_UNAVAILABLE:
                            message += "La informació de la ubicació no està disponible.";
                            break;
                        case error.TIMEOUT:
                            message += "La sol·licitud ha caducat. Torna-ho a intentar.";
                            break;
                        default:
                            message += "S'ha produït un error desconegut.";
                    }

                    alert(message);
                    console.error("Error de geolocalització:", error);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 60000
                }
            );
        }
    };

    const openMapModal = () => {
        if (dom.mapModal) {
            dom.mapModal.classList.remove("hidden");
            document.body.style.overflow = "hidden";

            // Inicializar mapa si no existe
            if (!state.map) {
                // Pequeño delay para que el modal se renderice
                setTimeout(() => {
                    initMap();
                    if (state.map) state.map.invalidateSize();
                }, 100);
            } else {
                // Recalcular tamaño si ya existe
                setTimeout(() => {
                    if (state.map) state.map.invalidateSize();
                }, 100);
            }
        }
    };

    const closeMapModal = () => {
        if (dom.mapModal) {
            dom.mapModal.classList.add("hidden");
            document.body.style.overflow = "";
        }

        stopSpeech();
    };

    // Event Listeners del mapa
    dom.openMapBtn?.addEventListener("click", openMapModal);
    dom.openMapBtnHeader?.addEventListener("click", openMapModal);
    dom.closeMapBtn?.addEventListener("click", closeMapModal);
    dom.getLocationBtn?.addEventListener("click", getUserLocation);

    // Cerrar modal con ESC
    dom.mapModal?.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMapModal();
    });

    // Cerrar modal al hacer click fuera
    dom.mapModal?.addEventListener("click", (event) => {
        if (event.target === dom.mapModal) closeMapModal();
    });

    // ============================================
    // GAME / QUIZ FUNCTIONALITY (QuizAPI format)
    // ============================================

    const ANSWER_KEYS = ["answer_a", "answer_b", "answer_c", "answer_d"];

    const shuffleArray = (arr) => {
        const copy = arr.slice();
        for (let i = copy.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    };

    const getQuestionText = (question) => {
        const localized = question?.translations?.[state.lang]?.text;
        return localized || question?.text || question?.name || "";
    };

    const getQuestionAnswers = (question) => {
        const localized = question?.translations?.[state.lang]?.answers;
        return localized && typeof localized === "object" ? localized : (question?.answers || {});
    };

    const getQuestionExplanation = (question) => {
        const localized = question?.translations?.[state.lang]?.explanation;
        return localized || question?.explanation || "";
    };

    const getCorrectAnswerKey = (question) => {
        const correctAnswers = question?.correct_answers || {};
        return ANSWER_KEYS.find((key) => correctAnswers[`${key}_correct`] === "true") || null;
    };

    const showGameView = () => {
        stopSpeech();
        dom.catalogView?.classList.add("hidden");
        dom.detailView?.classList.add("hidden");
        dom.sidebar?.classList.add("hidden");
        dom.landingHero?.classList.add("hidden");
        dom.gameView?.classList.remove("hidden");
        dom.gameIntro?.classList.remove("hidden");
        dom.gameQuestion?.classList.add("hidden");
        dom.gameResults?.classList.add("hidden");
        dom.main?.scrollIntoView({ behavior: "smooth", block: "start" });

        const url = new URL(window.location.href);
        url.searchParams.set("view", "game");
        url.searchParams.delete("pos");
        window.history.pushState({ view: "game" }, "", url);
    };

    const hideGameView = () => {
        dom.gameView?.classList.add("hidden");
        const url = new URL(window.location.href);
        url.searchParams.delete("view");
        window.history.pushState({}, "", url);
        showCatalogView();
    };

    const renderGameQuestion = () => {
        const question = state.gameQuestions[state.gameCurrentIndex];
        if (!question) return;

        state.gameAnswered = false;
        const total = state.gameQuestions.length;
        const current = state.gameCurrentIndex + 1;
        const pct = Math.round(((current - 1) / total) * 100);

        // Progress
        if (dom.gameQuestionCounter) dom.gameQuestionCounter.textContent = t("gameQuestionCounter", current, total);
        if (dom.gameProgressPct) dom.gameProgressPct.textContent = `${pct}%`;
        if (dom.gameProgressBar) dom.gameProgressBar.style.width = `${pct}%`;
        if (dom.gameProgressBarWrap) dom.gameProgressBarWrap.setAttribute("aria-valuenow", pct);
        if (dom.gameScoreDisplay) dom.gameScoreDisplay.textContent = t("gameScoreDisplay", state.gameScore, state.gameCurrentIndex);

        // Question text
        if (dom.gameQuestionText) dom.gameQuestionText.textContent = getQuestionText(question);

        // Image
        const imgSrc = question.image || "";
        if (dom.gameImageWrap && dom.gameQuestionImg) {
            if (imgSrc) {
                dom.gameQuestionImg.src = escapeHtml(imgSrc);
                dom.gameQuestionImg.alt = getQuestionText(question);
                dom.gameImageWrap.classList.remove("hidden");
            } else {
                dom.gameImageWrap.classList.add("hidden");
            }
        }

        // Answers
        if (dom.gameOptions) {
            const answers = getQuestionAnswers(question);
            dom.gameOptions.innerHTML = ANSWER_KEYS
                .filter((key) => answers[key] != null && answers[key] !== "")
                .map((key) => {
                    const label = escapeHtml(String(answers[key]));
                    return `
                        <button type="button"
                            role="listitem"
                            data-key="${key}"
                            class="game-option group flex items-center justify-between w-full px-5 py-4 bg-white border-2 border-[#dbe6dd] rounded-xl hover:border-primary/60 hover:bg-primary/5 transition-all active:scale-[0.98] text-left">
                            <span class="text-base font-semibold text-[#111812] group-hover:text-primary transition-colors">${label}</span>
                            <span class="material-symbols-outlined text-[#dbe6dd] group-hover:text-primary transition-colors text-lg flex-shrink-0 ml-2">arrow_forward_ios</span>
                        </button>
                    `;
                })
                .join("");
        }

        // Hide feedback and next button
        if (dom.gameFeedback) dom.gameFeedback.classList.add("hidden");
        if (dom.gameNextBtn) dom.gameNextBtn.classList.add("hidden");
    };

    const handleGameAnswer = (selectedKey) => {
        if (state.gameAnswered) return;
        state.gameAnswered = true;

        const question = state.gameQuestions[state.gameCurrentIndex];
        const correctKey = getCorrectAnswerKey(question);
        const isCorrect = selectedKey === correctKey;

        if (isCorrect) state.gameScore += 1;

        // Update score display
        if (dom.gameScoreDisplay) {
            dom.gameScoreDisplay.textContent = t("gameScoreDisplay", state.gameScore, state.gameCurrentIndex + 1);
        }

        // Style answer buttons
        if (dom.gameOptions) {
            const buttons = dom.gameOptions.querySelectorAll(".game-option");
            buttons.forEach((btn) => {
                const key = btn.getAttribute("data-key");
                btn.disabled = true;
                btn.classList.remove(
                    "hover:border-primary/60", "hover:bg-primary/5",
                    "active:scale-[0.98]", "border-[#dbe6dd]"
                );
                const icon = btn.querySelector(".material-symbols-outlined");

                if (key === correctKey) {
                    btn.classList.add("border-primary", "bg-primary/10");
                    btn.querySelector("span:first-child").classList.add("text-primary");
                    if (icon) {
                        icon.textContent = "check_circle";
                        icon.classList.add("text-primary");
                        icon.style.fontVariationSettings = "'FILL' 1";
                    }
                } else if (key === selectedKey && !isCorrect) {
                    btn.classList.add("border-red-400", "bg-red-50");
                    btn.querySelector("span:first-child").classList.add("text-red-600");
                    if (icon) {
                        icon.textContent = "cancel";
                        icon.classList.add("text-red-500");
                        icon.style.fontVariationSettings = "'FILL' 1";
                    }
                } else {
                    btn.classList.add("opacity-50");
                }
            });
        }

        // Feedback panel
        if (dom.gameFeedback && dom.gameFeedbackIcon && dom.gameFeedbackTitle && dom.gameFeedbackExplanation) {
            dom.gameFeedback.classList.remove("hidden", "border-primary", "bg-primary/5", "border-red-300", "bg-red-50");
            dom.gameFeedbackIcon.classList.remove("text-primary", "text-red-500");

            if (isCorrect) {
                dom.gameFeedback.classList.add("border-primary", "bg-primary/5");
                dom.gameFeedbackIcon.textContent = "check_circle";
                dom.gameFeedbackIcon.classList.add("text-primary");
                dom.gameFeedbackTitle.textContent = t("gameFeedbackCorrect");
                dom.gameFeedbackTitle.className = "font-extrabold text-base mb-1 text-primary";
            } else {
                dom.gameFeedback.classList.add("border-red-300", "bg-red-50");
                dom.gameFeedbackIcon.textContent = "cancel";
                dom.gameFeedbackIcon.classList.add("text-red-500");
                dom.gameFeedbackTitle.textContent = t("gameFeedbackWrong");
                dom.gameFeedbackTitle.className = "font-extrabold text-base mb-1 text-red-600";
            }

            dom.gameFeedbackExplanation.textContent = getQuestionExplanation(question);
        }

        // Next/finish button
        if (dom.gameNextBtn && dom.gameNextLabel) {
            const isLast = state.gameCurrentIndex === state.gameQuestions.length - 1;
            dom.gameNextLabel.textContent = isLast ? t("gameLastLabel") : t("gameNextLabel");
            dom.gameNextBtn.classList.remove("hidden");
        }
    };

    const showGameResults = () => {
        dom.gameQuestion?.classList.add("hidden");
        if (dom.gameResults) {
            dom.gameResults.classList.remove("hidden");
            dom.gameResults.classList.add("flex");
        }

        const total = state.gameQuestions.length;
        const score = state.gameScore;
        const wrong = total - score;
        const pct = total > 0 ? Math.round((score / total) * 100) : 0;

        // Ring animation
        if (dom.gameScoreRing) {
            const circumference = 314.16;
            const offset = circumference - (pct / 100) * circumference;
            requestAnimationFrame(() => {
                dom.gameScoreRing.style.strokeDashoffset = String(offset);
                if (pct >= 80) dom.gameScoreRing.style.stroke = "#11d432";
                else if (pct >= 50) dom.gameScoreRing.style.stroke = "#f97316";
                else dom.gameScoreRing.style.stroke = "#ef4444";
            });
        }

        if (dom.gameFinalScore) dom.gameFinalScore.textContent = `${score}/${total}`;
        if (dom.gameFinalPct) dom.gameFinalPct.textContent = `${pct}%`;
        if (dom.gameCorrectCount) dom.gameCorrectCount.textContent = String(score);
        if (dom.gameWrongCount) dom.gameWrongCount.textContent = String(wrong);
        if (dom.gameCorrectLabel) dom.gameCorrectLabel.textContent = t("gameCorrectLabel");
        if (dom.gameWrongLabel) dom.gameWrongLabel.textContent = t("gameWrongLabel");
        if (dom.gameReplayLabel) dom.gameReplayLabel.textContent = t("gameReplayLabel");
        if (dom.gameCatalogLabel) dom.gameCatalogLabel.textContent = t("gameCatalogLabel");

        // Results icon & title based on score
        let titleKey = "gameResultsTitleFail";
        let iconClass = "bg-red-100";
        let iconName = "sentiment_dissatisfied";
        let iconColor = "text-red-500";
        if (pct === 100) { titleKey = "gameResultsTitlePerfect"; iconClass = "bg-primary/10"; iconName = "workspace_premium"; iconColor = "text-primary"; }
        else if (pct >= 70) { titleKey = "gameResultsTitleGreat"; iconClass = "bg-primary/10"; iconName = "thumb_up"; iconColor = "text-primary"; }
        else if (pct >= 50) { titleKey = "gameResultsTitleGood"; iconClass = "bg-orange-100"; iconName = "sentiment_satisfied"; iconColor = "text-orange-500"; }

        if (dom.gameResultsIcon) {
            dom.gameResultsIcon.className = `rounded-full p-6 mb-4 ${iconClass}`;
            dom.gameResultsIcon.innerHTML = `<span class="material-symbols-outlined ${iconColor} text-6xl" style="font-variation-settings: 'FILL' 1">${iconName}</span>`;
        }
        if (dom.gameResultsTitle) dom.gameResultsTitle.textContent = t(titleKey);
        if (dom.gameResultsSubtitle) dom.gameResultsSubtitle.textContent = t("gameResultsSubtitle", score, total);
    };

    const goToNextQuestion = () => {
        state.gameCurrentIndex += 1;
        if (state.gameCurrentIndex >= state.gameQuestions.length) {
            showGameResults();
            return;
        }
        renderGameQuestion();
    };

    const startGame = () => {
        if (state.gameQuestions.length === 0) {
            alert(t("gameLoadError"));
            return;
        }
        state.gameCurrentIndex = 0;
        state.gameScore = 0;
        state.gameAnswered = false;
        state.gameQuestions = shuffleArray(state.gameQuestions);

        dom.gameIntro?.classList.add("hidden");
        if (dom.gameResults) {
            dom.gameResults.classList.add("hidden");
            dom.gameResults.classList.remove("flex");
        }
        dom.gameQuestion?.classList.remove("hidden");

        // Reset score ring to 0
        if (dom.gameScoreRing) dom.gameScoreRing.style.strokeDashoffset = "314.16";

        renderGameQuestion();
    };

    // Load quiz.json following the QuizAPI response pattern
    const loadQuizData = () => fetchJson("./quiz.json", null).then((quizData) => {
        if (!quizData) return;
        const questions = Array.isArray(quizData?.hasPart) ? quizData.hasPart : [];
        state.gameQuestions = questions;
        if (dom.gameTotalQ) dom.gameTotalQ.textContent = t("gameTotalQ", questions.length);
    });

    // Game event listeners
    dom.gameStartBtn?.addEventListener("click", startGame);
    dom.gameReplayBtn?.addEventListener("click", startGame);
    dom.gameCatalogBtn?.addEventListener("click", hideGameView);
    dom.gameExitBtn?.addEventListener("click", hideGameView);

    dom.gameNextBtn?.addEventListener("click", goToNextQuestion);

    dom.gameOptions?.addEventListener("click", (event) => {
        if (state.gameAnswered) return;
        const target = event.target;
        if (!(target instanceof Element)) return;
        const btn = target.closest(".game-option[data-key]");
        if (!btn) return;
        handleGameAnswer(btn.getAttribute("data-key"));
    });

    dom.navGame?.addEventListener("click", () => {
        loadQuizData().then(showGameView);
    });

})();
