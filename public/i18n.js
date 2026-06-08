const I18nManager = (() => {
    const LANG_STORAGE_KEY = "bolets-lang";
    const LANGS = ["ca", "en"];

    let currentLang = localStorage.getItem(LANG_STORAGE_KEY) === "en" ? "en" : "ca";
    let translations = {};

    const loadTranslations = async () => {
        try {
            const [caResponse, enResponse] = await Promise.all([
                fetch("./ca.json"),
                fetch("./en.json")
            ]);

            if (!caResponse.ok || !enResponse.ok) {
                console.error("Error carregant fitxers de traducció");
                return false;
            }

            translations.ca = await caResponse.json();
            translations.en = await enResponse.json();
            return true;
        } catch (error) {
            console.error("Error carregant les traduccions:", error);
            return false;
        }
    };

    const t = (key, defaultValue = key) => {
        const value = translations[currentLang]?.[key];
        return value !== undefined ? value : defaultValue;
    };

    const updateDOM = () => {
        const elements = document.querySelectorAll("[data-i18n]");

        elements.forEach((element) => {
            const key = element.getAttribute("data-i18n");
            const translatedText = t(key);

            if (translatedText === undefined) return;

            if (element.tagName === "META") {
                element.setAttribute("content", translatedText);
                return;
            }

            if (element.hasAttribute("placeholder")) {
                element.placeholder = translatedText;
            }

            if (element.hasAttribute("data-i18n-alt")) {
                element.alt = translatedText;
            }

            if (element.hasAttribute("data-i18n-title")) {
                element.title = translatedText;
            }

            if (element.hasAttribute("data-i18n-aria")) {
                element.setAttribute("aria-label", translatedText);
            }

            if (element.hasAttribute("data-i18n-html")) {
                element.innerHTML = translatedText;
                return;
            }

            if (
                element.hasAttribute("placeholder") ||
                element.hasAttribute("data-i18n-alt") ||
                element.hasAttribute("data-i18n-title") ||
                element.hasAttribute("data-i18n-aria")
            ) {
                return;
            }

            element.textContent = translatedText;
        });

        document.documentElement.lang = currentLang;
        localStorage.setItem(LANG_STORAGE_KEY, currentLang);
    };

    const setLanguage = (lang) => {
        if (!LANGS.includes(lang) || currentLang === lang) return;

        currentLang = lang;
        updateDOM();

        document.dispatchEvent(new CustomEvent("i18n-change", { detail: { lang: currentLang } }));
    };

    const getCurrentLanguage = () => currentLang;

    const init = async () => {
        const loaded = await loadTranslations();
        if (!loaded) {
            console.warn("No s'han pogut carregar les traduccions");
            return false;
        }

        updateDOM();
        return true;
    };

    return {
        init,
        t,
        setLanguage,
        getCurrentLanguage,
        updateDOM
    };
})();

window.I18nManager = I18nManager;

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        I18nManager.init();
    });
} else {
    I18nManager.init();
}
