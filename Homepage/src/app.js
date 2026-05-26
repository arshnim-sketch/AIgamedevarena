(function () {
  const locales = window.AIGDA_LOCALES || { ko: window.AIGDA_CONTENT };
  const languages = window.AIGDA_LANGUAGES || [{ code: "ko", label: "KO", name: "한국어", htmlLang: "ko", ogLocale: "ko_KR" }];
  const languageCodes = languages.map((language) => language.code);
  const defaultLang = "ko";
  const contactEmail = "aigamedevarena@gmail.com";
  const siteUrl = "https://aigamedevarena.com/";

  let currentLang = defaultLang;
  let content = locales[currentLang];

  const byId = (id) => document.getElementById(id);

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const format = (template, values) =>
    Object.entries(values).reduce((result, [key, value]) => result.replaceAll(`{${key}}`, value), template);

  const mailto = (subject) => `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;

  const localizedUrl = (lang) => `${siteUrl}?lang=${encodeURIComponent(lang)}`;

  function normalizeLang(value) {
    if (!value) return null;
    const normalized = String(value).toLowerCase().split(/[-_]/)[0];
    return languageCodes.includes(normalized) ? normalized : null;
  }

  function getUrlLang() {
    return normalizeLang(new URLSearchParams(window.location.search).get("lang"));
  }

  function getStoredLang() {
    try {
      return normalizeLang(window.localStorage.getItem("aigda_lang"));
    } catch (error) {
      return null;
    }
  }

  function getBrowserLang() {
    const candidates = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
    for (const candidate of candidates) {
      const normalized = normalizeLang(candidate);
      if (normalized) return normalized;
    }
    return null;
  }

  function resolveInitialLang() {
    return getUrlLang() || getStoredLang() || getBrowserLang() || defaultLang;
  }

  function getLanguage(lang = currentLang) {
    return languages.find((language) => language.code === lang) || languages[0];
  }

  function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  }

  function setTexts(selector, values) {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (values[index] !== undefined) element.textContent = values[index];
    });
  }

  function setAttr(selector, attr, value) {
    const element = document.querySelector(selector);
    if (element) element.setAttribute(attr, value);
  }

  function setMeta(selector, attr, value) {
    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement("meta");
      const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
      if (match) element.setAttribute(match[1], match[2]);
      document.head.appendChild(element);
    }
    element.setAttribute(attr, value);
  }

  function renderStructuredData() {
    const script = byId("structured-data");
    if (!script) return;

    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://aigamedevarena.com/#organization",
          "name": "AI Game Dev Arena",
          "url": "https://aigamedevarena.com/",
          "logo": "https://aigamedevarena.com/assets/meta/logo-symbol.svg",
          "description": content.schema.organizationDescription
        },
        {
          "@type": "Event",
          "@id": "https://aigamedevarena.com/#event",
          "name": "AI Game Dev Arena",
          "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "description": content.schema.eventDescription,
          "organizer": {
            "@id": "https://aigamedevarena.com/#organization"
          },
          "audience": [
            "AI solution partners",
            "Game developers",
            "Indie game makers",
            "Publishers",
            "VCs",
            "Game development creators"
          ]
        },
        {
          "@type": "FAQPage",
          "@id": "https://aigamedevarena.com/#faq",
          "mainEntity": content.schema.faq.map((item) => ({
            "@type": "Question",
            "name": item.name,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.text
            }
          }))
        }
      ]
    });
  }

  function applyDocumentMeta() {
    const language = getLanguage();
    document.documentElement.lang = language.htmlLang;
    document.body.dataset.lang = currentLang;
    document.title = content.meta.title;

    setMeta('meta[name="description"]', "content", content.meta.description);
    setMeta('meta[name="keywords"]', "content", content.meta.keywords);
    setMeta('meta[property="og:title"]', "content", content.meta.title);
    setMeta('meta[property="og:description"]', "content", content.meta.ogDescription);
    setMeta('meta[property="og:locale"]', "content", language.ogLocale);
    setMeta('meta[property="og:url"]', "content", localizedUrl(currentLang));
    setMeta('meta[name="twitter:title"]', "content", content.meta.title);
    setMeta('meta[name="twitter:description"]', "content", content.meta.twitterDescription);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = localizedUrl(currentLang);

    renderStructuredData();
  }

  function updateUrlLang(lang) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);
  }

  function setLanguage(lang, options = {}) {
    const nextLang = normalizeLang(lang) || defaultLang;
    currentLang = locales[nextLang] ? nextLang : defaultLang;
    content = locales[currentLang] || locales[defaultLang];
    window.AIGDA_CONTENT = content;

    if (options.persist !== false) {
      try {
        window.localStorage.setItem("aigda_lang", currentLang);
      } catch (error) {
        /* localStorage may be unavailable in private browsing. */
      }
    }

    if (options.updateUrl) updateUrlLang(currentLang);
    renderAll();
  }

  function renderHeader() {
    const shell = byId("site-shell");
    shell.innerHTML = `
      <header class="site-header">
        <div class="container site-header__inner">
          <a class="brand" href="#top" aria-label="AI Game Dev Arena home">
            <img src="./assets/meta/logo-symbol-transparent.svg" alt="" />
            <span>
              AI Game Dev Arena
              <small>${escapeHtml(content.brand.small)}</small>
            </span>
          </a>
          <nav class="site-nav" id="site-nav" aria-label="${escapeHtml(content.ui.navLabel)}">
            ${content.nav.map((item) => `<a href="${item.href}">${escapeHtml(item.label)}</a>`).join("")}
          </nav>
          <div class="language-switcher" role="group" aria-label="${escapeHtml(content.ui.languageLabel)}">
            ${languages
              .map(
                (language) => `
                  <button
                    type="button"
                    data-lang="${language.code}"
                    lang="${language.htmlLang}"
                    aria-pressed="${language.code === currentLang}"
                    title="${escapeHtml(language.name)}"
                  >${escapeHtml(language.label)}</button>
                `
              )
              .join("")}
          </div>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="${escapeHtml(content.ui.navToggleLabel)}">
            ☰
          </button>
        </div>
      </header>
    `;

    const toggle = shell.querySelector(".nav-toggle");
    toggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("is-menu-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    shell.querySelectorAll(".site-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("is-menu-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    shell.querySelectorAll(".language-switcher button").forEach((button) => {
      button.addEventListener("click", () => {
        document.body.classList.remove("is-menu-open");
        toggle.setAttribute("aria-expanded", "false");
        setLanguage(button.dataset.lang, { updateUrl: true });
      });
    });
  }

  function renderFooter() {
    byId("site-footer").innerHTML = `
      <div class="container site-footer__inner">
        <div>
          <a class="brand" href="#top">
            <img src="./assets/meta/logo-symbol-transparent.svg" alt="" />
            <span>
              AI Game Dev Arena
              <small>${escapeHtml(content.footer.small)}</small>
            </span>
          </a>
          <p>${escapeHtml(content.footer.tagline)}</p>
        </div>
        <div class="footer-links">
          ${content.footer.links.map((link) => `<a href="${link.href}">${escapeHtml(link.label)}</a>`).join("")}
        </div>
      </div>
    `;
  }

  function renderHeroFacts() {
    document.querySelector(".hero__facts").innerHTML = content.hero.facts
      .map(
        (fact) => `
          <div>
            <dt>${escapeHtml(fact.value)}</dt>
            <dd>${escapeHtml(fact.label)}</dd>
          </div>
        `
      )
      .join("");
  }

  function renderTicker() {
    const group = content.ticker.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
    document.querySelector(".ticker__track").innerHTML = `
      <div class="ticker__group">${group}</div>
      <div class="ticker__group" aria-hidden="true">${group}</div>
    `;
  }

  function applyStaticCopy() {
    setText(".skip-link", content.ui.skipLink);

    setText(".hero .eyebrow", content.hero.eyebrow);
    setText("#hero-title", content.hero.title);
    setText(".hero__lead", content.hero.lead);
    setText(".hero__copy", content.hero.copy);
    setAttr(".hero__actions", "aria-label", content.hero.actionsLabel);
    setAttr(".hero__facts", "aria-label", content.hero.factsLabel);
    setText(".hero .button--primary", content.hero.partnerCta);
    setText(".hero .button--ghost", content.hero.participantCta);
    renderHeroFacts();

    setAttr(".ticker", "aria-label", content.ui.tickerLabel || "Project keywords");
    renderTicker();

    setText("#about .eyebrow", content.about.eyebrow);
    setText("#about-title", content.about.title);
    setTexts(".intro-copy p", content.about.body);

    setText("#proof .eyebrow", content.proof.eyebrow);
    setText("#proof-title", content.proof.title);
    setText("#proof .section-heading > p:not(.eyebrow)", content.proof.body);

    setText("#showcase .eyebrow", content.showcase.eyebrow);
    setText("#showcase-title", content.showcase.title);
    setText("#showcase .section-heading > p:not(.eyebrow)", content.showcase.body);

    setText("#program .eyebrow", content.program.eyebrow);
    setText("#program-title", content.program.title);
    setText("#program .program-layout > div > p:not(.eyebrow)", content.program.body);

    setText("#partner .eyebrow", content.partnerSection.eyebrow);
    setText("#partner-title", content.partnerSection.title);
    setText("#partner .section-heading > p:not(.eyebrow)", content.partnerSection.body);

    setText("#participants .eyebrow", content.participantSection.eyebrow);
    setText("#participants-title", content.participantSection.title);
    setText("#participants .participant-layout > div > p:not(.eyebrow)", content.participantSection.body);
    setText("#participants .button", content.participantSection.cta);
    setAttr("#participants .button", "href", mailto(content.participantSection.mailSubject));
    setAttr(".participant-card img", "alt", content.participantSection.imageAlt);

    setText("#media .eyebrow", content.mediaSection.eyebrow);
    setText("#media-title", content.mediaSection.title);
    setText("#media .section-heading > p:not(.eyebrow)", content.mediaSection.body);

    setText("#faq .eyebrow", content.faqSection.eyebrow);
    setText("#faq-title", content.faqSection.title);

    setText("#contact .eyebrow", content.closing.eyebrow);
    setText("#contact-title", content.closing.title);
    setText("#contact .closing__inner > p:not(.eyebrow)", content.closing.body);
    setText("#contact .button--primary", content.closing.partnerCta);
    setText("#contact .button--ghost", content.closing.participantCta);
    setAttr("#contact .button--primary", "href", mailto(content.closing.partnerSubject));
    setAttr("#contact .button--ghost", "href", mailto(content.closing.participantSubject));
  }

  function renderStats() {
    byId("stat-grid").innerHTML = content.stats
      .map(
        (item) => `
          <article class="stat">
            <strong>${escapeHtml(item.value)}</strong>
            <span>${escapeHtml(item.label)}</span>
          </article>
        `
      )
      .join("");
  }

  function renderGallery() {
    byId("proof-gallery").innerHTML = content.gallery
      .map(
        (item) => `
          <figure>
            <img src="${item.src}" alt="${escapeHtml(item.alt)}" loading="lazy" />
          </figure>
        `
      )
      .join("");
  }

  function renderGames() {
    byId("game-grid").innerHTML = content.games
      .map(
        (game) => `
          <article class="game-card">
            <button class="game-card__media" type="button" data-video-id="${escapeHtml(game.videoId)}" data-video-title="${escapeHtml(game.title)}" aria-label="${escapeHtml(format(content.ui.videoButtonAria, { title: game.title }))}">
              <img src="${game.clip}" alt="${escapeHtml(format(content.ui.videoImageAlt, { title: game.title }))}" loading="lazy" />
              <span class="game-card__play" aria-hidden="true"></span>
            </button>
            <div class="game-card__body">
              <span class="game-card__rank">${escapeHtml(game.rank)}</span>
              <h3>${escapeHtml(game.title)}</h3>
              <p>${escapeHtml(game.summary)}</p>
              <p>${game.tags.map(escapeHtml).join(content.ui.tagDelimiter)}</p>
              <button class="game-card__watch" type="button" data-video-id="${escapeHtml(game.videoId)}" data-video-title="${escapeHtml(game.title)}">${escapeHtml(content.ui.watchPlayVideo)}</button>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderVideoModal() {
    const existing = byId("video-modal");
    if (existing) existing.remove();

    document.body.insertAdjacentHTML(
      "beforeend",
      `
        <div class="video-modal" id="video-modal" aria-hidden="true">
          <button class="video-modal__backdrop" type="button" data-video-close aria-label="${escapeHtml(content.ui.videoClose)}"></button>
          <section class="video-modal__panel" role="dialog" aria-modal="true" aria-labelledby="video-modal-title">
            <div class="video-modal__bar">
              <p id="video-modal-title">${escapeHtml(content.ui.videoTitle)}</p>
              <button class="video-modal__close" type="button" data-video-close aria-label="${escapeHtml(content.ui.videoClose)}">×</button>
            </div>
            <div class="video-modal__frame" id="video-modal-frame"></div>
          </section>
        </div>
      `
    );
  }

  function initVideoModal() {
    let lastFocus = null;

    const close = () => {
      const modal = byId("video-modal");
      const frame = byId("video-modal-frame");
      if (!modal || !frame) return;
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-video-open");
      frame.innerHTML = "";
      if (lastFocus) lastFocus.focus();
    };

    const open = (trigger) => {
      const modal = byId("video-modal");
      const title = byId("video-modal-title");
      const frame = byId("video-modal-frame");
      const videoId = trigger.dataset.videoId;
      const videoTitle = trigger.dataset.videoTitle || content.ui.videoTitle;
      if (!modal || !title || !frame || !videoId) return;

      lastFocus = trigger;
      title.textContent = videoTitle;
      frame.innerHTML = `
        <iframe
          title="${escapeHtml(format(content.ui.videoFrameTitle, { title: videoTitle }))}"
          src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0&modestbranding=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      `;
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("is-video-open");
      modal.querySelector(".video-modal__close").focus();
    };

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-video-id]");
      if (trigger) open(trigger);
      if (event.target.closest("[data-video-close]")) close();
    });

    document.addEventListener("keydown", (event) => {
      const modal = byId("video-modal");
      if (event.key === "Escape" && modal && modal.getAttribute("aria-hidden") === "false") close();
    });
  }

  function renderSteps() {
    byId("program-steps").innerHTML = content.steps
      .map(
        (step) => `
          <li>
            <div>
              <strong>${escapeHtml(step.title)}</strong>
              <span>${escapeHtml(step.text)}</span>
            </div>
          </li>
        `
      )
      .join("");
  }

  function renderPartners() {
    byId("partner-grid").innerHTML = content.partners
      .map(
        (partner) => `
          <article class="partner">
            <b>${escapeHtml(partner.title)}</b>
            <p>${escapeHtml(partner.text)}</p>
          </article>
        `
      )
      .join("");
  }

  function renderParticipants() {
    byId("participant-list").innerHTML = content.participants
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");
  }

  function renderMedia() {
    byId("media-grid").innerHTML = content.media
      .map(
        (item) => `
          <article class="media-card">
            <b>${escapeHtml(item.label)}</b>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
            <a href="${item.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(content.ui.watchReference)}</a>
          </article>
        `
      )
      .join("");
  }

  function renderFaq() {
    byId("faq-list").innerHTML = content.faq
      .map(
        (item) => `
          <article class="faq-item">
            <h3>${escapeHtml(item.q)}</h3>
            <p>${escapeHtml(item.a)}</p>
          </article>
        `
      )
      .join("");
  }

  function renderAll() {
    document.body.classList.remove("is-menu-open", "is-video-open");
    applyDocumentMeta();
    renderHeader();
    renderFooter();
    applyStaticCopy();
    renderStats();
    renderGallery();
    renderGames();
    renderSteps();
    renderPartners();
    renderParticipants();
    renderMedia();
    renderFaq();
    renderVideoModal();
  }

  function initParallax() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const layers = Array.from(document.querySelectorAll("[data-parallax-speed]")).map((el) => ({
      el,
      speed: Number(el.dataset.parallaxSpeed || 0)
    }));

    if (!layers.length) return;

    let ticking = false;

    const update = () => {
      const viewportCenter = window.innerHeight / 2;

      layers.forEach(({ el, speed }) => {
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = elementCenter - viewportCenter;
        const y = Math.max(-34, Math.min(34, distance * speed));
        el.style.setProperty("--parallax-y", `${y.toFixed(2)}px`);
      });

      ticking = false;
    };

    const requestTick = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);
  }

  function init() {
    setLanguage(resolveInitialLang(), { persist: true });
    initVideoModal();
    initParallax();

    window.addEventListener("popstate", () => {
      setLanguage(getUrlLang() || getStoredLang() || defaultLang, { persist: false });
    });
  }

  init();
})();
