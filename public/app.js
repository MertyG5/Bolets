(function () {
    const dom = {
        grid: document.getElementById("mushroom-grid"),
        count: document.getElementById("species-count"),
        culinaryFilter: document.getElementById("culinary-filter"),
        toxicityFilter: document.getElementById("toxicity-filter"),
        culinaryFilterLabel: document.getElementById("culinary-filter-label"),
        toxicityFilterLabel: document.getElementById("toxicity-filter-label"),
        applyFiltersButton: document.getElementById("apply-filters"),
        clearFiltersButton: document.getElementById("clear-filters"),
        catalogView: document.getElementById("catalog-view"),
        detailView: document.getElementById("detail-view"),
        detailBackButton: document.getElementById("detail-back-btn"),
        detailHeroImage: document.getElementById("detail-hero-image"),
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
        main: document.getElementById("main-content"),
        sidebar: document.querySelector("#main-content > aside"),
        landingHero: document.getElementById("landing-hero")
    };

    if (!dom.grid) {
        return;
    }

    const state = {
        entries: [],
        filteredEntries: [],
        minCulinary: null,
        maxToxicity: null,
        selectedEntry: null,
        speechText: "",
        utterance: null,
        speechState: "stopped" // stopped | playing | paused
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
        return Math.min(5, Math.max(1, Math.round(parsed)));
    };

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

    const setFilterButtonsUI = () => {
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
                if (icon) {
                    icon.style.fontVariationSettings = active ? "'FILL' 1" : "'FILL' 0";
                }
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
    };

    const renderCard = (entry) => {
        const item = entry?.item || {};
        const position = Number(entry?.position) || 1;
        const commonName = Array.isArray(item.alternateName) && item.alternateName.length > 0
            ? item.alternateName[0]
            : item.name || "Bolet";
        const scientificName = item.name || "Taxon desconegut";
        const image = item.image || "https://picsum.photos/800/600?blur=1";

        const scores = getScores(item);
        const isToxic = scores.toxicity >= 3;
        const isLethal = scores.toxicity >= 5;

        const cardBorder = isToxic ? "border border-red-200 ring-1 ring-red-100" : "border border-primary/5";
        const imageStyle = isToxic ? "grayscale" : "";
        const nameClass = isToxic ? "text-lg font-bold text-red-700" : "text-lg font-bold text-[#111812] group-hover:text-primary transition-colors";
        const badge = isToxic
            ? `<span class=\"absolute top-3 right-3 ${isLethal ? "bg-red-600" : "bg-red-500"} px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white shadow-sm\">${isLethal ? "Molt tòxic" : "Tòxic"}</span>`
            : "<span class=\"absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm\">Comestible</span>";

        return `
            <button type=\"button\" data-pos=\"${position}\" class=\"open-detail text-left block w-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow ${cardBorder} group\">
                <div class=\"h-48 overflow-hidden relative\">
                    <img class=\"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${imageStyle}\" alt=\"${escapeHtml(commonName)}\" src=\"${escapeHtml(image)}\"/>
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
            const culinaryOk = state.minCulinary === null || scores.culinary >= state.minCulinary;
            const toxicityOk = state.maxToxicity === null || scores.toxicity <= state.maxToxicity;
            return culinaryOk && toxicityOk;
        });

        if (dom.count) {
            dom.count.textContent = `${state.filteredEntries.length} espècies trobades`;
        }

        dom.grid.innerHTML = state.filteredEntries.map((entry) => renderCard(entry)).join("");
    };

    const setAudioButtonState = (mode) => {
        if (!dom.audioButton || !dom.audioButtonIcon || !dom.audioButtonText) {
            return;
        }

        if (mode === "playing") {
            dom.audioButton.setAttribute("aria-pressed", "true");
            dom.audioButtonIcon.textContent = "pause";
            dom.audioButtonText.textContent = "Pausa";
            if (dom.audioStatus) dom.audioStatus.textContent = "Reproduint";
            return;
        }

        if (mode === "paused") {
            dom.audioButton.setAttribute("aria-pressed", "true");
            dom.audioButtonIcon.textContent = "play_arrow";
            dom.audioButtonText.textContent = "Reprendre";
            if (dom.audioStatus) dom.audioStatus.textContent = "En pausa";
            return;
        }

        dom.audioButton.setAttribute("aria-pressed", "false");
        dom.audioButtonIcon.textContent = "play_arrow";
        dom.audioButtonText.textContent = "Escolta";
        if (dom.audioStatus) dom.audioStatus.textContent = "Preparat";
    };

    const stopSpeech = () => {
        const synth = window.speechSynthesis;
        if (synth) {
            synth.cancel();
        }
        state.utterance = null;
        state.speechState = "stopped";
        setAudioButtonState("stopped");
    };

    const playSpeech = () => {
        const synth = window.speechSynthesis;
        if (!synth || !state.speechText) {
            return;
        }

        const utterance = new SpeechSynthesisUtterance(state.speechText);
        utterance.lang = "ca-ES";
        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        utterance.onend = () => {
            if (state.utterance === utterance) {
                state.utterance = null;
                state.speechState = "stopped";
                setAudioButtonState("stopped");
            }
        };

        utterance.onerror = () => {
            if (state.utterance === utterance) {
                state.utterance = null;
                state.speechState = "stopped";
                setAudioButtonState("stopped");
            }
        };

        state.utterance = utterance;
        state.speechState = "playing";
        setAudioButtonState("playing");
        synth.speak(utterance);
    };

    const toggleSpeech = () => {
        const synth = window.speechSynthesis;
        if (!synth || !state.speechText) {
            return;
        }

        if (state.speechState === "playing" && synth.speaking) {
            synth.pause();
            state.speechState = "paused";
            setAudioButtonState("paused");
            return;
        }

        if (state.speechState === "paused" && synth.paused) {
            synth.resume();
            state.speechState = "playing";
            setAudioButtonState("playing");
            return;
        }

        playSpeech();
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

    const showCatalogView = () => {
        stopSpeech();
        dom.catalogView?.classList.remove("hidden");
        dom.detailView?.classList.add("hidden");
        dom.sidebar?.classList.remove("hidden");
        dom.landingHero?.classList.remove("hidden");
        dom.main?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const showDetailView = (entry, pushHistory) => {
        if (!entry?.item) {
            return;
        }

        state.selectedEntry = entry;
        const item = entry.item;

        const commonName = Array.isArray(item.alternateName) && item.alternateName.length > 0
            ? item.alternateName[0]
            : item.name || "Bolet";
        const scientific = item.name || "Taxon";
        const description = item.description || "Sense descripció.";
        const image = item.image || "";
        const tree = getPropertyValue(item, "Arbre associat") || "No especificat";
        const season = getPropertyValue(item, "Època") || "No especificada";
        const culinaryScore = clampScore(getPropertyValue(item, "Valor culinari (1-5)"));
        const toxicityScore = clampScore(getPropertyValue(item, "Toxicitat (1-5)"));
        const isToxic = toxicityScore >= 3;

        document.title = `Bolets de Mallorca - ${commonName}`;

        if (dom.detailBreadcrumbName) dom.detailBreadcrumbName.textContent = commonName;
        if (dom.detailMushroomName) dom.detailMushroomName.textContent = commonName;
        if (dom.detailMushroomScientific) dom.detailMushroomScientific.textContent = scientific;
        if (dom.detailHeroImage && image) dom.detailHeroImage.style.backgroundImage = `url("${image}")`;

        if (dom.detailCharacteristics) dom.detailCharacteristics.textContent = description;
        if (dom.detailHabitat) dom.detailHabitat.textContent = `Arbre associat principal: ${tree}.`;
        if (dom.detailSeasonText) dom.detailSeasonText.textContent = `Època habitual de recol·lecció: ${season}.`;

        if (dom.detailCulinaryText) {
            dom.detailCulinaryText.textContent = culinaryScore >= 4
                ? "Bolet molt valorat gastronòmicament en receptes tradicionals i modernes."
                : "Bolet amb valor culinari moderat; convé una identificació correcta abans de cuinar-lo.";
        }

        if (dom.detailToxicityText) {
            dom.detailToxicityText.textContent = isToxic
                ? "Cal extremar la precaució: possible toxicitat segons preparació i identificació."
                : "Generalment considerat segur quan està ben identificat.";
        }

        renderStars(dom.detailCulinaryStars, culinaryScore, "text-primary", "text-[#dbe6dd]");
        renderStars(dom.detailToxicityStars, toxicityScore, isToxic ? "text-red-500" : "text-red-200", "text-red-200");

        if (dom.detailExtra1) dom.detailExtra1.textContent = season;
        if (dom.detailExtra2) dom.detailExtra2.textContent = tree;

        const recipe = item.subjectOf && item.subjectOf["@type"] === "Recipe" ? item.subjectOf : null;
        const ingredients = Array.isArray(recipe?.recipeIngredient) ? recipe.recipeIngredient : [];
        const videoUrl = recipe?.video?.contentUrl || "#";

        if (dom.detailExtra3) {
            dom.detailExtra3.textContent = ingredients.length > 0
                ? ingredients.slice(0, 3).join(" + ")
                : "Consum responsable";
        }

        if (dom.detailRecipeTitle) {
            dom.detailRecipeTitle.textContent = recipe?.name
                ? `Video: ${recipe.name}`
                : "Video: preparació recomanada";
        }

        if (dom.detailRecipeDescription) {
            dom.detailRecipeDescription.textContent = ingredients.length > 0
                ? `Ingredients destacats: ${ingredients.join(", ")}.`
                : "No hi ha recepta associada per aquest bolet.";
        }

        if (dom.detailRecipeLink) {
            dom.detailRecipeLink.href = videoUrl;
            dom.detailRecipeLink.classList.toggle("pointer-events-none", videoUrl === "#");
            dom.detailRecipeLink.classList.toggle("opacity-50", videoUrl === "#");
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

    dom.audioButton?.addEventListener("click", () => {
        toggleSpeech();
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
        state.minCulinary = null;
        state.maxToxicity = null;
        setFilterButtonsUI();
        applyFilters();
    });

    window.addEventListener("popstate", () => {
        const pos = Number(new URLSearchParams(window.location.search).get("pos"));
        if (pos) {
            openDetailByPosition(pos, false);
            return;
        }
        showCatalogView();
    });

    window.addEventListener("beforeunload", () => {
        stopSpeech();
    });

    fetch("./bolets.json")
        .then((response) => {
            if (!response.ok) throw new Error("No s'ha pogut carregar bolets.json");
            return response.json();
        })
        .then((data) => {
            const graph = Array.isArray(data?.["@graph"]) ? data["@graph"] : [];
            const list = graph.find((node) => node?.["@type"] === "ItemList");
            const elements = Array.isArray(list?.itemListElement) ? list.itemListElement : [];

            state.entries = elements;
            setFilterButtonsUI();
            applyFilters();

            const pos = Number(new URLSearchParams(window.location.search).get("pos"));
            if (pos) {
                openDetailByPosition(pos, false);
                return;
            }
            showCatalogView();
        })
        .catch(() => {
            dom.grid.innerHTML = "";
            if (dom.count) dom.count.textContent = "0 espècies trobades";
        });
})();
