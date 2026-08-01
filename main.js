/* ==========================================================================
   МОЛОДОСТЬ — салон красоты
   Общий стиль сайта
   ========================================================================== */

/* ---- Fonts ---- */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');

/* ---- Tokens ---- */
:root {
  --black: #141210;
  --black-2: #1b1815;
  --card-bg: #222019;
  --card-bg-2: #2a2722;
  --gray-line: rgba(255, 255, 255, 0.12);
  --white: #ffffff;
  --white-70: rgba(255, 255, 255, 0.7);
  --white-50: rgba(255, 255, 255, 0.5);
  --gold-1: #b79c5b;
  --gold-2: #e7cf95;
  --gold-gradient: linear-gradient(135deg, #b79c5b 0%, #e7cf95 50%, #b79c5b 100%);
  --overlay-20: rgba(0, 0, 0, 0.2);
  --overlay-60: rgba(10, 9, 8, 0.6);
  --overlay-80: rgba(10, 9, 8, 0.85);
  --radius-s: 8px;
  --radius-m: 16px;
  --radius-l: 28px;
  --container: 1280px;
  --header-h: 92px;
  --header-h-mobile: 64px;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
}

/* ---- Reset ---- */
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--black);
  color: var(--white);
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; border: none; background: none; color: inherit; }
input, textarea { font-family: inherit; }
ul { list-style: none; }

h1, h2, h3, h4, .font-display {
  font-family: 'Cormorant SC', serif;
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1.1;
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 40px;
}

.gold-text {
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.eyebrow {
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold-2);
  margin-bottom: 14px;
  display: block;
}

.section { padding: 100px 0; }
.section--tight { padding: 70px 0; }
.section--alt { background: var(--black-2); }

.section-head {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 56px;
}
.section-head h2 { font-size: 42px; margin-bottom: 14px; }
.section-head p { color: var(--white-70); font-size: 16px; }
.section-head.align-left { text-align: left; margin: 0 0 48px; }

/* Focus visibility */
a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible {
  outline: 2px solid var(--gold-2);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}

/* ==========================================================================
   Buttons
   ========================================================================== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 34px;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease), opacity 0.25s var(--ease);
  white-space: nowrap;
}
.btn-gold {
  background: var(--gold-gradient);
  color: #221a0c;
}
.btn-gold:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(183, 156, 91, 0.35); }
.btn-outline {
  border: 1px solid var(--gray-line);
  color: var(--white);
  background: transparent;
}
.btn-outline:hover { border-color: var(--gold-2); color: var(--gold-2); }
.btn-sm { padding: 12px 24px; font-size: 14px; }
.btn-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--gold-2);
  font-size: 14px;
  font-weight: 500;
  transition: gap 0.2s var(--ease);
}
.btn-link:hover { gap: 10px; }
.btn-block { width: 100%; }
.btn:disabled { opacity: 0.55; cursor: not-allowed; transform: none !important; }

/* ==========================================================================
   Header
   ========================================================================== */
.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 500;
  height: var(--header-h);
  display: flex;
  align-items: center;
  background: rgba(20, 18, 16, 0.88);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--gray-line);
}
.header-inner {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 32px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Cormorant SC', serif;
  margin-right: 8px;
}
.logo-mark {
  width: 34px; height: 34px;
  flex-shrink: 0;
}
.logo-mark svg { width: 100%; height: 100%; }
.logo-text { display: flex; flex-direction: column; line-height: 1.1; }
.logo-text .l1 {
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 0.06em;
  background: var(--gold-gradient);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.logo-text .l2 {
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--white-50);
}

.main-nav { display: flex; align-items: center; gap: 28px; flex: 1; }
.main-nav a {
  font-size: 14.5px;
  color: var(--white-70);
  position: relative;
  padding: 6px 0;
  transition: color 0.2s;
}
.main-nav a:hover, .main-nav a.active { color: var(--white); }
.main-nav a.active::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: -2px;
  height: 1px;
  background: var(--gold-gradient);
}

.header-right { display: flex; align-items: center; gap: 22px; margin-left: auto; }
.header-note {
  font-size: 12.5px;
  color: var(--white-50);
  line-height: 1.3;
  text-align: right;
  max-width: 130px;
}
.header-phone {
  text-align: right;
  font-size: 13.5px;
  line-height: 1.3;
}
.header-phone a { display: block; color: var(--white); }
.header-phone a:hover { color: var(--gold-2); }
.header-phone .sub { color: var(--white-50); font-size: 12px; }

.burger-btn {
  display: none;
  width: 40px; height: 40px;
  align-items: center; justify-content: center;
  flex-direction: column; gap: 5px;
  flex-shrink: 0;
}
.burger-btn span {
  width: 22px; height: 1.5px;
  background: var(--white);
  transition: transform 0.3s var(--ease), opacity 0.3s var(--ease);
}
.burger-btn.is-open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.burger-btn.is-open span:nth-child(2) { opacity: 0; }
.burger-btn.is-open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* Mobile nav drawer */
.mobile-nav {
  position: fixed;
  inset: 0;
  top: var(--header-h-mobile);
  background: rgba(15, 13, 11, 0.98);
  z-index: 480;
  transform: translateX(100%);
  transition: transform 0.35s var(--ease);
  overflow-y: auto;
  padding: 28px 24px 40px;
  display: none;
}
.mobile-nav.is-open { transform: translateX(0); }
.mobile-nav a.mnav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 4px;
  font-size: 18px;
  border-bottom: 1px solid var(--gray-line);
}
.mobile-nav .mnav-cta { margin: 24px 0 18px; }
.mobile-nav .mnav-contacts { margin-top: 20px; font-size: 14px; color: var(--white-70); }
.mobile-nav .mnav-contacts a { display: block; color: var(--white); margin-bottom: 6px; }
.mobile-nav .mnav-contacts .badge {
  display: inline-block;
  width: 8px; height: 8px;
  background: var(--gold-2);
  border-radius: 2px;
  margin-right: 8px;
}

/* ==========================================================================
   Breadcrumbs / page hero (inner pages)
   ========================================================================== */
.breadcrumbs {
  padding-top: calc(var(--header-h) + 28px);
  font-size: 12.5px;
  color: var(--white-50);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.breadcrumbs span { color: var(--white-70); }

.page-hero {
  padding-bottom: 60px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 50px;
  align-items: center;
}
.page-hero h1 { font-size: 46px; margin: 16px 0 18px; }
.page-hero p { color: var(--white-70); max-width: 480px; margin-bottom: 28px; }
.page-hero-media {
  border-radius: var(--radius-l);
  overflow: hidden;
  aspect-ratio: 4/5;
}
.home-hero { padding-bottom: 40px; }
.home-hero .page-hero-media { aspect-ratio: 16/11; }

.perk-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-top: 44px;
  padding-top: 34px;
  border-top: 1px solid var(--gray-line);
}
.perk-row.perks-6 { grid-template-columns: repeat(6, 1fr); }
.perk-item { display: flex; align-items: center; gap: 12px; }
.perk-item .ic {
  width: 38px; height: 38px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--card-bg);
  display: flex; align-items: center; justify-content: center;
  color: var(--gold-2);
}
.perk-item .tx { font-size: 13.5px; color: var(--white-70); line-height: 1.3; }

/* ==========================================================================
   Media placeholders (swap with real photos)
   ========================================================================== */
.ph {
  background:
    radial-gradient(120% 120% at 20% 10%, rgba(231,207,149,0.16), transparent 55%),
    linear-gradient(150deg, #2a2622 0%, #1c1a17 60%, #24211c 100%);
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
}
.ph::before {
  content: '';
  position: absolute; inset: 0;
  background: repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 14px);
}
.ph .ph-label {
  position: relative;
  z-index: 1;
  padding: 14px 18px;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--white-50);
}

/* ==========================================================================
   Service grid (6 category cards)
   ========================================================================== */
.svc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.svc-card {
  position: relative;
  border-radius: var(--radius-m);
  overflow: hidden;
  aspect-ratio: 3/3.4;
  display: flex;
  align-items: flex-end;
}
.svc-card .ph { position: absolute; inset: 0; }
.svc-card::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%);
}
.svc-card span {
  position: relative;
  z-index: 2;
  padding: 20px;
  font-family: 'Cormorant SC', serif;
  font-size: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.svc-card { transition: transform 0.4s var(--ease); }
.svc-card:hover { transform: translateY(-6px); }

/* ==========================================================================
   Filter pills
   ========================================================================== */
.pill-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
}
.pill {
  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid var(--gray-line);
  font-size: 13.5px;
  color: var(--white-70);
  transition: all 0.2s;
}
.pill.is-active, .pill:hover {
  background: var(--gold-gradient);
  color: #221a0c;
  border-color: transparent;
}

/* ==========================================================================
   Service detail spotlight (round photo + info)
   ========================================================================== */
.spotlight {
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  gap: 60px;
  align-items: center;
}
.spotlight-media {
  position: relative;
  aspect-ratio: 1/1;
}
.spotlight-media .ring {
  position: absolute; inset: 0;
  border-radius: 50%;
  border: 1px solid var(--gold-2);
  transform: scale(1.06);
  pointer-events: none;
}
.spotlight-media .ph {
  border-radius: 50%;
  width: 100%; height: 100%;
  overflow: hidden;
}
.spotlight h3 { font-size: 34px; margin-bottom: 18px; }
.price-list { margin: 22px 0 30px; }
.price-row {
  display: flex;
  justify-content: space-between;
  padding: 13px 0;
  border-bottom: 1px solid var(--gray-line);
  font-size: 15px;
}
.price-row .amount { color: var(--gold-2); font-weight: 500; }
.spotlight-actions { display: flex; align-items: center; gap: 22px; }

/* Horizontal scroll carousel (deck of frames) */
.hscroll-wrap { position: relative; }
.hscroll {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 10px;
  cursor: grab;
  scrollbar-width: thin;
  scrollbar-color: var(--gold-1) transparent;
}
.hscroll:active { cursor: grabbing; }
.hscroll .spotlight {
  min-width: 100%;
  scroll-snap-align: start;
  grid-template-columns: 0.9fr 1fr;
}
.hscroll-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 28px;
}
.hscroll-dots button {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--gray-line);
  transition: all 0.25s;
}
.hscroll-dots button.is-active { background: var(--gold-2); width: 22px; border-radius: 4px; }
.hscroll-arrow {
  position: absolute;
  top: 40%;
  width: 44px; height: 44px;
  border-radius: 50%;
  background: var(--card-bg);
  border: 1px solid var(--gray-line);
  display: flex; align-items: center; justify-content: center;
  z-index: 3;
}
.hscroll-arrow.prev { left: -22px; }
.hscroll-arrow.next { right: -22px; }

/* ==========================================================================
   About / video block
   ========================================================================== */
.about-block { text-align: center; }
.about-block h2 { font-size: 44px; max-width: 800px; margin: 0 auto 40px; }
.video-frame {
  position: relative;
  border-radius: var(--radius-l);
  aspect-ratio: 21/9;
  overflow: hidden;
}
.play-btn {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 76px; height: 76px;
  border-radius: 50%;
  background: var(--gold-gradient);
  display: flex; align-items: center; justify-content: center;
  color: #221a0c;
  transition: transform 0.25s var(--ease);
}
.play-btn:hover { transform: translate(-50%, -50%) scale(1.08); }

/* ==========================================================================
   Portfolio circles
   ========================================================================== */
.portfolio-track {
  display: flex;
  gap: 26px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 10px 4px 20px;
  cursor: grab;
}
.portfolio-track:active { cursor: grabbing; }
.portfolio-circle {
  scroll-snap-align: start;
  flex: 0 0 auto;
  width: 220px; height: 220px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}
.portfolio-circle .ph { position: absolute; inset: 0; }

/* ==========================================================================
   Advantages
   ========================================================================== */
.adv-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.adv-card {
  background: var(--card-bg);
  border-radius: var(--radius-m);
  padding: 30px 26px;
  border: 1px solid var(--gray-line);
}
.adv-card .ic { color: var(--gold-2); margin-bottom: 18px; }
.adv-card h4 { font-size: 19px; margin-bottom: 10px; font-family: 'Roboto'; font-weight: 500; letter-spacing: 0; }
.adv-card p { font-size: 14px; color: var(--white-70); }
.adv-card.license {
  grid-column: span 2;
  background: var(--card-bg);
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px;
}
.adv-card.license .ph { width: 130px; height: 130px; border-radius: var(--radius-s); flex-shrink: 0; overflow: hidden; }
.adv-card.license .body h4 { margin-bottom: 8px; }
.adv-card.license .actions { display: flex; gap: 16px; margin-top: 14px; align-items: center; }

/* ==========================================================================
   Reviews
   ========================================================================== */
.review-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.review-card {
  background: var(--card-bg);
  border: 1px solid var(--gray-line);
  border-radius: var(--radius-m);
  padding: 26px;
}
.stars { color: var(--gold-2); font-size: 14px; letter-spacing: 2px; margin-bottom: 14px; }
.review-card p { font-size: 14.5px; color: var(--white-70); margin-bottom: 18px; }
.review-card .who { font-size: 14px; font-weight: 500; }
.review-card .who .src { display: block; font-size: 12.5px; color: var(--white-50); font-weight: 300; margin-top: 2px; }

.review-video {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 40px;
  align-items: center;
}
.review-video .ph { border-radius: var(--radius-l); aspect-ratio: 3/4; }
.review-video blockquote p { font-size: 18px; line-height: 1.5; margin-bottom: 16px; }

/* ==========================================================================
   FAQ (accordion)
   ========================================================================== */
.faq-wrap {
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 50px;
  align-items: start;
}
.faq-item {
  border-bottom: 1px solid var(--gray-line);
}
.faq-q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 4px;
  text-align: left;
  font-size: 16px;
}
.faq-q .plus { flex-shrink: 0; margin-left: 20px; transition: transform 0.3s var(--ease); color: var(--gold-2); font-size: 20px; }
.faq-item.is-open .faq-q .plus { transform: rotate(45deg); }
.faq-a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s var(--ease);
  font-size: 14.5px;
  color: var(--white-70);
}
.faq-a p { padding: 0 4px 22px; }

/* ==========================================================================
   Blog
   ========================================================================== */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.blog-card .ph { aspect-ratio: 4/3; border-radius: var(--radius-m); margin-bottom: 16px; }
.blog-card h4 { font-family: 'Roboto'; font-weight: 500; font-size: 15.5px; letter-spacing: 0; margin-bottom: 10px; line-height: 1.35; }
.blog-card p { font-size: 13.5px; color: var(--white-70); margin-bottom: 12px; }

/* ==========================================================================
   Contacts
   ========================================================================== */
.contacts-wrap {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 40px;
}
.contacts-info dt { font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--white-50); margin: 22px 0 6px; }
.contacts-info dt:first-child { margin-top: 0; }
.contacts-info dd { font-size: 16px; }
.contacts-info a:hover { color: var(--gold-2); }
.map-frame { border-radius: var(--radius-m); overflow: hidden; aspect-ratio: 16/10; }
.map-frame iframe { width: 100%; height: 100%; border: 0; filter: grayscale(0.4) invert(0.92) contrast(0.9); }

/* ==========================================================================
   Footer
   ========================================================================== */
.site-footer { background: var(--black-2); padding: 70px 0 26px; border-top: 1px solid var(--gray-line); }
.footer-top {
  display: grid;
  grid-template-columns: 1.1fr 0.8fr 0.8fr 0.8fr 1.2fr;
  gap: 30px;
  padding-bottom: 46px;
}
.footer-brand p { font-size: 13.5px; color: var(--white-50); margin-top: 16px; max-width: 240px; }
.footer-col h5 { font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--white-50); margin-bottom: 18px; }
.footer-col li { margin-bottom: 11px; }
.footer-col a { font-size: 14px; color: var(--white-70); }
.footer-col a:hover { color: var(--gold-2); }
.footer-form p { font-size: 13.5px; color: var(--white-70); margin-bottom: 14px; }
.footer-form-row { display: flex; gap: 10px; }
.footer-form-row input {
  flex: 1;
  background: var(--card-bg);
  border: 1px solid var(--gray-line);
  border-radius: 50px;
  padding: 13px 18px;
  color: var(--white);
  font-size: 13.5px;
}
.footer-form-row input::placeholder { color: var(--white-50); }
.footer-form small { display: block; font-size: 11px; color: var(--white-50); margin-top: 10px; line-height: 1.5; }
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 14px;
  padding-top: 24px;
  border-top: 1px solid var(--gray-line);
  font-size: 12.5px;
  color: var(--white-50);
}
.footer-bottom .legal-links { display: flex; gap: 18px; flex-wrap: wrap; }
.footer-bottom .legal-links a:hover { color: var(--gold-2); }
.socials { display: flex; gap: 12px; }
.socials a {
  width: 34px; height: 34px;
  border-radius: 50%;
  border: 1px solid var(--gray-line);
  display: flex; align-items: center; justify-content: center;
}
.socials a:hover { border-color: var(--gold-2); color: var(--gold-2); }

/* ==========================================================================
   Modals / popup forms
   ========================================================================== */
.modal-overlay {
  position: fixed; inset: 0;
  background: var(--overlay-80);
  backdrop-filter: blur(4px);
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s var(--ease);
}
.modal-overlay.is-open { opacity: 1; pointer-events: auto; }
.modal-box {
  position: relative;
  width: 100%;
  max-width: 440px;
  background: var(--black-2);
  border: 1px solid var(--gray-line);
  border-radius: var(--radius-m);
  padding: 40px 36px 34px;
  transform: translateY(24px) scale(0.98);
  transition: transform 0.35s var(--ease);
  max-height: 90vh;
  overflow-y: auto;
}
.modal-overlay.is-open .modal-box { transform: translateY(0) scale(1); }
.modal-close {
  position: absolute;
  top: 18px; right: 18px;
  width: 34px; height: 34px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--white-70);
  transition: all 0.2s;
}
.modal-close:hover { background: var(--card-bg); color: var(--white); }
.modal-eyebrow { font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold-2); margin-bottom: 10px; }
.modal-box h3 { font-size: 30px; margin-bottom: 10px; }
.modal-box .modal-sub { font-size: 14px; color: var(--white-70); margin-bottom: 26px; }

.form-field { margin-bottom: 16px; }
.form-field label { display: block; font-size: 12.5px; color: var(--white-50); margin-bottom: 8px; }
.form-field input, .form-field textarea, .form-field select {
  width: 100%;
  background: var(--card-bg);
  border: 1px solid var(--gray-line);
  border-radius: var(--radius-s);
  padding: 14px 16px;
  color: var(--white);
  font-size: 14.5px;
  transition: border-color 0.2s;
}
.form-field input:focus, .form-field textarea:focus, .form-field select:focus { border-color: var(--gold-2); }
.form-field textarea { resize: vertical; min-height: 90px; }
.form-field.has-error input { border-color: #d97757; }
.form-error { display: none; font-size: 12px; color: #e08a6c; margin-top: 6px; }
.form-field.has-error .form-error { display: block; }

.form-consent { display: flex; align-items: flex-start; gap: 10px; margin: 18px 0 22px; }
.form-consent input { margin-top: 3px; accent-color: var(--gold-1); }
.form-consent label { font-size: 12px; color: var(--white-50); line-height: 1.5; }
.form-consent a { color: var(--white-70); text-decoration: underline; }

.form-status {
  display: none;
  align-items: center;
  gap: 10px;
  font-size: 13.5px;
  padding: 12px 14px;
  border-radius: var(--radius-s);
  margin-bottom: 16px;
}
.form-status.is-success { display: flex; background: rgba(183, 156, 91, 0.14); color: var(--gold-2); }
.form-status.is-error { display: flex; background: rgba(217, 119, 87, 0.14); color: #e08a6c; }

.modal-success { text-align: center; padding: 20px 0 6px; }
.modal-success .ic-check {
  width: 60px; height: 60px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: var(--gold-gradient);
  display: flex; align-items: center; justify-content: center;
  color: #221a0c;
}
.modal-success h3 { font-size: 24px; margin-bottom: 10px; }
.modal-success p { font-size: 14px; color: var(--white-70); margin-bottom: 22px; }

/* Sticky mobile CTA */
.sticky-cta {
  display: none;
  position: fixed;
  left: 0; right: 0; bottom: 0;
  z-index: 400;
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
  background: rgba(20,18,16,0.96);
  border-top: 1px solid var(--gray-line);
}

/* ==========================================================================
   Responsive
   ========================================================================== */
@media (max-width: 1080px) {
  .container { padding: 0 24px; }
  .footer-top { grid-template-columns: 1fr 1fr; row-gap: 40px; }
  .adv-grid { grid-template-columns: repeat(2, 1fr); }
  .adv-card.license { grid-column: span 2; }
  .review-grid { grid-template-columns: repeat(2, 1fr); }
  .blog-grid { grid-template-columns: repeat(2, 1fr); }
  .perk-row, .perk-row.perks-6 { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 900px) {
  .main-nav { display: none; }
  .header-note { display: none; }
  .burger-btn { display: flex; }
  .mobile-nav { display: block; }
  .site-header { height: var(--header-h-mobile); }
  .header-inner { padding: 0 20px; gap: 14px; }
  .header-right { gap: 12px; }
  .header-phone { display: none; }
  .logo-text .l1 { font-size: 16px; }
  .logo-text .l2 { font-size: 8.5px; }
  .btn.header-cta { padding: 11px 18px; font-size: 13px; }

  .breadcrumbs { padding-top: calc(var(--header-h-mobile) + 18px); font-size: 11px; }
  .page-hero, .home-hero { grid-template-columns: 1fr; gap: 26px; }
  .page-hero h1 { font-size: 32px; }
  .section { padding: 60px 0; }
  .section--tight { padding: 44px 0; }
  .section-head h2 { font-size: 28px; }
  .section-head { margin-bottom: 36px; }

  .perk-row, .perk-row.perks-6 { grid-template-columns: repeat(2, 1fr); gap: 14px; }
  .svc-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
  .spotlight, .hscroll .spotlight { grid-template-columns: 1fr; gap: 26px; }
  .spotlight-media { max-width: 320px; margin: 0 auto; }
  .about-block h2 { font-size: 28px; }
  .adv-grid { grid-template-columns: 1fr; }
  .adv-card.license { grid-column: span 1; flex-direction: column; text-align: center; }
  .review-grid { grid-template-columns: 1fr; }
  .review-video { grid-template-columns: 1fr; }
  .faq-wrap { grid-template-columns: 1fr; gap: 20px; }
  .blog-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
  .contacts-wrap { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr; gap: 30px; }
  .footer-bottom { flex-direction: column; align-items: flex-start; }
  .hscroll-arrow { display: none; }
  .portfolio-circle { width: 160px; height: 160px; }
  .modal-box { padding: 30px 22px 26px; }
  .modal-box h3 { font-size: 24px; }
  body { padding-bottom: 0; }
}

@media (max-width: 520px) {
  .svc-grid { grid-template-columns: repeat(2, 1fr); }
  .blog-grid { grid-template-columns: 1fr 1fr; }
  .page-hero h1 { font-size: 27px; }
  .container { padding: 0 16px; }
}
