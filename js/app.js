/* =========================================================
   TurkmenSon — application logic
   Vanilla JS, no framework/build step needed — works directly
   from GitHub Pages or any static host.
   ========================================================= */
(function(){
  'use strict';

  const state = {
    lang: localStorage.getItem('ts-lang') || 'fa',
    theme: localStorage.getItem('ts-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    route: (location.hash || '#dashboard').replace('#',''),
    query: ''
  };

  const el = {
    html: document.documentElement,
    app: document.getElementById('app'),
    sidebar: document.getElementById('sidebar'),
    overlay: document.getElementById('overlay'),
    nav: document.getElementById('nav'),
    content: document.getElementById('content'),
    pageTitle: document.getElementById('pageTitle'),
    pageSubtitle: document.getElementById('pageSubtitle'),
    brandTagline: document.getElementById('brandTagline'),
    sidebarNote: document.getElementById('sidebarNote'),
    menuBtn: document.getElementById('menuBtn'),
    themeBtn: document.getElementById('themeBtn'),
    langTrigger: document.getElementById('langTrigger'),
    langTriggerLabel: document.getElementById('langTriggerLabel'),
    langMenu: document.getElementById('langMenu'),
    langDropdown: document.getElementById('langDropdown'),
    searchInput: document.getElementById('searchInput'),
    searchClear: document.getElementById('searchClear'),
    backTop: document.getElementById('backTop')
  };

  const validRoutes = NAV_ITEMS.map(n => n.id);

  /* ---------------------------------------------------------
     Theme
     --------------------------------------------------------- */
  function applyTheme(){
    el.html.setAttribute('data-theme', state.theme);
    localStorage.setItem('ts-theme', state.theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if(meta) meta.setAttribute('content', state.theme === 'dark' ? '#181109' : '#F4EDE1');
  }
  el.themeBtn.addEventListener('click', ()=>{
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
  });

  /* ---------------------------------------------------------
     Language
     --------------------------------------------------------- */
  function applyLangAttrs(){
    const d = DATA[state.lang];
    el.html.setAttribute('lang', state.lang === 'fa' ? 'fa' : 'tk');
    el.html.setAttribute('dir', d.dir);
    el.langTriggerLabel.textContent = state.lang === 'fa' ? 'فارسی' : 'Türkmençe';
    [...el.langMenu.children].forEach(li=>{
      li.setAttribute('aria-selected', li.dataset.lang === state.lang ? 'true' : 'false');
    });
  }

  function setLang(lang){
    state.lang = lang;
    localStorage.setItem('ts-lang', lang);
    applyLangAttrs();
    buildNav();
    render();
    closeLangMenu();
  }

  function openLangMenu(){
    el.langMenu.hidden = false;
    el.langDropdown.classList.add('open');
    el.langTrigger.setAttribute('aria-expanded','true');
  }
  function closeLangMenu(){
    el.langMenu.hidden = true;
    el.langDropdown.classList.remove('open');
    el.langTrigger.setAttribute('aria-expanded','false');
  }
  el.langTrigger.addEventListener('click', (e)=>{
    e.stopPropagation();
    el.langMenu.hidden ? openLangMenu() : closeLangMenu();
  });
  el.langMenu.addEventListener('click', (e)=>{
    const li = e.target.closest('li[data-lang]');
    if(li) setLang(li.dataset.lang);
  });
  el.langMenu.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      const li = e.target.closest('li[data-lang]');
      if(li) setLang(li.dataset.lang);
    }
  });
  document.addEventListener('click', (e)=>{
    if(!el.langDropdown.contains(e.target)) closeLangMenu();
  });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeLangMenu(); });

  /* ---------------------------------------------------------
     Mobile sidebar
     --------------------------------------------------------- */
  function openSidebar(){
    el.app.classList.add('sidebar-open');
    el.menuBtn.setAttribute('aria-expanded','true');
  }
  function closeSidebar(){
    el.app.classList.remove('sidebar-open');
    el.menuBtn.setAttribute('aria-expanded','false');
  }
  el.menuBtn.addEventListener('click', ()=>{
    el.app.classList.contains('sidebar-open') ? closeSidebar() : openSidebar();
  });
  el.overlay.addEventListener('click', closeSidebar);

  /* ---------------------------------------------------------
     Navigation
     --------------------------------------------------------- */
  function buildNav(){
    const d = DATA[state.lang];
    el.nav.innerHTML = '';
    NAV_ITEMS.forEach(item=>{
      const a = document.createElement('a');
      a.href = '#' + item.id;
      a.className = 'nav-item' + (state.route === item.id ? ' active' : '');
      a.dataset.route = item.id;
      a.innerHTML = `<span class="icon" data-icon="${item.icon}"></span><span>${d.nav[item.id]}</span>`;
      a.addEventListener('click', ()=> closeSidebar());
      el.nav.appendChild(a);
    });
    paintIcons(el.nav);
  }

  function setActiveNav(){
    [...el.nav.children].forEach(a=>{
      a.classList.toggle('active', a.dataset.route === state.route);
    });
  }

  window.addEventListener('hashchange', ()=>{
    const r = location.hash.replace('#','');
    state.route = validRoutes.includes(r) ? r : 'dashboard';
    state.query = '';
    if(el.searchInput) el.searchInput.value = '';
    render();
    el.content.scrollIntoView({behavior:'instant', block:'start'});
    window.scrollTo({top:0});
  });

  /* ---------------------------------------------------------
     Search (filters cards within the current section)
     --------------------------------------------------------- */
  el.searchInput.addEventListener('input', ()=>{
    state.query = el.searchInput.value.trim().toLowerCase();
    el.searchClear.hidden = state.query.length === 0;
    render();
  });
  el.searchClear.addEventListener('click', ()=>{
    el.searchInput.value = '';
    state.query = '';
    el.searchClear.hidden = true;
    render();
  });

  function matches(str){
    if(!state.query) return true;
    return (str || '').toLowerCase().includes(state.query);
  }

  /* ---------------------------------------------------------
     Reveal-on-scroll
     --------------------------------------------------------- */
  let observer;
  function initReveal(){
    if(observer) observer.disconnect();
    observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold:.12 });
    el.content.querySelectorAll('.reveal').forEach(node=> observer.observe(node));
  }

  /* ---------------------------------------------------------
     Back-to-top
     --------------------------------------------------------- */
  window.addEventListener('scroll', ()=>{
    el.backTop.classList.toggle('show', window.scrollY > 480);
  });
  el.backTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

  /* ---------------------------------------------------------
     Renderers per section
     --------------------------------------------------------- */
  function emptyState(text){
    return `<div class="empty-state reveal"><span class="icon" data-icon="search"></span><p>${text}</p></div>`;
  }

  function renderDashboard(d){
    const stats = d.dashboard.stats.map(s => `
      <div class="stat-card reveal">
        <div class="stat-icon"><span class="icon" data-icon="${s.icon}"></span></div>
        <span class="stat-label">${s.label}</span>
        <span class="stat-value">${s.value}</span>
      </div>`).join('');

    const cards = NAV_ITEMS.filter(n=> n.id !== 'dashboard').map(n=> `
      <div class="explore-card reveal" data-route="${n.id}">
        <span class="go icon" data-icon="chevronSide"></span>
        <div class="icon-wrap"><span class="icon" data-icon="${n.icon}"></span></div>
        <h3>${d.nav[n.id]}</h3>
        <p>${d.explore[n.id]}</p>
      </div>`).join('');

    return `
      <section class="hero reveal">
        <svg class="hero-pattern" viewBox="0 0 200 200" fill="none">
          <path d="M100 10 L180 100 L100 190 L20 100 Z" stroke="currentColor" stroke-width="2"/>
          <path d="M100 45 L145 100 L100 155 L55 100 Z" stroke="currentColor" stroke-width="2"/>
          <circle cx="100" cy="100" r="14" fill="currentColor"/>
        </svg>
        <span class="hero-eyebrow"><span class="icon" data-icon="compass"></span>${d.dashboard.heroEyebrow}</span>
        <h2>${d.dashboard.heroTitle}</h2>
        <p>${d.dashboard.heroText}</p>
        <div class="hero-actions">
          <a class="btn btn-solid" href="#history">${d.ui.heroCta1}</a>
          <button class="btn btn-ghost" id="aboutBtn">${d.ui.heroCta2}</button>
        </div>
      </section>

      <div class="stat-grid">${stats}</div>

      <div class="section-head">
        <h2><span class="icon" data-icon="link"></span>${d.ui.exploreTitle}</h2>
      </div>
      <div class="explore-grid">${cards}</div>

      <div class="about-panel reveal" id="aboutPanel" hidden>
        <h3>${d.ui.aboutTitle}</h3>
        <p>${d.ui.aboutText}</p>
      </div>
    `;
  }

  function renderTimelineSection(d, key, iconName){
    const items = d[key].eras || d[key].events;
    const filtered = items.filter(it => matches(it.title) || matches(it.text) || matches(it.year));
    if(!filtered.length) return sectionHead(d, key, iconName) + emptyState(d.ui.noResults);
    const rows = filtered.map(it => `
      <div class="timeline-item reveal">
        <span class="year">${it.year || ''}</span>
        ${it.icon ? `<div class="icon-wrap" style="width:34px;height:34px;border-radius:10px;background:var(--surface-2);color:var(--secondary);display:flex;align-items:center;justify-content:center;margin-bottom:8px;"><span class="icon" data-icon="${it.icon}"></span></div>` : ''}
        <h3>${it.title}</h3>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, key, iconName) + `<div class="timeline">${rows}</div>`;
  }

  function sectionHead(d, key, iconName){
    return `<div class="section-head reveal">
      <h2><span class="icon" data-icon="${iconName}"></span>${d.nav[key]}</h2>
      <p>${d[key].intro}</p>
    </div>`;
  }

  function renderClothing(d){
    const buildGroup = (arr) => arr.filter(it=> matches(it.name) || matches(it.text) || matches(it.badge))
      .map(it => `
      <div class="item-card reveal">
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <div><span class="badge">${it.badge}</span><h3>${it.name}</h3></div>
        <p>${it.text}</p>
      </div>`).join('');

    const men = buildGroup(d.clothing.men);
    const women = buildGroup(d.clothing.women);
    const nothing = !men && !women;

    return sectionHead(d, 'clothing', 'shirt') +
      (nothing ? emptyState(d.ui.noResults) : `
      ${men ? `<h3 class="subheading"><span class="icon" data-icon="shirt"></span>${d.ui.menSection}</h3><div class="card-grid">${men}</div>` : ''}
      ${women ? `<h3 class="subheading"><span class="icon" data-icon="gem"></span>${d.ui.womenSection}</h3><div class="card-grid">${women}</div>` : ''}
    `);
  }

  function renderCuisine(d){
    const items = d.cuisine.dishes.filter(it => matches(it.name) || matches(it.text));
    if(!items.length) return sectionHead(d, 'cuisine', 'bowl') + emptyState(d.ui.noResults);
    const cards = items.map(it => `
      <div class="item-card reveal">
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <h3>${it.name}</h3>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, 'cuisine', 'bowl') + `<div class="card-grid">${cards}</div>`;
  }

  function renderLanguage(d){
    const facts = d.language.facts.filter(f => matches(f.text));
    const alpha = d.language.alphabet.filter(a => matches(a.letter) || matches(a.sound));
    if(!facts.length && !alpha.length) return sectionHead(d, 'language', 'letters') + emptyState(d.ui.noResults);

    const factRows = facts.map(f => `
      <div class="fact-row reveal">
        <div class="icon-wrap"><span class="icon" data-icon="${f.icon}"></span></div>
        <p>${f.text}</p>
      </div>`).join('');

    const alphaChips = alpha.map(a => `
      <div class="alpha-chip reveal">
        <div class="letter">${a.letter}</div>
        <div class="sound">${a.sound}</div>
      </div>`).join('');

    return sectionHead(d, 'language', 'letters') +
      (facts.length ? `<h3 class="subheading"><span class="icon" data-icon="info"></span>${d.ui.factsTitle}</h3><div class="fact-list">${factRows}</div>` : '') +
      (alpha.length ? `<h3 class="subheading"><span class="icon" data-icon="letters"></span>${d.ui.alphabetTitle}</h3><div class="alpha-grid">${alphaChips}</div>` : '');
  }

  function renderPeopleLike(d, key, iconName){
    const items = d[key].items.filter(it => matches(it.name) || matches(it.text) || matches(it.era) || matches(it.years));
    if(!items.length) return sectionHead(d, key, iconName) + emptyState(d.ui.noResults);
    const cards = items.map(it => `
      <div class="item-card reveal">
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <div><span class="badge">${it.era || it.years || ''}</span><h3>${it.name}</h3></div>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, key, iconName) + `<div class="card-grid">${cards}</div>`;
  }

  function renderInfluences(d){
    const items = d.influences.items.filter(it => matches(it.title) || matches(it.text));
    if(!items.length) return sectionHead(d, 'influences', 'link') + emptyState(d.ui.noResults);
    const cards = items.map(it => `
      <div class="item-card reveal">
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <h3>${it.title}</h3>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, 'influences', 'link') + `<div class="card-grid">${cards}</div>`;
  }

  /* ---------------------------------------------------------
     Main render
     --------------------------------------------------------- */
  function render(){
    const d = DATA[state.lang];
    el.pageTitle.textContent = d.nav[state.route];
    el.pageSubtitle.textContent = d.subtitle[state.route] || '';
    el.brandTagline.textContent = d.tagline;
    el.sidebarNote.textContent = d.tagline;
    el.searchInput.placeholder = d.ui.searchPlaceholder;
    document.title = 'TurkmenSon — ' + d.nav[state.route];

    let html = '';
    switch(state.route){
      case 'dashboard':  html = renderDashboard(d); break;
      case 'history':    html = renderTimelineSection(d, 'history', 'scroll'); break;
      case 'warpeace':   html = renderTimelineSection(d, 'warpeace', 'swords'); break;
      case 'clothing':   html = renderClothing(d); break;
      case 'cuisine':    html = renderCuisine(d); break;
      case 'language':   html = renderLanguage(d); break;
      case 'people':     html = renderPeopleLike(d, 'people', 'users'); break;
      case 'poets':      html = renderPeopleLike(d, 'poets', 'feather'); break;
      case 'influences': html = renderInfluences(d); break;
      default:           html = renderDashboard(d);
    }
    el.content.innerHTML = html;
    paintIcons(el.content);
    setActiveNav();
    initReveal();

    const aboutBtn = document.getElementById('aboutBtn');
    if(aboutBtn){
      aboutBtn.addEventListener('click', ()=>{
        const panel = document.getElementById('aboutPanel');
        panel.hidden = !panel.hidden;
        if(!panel.hidden) panel.scrollIntoView({behavior:'smooth', block:'center'});
      });
    }
    el.content.querySelectorAll('.explore-card[data-route]').forEach(card=>{
      card.addEventListener('click', ()=>{ location.hash = card.dataset.route; });
    });
  }

  /* ---------------------------------------------------------
     Boot
     --------------------------------------------------------- */
  function boot(){
    if(!validRoutes.includes(state.route)) state.route = 'dashboard';
    applyTheme();
    applyLangAttrs();
    buildNav();
    render();
    paintIcons(document);
  }

  boot();
})();
