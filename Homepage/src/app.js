(function () {
  const content = window.AIGDA_CONTENT;

  const byId = (id) => document.getElementById(id);

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  function renderHeader() {
    const shell = byId("site-shell");
    shell.innerHTML = `
      <header class="site-header">
        <div class="container site-header__inner">
          <a class="brand" href="#top" aria-label="AI Game Dev Arena home">
            <img src="./assets/meta/logo-symbol-transparent.svg" alt="" />
            <span>
              AI Game Dev Arena
              <small>From Player to Developer</small>
            </span>
          </a>
          <nav class="site-nav" id="site-nav" aria-label="Main navigation">
            ${content.nav.map((item) => `<a href="${item.href}">${escapeHtml(item.label)}</a>`).join("")}
          </nav>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="메뉴 열기">
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
  }

  function renderFooter() {
    byId("site-footer").innerHTML = `
      <div class="container site-footer__inner">
        <div>
          <a class="brand" href="#top">
            <img src="./assets/meta/logo-symbol-transparent.svg" alt="" />
            <span>
              AI Game Dev Arena
              <small>AI-native game development arena</small>
            </span>
          </a>
          <p>AI와 함께 만드는 새로운 게임 개발 아레나.</p>
        </div>
        <div class="footer-links">
          <a href="mailto:arshnim@naver.com">Contact</a>
          <a href="#partner">Partners</a>
          <a href="#participants">Participants</a>
        </div>
      </div>
    `;
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
        (game, index) => `
          <article class="game-card">
            <button class="game-card__media" type="button" data-video-id="${escapeHtml(game.videoId)}" data-video-title="${escapeHtml(game.title)}" aria-label="${escapeHtml(game.title)} 플레이 영상 보기">
              <img src="${game.clip}" alt="${escapeHtml(game.title)} 플레이 영상 클립" loading="lazy" />
              <span class="game-card__play" aria-hidden="true"></span>
            </button>
            <div class="game-card__body">
              <span class="game-card__rank">${escapeHtml(game.rank)}</span>
              <h3>${escapeHtml(game.title)}</h3>
              <p>${escapeHtml(game.summary)}</p>
              <p>${game.tags.map(escapeHtml).join(" / ")}</p>
              <button class="game-card__watch" type="button" data-video-id="${escapeHtml(game.videoId)}" data-video-title="${escapeHtml(game.title)}">Watch play video</button>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderVideoModal() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
        <div class="video-modal" id="video-modal" aria-hidden="true">
          <button class="video-modal__backdrop" type="button" data-video-close aria-label="영상 닫기"></button>
          <section class="video-modal__panel" role="dialog" aria-modal="true" aria-labelledby="video-modal-title">
            <div class="video-modal__bar">
              <p id="video-modal-title">Play Video</p>
              <button class="video-modal__close" type="button" data-video-close aria-label="영상 닫기">×</button>
            </div>
            <div class="video-modal__frame" id="video-modal-frame"></div>
          </section>
        </div>
      `
    );
  }

  function initVideoModal() {
    const modal = byId("video-modal");
    const title = byId("video-modal-title");
    const frame = byId("video-modal-frame");
    let lastFocus = null;

    const close = () => {
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-video-open");
      frame.innerHTML = "";
      if (lastFocus) lastFocus.focus();
    };

    const open = (trigger) => {
      const videoId = trigger.dataset.videoId;
      const videoTitle = trigger.dataset.videoTitle || "Play Video";
      if (!videoId) return;

      lastFocus = trigger;
      title.textContent = videoTitle;
      frame.innerHTML = `
        <iframe
          title="${escapeHtml(videoTitle)} 플레이 영상"
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
      if (event.key === "Escape" && modal.getAttribute("aria-hidden") === "false") close();
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
        (partner, index) => `
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
        (item, index) => `
          <article class="media-card">
            <b>${escapeHtml(item.label)}</b>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
            <a href="${item.href}" target="_blank" rel="noopener noreferrer">Watch reference</a>
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

  function init() {
    renderHeader();
    renderFooter();
    renderStats();
    renderGallery();
    renderGames();
    renderSteps();
    renderPartners();
    renderParticipants();
    renderMedia();
    renderFaq();
    renderVideoModal();
    initVideoModal();
    initParallax();
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

  init();
})();
