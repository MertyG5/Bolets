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
        culinarySortBtn: document.getElementById("culinary-sort-btn"),
        toxicitySortBtn: document.getElementById("toxicity-sort-btn"),
        infoCardTitle: document.getElementById("info-card-title"),
        infoCardBody: document.getElementById("info-card-body"),
        catalogHeading: document.getElementById("catalog-heading"),
        closeMapBtn: document.getElementById("close-map-btn"),
        getLocationBtn: document.getElementById("get-location-btn"),
        catalogView: document.getElementById("catalog-view"),
        detailView: document.getElementById("detail-view"),
        detailHeroImage: document.getElementById("detail-hero-image"),
        detailBackButton: document.getElementById("detail-back-btn"),
        detailHeroImg: document.getElementById("detail-hero-img"),
        detailHeroSourceAvif: document.getElementById("detail-hero-source-avif"),
        detailHeroSourceWebp: document.getElementById("detail-hero-source-webp"),
        galleryControls: document.getElementById("gallery-controls"),
        galleryPrevBtn: document.getElementById("gallery-prev-btn"),
        galleryNextBtn: document.getElementById("gallery-next-btn"),
        galleryCurrent: document.getElementById("gallery-current"),
        galleryTotal: document.getElementById("gallery-total"),
        detailMushroomName: document.getElementById("detail-mushroom-name"),
        detailMushroomScientific: document.getElementById("detail-mushroom-scientific"),
        detailCulinaryStars: document.getElementById("detail-culinary-stars"),
        detailCulinaryText: document.getElementById("detail-culinary-text"),
        detailToxicityStars: document.getElementById("detail-toxicity-stars"),
        detailToxicityText: document.getElementById("detail-toxicity-text"),
        detailSeasonText: document.getElementById("detail-season-text"),
        detailSeasonInlineText: document.getElementById("detail-season-inline-text"),
        detailCharacteristics: document.getElementById("detail-characteristics-text"),
        detailHabitat: document.getElementById("detail-habitat-text"),
        detailRecipeTitle: document.getElementById("detail-recipe-title"),
        detailRecipeDescription: document.getElementById("detail-recipe-description"),
        detailRecipeLink: document.getElementById("detail-recipe-link"),
        detailRecipeVideo: document.getElementById("detail-recipe-video"),
        detailRecipeIframe: document.getElementById("detail-recipe-iframe"),
        detailRecipePlayer: document.getElementById("detail-recipe-player"),
        detailRecipeNoVideo: document.getElementById("detail-recipe-no-video"),
        detailDescriptionAudio: document.getElementById("detail-description-audio"),
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
        gameQ10Btn: document.getElementById("game-q-10-btn"),
        gameQ20Btn: document.getElementById("game-q-20-btn"),
        gameTimeOffBtn: document.getElementById("game-time-off-btn"),
        gameTimeOnBtn: document.getElementById("game-time-on-btn"),
        gameTimerDisplay: document.getElementById("game-timer-display"),
        gameTimerSeconds: document.getElementById("game-timer-seconds"),
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
        aboutUs: document.getElementById("about-us"),
        pageFooter: document.querySelector("footer"),
        main: document.getElementById("main-content"),
        sidebar: document.querySelector("#main-content > aside"),
        landingHero: document.getElementById("landing-hero")
    };

    if (!dom.grid) return;

    const CARD_FALLBACK = "img/Lactarius_sanguifluus/Lactarius_sanguifluus-mitja.jpg";
    const HERO_FALLBACK = "img/Lactarius_sanguifluus/Lactarius_sanguifluus-mitja.jpg";
    const CATALOG_IMAGE_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='480' viewBox='0 0 640 480'%3E%3Crect width='640' height='480' fill='%23e8efe9'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' fill='%23618968' font-family='sans-serif' font-size='28'%3ECarrega la imatge%3C/text%3E%3C/svg%3E";
    const DETAIL_HERO_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='900' viewBox='0 0 1440 900'%3E%3Crect width='1440' height='900' fill='%23e8efe9'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' fill='%23618968' font-family='sans-serif' font-size='44'%3EImatge del bolet%3C/text%3E%3C/svg%3E";

    const state = {
        entries: [],
        filteredEntries: [],
        lang: window.I18nManager?.getCurrentLanguage?.() || "ca",
        searchQuery: "",
        selectedSeasons: new Set(),
        minCulinary: null,
        maxToxicity: null,
        hoverCulinary: null,
        hoverToxicity: null,
        culinarySortOrder: "desc",
        toxicitySortOrder: "desc",
        selectedEntry: null,
        currentImageIndex: 0,
        currentMushroomImages: [],
        currentMushroomForJSON: null,
        detailHeroImageReady: false,
        detailGalleryPreloaded: new Set(),
        catalogImagesReady: false,
        speechText: "",
        detailAudioUrl: "",
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
        plantMarkers: [],
        gameQuestions: [],
        allQuizQuestions: [],
        gameCurrentIndex: 0,
        gameScore: 0,
        gameAnswered: false,
        gameQuestionCount: 10,
        gameTimeLimitEnabled: false,
        gameTimerInterval: null,
        gameTimeRemaining: 0
    };

    const escapeHtml = (value) => String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");

    const clampScore = (value) => {
        const parsed = Number(value);
        if (!Number.isFinite(parsed)) return 0;
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

    const i18n = (key, fallback = key) => window.I18nManager?.t?.(key, fallback) ?? fallback;
    const byLang = (caText, enText) => (state.lang === "en" ? enText : caText);

    const formatSpeciesCount = (count) => byLang(`${count} espècies trobades`, `${count} species found`);
    const formatGameQuestionCounter = (current, total) => byLang(`Pregunta ${current} de ${total}`, `Question ${current} of ${total}`);
    const formatGameScoreDisplay = (score, total) => `${score} / ${total}`;
    const formatGameResultsSubtitle = (score, total) => byLang(
        `Has encertat ${score} de ${total} preguntes.`,
        `You got ${score} out of ${total} questions right.`
    );

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
            Primavera: i18n("filter_season_spring", "Primavera"),
            Estiu: i18n("filter_season_summer", "Estiu"),
            Tardor: i18n("filter_season_autumn", "Tardor"),
            Hivern: i18n("filter_season_winter", "Hivern")
        };
        return seasonMap[season] || season || "";
    };

    const getPropertyValue = (item, propName) => {
        const props = Array.isArray(item?.additionalProperty) ? item.additionalProperty : [];
        const found = props.find((prop) => String(prop?.name || "").toLowerCase() === String(propName).toLowerCase());
        return found?.value ?? "";
    };

    const getScores = (item) => ({
        culinary: clampScore(getPropertyValue(item, "Valor culinari (1-5)")),
        toxicity: clampScore(getPropertyValue(item, "Toxicitat (1-5)"))
    });

    const ICON_GLYPHS = {
        forest: "🌲",
        filter_list: "☰",
        eco: "🌿",
        wb_sunny: "☀",
        water_drop: "💧",
        ac_unit: "❄",
        sort: "⇅",
        arrow_upward: "↑",
        arrow_downward: "↓",
        restaurant: "🍴",
        skull: "☠",
        arrow_back: "←",
        arrow_forward: "→",
        arrow_forward_ios: "›",
        volume_up: "🔊",
        play_arrow: "▶",
        analytics: "📊",
        calendar_month: "🗓",
        palette: "🎨",
        landscape: "⛰",
        outdoor_grill: "🍳",
        play_circle: "▶",
        smart_display: "▶",
        sports_esports: "🎮",
        quiz: "❓",
        timer: "⏱",
        emoji_events: "🏆",
        close: "×",
        progress_activity: "⏳",
        favorite: "♥",
        public: "🌐",
        camera: "📷",
        groups: "👥",
        map: "🗺",
        my_location: "📍",
        info: "ℹ",
        check_circle: "✓",
        cancel: "✕",
        workspace_premium: "⭐",
        star_outline: "☆",
        mushroom: "🍄",
        thumb_up: "👍",
        sentiment_dissatisfied: "☹",
        sentiment_satisfied: "☺",
        sentiment_very_satisfied: "😄",
        star: "★"
    };

    const getIconGlyph = (iconName) => ICON_GLYPHS[iconName] || "•";

    const iconClassForSeason = (season, active) => {
        if (active) return "ui-icon text-white text-lg";
        if (season === "Primavera") return "ui-icon text-primary text-lg";
        if (season === "Estiu") return "ui-icon text-orange-400 text-lg";
        if (season === "Tardor") return "ui-icon text-[#618968] text-lg";
        if (season === "Hivern") return "ui-icon text-blue-400 text-lg";
        return "ui-icon text-[#618968] text-lg";
    };

    const upgradeMaterialIcons = (root = document) => {
        if (!root?.querySelectorAll) return;
        root.querySelectorAll(".material-symbols-outlined").forEach((element) => {
            const iconName = String(element.textContent || "").trim();
            element.textContent = getIconGlyph(iconName);
            element.classList.remove("material-symbols-outlined");
            element.classList.add("ui-icon");
            element.removeAttribute("style");
            element.setAttribute("aria-hidden", "true");
        });
    };

    const renderRatingIcons = (iconName, active, activeClass, mutedClass) => {
        let html = "";
        const glyph = getIconGlyph(iconName);
        for (let i = 0; i < 5; i += 1) {
            const isActive = i < active;
            html += `<span class=\"ui-icon text-sm ${isActive ? activeClass : mutedClass}\" aria-hidden=\"true\">${glyph}</span>`;
        }
        return html;
    };

    const generarPictureHTML = (contentUrl, altText, lazy = true, options = {}) => {
        const deferLoading = Boolean(options.deferLoading);
        const safeAlt = escapeHtml(altText || "Imatge del bolet");
        const originalUrl = String(contentUrl || HERO_FALLBACK);
        const baseUrl = originalUrl.replace(/\.[^.\/]+$/, "");
        const sizes = "(max-width: 600px) 320px, (max-width: 1024px) 640px, 1280px";
        const loading = lazy ? "lazy" : "eager";
        const fetchPriority = lazy ? "low" : "high";

        if (deferLoading) {
            return `
            <picture class="absolute inset-0 block w-full h-full overflow-hidden">
                <img
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    alt="${safeAlt}"
                    width="640"
                    height="480"
                    loading="lazy"
                    decoding="async"
                    src="${CATALOG_IMAGE_PLACEHOLDER}" />
            </picture>
        `;
        }

        return `
            <picture class="absolute inset-0 block w-full h-full overflow-hidden">
                <source
                    type="image/avif"
                    srcset="${baseUrl}-petit.avif 320w, ${baseUrl}-mitja.avif 640w, ${baseUrl}-gran.avif 1280w"
                    sizes="${sizes}" />
                <source
                    type="image/webp"
                    srcset="${baseUrl}-petit.webp 320w, ${baseUrl}-mitja.webp 640w, ${baseUrl}-gran.webp 1280w"
                    sizes="${sizes}" />
                <img
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    alt="${safeAlt}"
                    width="640"
                    height="480"
                    loading="${loading}"
                    decoding="async"
                    fetchpriority="${fetchPriority}"
                    src="${baseUrl}-mitja.jpg"
                    onerror="this.onerror=null;this.src='${escapeHtml(HERO_FALLBACK)}'" />
            </picture>
        `;
    };

    const setDetailHeroImage = (src, alt, lazy = false) => {
        if (!dom.detailHeroImage || !dom.detailHeroImg) return;

        dom.detailHeroImg.outerHTML = generarPictureHTML(src, alt, lazy);
        dom.detailHeroImg = dom.detailHeroImage.querySelector("picture img");
    };

    const showDetailHeroPlaceholder = (alt = "Imatge del bolet") => {
        if (!dom.detailHeroImg) return;

        dom.detailHeroImg.removeAttribute("srcset");
        dom.detailHeroImg.removeAttribute("sizes");
        dom.detailHeroImg.removeAttribute("fetchpriority");
        dom.detailHeroImg.setAttribute("loading", "lazy");
        dom.detailHeroImg.setAttribute("decoding", "async");
        dom.detailHeroImg.alt = alt;
        dom.detailHeroImg.src = DETAIL_HERO_PLACEHOLDER;
    };

    const updateGalleryDisplay = () => {
        if (!dom.detailHeroImg || !dom.detailHeroImage || state.currentMushroomImages.length === 0) return;

        const currentImg = state.currentMushroomImages[state.currentImageIndex];
        const imgSrc = currentImg?.contentUrl || HERO_FALLBACK;

        // Use localized name if available, otherwise use image name or fallback
        let imgAlt = "Imatge del bolet";
        if (state.currentMushroomForJSON) {
            imgAlt = getItemLocalizedName(state.currentMushroomForJSON);
        } else if (currentImg?.name) {
            imgAlt = currentImg.name;
        }

        if (state.detailHeroImageReady) {
            setDetailHeroImage(imgSrc, imgAlt, false);
        } else {
            showDetailHeroPlaceholder(imgAlt);
        }

        if (dom.galleryCurrent) dom.galleryCurrent.textContent = String(state.currentImageIndex + 1);
        if (dom.galleryTotal) dom.galleryTotal.textContent = String(state.currentMushroomImages.length);

        if (dom.galleryControls) {
            const shouldShowControls = state.currentMushroomImages.length > 1;
            dom.galleryControls.classList.toggle("hidden", !shouldShowControls);
        }
    };

    const unlockDetailHeroImages = () => {
        if (state.detailHeroImageReady) return;
        state.detailHeroImageReady = true;

        if (dom.detailView && !dom.detailView.classList.contains("hidden")) {
            updateGalleryDisplay();
        }
    };

    const unlockCatalogImages = () => {
        if (state.catalogImagesReady) return;
        state.catalogImagesReady = true;

        if (dom.grid && state.filteredEntries.length > 0) {
            applyFilters();
        }
    };

    const preloadDetailGalleryImages = (images) => {
        if (!Array.isArray(images) || images.length === 0) return;

        images.forEach((image) => {
            const contentUrl = String(image?.contentUrl || "").trim();
            if (!contentUrl) return;

            const baseUrl = contentUrl.replace(/\.[^.\/]+$/, "");
            const candidates = [
                `${baseUrl}-petit.avif`,
                `${baseUrl}-mitja.avif`,
                `${baseUrl}-gran.avif`,
                `${baseUrl}-petit.webp`,
                `${baseUrl}-mitja.webp`,
                `${baseUrl}-gran.webp`,
                `${baseUrl}-petit.jpg`,
                `${baseUrl}-mitja.jpg`,
                `${baseUrl}-gran.jpg`
            ];

            candidates.forEach((src) => {
                if (state.detailGalleryPreloaded.has(src)) return;
                state.detailGalleryPreloaded.add(src);

                const preloadedImage = new Image();
                preloadedImage.decoding = "async";
                preloadedImage.loading = "eager";
                preloadedImage.src = src;
            });
        });
    };

    const nextImage = () => {
        if (state.currentMushroomImages.length <= 1) return;
        state.currentImageIndex = (state.currentImageIndex + 1) % state.currentMushroomImages.length;
        updateGalleryDisplay();
    };

    const previousImage = () => {
        if (state.currentMushroomImages.length <= 1) return;
        state.currentImageIndex = (state.currentImageIndex - 1 + state.currentMushroomImages.length) % state.currentMushroomImages.length;
        updateGalleryDisplay();
    };

    const injectJSONLD = (item) => {
        // Eliminar JSON-LD anterior si existeix
        const oldScript = document.getElementById("mushroom-jsonld");
        if (oldScript) oldScript.remove();

        const scientific = item.name || "Unknown";
        const localizedAlternateNames = getLocalizedArrayValue(
            item,
            "alternateName",
            Array.isArray(item?.alternateName) ? item.alternateName : []
        );
        const alternateNames = localizedAlternateNames.length > 0
            ? localizedAlternateNames
            : [getItemLocalizedName(item)];
        const description = getItemLocalizedDescription(item);
        const firstImage = Array.isArray(item.image)
            ? (typeof item.image[0] === "string" ? item.image[0] : item.image[0]?.contentUrl || "")
            : (typeof item.image === "string" ? item.image : item.image?.contentUrl || "");

        // Construir l'objecte JSON-LD segons Schema.org
        const jsonLD = {
            "@context": "https://schema.org",
            "@type": "Taxon",
            "name": scientific,
            "alternateName": alternateNames,
            "description": description,
            "image": firstImage ? {
                "@type": "ImageObject",
                "url": firstImage,
                "name": scientific
            } : undefined,
            "identifier": scientific.replace(/\s+/g, "_"),
            "url": window.location.href
        };

        const script = document.createElement("script");
        script.id = "mushroom-jsonld";
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(jsonLD, null, 2);
        document.head.appendChild(script);

        state.currentMushroomForJSON = item;
    };

    const setFilterButtonsUI = () => {
        const culinaryPreview = state.hoverCulinary ?? state.minCulinary;
        const toxicityPreview = state.hoverToxicity ?? state.maxToxicity;

        // Season filter UI
        if (dom.seasonFilter) {
            const buttons = dom.seasonFilter.querySelectorAll("button[data-season]");
            buttons.forEach((button) => {
                const season = button.dataset.season;
                const active = state.selectedSeasons.has(season);
                button.setAttribute("aria-pressed", active ? "true" : "false");

                if (active) {
                    button.className = "flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-lg text-sm font-medium transition-colors shadow-md";
                    const icon = button.querySelector("span");
                    if (icon) icon.className = iconClassForSeason(season, true);
                } else {
                    button.className = "flex items-center gap-2 px-3 py-2 bg-background-light hover:bg-primary/10 rounded-lg text-sm font-medium transition-colors";
                    const icon = button.querySelector("span");
                    if (icon) icon.className = iconClassForSeason(season, false);
                }
            });
        }

        if (dom.culinaryFilter) {
            const buttons = dom.culinaryFilter.querySelectorAll("button[data-score]");
            buttons.forEach((button) => {
                const score = Number(button.dataset.score || "1");
                const active = culinaryPreview !== null && score <= culinaryPreview;
                button.className = active
                    ? "p-1 text-[#111812] hover:text-primary"
                    : "p-1 text-[#dbe6dd] hover:text-primary";
                button.setAttribute(
                    "aria-label",
                    byLang(
                        `Filtrar valor culinari mínim ${score} de 5`,
                        `Filter minimum culinary value ${score} out of 5`
                    )
                );
                button.setAttribute("aria-pressed", state.minCulinary !== null && score <= state.minCulinary ? "true" : "false");
            });
        }

        if (dom.toxicityFilter) {
            const buttons = dom.toxicityFilter.querySelectorAll("button[data-score]");
            buttons.forEach((button) => {
                const score = Number(button.dataset.score || "1");
                const active = toxicityPreview !== null && score <= toxicityPreview;
                button.className = active ? "p-1 text-red-500" : "p-1 text-[#dbe6dd]";
                button.setAttribute(
                    "aria-label",
                    byLang(
                        `Filtrar toxicitat des de ${score} de 5`,
                        `Filter toxicity from ${score} out of 5`
                    )
                );
                button.setAttribute("aria-pressed", state.maxToxicity !== null && score <= state.maxToxicity ? "true" : "false");
            });
        }

        if (dom.culinaryFilterLabel) {
            dom.culinaryFilterLabel.textContent = state.minCulinary === null
                ? i18n("filter_culinary_label", "Mínim 3 forquilles")
                : byLang(`Mínim ${state.minCulinary} forquilles`, `Minimum ${state.minCulinary} forks`);
        }

        if (dom.toxicityFilterLabel) {
            dom.toxicityFilterLabel.textContent = state.maxToxicity === null
                ? i18n("filter_toxicity_label", "Mostrar només segures")
                : byLang(`Toxicitat màxima ${state.maxToxicity}/5`, `Maximum toxicity ${state.maxToxicity}/5`);
        }

        if (dom.seasonFilterLabel) {
            if (state.selectedSeasons.size === 0) {
                dom.seasonFilterLabel.textContent = i18n("filter_season_none", "Cap temporada seleccionada");
            } else {
                dom.seasonFilterLabel.textContent = [...state.selectedSeasons]
                    .map(s => getLocalizedSeasonLabel(s))
                    .join(", ");
            }
        }

        updateSortButtonsUI();
    };

    const updateSortButtonsUI = () => {
        if (dom.culinarySortBtn) {
            const icon = dom.culinarySortBtn.querySelector("span");
            if (state.culinarySortOrder === "desc") {
                if (icon) icon.textContent = getIconGlyph("arrow_downward");
                dom.culinarySortBtn.title = byLang("Ordenar: menor a major", "Sort: low to high");
                dom.culinarySortBtn.classList.add("text-primary");
                dom.culinarySortBtn.classList.remove("text-[#618968]");
            } else if (state.culinarySortOrder === "asc") {
                if (icon) icon.textContent = getIconGlyph("arrow_upward");
                dom.culinarySortBtn.title = byLang("Ordenar: major a menor", "Sort: high to low");
                dom.culinarySortBtn.classList.add("text-primary");
                dom.culinarySortBtn.classList.remove("text-[#618968]");
            } else {
                if (icon) icon.textContent = getIconGlyph("sort");
                dom.culinarySortBtn.title = i18n("filter_culinary_sort_aria", "Ordenar per valor culinari");
                dom.culinarySortBtn.classList.remove("text-primary");
                dom.culinarySortBtn.classList.add("text-[#618968]");
            }
        }

        if (dom.toxicitySortBtn) {
            const icon = dom.toxicitySortBtn.querySelector("span");
            if (state.toxicitySortOrder === "desc") {
                if (icon) icon.textContent = getIconGlyph("arrow_downward");
                dom.toxicitySortBtn.title = byLang("Ordenar: menor a major", "Sort: low to high");
                dom.toxicitySortBtn.classList.add("text-primary");
                dom.toxicitySortBtn.classList.remove("text-[#618968]");
            } else if (state.toxicitySortOrder === "asc") {
                if (icon) icon.textContent = getIconGlyph("arrow_upward");
                dom.toxicitySortBtn.title = byLang("Ordenar: major a menor", "Sort: high to low");
                dom.toxicitySortBtn.classList.add("text-primary");
                dom.toxicitySortBtn.classList.remove("text-[#618968]");
            } else {
                if (icon) icon.textContent = getIconGlyph("sort");
                dom.toxicitySortBtn.title = i18n("filter_toxicity_sort_aria", "Ordenar per toxicitat");
                dom.toxicitySortBtn.classList.remove("text-primary");
                dom.toxicitySortBtn.classList.add("text-[#618968]");
            }
        }
    };

    const resetCatalogFilters = () => {
        state.searchQuery = "";
        state.selectedSeasons = new Set();
        state.minCulinary = null;
        state.maxToxicity = null;
        state.culinarySortOrder = null;
        state.toxicitySortOrder = null;

        if (dom.searchInput) dom.searchInput.value = "";
    };

    const renderCard = (entry) => {
        const item = entry?.item || {};
        const position = Number(entry?.position) || 1;
        const commonName = getItemLocalizedName(item);
        const scientificName = item.name || "Taxon desconegut";

        // Handle both string (legacy) and array (new ImageObject format)
        let image = CARD_FALLBACK;
        if (item.image) {
            if (Array.isArray(item.image) && item.image.length > 0) {
                image = item.image[0]?.contentUrl || CARD_FALLBACK;
            } else if (typeof item.image === 'string') {
                image = item.image;
            }
        }
        const imageAlt = Array.isArray(item.image) && item.image.length > 0 && item.image[0]?.name
            ? item.image[0].name
            : commonName;

        const scores = getScores(item);
        const isToxic = scores.toxicity >= 3;
        const isLethal = scores.toxicity >= 5;

        const cardBorder = isToxic ? "border border-red-200 ring-1 ring-red-100" : "border border-primary/5";
        const imageWrapperClass = isToxic ? "h-48 overflow-hidden relative grayscale" : "h-48 overflow-hidden relative";
        const nameClass = isToxic ? "text-lg font-bold text-[#111812]" : "text-lg font-bold text-[#111812] group-hover:text-primary transition-colors";
        const badge = isToxic
            ? `<span class=\"absolute top-3 right-3 ${isLethal ? "bg-red-600" : "bg-red-500"} px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white shadow-sm\">${isLethal ? "Molt tòxic" : "Tòxic"}</span>`
            : "<span class=\"absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm\">Comestible</span>";

        const imageMarkup = generarPictureHTML(image, imageAlt, true, {
            deferLoading: !state.catalogImagesReady
        });

        return `
            <button type=\"button\" data-pos=\"${position}\" class=\"open-detail text-left block w-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow ${cardBorder} group\">
                <div class=\"${imageWrapperClass}\">
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
            const seasonOk = state.selectedSeasons.size === 0 ||
                [...state.selectedSeasons].some(s => season.toLowerCase().includes(s.toLowerCase()));

            // Culinary filter
            const culinaryOk = state.minCulinary === null || scores.culinary >= state.minCulinary;

            // Toxicity filter
            const toxicityOk = state.maxToxicity === null || scores.toxicity >= state.maxToxicity;

            return searchOk && seasonOk && culinaryOk && toxicityOk;
        });

        // Apply sorting
        if (state.culinarySortOrder) {
            state.filteredEntries.sort((a, b) => {
                const scoreA = getScores(a?.item || {}).culinary;
                const scoreB = getScores(b?.item || {}).culinary;
                return state.culinarySortOrder === "asc" ? scoreA - scoreB : scoreB - scoreA;
            });
        } else if (state.toxicitySortOrder) {
            state.filteredEntries.sort((a, b) => {
                const scoreA = getScores(a?.item || {}).toxicity;
                const scoreB = getScores(b?.item || {}).toxicity;
                return state.toxicitySortOrder === "asc" ? scoreA - scoreB : scoreB - scoreA;
            });
        }

        if (dom.count) dom.count.textContent = formatSpeciesCount(state.filteredEntries.length);
        dom.grid.innerHTML = state.filteredEntries.map((entry) => renderCard(entry)).join("");
    };

    const setAudioButtonState = (mode) => {
        if (!dom.audioButton || !dom.audioButtonIcon || !dom.audioButtonText) return;

        const audioLoading = byLang("Carregant àudio...", "Loading audio...");
        const audioStop = byLang("Atura", "Stop");
        const audioPlaying = byLang("Reproduint", "Playing");
        const audioResume = byLang("Reprendre", "Resume");
        const audioPaused = byLang("En pausa", "Paused");
        const audioPlay = i18n("audio_play_button", byLang("Escolta", "Listen"));
        const audioReady = i18n("audio_ready_status", byLang("Preparat", "Ready"));

        if (mode === "loading") {
            dom.audioButton.setAttribute("aria-pressed", "false");
            dom.audioButtonIcon.textContent = getIconGlyph("progress_activity");
            dom.audioButtonText.textContent = audioLoading;
            announceSpeechStatus(audioLoading);
            return;
        }

        if (mode === "playing") {
            dom.audioButton.setAttribute("aria-pressed", "true");
            dom.audioButtonIcon.textContent = getIconGlyph("stop");
            dom.audioButtonText.textContent = audioStop;
            announceSpeechStatus(audioPlaying);
            return;
        }

        if (mode === "paused") {
            dom.audioButton.setAttribute("aria-pressed", "true");
            dom.audioButtonIcon.textContent = getIconGlyph("play_arrow");
            dom.audioButtonText.textContent = audioResume;
            announceSpeechStatus(audioPaused);
            return;
        }

        dom.audioButton.setAttribute("aria-pressed", "false");
        dom.audioButtonIcon.textContent = getIconGlyph("play_arrow");
        dom.audioButtonText.textContent = audioPlay;
        announceSpeechStatus(audioReady);
    };

    const stopSpeech = () => {
        const synth = getSpeechSynthesis();
        if (synth) synth.cancel();
        if (dom.detailDescriptionAudio) {
            dom.detailDescriptionAudio.pause();
            dom.detailDescriptionAudio.currentTime = 0;
            dom.detailDescriptionAudio.removeAttribute("src");
            dom.detailDescriptionAudio.load?.();
        }
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

    const playLocalAudio = async () => {
        const audio = dom.detailDescriptionAudio;
        if (!audio || !state.detailAudioUrl) return;

        state.speechState = "loading";
        setAudioButtonState("loading");

        audio.pause();
        audio.currentTime = 0;
        audio.src = state.detailAudioUrl;
        audio.load();

        try {
            await audio.play();
            state.speechState = "playing";
            setAudioButtonState("playing");
        } catch (error) {
            state.speechState = "stopped";
            setAudioButtonState("stopped");
            console.error("Local audio playback error:", error);
        }
    };

    const pauseLocalAudio = () => {
        const audio = dom.detailDescriptionAudio;
        if (!audio || audio.paused) return;

        audio.pause();
        state.speechState = "paused";
        setAudioButtonState("paused");
    };

    const resumeLocalAudio = async () => {
        const audio = dom.detailDescriptionAudio;
        if (!audio || !audio.paused) return;

        try {
            await audio.play();
            state.speechState = "playing";
            setAudioButtonState("playing");
        } catch (error) {
            state.speechState = "stopped";
            setAudioButtonState("stopped");
            console.error("Local audio resume error:", error);
        }
    };

    const toggleSpeech = async () => {
        const synth = getSpeechSynthesis();
        const localAudioAvailable = state.lang === "ca" && Boolean(state.detailAudioUrl) && Boolean(dom.detailDescriptionAudio);

        if (!synth && !localAudioAvailable) return;

        if (localAudioAvailable) {
            const audio = dom.detailDescriptionAudio;
            if (!audio) return;

            if (state.speechState === "playing" && !audio.paused) {
                stopSpeech();
                return;
            }

            if (state.speechState === "paused" && audio.paused) {
                await resumeLocalAudio();
                return;
            }

            if (state.speechState === "loading") {
                stopSpeech();
                return;
            }

            await playLocalAudio();
            return;
        }

        if (!state.speechText) return;

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

    const renderStars = (node, active, activeClass, mutedClass, inactiveGlyph = "star") => {
        if (!node) return;
        let html = "";
        for (let i = 0; i < 5; i += 1) {
            const isActive = i < active;
            html += `<span class=\"ui-icon ${isActive ? activeClass : mutedClass} text-[20px]\" aria-hidden=\"true\">${getIconGlyph(isActive ? "star" : inactiveGlyph)}</span>`;
        }
        node.innerHTML = html;
    };

    const getItemLocalizedName = (item) => {
        const alternateName = item?.alternateName;
        const fallbackCommonName = Array.isArray(alternateName) && alternateName.length > 0
            ? alternateName[0]
            : (typeof alternateName === "string" && alternateName.trim() !== ""
                ? alternateName.trim()
                : item?.name || "Bolet");

        return getLocalizedItemValue(item, "displayName", fallbackCommonName);
    };

    const getItemLocalizedDescription = (item) => getLocalizedItemValue(item, "description", item?.description || "Sense descripció.");

    const getItemLocalizedTree = (item) => getLocalizedItemValue(item, "tree", getPropertyValue(item, "Arbre associat") || "No especificat");

    const getItemLocalizedSeason = (item) => getLocalizedItemValue(item, "season", getPropertyValue(item, "Època") || "No especificada");

    const getItemLocalizedLocation = (item) => getLocalizedItemValue(item, "locationName", item?.contentLocation?.name || "Ubicació no especificada");

    const getItemLocalizedRecipe = (item) => {
        const langFull = String(state.lang || "");
        const langBase = langFull.split("-")[0];
        const localizedRecipe = item?.translations?.[langFull]?.recipe || item?.translations?.[langBase]?.recipe;
        const subjectRecipe = item?.subjectOf && item.subjectOf["@type"] === "Recipe" ? item.subjectOf : null;

        if (localizedRecipe && typeof localizedRecipe === "object") {
            // Merge localized recipe with subjectOf as fallback for missing fields (e.g., video)
            if (subjectRecipe) {
                return Object.assign({}, subjectRecipe, localizedRecipe);
            }
            return localizedRecipe;
        }

        return subjectRecipe;
    };

    const clearDetailRecipeMedia = () => {
        if (dom.detailRecipeIframe) {
            dom.detailRecipeIframe.src = "";
        }

        if (dom.detailRecipePlayer) {
            dom.detailRecipePlayer.pause?.();
            dom.detailRecipePlayer.removeAttribute("src");
            dom.detailRecipePlayer.load?.();
            dom.detailRecipePlayer.classList.add("hidden");
        }

        dom.detailRecipeVideo?.classList.add("hidden");
        dom.detailRecipeLink?.classList.add("hidden");
        dom.detailRecipeNoVideo?.classList.add("hidden");
    };

    const showCatalogView = (scrollToCatalog = true) => {
        stopSpeech();
        clearDetailRecipeMedia();
        dom.catalogView?.classList.remove("hidden");
        dom.detailView?.classList.add("hidden");
        dom.sidebar?.classList.remove("hidden");
        dom.landingHero?.classList.remove("hidden");
        dom.gameView?.classList.add("hidden");
        dom.aboutUs?.classList.remove("hidden");
        dom.pageFooter?.classList.remove("hidden");
        dom.main?.classList.remove("game-mode");
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

        if (dom.detailMushroomName) dom.detailMushroomName.textContent = commonName;
        if (dom.detailMushroomScientific) dom.detailMushroomScientific.textContent = scientific;

        // Initialize carousel
        if (typeof image === "string") {
            state.currentMushroomImages = [{ contentUrl: image, name: commonName }];
        } else if (Array.isArray(image)) {
            state.currentMushroomImages = image;
        } else {
            state.currentMushroomImages = [{ contentUrl: HERO_FALLBACK, name: commonName }];
        }
        state.currentImageIndex = 0;
        state.currentMushroomForJSON = item;
        state.detailHeroImageReady = true;
        preloadDetailGalleryImages(state.currentMushroomImages);
        updateGalleryDisplay();
        injectJSONLD(item);

        if (dom.detailCharacteristics) dom.detailCharacteristics.textContent = description;
        if (dom.detailHabitat) dom.detailHabitat.textContent = `${i18n("mushroom_tree_prefix", byLang("Arbre associat principal", "Main associated tree"))}: ${tree}.`;
        if (dom.detailSeasonInlineText) {
            dom.detailSeasonInlineText.textContent = `${i18n("mushroom_season_prefix", byLang("Època", "Season"))}: ${season}.`;
        }
        if (dom.detailSeasonText) dom.detailSeasonText.textContent = `${i18n("mushroom_season_prefix", byLang("Època habitual de recol·lecció", "Typical harvesting season"))}: ${season}.`;

        if (dom.detailCulinaryText) {
            dom.detailCulinaryText.textContent = culinaryScore >= 4
                ? i18n("mushroom_culinary_high", byLang("Bolet molt valorat gastronòmicament en receptes tradicionals i modernes.", "A highly valued mushroom in traditional and modern recipes."))
                : i18n("mushroom_culinary_mid", byLang("Bolet amb valor culinari moderat; convé una identificació correcta abans de cuinar-lo.", "A mushroom with moderate culinary value; correct identification is important before cooking."));
        }

        if (dom.detailToxicityText) {
            dom.detailToxicityText.textContent = isToxic
                ? i18n("mushroom_toxic_high", byLang("Cal extremar la precaució: possible toxicitat segons preparació i identificació.", "Use extreme caution: possible toxicity depending on preparation and identification."))
                : i18n("mushroom_toxic_low", byLang("Generalment considerat segur quan està ben identificat.", "Generally considered safe when correctly identified."));
        }

        renderStars(dom.detailCulinaryStars, culinaryScore, "text-primary", "text-[#dbe6dd]");
        renderStars(dom.detailToxicityStars, toxicityScore, isToxic ? "text-red-500" : "text-red-200", "text-red-200", "star_outline");

        const recipe = getItemLocalizedRecipe(item);
        const ingredients = Array.isArray(recipe?.recipeIngredient) ? recipe.recipeIngredient : [];
        const videoUrl = recipe?.video?.contentUrl || "#";

        state.detailAudioUrl = state.lang === "ca"
            ? (item?.audio?.contentUrl || item?.translations?.ca?.audio?.contentUrl || "")
            : "";

        if (dom.detailRecipeTitle) {
            dom.detailRecipeTitle.textContent = recipe?.name
                ? byLang(`Vídeo: ${recipe.name}`, `Video: ${recipe.name}`)
                : byLang("Vídeo: preparació recomanada", "Video: recommended preparation");
        }

        if (dom.detailRecipeDescription) {
            dom.detailRecipeDescription.textContent = ingredients.length > 0
                ? `${i18n("recipe_ingredients_prefix", byLang("Ingredients destacats", "Highlighted ingredients"))}: ${ingredients.join(", ")}.`
                : i18n("mushroom_no_recipe", byLang("No hi ha recepta associada per aquest bolet.", "No recipe associated with this mushroom."));
        }

        if (dom.detailRecipeLink) {
            const ytMatch = videoUrl.match(/(?:youtube\.com\/(?:shorts\/|embed\/|watch\?v=)|youtu\.be\/)([^&?\s]+)/);
            const ytId = ytMatch ? ytMatch[1] : null;
            const isLocalVideo = /\.(mp4|webm|ogg)(\?.*)?$/i.test(videoUrl);
            const hasValidVideo = ytId !== null || isLocalVideo;

            if (ytId !== null) {
                if (dom.detailRecipePlayer) {
                    dom.detailRecipePlayer.pause?.();
                    dom.detailRecipePlayer.removeAttribute("src");
                    dom.detailRecipePlayer.load?.();
                    dom.detailRecipePlayer.classList.add("hidden");
                }
                if (dom.detailRecipeIframe) {
                    dom.detailRecipeIframe.src = `https://www.youtube.com/embed/${ytId}`;
                    dom.detailRecipeIframe.title = recipe?.video?.name || "Vídeo recepta";
                }
                dom.detailRecipeVideo?.classList.remove("hidden");
                dom.detailRecipeLink.classList.add("hidden");
                dom.detailRecipeNoVideo?.classList.add("hidden");
            } else if (isLocalVideo) {
                if (dom.detailRecipeIframe) dom.detailRecipeIframe.src = "";
                dom.detailRecipeVideo?.classList.add("hidden");
                dom.detailRecipeLink.classList.add("hidden");
                dom.detailRecipeNoVideo?.classList.add("hidden");
                if (dom.detailRecipePlayer) {
                    dom.detailRecipePlayer.src = videoUrl;
                    dom.detailRecipePlayer.title = recipe?.video?.name || "Vídeo recepta";
                    dom.detailRecipePlayer.setAttribute("aria-label", recipe?.video?.name || "Vídeo recepta");
                    dom.detailRecipePlayer.classList.remove("hidden");
                }
            } else {
                if (dom.detailRecipeIframe) dom.detailRecipeIframe.src = "";
                if (dom.detailRecipePlayer) {
                    dom.detailRecipePlayer.pause?.();
                    dom.detailRecipePlayer.removeAttribute("src");
                    dom.detailRecipePlayer.load?.();
                    dom.detailRecipePlayer.classList.add("hidden");
                }
                dom.detailRecipeVideo?.classList.add("hidden");
                dom.detailRecipeLink.classList.add("hidden");
                if (dom.detailRecipeNoVideo) {
                    dom.detailRecipeNoVideo.textContent = i18n("recipe_no_video", byLang("No s'ha trobat cap recepta per a aquest bolet.", "No recipe was found for this mushroom."));
                    dom.detailRecipeNoVideo.classList.remove("hidden");
                }
            }
        }

        // Mostrar ubicación geográfica
        const contentLocation = item.contentLocation;
        const locationName = getItemLocalizedLocation(item);
        const latitude = contentLocation?.geo?.latitude;
        const longitude = contentLocation?.geo?.longitude;

        if (dom.detailLocationName) {
            dom.detailLocationName.textContent = `${i18n("mushroom_location_prefix", byLang("Aquesta espècie es pot trobar a", "This species can be found in"))} ${locationName}.`;
        }

        // Inicializar mapa de detalle si hay coordenadas
        if (latitude && longitude) {
            // Esperar un momento para que el DOM esté visible antes de inicializar el mapa
            setTimeout(() => {
                initDetailMap(latitude, longitude, locationName, commonName);
            }, 100);
        } else if (dom.detailMap) {
            dom.detailMap.innerHTML = `<p class="text-sm text-[#618968] p-4">${i18n("mushroom_no_coords", byLang("No hi ha coordenades disponibles per aquest bolet.", "No coordinates available for this mushroom."))}</p>`;
        }

        state.speechText = `${item.name || commonName}. ${description}`.trim();
        stopSpeech();

        dom.landingHero?.classList.add("hidden");
        dom.sidebar?.classList.add("hidden");
        dom.catalogView?.classList.add("hidden");
        dom.detailView?.classList.remove("hidden");
        dom.aboutUs?.classList.add("hidden");
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

    // Gallery carousel controls
    dom.galleryPrevBtn?.addEventListener("click", previousImage);
    dom.galleryNextBtn?.addEventListener("click", nextImage);

    // Keyboard navigation for gallery
    window.addEventListener("keydown", (event) => {
        const isDetailViewOpen = dom.detailView && !dom.detailView.classList.contains("hidden");
        if (!isDetailViewOpen) return;

        if (event.key === "ArrowLeft") {
            event.preventDefault();
            previousImage();
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            nextImage();
        }
    });

    dom.audioButton?.addEventListener("click", toggleSpeech);

    dom.detailDescriptionAudio?.addEventListener("ended", () => {
        state.speechState = "stopped";
        setAudioButtonState("stopped");
    });

    dom.detailHeroImg?.addEventListener("error", () => {
        if (!dom.detailHeroImg) return;
        dom.detailHeroImg.srcset = "";
        dom.detailHeroImg.src = HERO_FALLBACK;
        if (dom.detailHeroSourceAvif) dom.detailHeroSourceAvif.srcset = "";
        if (dom.detailHeroSourceWebp) dom.detailHeroSourceWebp.srcset = "";
    });

    const unlockDeferredImages = () => {
        unlockDetailHeroImages();
        unlockCatalogImages();
    };

    window.addEventListener("pointermove", unlockDeferredImages, { once: true, passive: true, capture: true });
    window.addEventListener("pointerdown", unlockDeferredImages, { once: true, passive: true, capture: true });
    window.addEventListener("touchstart", unlockDeferredImages, { once: true, passive: true, capture: true });
    window.addEventListener("touchmove", unlockDeferredImages, { once: true, passive: true, capture: true });
    window.addEventListener("wheel", unlockDeferredImages, { once: true, passive: true, capture: true });
    window.addEventListener("scroll", unlockDeferredImages, { once: true, passive: true, capture: true });
    window.addEventListener("keydown", unlockDeferredImages, { once: true, capture: true });

    dom.searchInput?.addEventListener("input", (event) => {
        state.searchQuery = event.target.value;
        applyFilters();
    });

    const updateLanguageButtonsUI = () => {
        if (!dom.languageCaButton || !dom.languageEnButton) return;
        const activeButtonClass = "px-3 py-1 rounded-full text-xs font-bold transition-all bg-primary text-white shadow-sm";
        const inactiveButtonClass = "px-3 py-1 rounded-full text-xs font-bold transition-all text-[#618968]";
        dom.languageCaButton.className = state.lang === "ca" ? activeButtonClass : inactiveButtonClass;
        dom.languageEnButton.className = state.lang === "en" ? activeButtonClass : inactiveButtonClass;
        dom.languageCaButton.setAttribute("aria-pressed", state.lang === "ca" ? "true" : "false");
        dom.languageEnButton.setAttribute("aria-pressed", state.lang === "en" ? "true" : "false");
    };

    const rerenderDynamicForLanguage = () => {
        updateLanguageButtonsUI();
        setFilterButtonsUI();
        applyFilters();

        if (dom.detailView && !dom.detailView.classList.contains("hidden") && state.selectedEntry) {
            showDetailView(state.selectedEntry, false);
        }

        if (dom.gameView && !dom.gameView.classList.contains("hidden")) {
            if (dom.gameQuestion && !dom.gameQuestion.classList.contains("hidden")) {
                renderGameQuestion();
            } else if (dom.gameResults && !dom.gameResults.classList.contains("hidden")) {
                showGameResults();
            }
        }

        if (state.map && dom.mapModal && !dom.mapModal.classList.contains("hidden")) {
            loadAllMushroomsOnMap();
        }
    };

    document.addEventListener("i18n-change", (event) => {
        const nextLang = event?.detail?.lang === "en" ? "en" : "ca";
        if (state.lang === nextLang) return;
        state.lang = nextLang;
        rerenderDynamicForLanguage();
    });

    updateLanguageButtonsUI();
    upgradeMaterialIcons(document);

    dom.languageCaButton?.addEventListener("click", () => window.I18nManager?.setLanguage("ca"));
    dom.languageEnButton?.addEventListener("click", () => window.I18nManager?.setLanguage("en"));

    dom.seasonFilter?.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        const button = target.closest("button[data-season]");
        if (!button) return;
        const selectedSeason = button.dataset.season;
        if (state.selectedSeasons.has(selectedSeason)) {
            state.selectedSeasons.delete(selectedSeason);
        } else {
            state.selectedSeasons.add(selectedSeason);
        }
        setFilterButtonsUI();
    });

    dom.culinaryFilter?.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        const button = target.closest("button[data-score]");
        if (!button) return;
        const selectedScore = clampScore(button.dataset.score);
        state.minCulinary = state.minCulinary === selectedScore ? null : selectedScore;
        state.hoverCulinary = null;
        // Exclusive filter: reset toxicity when setting culinary
        if (state.minCulinary !== null) state.maxToxicity = null;
        setFilterButtonsUI();
    });

    dom.culinaryFilter?.addEventListener("mouseover", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        const button = target.closest("button[data-score]");
        if (!button) return;
        state.hoverCulinary = clampScore(button.dataset.score);
        setFilterButtonsUI();
    });

    dom.culinaryFilter?.addEventListener("mouseleave", () => {
        if (state.hoverCulinary === null) return;
        state.hoverCulinary = null;
        setFilterButtonsUI();
    });

    dom.culinaryFilter?.addEventListener("focusin", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        const button = target.closest("button[data-score]");
        if (!button) return;
        state.hoverCulinary = clampScore(button.dataset.score);
        setFilterButtonsUI();
    });

    dom.culinaryFilter?.addEventListener("focusout", (event) => {
        const nextTarget = event.relatedTarget;
        if (nextTarget instanceof Node && dom.culinaryFilter?.contains(nextTarget)) return;
        if (state.hoverCulinary === null) return;
        state.hoverCulinary = null;
        setFilterButtonsUI();
    });

    dom.toxicityFilter?.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        const button = target.closest("button[data-score]");
        if (!button) return;
        const selectedScore = clampScore(button.dataset.score);
        state.maxToxicity = state.maxToxicity === selectedScore ? null : selectedScore;
        state.hoverToxicity = null;
        // Exclusive filter: reset culinary when setting toxicity
        if (state.maxToxicity !== null) state.minCulinary = null;
        setFilterButtonsUI();
    });

    dom.toxicityFilter?.addEventListener("mouseover", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        const button = target.closest("button[data-score]");
        if (!button) return;
        state.hoverToxicity = clampScore(button.dataset.score);
        setFilterButtonsUI();
    });

    dom.toxicityFilter?.addEventListener("mouseleave", () => {
        if (state.hoverToxicity === null) return;
        state.hoverToxicity = null;
        setFilterButtonsUI();
    });

    dom.toxicityFilter?.addEventListener("focusin", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;
        const button = target.closest("button[data-score]");
        if (!button) return;
        state.hoverToxicity = clampScore(button.dataset.score);
        setFilterButtonsUI();
    });

    dom.toxicityFilter?.addEventListener("focusout", (event) => {
        const nextTarget = event.relatedTarget;
        if (nextTarget instanceof Node && dom.toxicityFilter?.contains(nextTarget)) return;
        if (state.hoverToxicity === null) return;
        state.hoverToxicity = null;
        setFilterButtonsUI();
    });

    dom.applyFiltersButton?.addEventListener("click", applyFilters);

    dom.clearFiltersButton?.addEventListener("click", () => {
        resetCatalogFilters();
        setFilterButtonsUI();
        updateSortButtonsUI();
        applyFilters();
    });

    dom.culinarySortBtn?.addEventListener("click", () => {
        // Cycle: null -> desc -> asc -> null
        if (state.culinarySortOrder === null) {
            state.culinarySortOrder = "desc";
        } else if (state.culinarySortOrder === "desc") {
            state.culinarySortOrder = "asc";
        } else {
            state.culinarySortOrder = null;
        }
        // Reset toxicity sort when enabling culinary sort
        if (state.culinarySortOrder !== null) {
            state.toxicitySortOrder = null;
        }
        updateSortButtonsUI();
        applyFilters();
    });

    dom.toxicitySortBtn?.addEventListener("click", () => {
        // Cycle: null -> desc -> asc -> null
        if (state.toxicitySortOrder === null) {
            state.toxicitySortOrder = "desc";
        } else if (state.toxicitySortOrder === "desc") {
            state.toxicitySortOrder = "asc";
        } else {
            state.toxicitySortOrder = null;
        }
        // Reset culinary sort when enabling toxicity sort
        if (state.toxicitySortOrder !== null) {
            state.culinarySortOrder = null;
        }
        updateSortButtonsUI();
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

    fetchJson("./bolets.json", null)
        .then((boletsData) => {
            if (!boletsData) throw new Error("No s'ha pogut carregar bolets.json");

            const graph = Array.isArray(boletsData?.["@graph"]) ? boletsData["@graph"] : [];
            const list = graph.find((node) => node?.["@type"] === "ItemList");
            const elements = Array.isArray(list?.itemListElement) ? list.itemListElement : [];

            resetCatalogFilters();
            state.entries = elements;
            rerenderDynamicForLanguage();

            const pos = Number(new URLSearchParams(window.location.search).get("pos"));
            if (pos) {
                openDetailByPosition(pos, false);
                return;
            }
            window.scrollTo(0, 0);
            showCatalogView(false);
        })
        .catch((err) => {
            console.error("Error carregant dades:", err);
            dom.grid.innerHTML = "";
            if (dom.count) dom.count.textContent = formatSpeciesCount(0);
        });

    // ============================================
    // MAP FUNCTIONALITY (Geolocation API + Leaflet)
    // ============================================

    const loadLeafletAssets = (base = "https://unpkg.com/leaflet@1.9.4/dist") => {
        if (typeof window === "undefined") return Promise.reject(new Error("No window"));
        if (window.L) return Promise.resolve();
        if (window._leafletLoading) return window._leafletLoading;

        window._leafletLoading = new Promise((resolve, reject) => {
            const cssHref = `${base}/leaflet.css`;
            const jsSrc = `${base}/leaflet.js`;

            // Preload stylesheet so it doesn't block first render, then make it a stylesheet when loaded
            const link = document.createElement("link");
            link.rel = "preload";
            link.as = "style";
            link.href = cssHref;
            link.crossOrigin = "";
            link.onload = () => {
                try { link.rel = "stylesheet"; } catch (e) { /* ignore */ }
            };
            link.onerror = () => {
                // still attempt script load even if CSS preload fails
                console.warn("Leaflet CSS preload failed");
            };
            document.head.appendChild(link);

            // Load script async
            const script = document.createElement("script");
            script.src = jsSrc;
            script.async = true;
            script.onload = () => {
                // give browser a tick to apply stylesheet
                setTimeout(() => {
                    resolve();
                }, 50);
            };
            script.onerror = () => reject(new Error("Leaflet JS failed to load"));
            document.head.appendChild(script);
        }).finally(() => {
            // cleanup loader flag after settled
            window._leafletLoading = null;
        });

        return window._leafletLoading;
    };

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

        carregarPlantesAlMapa(state.map).catch((error) => {
            console.error("Error carregant plantes al mapa:", error);
        });
    };

    const carregarPlantesAlMapa = async (mapa) => {
        if (!mapa || typeof L === "undefined") return [];

        const remoteBaseUrl = "https://www.florabalear.online";
        const plantesData = await fetchJson(`${remoteBaseUrl}/data/plants.json`, null);
        if (!plantesData) throw new Error("No s'ha pogut carregar plants.json");

        const graph = Array.isArray(plantesData?.["@graph"]) ? plantesData["@graph"] : [];
        const list = plantesData?.["@type"] === "ItemList"
            ? plantesData
            : graph.find((node) => node?.["@type"] === "ItemList");
        const elements = Array.isArray(list?.itemListElement) ? list.itemListElement : [];

        state.plantMarkers.forEach((marker) => marker.remove());
        state.plantMarkers = [];

        const getPlantMarkerIcon = () => L.divIcon({
            className: "custom-marker",
            html: `<div style="background-color: #8b5cf6; width: 25px; height: 25px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3); display:flex; align-items:center; justify-content:center; color:white; font-size:14px; line-height:1;">${getIconGlyph("eco")}</div>`,
            iconSize: [25, 25],
            iconAnchor: [12, 12],
            popupAnchor: [0, -12]
        });

        elements.forEach((entry) => {
            const item = entry.item;
            if (!item) return;

            const coordinatesProperty = Array.isArray(item?.additionalProperty)
                ? item.additionalProperty.find((prop) => String(prop?.name || "").toLowerCase() === "coordenades")
                : null;
            const coordinatesList = Array.isArray(coordinatesProperty?.value)
                ? coordinatesProperty.value
                : [];

            if (coordinatesList.length === 0) return;

            const commonName = getItemLocalizedName(item);
            const scientific = item.name || "Taxon";
            const locationName = getItemLocalizedLocation(item);
            coordinatesList.forEach((coordinates) => {
                const latitude = Number(coordinates?.latitude);
                const longitude = Number(coordinates?.longitude);
                if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return;

                const coordinateName = coordinates?.name || locationName;

                const popupContent = `
                <div style="min-width: 250px;">
                    <h3 style="font-size: 1.1rem; font-weight: bold; margin: 0 0 4px 0; color: #111812;">
                        ${commonName}
                    </h3>
                    <p style="font-size: 0.85rem; font-style: italic; color: var(--text-muted); margin: 0 0 8px 0;">
                        ${scientific}
                    </p>
                    <p style="font-size: 0.85rem; margin: 4px 0; color: #4a5f4d;">
                        <strong>📍 ${byLang("Ubicació", "Location") }:</strong> ${escapeHtml(coordinateName)}
                    </p>
                    <p style="font-size: 0.85rem; margin: 4px 0; color: #4a5f4d;">
                        <strong>Lat:</strong> ${escapeHtml(Number(latitude).toFixed(6))} <strong>Lon:</strong> ${escapeHtml(Number(longitude).toFixed(6))}
                    </p>
                    <p style="font-size: 0.85rem; margin: 4px 0; color: #4a5f4d;">
                        <a href="https://www.florabalear.online" target="_blank" rel="noopener noreferrer">Més info a florabalear.online</a>
                    </p>
                </div>
                `;

                const marker = L.marker([latitude, longitude], { icon: getPlantMarkerIcon() })
                    .addTo(mapa)
                    .bindPopup(popupContent, { maxWidth: 300 });

                state.plantMarkers.push(marker);
            });
        });

        return state.plantMarkers;
    };

    window.carregarPlantesAlMapa = carregarPlantesAlMapa;

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
                html: `<div style="background-color: ${color}; width: 25px; height: 25px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3); display:flex; align-items:center; justify-content:center; color:white; font-size:14px; line-height:1;">${getIconGlyph("mushroom")}</div>`,
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

            const commonName = getItemLocalizedName(item);
            const scientific = item.name || "Taxon";
            const locationName = getItemLocalizedLocation(item);
            const toxicity = clampScore(getPropertyValue(item, "Toxicitat (1-5)"));
            const culinary = clampScore(getPropertyValue(item, "Valor culinari (1-5)"));
            const season = getItemLocalizedSeason(item);
            let image = CARD_FALLBACK;
            if (Array.isArray(item.image) && item.image.length > 0) {
                image = item.image[0]?.contentUrl || CARD_FALLBACK;
            } else if (typeof item.image === "string") {
                image = item.image;
            }

            const culinaryLabel = byLang("Culinari", "Culinary");
            const toxicityLabel = byLang("Toxicitat", "Toxicity");
            const seasonLabel = byLang("Temporada", "Season");
            const locationPin = byLang("Ubicació", "Location");

            // Crear popup con información
            const imageBase = image.replace(/\.[^./]+$/, "");
            const popupContent = `
                <div style="min-width: 250px;">
                    <picture>
                        <source type="image/avif" srcset="${imageBase}-mitja.avif" />
                        <source type="image/webp" srcset="${imageBase}-mitja.webp" />
                        <img src="${imageBase}-mitja.jpg" alt="${escapeHtml(commonName)}"
                             style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;"
                             onerror="this.onerror=null;this.src='${CARD_FALLBACK}'" />
                    </picture>
                    <h3 style="font-size: 1.1rem; font-weight: bold; margin: 0 0 4px 0; color: #111812;">
                        ${commonName}
                    </h3>
                    <p style="font-size: 0.85rem; font-style: italic; color: var(--text-muted); margin: 0 0 8px 0;">
                        ${scientific}
                    </p>
                    <p style="font-size: 0.85rem; margin: 4px 0; color: var(--text-soft);">
                        <strong>📍 ${locationPin}:</strong> ${locationName}
                    </p>
                    <p style="font-size: 0.85rem; margin: 4px 0; color: var(--text-soft);">
                        <strong>🍴 ${culinaryLabel}:</strong> ${culinary}/5
                    </p>
                    <p style="font-size: 0.85rem; margin: 4px 0; color: ${toxicity >= 3 ? '#dc2626' : '#4a5f4d'};">
                        <strong>☠️ ${toxicityLabel}:</strong> ${toxicity}/5
                    </p>
                    <p style="font-size: 0.85rem; margin: 4px 0; color: #4a5f4d;">
                        <strong>📅 ${seasonLabel}:</strong> ${season}
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
            alert(byLang(
                "El teu navegador no suporta geolocalització. Prova amb un navegador modern com Chrome, Firefox o Safari.",
                "Your browser does not support geolocation. Try a modern browser such as Chrome, Firefox, or Safari."
            ));
            return;
        }

        if (!state.map) initMap();

        // Cambiar botón a estado "cargando"
        if (dom.getLocationBtn) {
            const originalHTML = dom.getLocationBtn.innerHTML;
            dom.getLocationBtn.disabled = true;
            dom.getLocationBtn.innerHTML = `<span class="ui-icon animate-spin" aria-hidden="true">${getIconGlyph("progress_activity")}</span><span>${byLang("Obtenint ubicació...", "Getting location...")}</span>`;

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
                                <strong>📍 ${byLang("La teva ubicació", "Your location")}</strong><br>
                                <small>Lat: ${lat.toFixed(5)}</small><br>
                                <small>Lon: ${lon.toFixed(5)}</small><br>
                                <small class="text-gray-500">${byLang("Precisió", "Accuracy")}: ${Math.round(accuracy)}m</small>
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

                    let message = byLang("No s'ha pogut obtenir la teva ubicació. ", "Could not get your location. ");

                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            message += byLang(
                                "Has denegat el permís de geolocalització. Pots habilitar-lo des de la configuració del navegador.",
                                "You denied geolocation permission. You can enable it in your browser settings."
                            );
                            break;
                        case error.POSITION_UNAVAILABLE:
                            message += byLang("La informació de la ubicació no està disponible.", "Location information is unavailable.");
                            break;
                        case error.TIMEOUT:
                            message += byLang("La sol·licitud ha caducat. Torna-ho a intentar.", "The request timed out. Please try again.");
                            break;
                        default:
                            message += byLang("S'ha produït un error desconegut.", "An unknown error occurred.");
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

    const openMapModal = async () => {
        if (!dom.mapModal) return;

        dom.mapModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";

        try {
            await loadLeafletAssets();
        } catch (err) {
            console.error("Error carregant recursos de Leaflet:", err);
            // proceed gracefully; initMap will no-op if L is undefined
        }

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
        dom.aboutUs?.classList.add("hidden");
        dom.pageFooter?.classList.add("hidden");
        dom.gameView?.classList.remove("hidden");
        dom.gameIntro?.classList.remove("hidden");
        dom.gameQuestion?.classList.add("hidden");
        dom.gameResults?.classList.add("hidden");
        dom.main?.classList.add("game-mode");
        window.scrollTo({ top: 0, behavior: "smooth" });

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
        if (dom.gameQuestionCounter) dom.gameQuestionCounter.textContent = formatGameQuestionCounter(current, total);
        if (dom.gameProgressPct) dom.gameProgressPct.textContent = `${pct}%`;
        if (dom.gameProgressBar) dom.gameProgressBar.style.width = `${pct}%`;
        if (dom.gameProgressBarWrap) dom.gameProgressBarWrap.setAttribute("aria-valuenow", pct);
        if (dom.gameScoreDisplay) dom.gameScoreDisplay.textContent = formatGameScoreDisplay(state.gameScore, state.gameCurrentIndex);

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
                            <span class="ui-icon text-[#dbe6dd] group-hover:text-primary transition-colors text-lg flex-shrink-0 ml-2" aria-hidden="true">${getIconGlyph("arrow_forward_ios")}</span>
                        </button>
                    `;
                })
                .join("");
        }

        // Hide feedback and next button
        if (dom.gameFeedback) dom.gameFeedback.classList.add("hidden");
        if (dom.gameNextBtn) dom.gameNextBtn.classList.add("hidden");

        startQuestionTimer();
    };

    const handleGameAnswer = (selectedKey) => {
        stopQuestionTimer();
        if (state.gameAnswered) return;
        state.gameAnswered = true;

        const question = state.gameQuestions[state.gameCurrentIndex];
        const correctKey = getCorrectAnswerKey(question);
        const isCorrect = selectedKey === correctKey;

        if (isCorrect) state.gameScore += 1;

        // Update score display
        if (dom.gameScoreDisplay) {
            dom.gameScoreDisplay.textContent = formatGameScoreDisplay(state.gameScore, state.gameCurrentIndex + 1);
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
                const icon = btn.querySelector(".ui-icon");

                if (key === correctKey) {
                    btn.classList.add("border-primary", "bg-primary/10");
                    btn.querySelector("span:first-child").classList.add("text-primary");
                    if (icon) {
                        icon.textContent = getIconGlyph("check_circle");
                        icon.classList.add("text-primary");
                    }
                } else if (key === selectedKey && !isCorrect) {
                    btn.classList.add("border-red-400", "bg-red-50");
                    btn.querySelector("span:first-child").classList.add("text-red-600");
                    if (icon) {
                        icon.textContent = getIconGlyph("cancel");
                        icon.classList.add("text-red-500");
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
                dom.gameFeedbackIcon.textContent = getIconGlyph("check_circle");
                dom.gameFeedbackIcon.classList.add("text-primary");
                dom.gameFeedbackTitle.textContent = byLang("Correcte!", "Correct!");
                dom.gameFeedbackTitle.className = "font-extrabold text-base mb-1 text-primary";
            } else {
                dom.gameFeedback.classList.add("border-red-300", "bg-red-50");
                dom.gameFeedbackIcon.textContent = getIconGlyph("cancel");
                dom.gameFeedbackIcon.classList.add("text-red-500");
                dom.gameFeedbackTitle.textContent = byLang("Incorrecte", "Incorrect");
                dom.gameFeedbackTitle.className = "font-extrabold text-base mb-1 text-red-600";
            }

            dom.gameFeedbackExplanation.textContent = getQuestionExplanation(question);
        }

        // Next/finish button
        if (dom.gameNextBtn && dom.gameNextLabel) {
            const isLast = state.gameCurrentIndex === state.gameQuestions.length - 1;
            dom.gameNextLabel.textContent = isLast
                ? byLang("Veure resultats", "See results")
                : i18n("game_next_button", byLang("Següent pregunta", "Next question"));
            dom.gameNextBtn.classList.remove("hidden");
        }
    };

    const showGameResults = () => {
        stopQuestionTimer();
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
        if (dom.gameCorrectLabel) dom.gameCorrectLabel.textContent = i18n("game_correct_label", byLang("Correctes", "Correct"));
        if (dom.gameWrongLabel) dom.gameWrongLabel.textContent = i18n("game_wrong_label", byLang("Incorrectes", "Incorrect"));
        if (dom.gameReplayLabel) dom.gameReplayLabel.textContent = i18n("game_replay_button", byLang("Tornar a jugar", "Play again"));
        if (dom.gameCatalogLabel) dom.gameCatalogLabel.textContent = i18n("game_catalog_button", byLang("Veure catàleg", "View catalog"));

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
            dom.gameResultsIcon.innerHTML = `<span class="ui-icon ${iconColor} text-6xl" aria-hidden="true">${getIconGlyph(iconName)}</span>`;
        }
        if (dom.gameResultsTitle) {
            dom.gameResultsTitle.textContent = {
                gameResultsTitlePerfect: byLang("Perfecte! Ets un expert!", "Perfect! You're an expert!"),
                gameResultsTitleGreat: byLang("Excel·lent! Molt bé!", "Excellent! Well done!"),
                gameResultsTitleGood: byLang("Bé! Segueix aprenent!", "Good! Keep learning!"),
                gameResultsTitleFail: byLang("Continua practicant!", "Keep practising!")
            }[titleKey] || byLang("Continua practicant!", "Keep practising!");
        }
        if (dom.gameResultsSubtitle) dom.gameResultsSubtitle.textContent = formatGameResultsSubtitle(score, total);
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
        if (state.allQuizQuestions.length === 0) {
            alert(byLang("No s'ha pogut carregar el quiz. Torna-ho a intentar.", "Failed to load the quiz. Please try again."));
            return;
        }
        state.gameCurrentIndex = 0;
        state.gameScore = 0;
        state.gameAnswered = false;
        state.gameQuestions = shuffleArray([...state.allQuizQuestions]).slice(0, state.gameQuestionCount);

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

    const stopQuestionTimer = () => {
        if (state.gameTimerInterval !== null) {
            clearInterval(state.gameTimerInterval);
            state.gameTimerInterval = null;
        }
        if (dom.gameTimerDisplay) dom.gameTimerDisplay.classList.add("hidden");
    };

    const startQuestionTimer = () => {
        stopQuestionTimer();
        if (!state.gameTimeLimitEnabled) return;
        state.gameTimeRemaining = 30;
        if (dom.gameTimerSeconds) dom.gameTimerSeconds.textContent = "30";
        if (dom.gameTimerDisplay) dom.gameTimerDisplay.classList.remove("hidden");
        dom.gameTimerDisplay?.classList.add("flex");
        state.gameTimerInterval = setInterval(() => {
            state.gameTimeRemaining -= 1;
            if (dom.gameTimerSeconds) dom.gameTimerSeconds.textContent = String(state.gameTimeRemaining);
            if (state.gameTimeRemaining <= 0) {
                stopQuestionTimer();
                if (!state.gameAnswered) handleGameAnswer(null);
            }
        }, 1000);
    };

    // Load quiz.json following the QuizAPI response pattern
    const loadQuizData = () => fetchJson("./quiz.json", null).then((quizData) => {
        if (!quizData) return;
        const questions = Array.isArray(quizData?.hasPart) ? quizData.hasPart : [];
        state.allQuizQuestions = questions;
    });

    const setQuestionCount = (count) => {
        state.gameQuestionCount = count;
        const activeClass = ["bg-primary", "text-white"];
        const inactiveClass = ["bg-white", "text-[#618968]", "hover:bg-primary/5"];
        if (dom.gameQ10Btn && dom.gameQ20Btn) {
            if (count === 10) {
                dom.gameQ10Btn.classList.add(...activeClass);
                dom.gameQ10Btn.classList.remove(...inactiveClass);
                dom.gameQ20Btn.classList.remove(...activeClass);
                dom.gameQ20Btn.classList.add(...inactiveClass);
            } else {
                dom.gameQ20Btn.classList.add(...activeClass);
                dom.gameQ20Btn.classList.remove(...inactiveClass);
                dom.gameQ10Btn.classList.remove(...activeClass);
                dom.gameQ10Btn.classList.add(...inactiveClass);
            }
        }
    };

    const setTimeLimitEnabled = (enabled) => {
        state.gameTimeLimitEnabled = enabled;
        const activeClass = ["bg-primary", "text-white"];
        const inactiveClass = ["bg-white", "text-[#618968]", "hover:bg-primary/5"];
        if (dom.gameTimeOffBtn && dom.gameTimeOnBtn) {
            if (!enabled) {
                dom.gameTimeOffBtn.classList.add(...activeClass);
                dom.gameTimeOffBtn.classList.remove(...inactiveClass);
                dom.gameTimeOnBtn.classList.remove(...activeClass);
                dom.gameTimeOnBtn.classList.add(...inactiveClass);
            } else {
                dom.gameTimeOnBtn.classList.add(...activeClass);
                dom.gameTimeOnBtn.classList.remove(...inactiveClass);
                dom.gameTimeOffBtn.classList.remove(...activeClass);
                dom.gameTimeOffBtn.classList.add(...inactiveClass);
            }
        }
    };

    dom.gameQ10Btn?.addEventListener("click", () => setQuestionCount(10));
    dom.gameQ20Btn?.addEventListener("click", () => setQuestionCount(20));
    dom.gameTimeOffBtn?.addEventListener("click", () => setTimeLimitEnabled(false));
    dom.gameTimeOnBtn?.addEventListener("click", () => setTimeLimitEnabled(true));

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

    dom.navCatalog?.addEventListener("click", () => {
        if (dom.mapModal && !dom.mapModal.classList.contains("hidden")) {
            closeMapModal();
        }
        showCatalogView(true);
    });

    dom.navGame?.addEventListener("click", () => {
        loadQuizData().then(showGameView);
    });

})();