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
    fontSize: localStorage.getItem('ts-font-size') || 'medium',
    contrast: localStorage.getItem('ts-contrast') === 'true',
    route: 'dashboard',
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
    globalResults: document.getElementById('globalResults'),
    backTop: document.getElementById('backTop'),
    settingsBtn: document.getElementById('settingsBtn'),
    settingsOverlay: document.getElementById('settingsOverlay'),
    settingsPanel: document.getElementById('settingsPanel'),
    settingsCloseBtn: document.getElementById('settingsCloseBtn'),
    settingsTitle: document.getElementById('settingsTitle'),
    fontSizeLabel: document.getElementById('fontSizeLabel'),
    contrastLabel: document.getElementById('contrastLabel'),
    fontSizeControl: document.getElementById('fontSizeControl'),
    contrastToggle: document.getElementById('contrastToggle')
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
     Display settings: font size + high contrast
     --------------------------------------------------------- */
  function applyFontSize(){
    el.html.setAttribute('data-font-size', state.fontSize);
    localStorage.setItem('ts-font-size', state.fontSize);
    [...el.fontSizeControl.children].forEach(btn=>{
      btn.classList.toggle('active', btn.dataset.size === state.fontSize);
    });
  }
  function applyContrast(){
    el.html.setAttribute('data-contrast', state.contrast ? 'true' : 'false');
    localStorage.setItem('ts-contrast', state.contrast ? 'true' : 'false');
    el.contrastToggle.setAttribute('aria-checked', state.contrast ? 'true' : 'false');
    el.contrastToggle.classList.toggle('on', state.contrast);
  }
  el.fontSizeControl.addEventListener('click', (e)=>{
    const btn = e.target.closest('button[data-size]');
    if(!btn) return;
    state.fontSize = btn.dataset.size;
    applyFontSize();
  });
  el.contrastToggle.addEventListener('click', ()=>{
    state.contrast = !state.contrast;
    applyContrast();
  });
  function openSettings(){
    el.settingsOverlay.classList.add('open');
  }
  function closeSettings(){
    el.settingsOverlay.classList.remove('open');
  }
  el.settingsBtn.addEventListener('click', openSettings);
  el.settingsCloseBtn.addEventListener('click', closeSettings);
  el.settingsOverlay.addEventListener('click', (e)=>{
    if(e.target === el.settingsOverlay) closeSettings();
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
    applySettingsLabels();
    render();
    closeLangMenu();
  }

  function applySettingsLabels(){
    const d = DATA[state.lang];
    el.settingsTitle.textContent = d.ui.settingsTitle;
    el.fontSizeLabel.textContent = d.ui.fontSizeLabel;
    el.contrastLabel.textContent = d.ui.contrastLabel;
    const [sBtn, mBtn, lBtn] = el.fontSizeControl.children;
    sBtn.setAttribute('aria-label', d.ui.fontSmall);
    mBtn.setAttribute('aria-label', d.ui.fontMedium);
    lBtn.setAttribute('aria-label', d.ui.fontLarge);
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
    if(!document.getElementById('searchBox').contains(e.target)) hideGlobalResults();
  });
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){ closeLangMenu(); closeSettings(); hideGlobalResults(); }
  });

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

  function navigateTo(route, query){
    if(location.hash.replace('#','') === route){
      state.route = route;
      state.query = query || '';
      el.searchInput.value = state.query;
      el.searchClear.hidden = state.query.length === 0;
      render();
    } else {
      state.query = query || '';
      location.hash = route;
    }
  }

  window.addEventListener('hashchange', ()=>{
    const r = location.hash.replace('#','');
    state.route = validRoutes.includes(r) ? r : 'dashboard';
    localStorage.setItem('ts-last-route', state.route);
    if(!state.query) el.searchInput.value = '';
    render();
    if (typeof el.content.scrollIntoView === 'function') {
      el.content.scrollIntoView({behavior:'instant', block:'start'});
    }
    window.scrollTo({top:0});
  });

  /* ---------------------------------------------------------
     Search — filters the current section AND surfaces matches
     from every other section in a dropdown.
     --------------------------------------------------------- */
  function buildSearchIndex(d){
    const idx = [];
    const pushAll = (sectionId, arr, textFn) => {
      arr.forEach(it => idx.push({ section: sectionId, label: d.nav[sectionId], title: textFn(it), icon: it.icon || NAV_ITEMS.find(n=>n.id===sectionId).icon }));
    };
    pushAll('history', d.history.eras, it => it.title);
    pushAll('warpeace', d.warpeace.events, it => it.title);
    pushAll('places', d.places.items, it => it.title);
    pushAll('clothing', d.clothing.men, it => it.name);
    pushAll('clothing', d.clothing.women, it => it.name);
    pushAll('cuisine', d.cuisine.dishes, it => it.name);
    pushAll('arts', d.arts.items, it => it.title);
    pushAll('people', d.people.items, it => it.name);
    pushAll('poets', d.poets.items, it => it.name);
    pushAll('books', d.books.items, it => it.title);
    pushAll('influences', d.influences.items, it => it.title);
    DICTIONARY.categories.forEach(cat=>{
      cat.words.forEach(w=>{
        idx.push({ section:'dictionary', label: d.nav.dictionary, title: w.tk + ' — ' + w.fa, icon:'translate' });
      });
    });
    DICTIONARY_EXTENDED.forEach(row=>{
      idx.push({ section:'dictionary', label: d.nav.dictionary, title: row[0] + ' — ' + (row[2] || row[1]), icon:'translate' });
    });
    return idx;
  }

  function hideGlobalResults(){
    el.globalResults.hidden = true;
    el.globalResults.innerHTML = '';
  }

  function renderGlobalResults(){
    const q = state.query.toLowerCase();
    if(!q){ hideGlobalResults(); return; }
    const d = DATA[state.lang];
    const idx = buildSearchIndex(d);
    const results = idx.filter(it => it.section !== state.route && it.title.toLowerCase().includes(q)).slice(0, 8);
    if(!results.length){ hideGlobalResults(); return; }
    el.globalResults.innerHTML = `<div class="global-results-title">${d.ui.globalResultsTitle}</div>` +
      results.map(r => `
        <div class="global-result-item" data-route="${r.section}">
          <span class="icon" data-icon="${r.icon}"></span>
          <span class="gr-text"><span class="gr-title">${r.title}</span><span class="gr-section">${r.label}</span></span>
        </div>`).join('');
    paintIcons(el.globalResults);
    el.globalResults.hidden = false;
    el.globalResults.querySelectorAll('.global-result-item').forEach(node=>{
      node.addEventListener('click', ()=>{
        const route = node.dataset.route;
        hideGlobalResults();
        navigateTo(route, state.query);
      });
    });
  }

  el.searchInput.addEventListener('input', ()=>{
    state.query = el.searchInput.value.trim().toLowerCase();
    el.searchClear.hidden = state.query.length === 0;
    render();
    renderGlobalResults();
  });
  el.searchInput.addEventListener('focus', renderGlobalResults);
  el.searchClear.addEventListener('click', ()=>{
    el.searchInput.value = '';
    state.query = '';
    el.searchClear.hidden = true;
    hideGlobalResults();
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

  function sectionHead(d, key, iconName){
    return `<div class="section-head reveal">
      <h2><span class="icon" data-icon="${iconName}"></span>${d.nav[key]}</h2>
      <p>${d[key].intro}</p>
    </div>`;
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

  function renderCardListSection(d, key, iconName){
    const items = d[key].items.filter(it => matches(it.title) || matches(it.text));
    if(!items.length) return sectionHead(d, key, iconName) + emptyState(d.ui.noResults);
    const cards = items.map(it => `
      <div class="item-card reveal">
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <h3>${it.title}</h3>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, key, iconName) + `<div class="card-grid">${cards}</div>`;
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

  function renderDictionary(d){
    const q = state.query;
    const matchWord = (w) => !q || w.tk.toLowerCase().includes(q) || w.fa.toLowerCase().includes(q) || w.faScript.includes(q);
    const note = DICTIONARY.note[state.lang];

    const blocks = DICTIONARY.categories.map(cat=>{
      const words = cat.words.filter(matchWord);
      if(!words.length) return '';
      const label = state.lang === 'fa' ? cat.fa : cat.tk;
      const rows = words.map(w => `
        <div class="dict-row reveal">
          <span class="dict-tk">${w.tk}</span>
          <span class="dict-fascript">${w.faScript}</span>
          <span class="dict-fa">${w.fa}</span>
        </div>`).join('');
      return `<h3 class="subheading dict-cat-heading">${label}</h3><div class="dict-table">${rows}</div>`;
    }).filter(Boolean);

    const curatedHtml = blocks.length
      ? blocks.join('')
      : (q ? '' : emptyState(d.ui.noResults));

    // Extended (Apertium-derived) dictionary — only searched, never fully listed,
    // to keep the page light with 3000+ entries.
    let extendedHtml = `
      <div class="dict-extended-head reveal">
        <h3 class="subheading"><span class="icon" data-icon="link"></span>${d.ui.extendedDictTitle}</h3>
        <p class="dict-extended-intro">${d.ui.extendedDictIntro}</p>
      </div>`;

    if(!q){
      extendedHtml += `<div class="empty-state reveal"><span class="icon" data-icon="search"></span><p>${d.ui.extendedDictPrompt}</p></div>`;
    } else {
      const results = DICTIONARY_EXTENDED.filter(row =>
        row[0].toLowerCase().includes(q) || row[1].toLowerCase().includes(q) || row[2].toLowerCase().includes(q)
      );
      if(!results.length){
        extendedHtml += `<div class="empty-state reveal"><span class="icon" data-icon="search"></span><p>${d.ui.extendedDictNoResults}</p></div>`;
      } else {
        const shown = results.slice(0, 80);
        extendedHtml += `
          <div class="dict-ext-table">
            <div class="dict-ext-row dict-ext-head">
              <span>${d.ui.colTk}</span><span>${d.ui.colTur}</span><span>${d.ui.colEn}</span><span>${d.ui.colPos}</span>
            </div>
            ${shown.map(row => `
              <div class="dict-ext-row reveal">
                <span class="dict-ext-tk">${row[0]}</span>
                <span>${row[1]}</span>
                <span>${row[2] || '—'}</span>
                <span class="dict-ext-pos">${row[3] || '—'}</span>
              </div>`).join('')}
          </div>
          ${results.length > 80 ? `<p class="dict-ext-note">${d.ui.extendedDictTooMany}</p>` : ''}
        `;
      }
    }

    if(!blocks.length && q && !DICTIONARY_EXTENDED.some(row => row[0].toLowerCase().includes(q) || row[1].toLowerCase().includes(q) || row[2].toLowerCase().includes(q))){
      return sectionHead(d, 'dictionary', 'translate') + emptyState(d.ui.noResults);
    }

    return sectionHead(d, 'dictionary', 'translate') +
      (q ? '' : `<div class="dict-note reveal"><span class="icon" data-icon="info"></span><p>${note}</p></div>`) +
      curatedHtml +
      `<div class="dict-divider"></div>` +
      extendedHtml;
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

  function renderBooks(d){
    const items = d.books.items.filter(it => matches(it.title) || matches(it.text) || matches(it.author));
    if(!items.length) return sectionHead(d, 'books', 'book') + emptyState(d.ui.noResults);
    const cards = items.map(it => `
      <div class="item-card reveal">
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <div><span class="badge">${it.author}${it.era ? ' · ' + it.era : ''}</span><h3>${it.title}</h3></div>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, 'books', 'book') + `<div class="card-grid">${cards}</div>`;
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
      case 'places':     html = renderCardListSection(d, 'places', 'landmark'); break;
      case 'clothing':   html = renderClothing(d); break;
      case 'cuisine':    html = renderCuisine(d); break;
      case 'arts':       html = renderCardListSection(d, 'arts', 'music'); break;
      case 'language':   html = renderLanguage(d); break;
      case 'dictionary': html = renderDictionary(d); break;
      case 'people':     html = renderPeopleLike(d, 'people', 'users'); break;
      case 'poets':      html = renderPeopleLike(d, 'poets', 'feather'); break;
      case 'books':      html = renderBooks(d); break;
      case 'influences': html = renderCardListSection(d, 'influences', 'link'); break;
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
    let initialRoute = location.hash.replace('#','');
    if(!validRoutes.includes(initialRoute)){
      const remembered = localStorage.getItem('ts-last-route');
      initialRoute = validRoutes.includes(remembered) ? remembered : 'dashboard';
    }
    state.route = initialRoute;

    applyTheme();
    applyLangAttrs();
    applyFontSize();
    applyContrast();
    buildNav();
    applySettingsLabels();
    render();
    paintIcons(document);

    if(location.hash.replace('#','') !== initialRoute){
      location.hash = initialRoute;
    }
  }

  boot();
})();
