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
    readerMode: localStorage.getItem('ts-reader-mode') === 'true',
    route: 'dashboard',
    query: '',
    dictView: 'topic',
    quiz: { index:0, score:0, answered:false, selected:null, finished:false }
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
    breadcrumb: document.getElementById('breadcrumb'),
    readingProgress: document.getElementById('readingProgress'),
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
    readerModeLabel: document.getElementById('readerModeLabel'),
    fontSizeControl: document.getElementById('fontSizeControl'),
    contrastToggle: document.getElementById('contrastToggle'),
    readerModeToggle: document.getElementById('readerModeToggle')
  };

  const validRoutes = NAV_ITEMS.map(n => n.id);

  /* ---------------------------------------------------------
     Toast (tiny transient notification, used for copy/report)
     --------------------------------------------------------- */
  let toastEl = null, toastTimer = null;
  function showToast(msg){
    if(!toastEl){
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(()=> toastEl.classList.remove('show'), 2200);
  }

  function copyText(text){
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).catch(()=> fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }
  function fallbackCopy(text){
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select();
    try{ document.execCommand('copy'); }catch(e){}
    document.body.removeChild(ta);
  }

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
     Display settings: font size, high contrast, reader mode
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
  function applyReaderMode(){
    el.html.setAttribute('data-reader-mode', state.readerMode ? 'true' : 'false');
    localStorage.setItem('ts-reader-mode', state.readerMode ? 'true' : 'false');
    el.readerModeToggle.setAttribute('aria-checked', state.readerMode ? 'true' : 'false');
    el.readerModeToggle.classList.toggle('on', state.readerMode);
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
  el.readerModeToggle.addEventListener('click', ()=>{
    state.readerMode = !state.readerMode;
    applyReaderMode();
  });
  function openSettings(){ el.settingsOverlay.classList.add('open'); }
  function closeSettings(){ el.settingsOverlay.classList.remove('open'); }
  el.settingsBtn.addEventListener('click', openSettings);
  el.settingsCloseBtn.addEventListener('click', closeSettings);
  el.settingsOverlay.addEventListener('click', (e)=>{ if(e.target === el.settingsOverlay) closeSettings(); });

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
    el.readerModeLabel.textContent = d.ui.readerModeLabel;
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

  /* ---------------------------------------------------------
     Keyboard shortcuts: "/" focuses search, Escape closes overlays
     --------------------------------------------------------- */
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){ closeLangMenu(); closeSettings(); hideGlobalResults(); }
    const tag = (document.activeElement && document.activeElement.tagName) || '';
    const typing = tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement.isContentEditable;
    if(e.key === '/' && !typing){
      e.preventDefault();
      el.searchInput.focus();
    }
  });

  /* ---------------------------------------------------------
     Mobile sidebar
     --------------------------------------------------------- */
  function openSidebar(){ el.app.classList.add('sidebar-open'); el.menuBtn.setAttribute('aria-expanded','true'); }
  function closeSidebar(){ el.app.classList.remove('sidebar-open'); el.menuBtn.setAttribute('aria-expanded','false'); }
  el.menuBtn.addEventListener('click', ()=>{
    el.app.classList.contains('sidebar-open') ? closeSidebar() : openSidebar();
  });
  el.overlay.addEventListener('click', closeSidebar);

  /* ---------------------------------------------------------
     Navigation + deep-link query ("#section?q=term")
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
    [...el.nav.children].forEach(a=> a.classList.toggle('active', a.dataset.route === state.route));
  }

  function parseHash(){
    const raw = location.hash.replace('#','');
    const qIndex = raw.indexOf('?q=');
    if(qIndex === -1) return { route: raw, query: '' };
    return { route: raw.slice(0, qIndex), query: decodeURIComponent(raw.slice(qIndex + 3)) };
  }

  function navigateTo(route, query){
    const target = '#' + route + (query ? '?q=' + encodeURIComponent(query) : '');
    if(location.hash === target){
      applyHash();
    } else {
      location.hash = target;
    }
  }

  function applyHash(){
    const { route, query } = parseHash();
    state.route = validRoutes.includes(route) ? route : 'dashboard';
    state.query = (query || '').toLowerCase();
    el.searchInput.value = query || '';
    el.searchClear.hidden = !query;
    if(state.route === 'quiz') resetQuiz();
    render();
    if (typeof el.content.scrollIntoView === 'function') {
      el.content.scrollIntoView({behavior:'instant', block:'start'});
    }
    window.scrollTo({top:0});
  }

  window.addEventListener('hashchange', ()=>{
    localStorage.setItem('ts-last-route', parseHash().route);
    applyHash();
  });

  /* ---------------------------------------------------------
     Fuzzy-ish matching: exact substring first, then a light
     typo-tolerant token check for short titles/words.
     --------------------------------------------------------- */
  function levenshtein(a, b){
    if(a === b) return 0;
    if(!a.length) return b.length;
    if(!b.length) return a.length;
    const m = a.length, n = b.length;
    const dp = new Array(n+1);
    for(let j=0;j<=n;j++) dp[j] = j;
    for(let i=1;i<=m;i++){
      let prev = dp[0];
      dp[0] = i;
      for(let j=1;j<=n;j++){
        const tmp = dp[j];
        dp[j] = a[i-1] === b[j-1] ? prev : 1 + Math.min(prev, dp[j], dp[j-1]);
        prev = tmp;
      }
    }
    return dp[n];
  }

  function looseMatch(str, query){
    if(!query) return true;
    if(!str) return false;
    const s = str.toLowerCase();
    if(s.includes(query)) return true;
    if(query.length < 3 || s.length > 60) return false;
    const threshold = query.length >= 6 ? 2 : 1;
    return s.split(/[\s,،.()-]+/).some(tok => tok.length >= 3 && Math.abs(tok.length - query.length) <= threshold + 1 && levenshtein(tok, query) <= threshold);
  }

  function matches(str){
    return looseMatch((str || '').toLowerCase(), state.query);
  }

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
    pushAll('tribes', d.tribes.items, it => it.name);
    pushAll('clothing', d.clothing.men, it => it.name);
    pushAll('clothing', d.clothing.women, it => it.name);
    pushAll('cuisine', d.cuisine.dishes, it => it.name);
    pushAll('arts', d.arts.items, it => it.title);
    pushAll('people', d.people.items, it => it.name);
    pushAll('poets', d.poets.items, it => it.name);
    pushAll('books', d.books.items, it => it.title);
    pushAll('influences', d.influences.items, it => it.title);
    DICTIONARY.categories.forEach(cat=>{
      cat.words.forEach(w=> idx.push({ section:'dictionary', label: d.nav.dictionary, title: w.tk + ' — ' + w.fa, icon:'translate' }));
    });
    DICTIONARY_EXTENDED.forEach(e=>{
      idx.push({ section:'dictionary', label: d.nav.dictionary, title: e.tk + ' — ' + e.en, icon:'translate' });
    });
    return idx;
  }

  function hideGlobalResults(){ el.globalResults.hidden = true; el.globalResults.innerHTML = ''; }

  function renderGlobalResults(){
    const q = state.query;
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
      node.addEventListener('click', ()=>{ const route = node.dataset.route; hideGlobalResults(); navigateTo(route, state.query); });
    });
  }

  let searchDebounce = null;
  el.searchInput.addEventListener('input', ()=>{
    const val = el.searchInput.value.trim().toLowerCase();
    el.searchClear.hidden = val.length === 0;
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(()=>{
      state.query = val;
      render();
      renderGlobalResults();
    }, 120);
  });
  el.searchInput.addEventListener('focus', renderGlobalResults);
  el.searchClear.addEventListener('click', ()=>{
    el.searchInput.value = ''; state.query = ''; el.searchClear.hidden = true;
    hideGlobalResults(); render();
  });

  /* ---------------------------------------------------------
     Reveal-on-scroll + reading progress + back-to-top
     --------------------------------------------------------- */
  let observer;
  function initReveal(){
    if(observer) observer.disconnect();
    observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){ entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
      });
    }, { threshold:.12 });
    el.content.querySelectorAll('.reveal').forEach(node=> observer.observe(node));
  }

  window.addEventListener('scroll', ()=>{
    el.backTop.classList.toggle('show', window.scrollY > 480);
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const pct = scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0;
    if(el.readingProgress) el.readingProgress.style.width = pct + '%';
  });
  el.backTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

  /* ---------------------------------------------------------
     Speech synthesis (best-effort pronunciation helper)
     --------------------------------------------------------- */
  function speak(text){
    if(!('speechSynthesis' in window)){
      showToast(DATA[state.lang].ui.speakNotSupported);
      return;
    }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    // No browser ships a Turkmen voice; Turkish is the closest phonetic
    // relative among commonly available system voices.
    utter.lang = 'tr-TR';
    utter.rate = 0.9;
    window.speechSynthesis.speak(utter);
  }

  /* ---------------------------------------------------------
     Copy-link (deep link to a single card) + report issue
     --------------------------------------------------------- */
  function buildDeepLink(section, title){
    return location.origin + location.pathname + '#' + section + '?q=' + encodeURIComponent(title);
  }
  function attachCardTools(root, section){
    const d = DATA[state.lang];
    root.querySelectorAll('[data-copy-title]').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        copyText(buildDeepLink(section, btn.dataset.copyTitle));
        showToast(d.ui.linkCopied);
      });
    });
    root.querySelectorAll('[data-report-title]').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        const report = `TurkmenSon — ${d.ui.reportIssue}\n` + d.nav[section] + ' / ' + btn.dataset.reportTitle + '\n' + new Date().toISOString();
        copyText(report);
        showToast(d.ui.linkCopied);
      });
    });
    root.querySelectorAll('[data-speak]').forEach(btn=>{
      btn.addEventListener('click', (e)=>{ e.stopPropagation(); speak(btn.dataset.speak); });
    });
  }
  function cardTools(title){
    return `<span class="card-tools">
      <button class="ct-btn" data-copy-title="${title.replace(/"/g,'&quot;')}" title="link"><span class="icon" data-icon="copy"></span></button>
      <button class="ct-btn" data-report-title="${title.replace(/"/g,'&quot;')}" title="report"><span class="icon" data-icon="mail"></span></button>
    </span>`;
  }

  /* ---------------------------------------------------------
     Renderers per section
     --------------------------------------------------------- */
  function emptyState(text){
    return `<div class="empty-state reveal"><span class="icon" data-icon="search"></span><p>${text}</p></div>`;
  }

  function resultBadge(count, d){
    if(!state.query) return '';
    return `<span class="result-badge">${count} ${d.ui.resultsCount}</span>`;
  }

  function sectionHead(d, key, iconName, count){
    return `<div class="section-head reveal">
      <h2><span class="icon" data-icon="${iconName}"></span>${d.nav[key]}${typeof count === 'number' ? resultBadge(count, d) : ''}</h2>
      <p>${d[key].intro}</p>
    </div>`;
  }

  const RANDOM_POOL_SECTIONS = ['history','warpeace','places','tribes','clothing','cuisine','arts','people','poets','books','influences'];
  function pickRandomItem(d){
    const section = RANDOM_POOL_SECTIONS[Math.floor(Math.random() * RANDOM_POOL_SECTIONS.length)];
    let items, titleFn;
    if(section === 'history'){ items = d.history.eras; titleFn = it => it.title; }
    else if(section === 'warpeace'){ items = d.warpeace.events; titleFn = it => it.title; }
    else if(section === 'clothing'){ items = [...d.clothing.men, ...d.clothing.women]; titleFn = it => it.name; }
    else if(section === 'cuisine'){ items = d.cuisine.dishes; titleFn = it => it.name; }
    else if(section === 'people'){ items = d.people.items; titleFn = it => it.name; }
    else if(section === 'poets'){ items = d.poets.items; titleFn = it => it.name; }
    else if(section === 'books'){ items = d.books.items; titleFn = it => it.title; }
    else if(section === 'tribes'){ items = d.tribes.items; titleFn = it => it.name; }
    else { items = d[section].items; titleFn = it => it.title; }
    const item = items[Math.floor(Math.random() * items.length)];
    return { section, title: titleFn(item) };
  }

  function quoteOfDayPool(d){
    const pool = [];
    d.poets.items.forEach(p => pool.push({ title: p.name, text: p.text, section:'poets' }));
    d.people.items.slice(0,6).forEach(p => pool.push({ title: p.name, text: p.text, section:'people' }));
    d.places.items.slice(0,6).forEach(p => pool.push({ title: p.title, text: p.text, section:'places' }));
    return pool;
  }
  function dayOfYear(){
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    return Math.floor((now - start) / 86400000);
  }

  function renderDashboard(d){
    const stats = d.dashboard.stats.map(s => `
      <div class="stat-card reveal">
        <div class="stat-icon"><span class="icon" data-icon="${s.icon}"></span></div>
        <span class="stat-label">${s.label}</span>
        <span class="stat-value">${s.value}</span>
      </div>`).join('');

    const cards = NAV_ITEMS.filter(n=> !['dashboard','quiz','sources'].includes(n.id)).map(n=> `
      <div class="explore-card reveal" data-route="${n.id}">
        <span class="go icon" data-icon="chevronSide"></span>
        <div class="icon-wrap"><span class="icon" data-icon="${n.icon}"></span></div>
        <h3>${d.nav[n.id]}</h3>
        <p>${d.explore[n.id]}</p>
      </div>`).join('');

    const pool = quoteOfDayPool(d);
    const pick = pool[dayOfYear() % pool.length];

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
          <button class="btn btn-ghost" id="randomBtn"><span class="icon" data-icon="shuffle"></span>${d.ui.randomBtn}</button>
          <button class="btn btn-ghost" id="aboutBtn">${d.ui.heroCta2}</button>
        </div>
      </section>

      <div class="quote-of-day reveal">
        <div class="qd-label"><span class="icon" data-icon="quote"></span>${d.ui.quoteOfDayLabel}</div>
        <p class="qd-text">${pick.text}</p>
        <a class="qd-source" href="#${pick.section}?q=${encodeURIComponent(pick.title)}">${pick.title} ←</a>
      </div>

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
    if(!filtered.length) return sectionHead(d, key, iconName, 0) + emptyState(d.ui.noResults);
    const rows = filtered.map(it => `
      <div class="timeline-item reveal">
        <span class="year">${it.year || ''}</span>
        ${cardTools(it.title)}
        ${it.icon ? `<div class="icon-wrap" style="width:34px;height:34px;border-radius:10px;background:var(--surface-2);color:var(--secondary);display:flex;align-items:center;justify-content:center;margin-bottom:8px;"><span class="icon" data-icon="${it.icon}"></span></div>` : ''}
        <h3>${it.title}</h3>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, key, iconName, filtered.length) + `<div class="timeline">${rows}</div>`;
  }

  function renderCardListSection(d, key, iconName){
    const items = d[key].items.filter(it => matches(it.title) || matches(it.text));
    if(!items.length) return sectionHead(d, key, iconName, 0) + emptyState(d.ui.noResults);
    const cards = items.map(it => `
      <div class="item-card reveal">
        ${cardTools(it.title)}
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <h3>${it.title}</h3>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, key, iconName, items.length) + `<div class="card-grid">${cards}</div>`;
  }

  function renderTribes(d){
    const items = d.tribes.items.filter(it => matches(it.name) || matches(it.text) || matches(it.region));
    if(!items.length) return sectionHead(d, 'tribes', 'grid', 0) + emptyState(d.ui.noResults);
    const cards = items.map(it => `
      <div class="item-card reveal">
        ${cardTools(it.name)}
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <div><span class="badge">${it.region}</span><h3>${it.name}</h3></div>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, 'tribes', 'grid', items.length) + `<div class="card-grid">${cards}</div>`;
  }

  function renderGenealogy(d){
    const g = d.genealogy;
    const wingsHtml = g.wings.map(wing => `
      <div class="oz-wing">
        <div class="oz-wing-label">
          <div class="oz-wing-name">${wing.name}</div>
          <div class="oz-wing-meaning">${wing.meaning}</div>
        </div>
        <div class="oz-sons">
          ${wing.sons.map(son => `
            <div class="oz-son-branch">
              <div class="oz-node oz-son">${son.name}</div>
              <div class="oz-tribes">
                ${son.tribes.map(t => `<div class="oz-node oz-tribe">${t}</div>`).join('')}
              </div>
            </div>`).join('')}
        </div>
      </div>`).join('');

    return sectionHead(d, 'genealogy', 'tree') + `
      <div class="oz-tree-wrap">
        <div class="oz-tree">
          <div class="oz-root-row">
            <div class="oz-node oz-root">${g.root}<span class="oz-root-note">${g.rootNote}</span></div>
          </div>
          <div class="oz-wings-row">${wingsHtml}</div>
        </div>
      </div>
      <div class="dict-note reveal" style="margin-top:22px;"><span class="icon" data-icon="info"></span><p>${g.note}</p></div>
    `;
  }

  function renderClothing(d){
    const buildGroup = (arr) => arr.filter(it=> matches(it.name) || matches(it.text) || matches(it.badge))
      .map(it => `
      <div class="item-card reveal">
        ${cardTools(it.name)}
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <div><span class="badge">${it.badge}</span><h3>${it.name}</h3></div>
        <p>${it.text}</p>
      </div>`).join('');

    const men = buildGroup(d.clothing.men);
    const women = buildGroup(d.clothing.women);
    const nothing = !men && !women;
    const count = d.clothing.men.filter(it=> matches(it.name)||matches(it.text)||matches(it.badge)).length +
                  d.clothing.women.filter(it=> matches(it.name)||matches(it.text)||matches(it.badge)).length;

    return sectionHead(d, 'clothing', 'shirt', count) +
      (nothing ? emptyState(d.ui.noResults) : `
      ${men ? `<h3 class="subheading"><span class="icon" data-icon="shirt"></span>${d.ui.menSection}</h3><div class="card-grid">${men}</div>` : ''}
      ${women ? `<h3 class="subheading"><span class="icon" data-icon="gem"></span>${d.ui.womenSection}</h3><div class="card-grid">${women}</div>` : ''}
    `);
  }

  function renderCuisine(d){
    const items = d.cuisine.dishes.filter(it => matches(it.name) || matches(it.text));
    if(!items.length) return sectionHead(d, 'cuisine', 'bowl', 0) + emptyState(d.ui.noResults);
    const cards = items.map(it => `
      <div class="item-card reveal">
        ${cardTools(it.name)}
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <h3>${it.name}</h3>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, 'cuisine', 'bowl', items.length) + `<div class="card-grid">${cards}</div>`;
  }

  function renderLanguage(d){
    const facts = d.language.facts.filter(f => matches(f.text));
    const alpha = d.language.alphabet.filter(a => matches(a.letter) || matches(a.sound));
    if(!facts.length && !alpha.length) return sectionHead(d, 'language', 'letters', 0) + emptyState(d.ui.noResults);

    const factRows = facts.map(f => `
      <div class="fact-row reveal">
        <div class="icon-wrap"><span class="icon" data-icon="${f.icon}"></span></div>
        <p>${f.text}</p>
      </div>`).join('');

    const alphaChips = alpha.map(a => `
      <div class="alpha-chip reveal">
        <button class="alpha-speak" data-speak="${a.letter}" aria-label="${d.ui.speakWord}"><span class="icon" data-icon="volume"></span></button>
        <div class="letter">${a.letter}</div>
        <div class="sound">${a.sound}</div>
      </div>`).join('');

    return sectionHead(d, 'language', 'letters') +
      (facts.length ? `<h3 class="subheading"><span class="icon" data-icon="info"></span>${d.ui.factsTitle}</h3><div class="fact-list">${factRows}</div>` : '') +
      (alpha.length ? `<h3 class="subheading"><span class="icon" data-icon="letters"></span>${d.ui.alphabetTitle}</h3><div class="alpha-grid">${alphaChips}</div>` : '');
  }

  /* ---------- Dictionary (curated + extended, with POS filter + export) ---------- */
  function toCSV(rows, headers){
    const esc = (v) => '"' + String(v).replace(/"/g,'""') + '"';
    return [headers.map(esc).join(','), ...rows.map(r => r.map(esc).join(','))].join('\r\n');
  }
  function downloadBlob(content, filename, mime){
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    setTimeout(()=> URL.revokeObjectURL(url), 1000);
  }
  function exportDictionary(format){
    const rows = [];
    DICTIONARY.categories.forEach(cat => cat.words.forEach(w => rows.push([w.tk, w.faScript, w.fa, cat.id])));
    if(format === 'csv'){
      const csv = toCSV(rows, ['turkmen','persian_script','persian','category']);
      downloadBlob(csv, 'turkmenson-dictionary.csv', 'text/csv;charset=utf-8');
    } else {
      const json = rows.map(r => ({ turkmen:r[0], persian_script:r[1], persian:r[2], category:r[3] }));
      downloadBlob(JSON.stringify(json, null, 2), 'turkmenson-dictionary.json', 'application/json');
    }
  }

  // Official Turkmen Latin alphabet order, used to sort/group the A-Z view.
  const TM_ALPHABET = ['a','b','ç','d','e','ä','f','g','h','i','j','ž','z','k','l','m','n','ň','o','ö','p','r','s','ş','t','u','ü','w','y','ý'];
  function tmLetterRank(ch){ const i = TM_ALPHABET.indexOf((ch||'').toLowerCase()); return i === -1 ? 999 : i; }

  function flattenDictionary(){
    const all = [];
    DICTIONARY.categories.forEach(cat => cat.words.forEach(w => all.push(w)));
    return all;
  }

  function exportToolbar(d){
    return `<div class="dict-export">
      <button class="btn-mini" id="exportCsvBtn"><span class="icon" data-icon="download"></span>${d.ui.downloadCsv}</button>
      <button class="btn-mini" id="exportJsonBtn"><span class="icon" data-icon="download"></span>${d.ui.downloadJson}</button>
    </div>`;
  }

  function dictWordRow(d, w){
    return `
      <div class="dict-row reveal">
        <button class="dict-speak" data-speak="${w.tk}" aria-label="${d.ui.speakWord}"><span class="icon" data-icon="volume"></span></button>
        <span class="dict-tk">${w.tk}</span>
        <span class="dict-fascript">${w.faScript}</span>
        <span class="dict-fa">${w.fa}</span>
      </div>`;
  }

  function renderDictionaryByTopic(d, q, matchWord){
    const blocks = DICTIONARY.categories.map(cat=>{
      const words = cat.words.filter(matchWord);
      if(!words.length) return '';
      const label = state.lang === 'fa' ? cat.fa : cat.tk;
      return `<h3 class="subheading dict-cat-heading">${label}</h3><div class="dict-table">${words.map(w => dictWordRow(d, w)).join('')}</div>`;
    }).filter(Boolean);
    return blocks.length ? blocks.join('') : emptyState(d.ui.noResults);
  }

  function renderDictionaryAlphabetical(d, q, matchWord){
    const words = flattenDictionary().filter(matchWord)
      .slice()
      .sort((a,b)=>{
        const ra = tmLetterRank(a.tk[0]), rb = tmLetterRank(b.tk[0]);
        if(ra !== rb) return ra - rb;
        return a.tk.localeCompare(b.tk);
      });
    if(!words.length) return emptyState(d.ui.noResults);

    const groups = [];
    words.forEach(w=>{
      const letter = w.tk[0].toUpperCase();
      let group = groups[groups.length-1];
      if(!group || group.letter !== letter){ group = { letter, words:[] }; groups.push(group); }
      group.words.push(w);
    });

    const jumpBar = `<div class="alpha-jumpbar">${groups.map(g => `<a href="#dict-letter-${g.letter}" class="alpha-jump">${g.letter}</a>`).join('')}</div>`;
    const body = groups.map(g => `
      <h3 class="subheading dict-cat-heading" id="dict-letter-${g.letter}">${g.letter}</h3>
      <div class="dict-table">${g.words.map(w => dictWordRow(d, w)).join('')}</div>
    `).join('');

    return jumpBar + body;
  }

  function renderExtendedDictionary(d, q){
    let html = `
      <div class="dict-ext-head reveal">
        <h3 class="subheading"><span class="icon" data-icon="link"></span>${d.ui.extTitle}</h3>
        <p class="dict-ext-intro">${d.ui.extIntro}</p>
      </div>`;
    if(!q){
      html += `<div class="empty-state reveal"><span class="icon" data-icon="search"></span><p>${d.ui.extPrompt}</p></div>`;
      return html;
    }
    const results = DICTIONARY_EXTENDED.filter(e =>
      looseMatch(e.tk, q) || e.en.toLowerCase().includes(q) || (e.ex && (e.ex.tk.toLowerCase().includes(q) || e.ex.en.toLowerCase().includes(q)))
    );
    if(!results.length){
      html += `<div class="empty-state reveal"><span class="icon" data-icon="search"></span><p>${d.ui.extNoResults}</p></div>`;
      return html;
    }
    html += `<div class="ext-cards">` + results.map(e => `
      <div class="ext-card reveal">
        <div class="ext-card-head">
          <button class="dict-speak" data-speak="${e.tk}" aria-label="${d.ui.speakWord}"><span class="icon" data-icon="volume"></span></button>
          <span class="ext-tk">${e.tk}</span>
          ${e.phon ? `<span class="ext-phon">[${e.phon}]</span>` : ''}
          <span class="ext-pos">${e.pos}</span>
        </div>
        <p class="ext-en">${e.en}</p>
        ${e.ex ? `<p class="ext-example"><strong>${d.ui.extExampleLabel}</strong> <em>${e.ex.tk}</em> — ${e.ex.en}</p>` : ''}
      </div>`).join('') + `</div>`;
    return html;
  }

  function renderDictionary(d){
    const q = state.query;
    const matchWord = (w) => !q || looseMatch(w.tk, q) || looseMatch(w.fa, q) || w.faScript.includes(q);
    const note = DICTIONARY.note[state.lang];
    const total = flattenDictionary().length;

    const toolbar = `
      <div class="dict-toolbar reveal">
        <div class="view-toggle">
          <button class="view-toggle-btn ${state.dictView === 'topic' ? 'active':''}" data-view="topic">${d.ui.viewByTopic}</button>
          <button class="view-toggle-btn ${state.dictView === 'alpha' ? 'active':''}" data-view="alpha">${d.ui.viewByAlphabet}</button>
        </div>
        ${exportToolbar(d)}
      </div>`;

    const body = state.dictView === 'alpha'
      ? renderDictionaryAlphabetical(d, q, matchWord)
      : renderDictionaryByTopic(d, q, matchWord);

    return sectionHead(d, 'dictionary', 'translate', q ? flattenDictionary().filter(matchWord).length : undefined) +
      `<p class="dict-total">${total} ${d.ui.dictTotalWords}</p>` +
      (q ? '' : `<div class="dict-note reveal"><span class="icon" data-icon="info"></span><p>${note}</p></div>`) +
      toolbar +
      body +
      `<div class="dict-divider"></div>` +
      renderExtendedDictionary(d, q);
  }

  function renderPeopleLike(d, key, iconName){
    const items = d[key].items.filter(it => matches(it.name) || matches(it.text) || matches(it.era) || matches(it.years));
    if(!items.length) return sectionHead(d, key, iconName, 0) + emptyState(d.ui.noResults);
    const cards = items.map(it => `
      <div class="item-card reveal">
        ${cardTools(it.name)}
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <div><span class="badge">${it.era || it.years || ''}</span><h3>${it.name}</h3></div>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, key, iconName, items.length) + `<div class="card-grid">${cards}</div>`;
  }

  function renderBooks(d){
    const items = d.books.items.filter(it => matches(it.title) || matches(it.text) || matches(it.author));
    if(!items.length) return sectionHead(d, 'books', 'book', 0) + emptyState(d.ui.noResults);
    const cards = items.map(it => `
      <div class="item-card reveal">
        ${cardTools(it.title)}
        <div class="icon-wrap"><span class="icon" data-icon="${it.icon}"></span></div>
        <div><span class="badge">${it.author}${it.era ? ' · ' + it.era : ''}</span><h3>${it.title}</h3></div>
        <p>${it.text}</p>
      </div>`).join('');
    return sectionHead(d, 'books', 'book', items.length) + `<div class="card-grid">${cards}</div>`;
  }

  function renderSources(d){
    const cards = d.sources.categories.map(c => `
      <div class="item-card reveal">
        <div class="icon-wrap"><span class="icon" data-icon="${c.icon}"></span></div>
        <h3>${c.title}</h3>
        <p>${c.text}</p>
      </div>`).join('');
    return sectionHead(d, 'sources', 'external') + `<div class="card-grid">${cards}</div>` +
      `<div class="dict-note reveal" style="margin-top:26px;"><span class="icon" data-icon="info"></span><p>${d.sources.disclaimer}</p></div>`;
  }

  /* ---------- Quiz ---------- */
  function resetQuiz(){
    state.quiz = { index:0, score:0, answered:false, selected:null, finished:false };
  }
  function renderQuiz(d){
    const qz = state.quiz;
    const total = d.quiz.questions.length;
    const best = parseInt(localStorage.getItem('ts-quiz-best') || '0', 10);

    if(qz.finished){
      if(qz.score > best) localStorage.setItem('ts-quiz-best', String(qz.score));
      const finalBest = Math.max(qz.score, best);
      return sectionHead(d, 'quiz', 'trophy') + `
        <div class="quiz-card reveal quiz-result">
          <span class="icon quiz-trophy" data-icon="trophy"></span>
          <div class="quiz-score">${qz.score} ${d.ui.quizOutOf} ${total}</div>
          <div class="quiz-best">${d.ui.quizBestLabel}: ${finalBest} ${d.ui.quizOutOf} ${total}</div>
          <button class="btn btn-solid" id="quizRestartBtn">${d.ui.quizRestart}</button>
        </div>`;
    }

    const question = d.quiz.questions[qz.index];
    const optionsHtml = question.options.map((opt, i) => {
      let cls = 'quiz-option';
      if(qz.answered){
        if(i === question.correct) cls += ' correct';
        else if(i === qz.selected) cls += ' wrong';
      }
      return `<button class="${cls}" data-index="${i}" ${qz.answered ? 'disabled' : ''}>${opt}</button>`;
    }).join('');

    return sectionHead(d, 'quiz', 'trophy') + `
      <div class="quiz-card reveal">
        <div class="quiz-progress-label">${d.ui.quizQuestionLabel} ${qz.index+1}/${total} · ${d.ui.quizScoreLabel}: ${qz.score}</div>
        <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${(qz.index/total)*100}%"></div></div>
        <h3 class="quiz-question">${question.q}</h3>
        <div class="quiz-options">${optionsHtml}</div>
        ${qz.answered ? `
          <div class="quiz-feedback ${qz.selected === question.correct ? 'ok':'bad'}">
            <span class="icon" data-icon="${qz.selected === question.correct ? 'check':'x'}"></span>
            <span>${qz.selected === question.correct ? d.ui.quizCorrect : d.ui.quizWrong + ' ' + question.options[question.correct]}</span>
          </div>
          <p class="quiz-explain">${question.explain}</p>
          <button class="btn btn-solid" id="quizNextBtn">${qz.index+1 < total ? d.ui.quizNext : d.ui.quizFinish}</button>
        ` : ''}
      </div>`;
  }

  /* ---------------------------------------------------------
     Breadcrumb
     --------------------------------------------------------- */
  function renderBreadcrumb(d){
    if(state.route === 'dashboard'){ el.breadcrumb.innerHTML = ''; return; }
    el.breadcrumb.innerHTML = `<a href="#dashboard">${d.ui.breadcrumbHome}</a><span class="bc-sep">/</span><span>${d.nav[state.route]}</span>`;
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
    renderBreadcrumb(d);

    let html = '';
    switch(state.route){
      case 'dashboard':  html = renderDashboard(d); break;
      case 'history':    html = renderTimelineSection(d, 'history', 'scroll'); break;
      case 'warpeace':   html = renderTimelineSection(d, 'warpeace', 'swords'); break;
      case 'places':     html = renderCardListSection(d, 'places', 'landmark'); break;
      case 'tribes':     html = renderTribes(d); break;
      case 'genealogy':  html = renderGenealogy(d); break;
      case 'clothing':   html = renderClothing(d); break;
      case 'cuisine':    html = renderCuisine(d); break;
      case 'arts':       html = renderCardListSection(d, 'arts', 'music'); break;
      case 'language':   html = renderLanguage(d); break;
      case 'dictionary': html = renderDictionary(d); break;
      case 'people':     html = renderPeopleLike(d, 'people', 'users'); break;
      case 'poets':      html = renderPeopleLike(d, 'poets', 'feather'); break;
      case 'books':      html = renderBooks(d); break;
      case 'influences': html = renderCardListSection(d, 'influences', 'link'); break;
      case 'quiz':       html = renderQuiz(d); break;
      case 'sources':    html = renderSources(d); break;
      default:           html = renderDashboard(d);
    }
    el.content.innerHTML = html;
    paintIcons(el.content);
    setActiveNav();
    initReveal();
    attachCardTools(el.content, state.route);

    const aboutBtn = document.getElementById('aboutBtn');
    if(aboutBtn){
      aboutBtn.addEventListener('click', ()=>{
        const panel = document.getElementById('aboutPanel');
        panel.hidden = !panel.hidden;
        if(!panel.hidden) panel.scrollIntoView({behavior:'smooth', block:'center'});
      });
    }
    const randomBtn = document.getElementById('randomBtn');
    if(randomBtn){
      randomBtn.addEventListener('click', ()=>{
        const pick = pickRandomItem(d);
        navigateTo(pick.section, pick.title);
      });
    }
    el.content.querySelectorAll('.explore-card[data-route]').forEach(card=>{
      card.addEventListener('click', ()=>{ location.hash = card.dataset.route; });
    });

    // dictionary-specific wiring
    if(state.route === 'dictionary'){
      el.content.querySelectorAll('.view-toggle-btn').forEach(btn=>{
        btn.addEventListener('click', ()=>{ state.dictView = btn.dataset.view; render(); });
      });
      const csvBtn = document.getElementById('exportCsvBtn');
      const jsonBtn = document.getElementById('exportJsonBtn');
      if(csvBtn) csvBtn.addEventListener('click', ()=> exportDictionary('csv'));
      if(jsonBtn) jsonBtn.addEventListener('click', ()=> exportDictionary('json'));
    }

    // quiz-specific wiring
    if(state.route === 'quiz'){
      el.content.querySelectorAll('.quiz-option').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          if(state.quiz.answered) return;
          const idx = parseInt(btn.dataset.index, 10);
          state.quiz.selected = idx;
          state.quiz.answered = true;
          if(idx === d.quiz.questions[state.quiz.index].correct) state.quiz.score++;
          render();
        });
      });
      const nextBtn = document.getElementById('quizNextBtn');
      if(nextBtn) nextBtn.addEventListener('click', ()=>{
        if(state.quiz.index + 1 < d.quiz.questions.length){
          state.quiz.index++; state.quiz.answered = false; state.quiz.selected = null;
          render();
        } else {
          state.quiz.finished = true;
          render();
        }
      });
      const restartBtn = document.getElementById('quizRestartBtn');
      if(restartBtn) restartBtn.addEventListener('click', ()=>{ resetQuiz(); render(); });
    }
  }

  /* ---------------------------------------------------------
     Service worker (PWA) — best-effort, silently no-ops if the
     environment doesn't support it (e.g. file:// or old browser).
     --------------------------------------------------------- */
  function registerServiceWorker(){
    if('serviceWorker' in navigator && location.protocol.startsWith('http')){
      navigator.serviceWorker.register('sw.js').catch(()=>{});
    }
  }

  /* ---------------------------------------------------------
     Boot
     --------------------------------------------------------- */
  function boot(){
    let { route, query } = parseHash();
    if(!validRoutes.includes(route)){
      const remembered = localStorage.getItem('ts-last-route');
      route = validRoutes.includes(remembered) ? remembered : 'dashboard';
      query = '';
    }
    state.route = route;
    state.query = (query || '').toLowerCase();

    applyTheme();
    applyLangAttrs();
    applyFontSize();
    applyContrast();
    applyReaderMode();
    buildNav();
    applySettingsLabels();
    render();
    paintIcons(document);
    registerServiceWorker();

    const target = '#' + route + (query ? '?q=' + encodeURIComponent(query) : '');
    if(location.hash !== target) location.hash = target;
  }

  boot();
})();
