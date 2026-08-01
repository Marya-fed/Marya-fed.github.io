/* ==========================================================================
   МОЛОДОСТЬ — общий JS: хедер/футер, мобильное меню, всплывающие формы,
   отправка форм, FAQ-аккордеон, горизонтальные карусели
   ========================================================================== */

/* ---------------------------------------------------------------------
   0. НАСТРОЙКА ОТПРАВКИ ФОРМ
   ---------------------------------------------------------------------
   Формы (запись, обратный звонок, вопрос из футера) отправляются через
   Formspree — сервис, который принимает POST-запрос и пересылает данные
   вам на почту, без своего сервера.

   Как подключить (5 минут):
   1. Зарегистрируйтесь на https://formspree.io (бесплатный тариф — до
      50 писем в месяц, этого достаточно для старта).
   2. Создайте новый Form, укажите почту, на которую будут приходить заявки.
   3. Formspree выдаст endpoint вида: https://formspree.io/f/xxxxxxxx
   4. Вставьте этот адрес вместо строки ниже (FORM_ENDPOINT).
   5. Готово — все формы на сайте (в шапке, в карточках услуг, в футере)
      начнут присылать заявки вам на почту.

   Если хотите получать заявки в Telegram — могу сделать вариант через
   Telegram Bot API вместо Formspree, просто скажите.
------------------------------------------------------------------------ */
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'; // <-- замените на свой

/* ---------------------------------------------------------------------
   1. ДАННЫЕ НАВИГАЦИИ / ШАПКА / ПОДВАЛ
   ------------------------------------------------------------------ */
const NAV_ITEMS = [
  { label: 'Услуги', href: 'index.html#services', key: 'services' },
  { label: 'Мастера', href: 'index.html#masters', key: 'masters' },
  { label: 'Портфолио', href: 'portfolio.html', key: 'portfolio' },
  { label: 'Отзывы', href: 'index.html#reviews', key: 'reviews' },
  { label: 'Блог', href: 'index.html#blog', key: 'blog' },
  { label: 'О салоне', href: 'index.html#about', key: 'about' },
  { label: 'Контакты', href: 'index.html#contacts', key: 'contacts' },
];

const LOGO_SVG = `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 3L24 14L35 12L27 20L35 28L24 26L20 37L16 26L5 28L13 20L5 12L16 14L20 3Z" stroke="url(#lg)" stroke-width="1.4" stroke-linejoin="round"/>
  <defs><linearGradient id="lg" x1="5" y1="3" x2="35" y2="37"><stop stop-color="#B79C5B"/><stop offset="0.5" stop-color="#E7CF95"/><stop offset="1" stop-color="#B79C5B"/></linearGradient></defs>
</svg>`;

function headerTemplate() {
  return `
  <div class="header-inner">
    <a href="index.html" class="logo">
      <span class="logo-mark">${LOGO_SVG}</span>
      <span class="logo-text"><span class="l1">Молодость</span><span class="l2">Салон красоты</span></span>
    </a>
    <nav class="main-nav">
      ${NAV_ITEMS.map(i => `<a href="${i.href}" data-key="${i.key}">${i.label}</a>`).join('')}
    </nav>
    <div class="header-right">
      <span class="header-note">Мы работаем без выходных</span>
      <button class="btn btn-gold btn-sm header-cta" data-open-modal="booking">Записаться</button>
      <div class="header-phone">
        <a href="tel:+375298151994">+375 29 815-19-94 (МТС)</a>
        <a href="tel:+37515511994" class="sub">51-19-94 (Стационарный)</a>
      </div>
    </div>
    <button class="burger-btn" id="burgerBtn" aria-label="Открыть меню">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-nav" id="mobileNav">
    ${NAV_ITEMS.map(i => `<a class="mnav-link" href="${i.href}" data-key="${i.key}">${i.label} <span>›</span></a>`).join('')}
    <button class="btn btn-gold btn-block mnav-cta" data-open-modal="booking">Записаться</button>
    <div class="mnav-contacts">
      <a href="tel:+375298151994"><span class="badge"></span>+375 29 815-19-94 (МТС)</a>
      <a href="tel:+37515511994"><span class="badge"></span>51-19-94 (Стационарный)</a>
      <p style="margin-top:10px;">Мы работаем без выходных</p>
    </div>
  </div>`;
}

function footerTemplate() {
  return `
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="index.html" class="logo">
          <span class="logo-mark">${LOGO_SVG}</span>
          <span class="logo-text"><span class="l1">Молодость</span><span class="l2">Салон красоты</span></span>
        </a>
        <p>Центр красоты, косметологии и парикмахерского искусства в Орше. Работаем по медицинской лицензии.</p>
        <div class="socials" style="margin-top:18px;">
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="YouTube">YT</a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Услуги</h5>
        <ul>
          <li><a href="hair.html">Уход за волосами</a></li>
          <li><a href="nails.html">Уход за ногтями</a></li>
          <li><a href="brows.html">Уход за бровями и ресницами</a></li>
          <li><a href="face.html">Уход за лицом</a></li>
          <li><a href="massage.html">Массаж & SPA</a></li>
          <li><a href="makeup.html">Визаж</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Меню</h5>
        <ul>
          <li><a href="index.html#services">Услуги</a></li>
          <li><a href="portfolio.html">Портфолио</a></li>
          <li><a href="index.html#reviews">Отзывы</a></li>
          <li><a href="index.html#blog">Блог</a></li>
          <li><a href="index.html#contacts">Контакты</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Документы</h5>
        <ul>
          <li><a href="#">Лицензия</a></li>
          <li><a href="#">Политика согласия обработки данных</a></li>
          <li><a href="#">Оферта</a></li>
          <li><a href="#">Политика конфиденциальности</a></li>
          <li><a href="#">Политика куки-файлов</a></li>
        </ul>
      </div>
      <div class="footer-form">
        <h5>Задать вопрос</h5>
        <p>Напишите нам, и мы перезвоним в течение 30 минут.</p>
        <form id="footerQuickForm" novalidate>
          <div class="footer-form-row">
            <input type="tel" name="phone" placeholder="Ваш номер телефона" required>
            <button type="submit" class="btn btn-gold btn-sm">Отправить</button>
          </div>
          <div class="form-status" data-status></div>
          <small>*Даю согласие на обработку моих персональных данных<br>*Ознакомлен(а) с политикой конфиденциальности</small>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 «ЧУП Молодость», все права защищены</span>
      <div class="legal-links">
        <a href="#">Политика конфиденциальности</a>
        <a href="#">Оферта</a>
        <a href="#">Политика куки</a>
      </div>
    </div>
  </div>`;
}

/* ---------------------------------------------------------------------
   2. ВСПЛЫВАЮЩИЕ ФОРМЫ (МОДАЛЬНЫЕ ОКНА)
   ------------------------------------------------------------------ */
function modalsTemplate() {
  return `
  <div class="modal-overlay" id="modal-booking" data-modal>
    <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="bookingTitle">
      <button class="modal-close" data-close-modal aria-label="Закрыть">✕</button>
      <div class="modal-content-inner">
        <span class="modal-eyebrow">Онлайн-запись</span>
        <h3 id="bookingTitle">Записаться в салон</h3>
        <p class="modal-sub">Оставьте телефон — администратор свяжется с вами и подберёт удобное время.</p>
        <form data-ajax-form data-form-name="Запись в салон" novalidate>
          <div class="form-status" data-status></div>
          <div class="form-field">
            <label for="b-name">Имя</label>
            <input id="b-name" type="text" name="name" placeholder="Как к вам обращаться" required>
            <div class="form-error">Пожалуйста, введите имя</div>
          </div>
          <div class="form-field">
            <label for="b-phone">Телефон</label>
            <input id="b-phone" type="tel" name="phone" placeholder="+375 (__) ___-__-__" required>
            <div class="form-error">Введите корректный номер телефона</div>
          </div>
          <div class="form-field">
            <label for="b-service">Услуга</label>
            <select id="b-service" name="service">
              <option>Уход за волосами</option>
              <option>Уход за лицом</option>
              <option>Уход за ногтями</option>
              <option>Визаж</option>
              <option>Брови и ресницы</option>
              <option>Массаж & SPA</option>
              <option>Ещё не выбрал(а)</option>
            </select>
          </div>
          <div class="form-consent">
            <input type="checkbox" id="b-consent" required>
            <label for="b-consent">Даю согласие на обработку персональных данных и ознакомлен(а) с <a href="#">политикой конфиденциальности</a></label>
          </div>
          <button type="submit" class="btn btn-gold btn-block">Записаться</button>
        </form>
      </div>
      <div class="modal-success" data-success-view hidden>
        <div class="ic-check">✓</div>
        <h3>Заявка отправлена</h3>
        <p>Спасибо! Мы свяжемся с вами в ближайшее время, чтобы подтвердить запись.</p>
        <button class="btn btn-outline btn-block" data-close-modal>Закрыть</button>
      </div>
    </div>
  </div>

  <div class="modal-overlay" id="modal-callback" data-modal>
    <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="callbackTitle">
      <button class="modal-close" data-close-modal aria-label="Закрыть">✕</button>
      <div class="modal-content-inner">
        <span class="modal-eyebrow">Обратный звонок</span>
        <h3 id="callbackTitle">Перезвоним вам</h3>
        <p class="modal-sub">Оставьте номер — перезвоним в течение 30 минут в рабочее время.</p>
        <form data-ajax-form data-form-name="Обратный звонок" novalidate>
          <div class="form-status" data-status></div>
          <div class="form-field">
            <label for="c-phone">Телефон</label>
            <input id="c-phone" type="tel" name="phone" placeholder="+375 (__) ___-__-__" required>
            <div class="form-error">Введите корректный номер телефона</div>
          </div>
          <div class="form-consent">
            <input type="checkbox" id="c-consent" required>
            <label for="c-consent">Даю согласие на обработку персональных данных</label>
          </div>
          <button type="submit" class="btn btn-gold btn-block">Жду звонка</button>
        </form>
      </div>
      <div class="modal-success" data-success-view hidden>
        <div class="ic-check">✓</div>
        <h3>Спасибо!</h3>
        <p>Мы перезвоним вам в ближайшее время.</p>
        <button class="btn btn-outline btn-block" data-close-modal>Закрыть</button>
      </div>
    </div>
  </div>`;
}

/* ---------------------------------------------------------------------
   3. ИНИЦИАЛИЗАЦИЯ
   ------------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  // Вставляем хедер/футер/модалки
  const headerMount = document.getElementById('site-header');
  const footerMount = document.getElementById('site-footer');
  if (headerMount) headerMount.innerHTML = headerTemplate();
  if (footerMount) footerMount.innerHTML = footerTemplate();
  document.body.insertAdjacentHTML('beforeend', modalsTemplate());

  markActiveNav();
  initBurger();
  initModals();
  initAjaxForms();
  initFaq();
  initHScroll();
  initPortfolioDrag();
  initPillFilters();
  initPhoneMask();
});

function markActiveNav() {
  const page = document.body.dataset.page;
  if (!page) return;
  document.querySelectorAll('[data-key]').forEach(el => {
    if (el.dataset.key === page) el.classList.add('active');
  });
}

/* ---- Мобильное меню ---- */
function initBurger() {
  const btn = document.getElementById('burgerBtn');
  const nav = document.getElementById('mobileNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    btn.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    btn.classList.remove('is-open');
    document.body.style.overflow = '';
  }));
}

/* ---- Модальные окна ---- */
function initModals() {
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.openModal));
  });
  document.querySelectorAll('[data-modal]').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal(overlay);
    });
  });
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.closest('[data-modal]')));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.is-open').forEach(closeModal);
    }
  });
}

function openModal(name) {
  const overlay = document.getElementById(`modal-${name}`);
  if (!overlay) return;
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  const input = overlay.querySelector('input, select, textarea');
  if (input) setTimeout(() => input.focus(), 350);
}

function closeModal(overlay) {
  if (!overlay) return;
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
  setTimeout(() => {
    const form = overlay.querySelector('form');
    const success = overlay.querySelector('[data-success-view]');
    const content = overlay.querySelector('.modal-content-inner');
    if (form) form.reset();
    if (success) success.hidden = true;
    if (content) content.hidden = false;
  }, 300);
}

/* ---- Отправка форм (booking / callback / footer) ---- */
function initAjaxForms() {
  document.querySelectorAll('[data-ajax-form]').forEach(bindAjaxForm);
  const footerForm = document.getElementById('footerQuickForm');
  if (footerForm) bindAjaxForm(footerForm, 'Вопрос из футера');
}

function bindAjaxForm(form, forcedName) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const statusEl = form.querySelector('[data-status]');
    const formName = forcedName || form.dataset.formName || 'Заявка с сайта';

    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Отправляем...';
    if (statusEl) { statusEl.className = 'form-status'; statusEl.textContent = ''; }

    const data = new FormData(form);
    data.append('_form', formName);
    data.append('_page', document.title);

    try {
      if (FORM_ENDPOINT.includes('YOUR_FORM_ID')) {
        // Демо-режим: форма ещё не подключена к бэкенду.
        await new Promise(r => setTimeout(r, 600));
        console.info('[demo] Форма пока не подключена. Данные формы:', Object.fromEntries(data));
      } else {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (!res.ok) throw new Error('Request failed');
      }

      const overlay = form.closest('[data-modal]');
      if (overlay) {
        overlay.querySelector('.modal-content-inner').hidden = true;
        overlay.querySelector('[data-success-view]').hidden = false;
      } else if (statusEl) {
        statusEl.classList.add('is-success');
        statusEl.textContent = 'Спасибо! Мы скоро свяжемся с вами.';
        form.reset();
      }
    } catch (err) {
      if (statusEl) {
        statusEl.classList.add('is-error');
        statusEl.textContent = 'Не удалось отправить. Попробуйте ещё раз или позвоните нам.';
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    const wrap = field.closest('.form-field') || field.closest('.form-consent');
    let ok = true;
    if (field.type === 'checkbox') ok = field.checked;
    else if (field.type === 'tel') ok = field.value.replace(/\D/g, '').length >= 9;
    else ok = field.value.trim().length > 1;

    if (!ok) {
      valid = false;
      if (wrap && wrap.classList.contains('form-field')) wrap.classList.add('has-error');
    } else if (wrap && wrap.classList.contains('form-field')) {
      wrap.classList.remove('has-error');
    }
  });
  return valid;
}

/* ---- Простая маска телефона +375 ---- */
function initPhoneMask() {
  document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', () => {
      let digits = input.value.replace(/\D/g, '');
      if (digits.startsWith('375')) digits = digits.slice(3);
      digits = digits.slice(0, 9);
      let out = '+375';
      if (digits.length) out += ' (' + digits.slice(0, 2);
      if (digits.length >= 2) out += ') ' + digits.slice(2, 5);
      if (digits.length >= 5) out += '-' + digits.slice(5, 7);
      if (digits.length >= 7) out += '-' + digits.slice(7, 9);
      input.value = out;
    });
  });
}

/* ---- FAQ аккордеон ---- */
function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      item.closest('.faq-wrap')?.querySelectorAll('.faq-item.is-open').forEach(other => {
        if (other !== item) {
          other.classList.remove('is-open');
          other.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      item.classList.toggle('is-open', !isOpen);
      a.style.maxHeight = !isOpen ? a.scrollHeight + 'px' : null;
    });
  });
}

/* ---- Горизонтальные карусели услуг (карточки для скролла) ---- */
function initHScroll() {
  document.querySelectorAll('.hscroll-wrap').forEach(wrap => {
    const track = wrap.querySelector('.hscroll');
    const dotsWrap = wrap.querySelector('.hscroll-dots');
    const prev = wrap.querySelector('.hscroll-arrow.prev');
    const next = wrap.querySelector('.hscroll-arrow.next');
    if (!track) return;
    const slides = track.children.length;

    if (dotsWrap) {
      dotsWrap.innerHTML = '';
      for (let i = 0; i < slides; i++) {
        const b = document.createElement('button');
        if (i === 0) b.classList.add('is-active');
        b.addEventListener('click', () => track.scrollTo({ left: track.clientWidth * i, behavior: 'smooth' }));
        dotsWrap.appendChild(b);
      }
    }

    const updateDots = () => {
      if (!dotsWrap) return;
      const idx = Math.round(track.scrollLeft / track.clientWidth);
      [...dotsWrap.children].forEach((d, i) => d.classList.toggle('is-active', i === idx));
    };
    track.addEventListener('scroll', () => requestAnimationFrame(updateDots));

    prev?.addEventListener('click', () => track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' }));
    next?.addEventListener('click', () => track.scrollBy({ left: track.clientWidth, behavior: 'smooth' }));

    enableDragScroll(track);
  });
}

function initPortfolioDrag() {
  document.querySelectorAll('.portfolio-track').forEach(enableDragScroll);
}

function enableDragScroll(el) {
  let isDown = false, startX, scrollLeft;
  el.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
  });
  ['mouseleave', 'mouseup'].forEach(evt => el.addEventListener(evt, () => isDown = false));
  el.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    el.scrollLeft = scrollLeft - (x - startX) * 1.4;
  });
}

/* ---- Пилюли-фильтры (визуальное переключение, без реальной фильтрации данных) ---- */
function initPillFilters() {
  document.querySelectorAll('.pill-row').forEach(row => {
    row.querySelectorAll('.pill').forEach(pill => {
      pill.addEventListener('click', () => {
        row.querySelectorAll('.pill').forEach(p => p.classList.remove('is-active'));
        pill.classList.add('is-active');
        const targetSelector = row.dataset.target;
        const groupWrap = targetSelector ? document.querySelector(targetSelector) : row.nextElementSibling;
        if (groupWrap && groupWrap.classList.contains('hscroll')) {
          const idx = [...row.children].indexOf(pill);
          groupWrap.scrollTo({ left: groupWrap.clientWidth * idx, behavior: 'smooth' });
        }
      });
    });
  });
}
