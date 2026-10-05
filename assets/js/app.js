/**
 * Hotel Mimino Batumi - Main Application JavaScript
 * Handles site interactions, currency conversion, room filtering, lightbox, FAQ
 */

document.addEventListener('DOMContentLoaded', () => {
  initCurrencyManager();
  renderRoomCards();
  initRoomFilters();
  initLightbox();
  initFaqAccordion();
  initHeaderScroll();
  initMobileMenu();
  initHeroSync();
});

let currentCurrency = 'RUB';

function initCurrencyManager() {
  const pickers = document.querySelectorAll('.currency-select');
  pickers.forEach(picker => {
    picker.value = currentCurrency;
    picker.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      // synchronize all select elements
      pickers.forEach(p => p.value = currentCurrency);
      updateAllSitePrices();
      if (window.miminoBooking) {
        window.miminoBooking.setCurrency(currentCurrency);
      }
    });
  });
}

function formatPrice(amountRUB) {
  const curr = MIMINO_CONFIG.currencies[currentCurrency] || MIMINO_CONFIG.currencies.RUB;
  const converted = Math.round(amountRUB * curr.rate);
  const formattedNum = converted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `${curr.prefix}${formattedNum}${curr.suffix}`;
}

function updateAllSitePrices() {
  document.querySelectorAll('[data-price-rub]').forEach(el => {
    const rub = parseFloat(el.getAttribute('data-price-rub'));
    if (!isNaN(rub)) {
      el.textContent = formatPrice(rub);
    }
  });

  // Update mobile bar price
  const mobPrice = document.getElementById('mobPricePreview');
  if (mobPrice) {
    const minPrice = Math.min(...MIMINO_CONFIG.rooms.map(r => r.priceRUB));
    mobPrice.textContent = `от ${formatPrice(minPrice)}`;
  }
}

function renderRoomCards(filter = 'all') {
  const container = document.getElementById('roomsGridContainer');
  if (!container) return;

  const filtered = filter === 'all' 
    ? MIMINO_CONFIG.rooms 
    : MIMINO_CONFIG.rooms.filter(r => r.category === filter);

  container.innerHTML = filtered.map(room => {
    const priceFormatted = formatPrice(room.priceRUB);
    const photosCount = room.images.length;
    return `
      <article class="room-card" data-category="${room.category}" id="room-${room.id}">
        <div class="room-card-media">
          <img class="room-card-img" src="${room.images[0].url}" alt="${room.title}" loading="lazy">
          <div class="room-badge">${room.badge}</div>
          <button class="room-photo-count" data-lightbox-open="${room.id}" title="Смотреть все фото">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
            </svg>
            <span>+${photosCount} фото</span>
          </button>
        </div>
        <div class="room-card-body">
          <div class="room-header">
            <div>
              <h3 class="room-title">${room.title}</h3>
              <p class="room-subtitle">${room.subtitle}</p>
            </div>
          </div>
          
          <div class="room-spec-chips">
            <div class="spec-chip">
              <svg fill="currentColor" viewBox="0 0 16 16"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3z"/></svg>
              <span>${room.area} м²</span>
            </div>
            <div class="spec-chip">
              <svg fill="currentColor" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
              <span>${room.capacity}</span>
            </div>
            <div class="spec-chip">
              <svg fill="currentColor" viewBox="0 0 16 16"><path d="M3 10V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8h2a1 1 0 0 1 1 1v3H0v-3a1 1 0 0 1 1-1h2z"/></svg>
              <span>${room.bed}</span>
            </div>
          </div>

          <p class="room-desc">${room.description}</p>

          <div class="room-amenities-mini">
            <span class="amenity-tag highlight">☕ Завтрак включен</span>
            <span class="amenity-tag">❄ Кондиционер</span>
            <span class="amenity-tag">📺 Smart TV</span>
            <span class="amenity-tag">📶 Wi-Fi 100 Мбит</span>
            <span class="amenity-tag">🚿 Собственный душ</span>
            <span class="amenity-tag">🌿 Балкон</span>
          </div>

          <div class="room-footer">
            <div class="room-price-box">
              <span class="price-label">Цена за 1 ночь</span>
              <div class="price-value">
                <span data-price-rub="${room.priceRUB}">${priceFormatted}</span>
                <span class="price-period">/ сутки</span>
              </div>
            </div>
            <div class="room-actions">
              <button class="btn btn-outline btn-sm" data-lightbox-open="${room.id}" title="Посмотреть фотографии">
                Галерея
              </button>
              <button class="btn btn-primary" data-open-booking data-room-id="${room.id}">
                Забронировать
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Re-bind booking and lightbox buttons for newly rendered cards
  bindRoomCardButtons();
  updateAllSitePrices();
}

function initRoomFilters() {
  const tabs = document.querySelectorAll('.filter-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-filter');
      renderRoomCards(cat);
    });
  });
}

function bindRoomCardButtons() {
  document.querySelectorAll('[data-open-booking]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const roomId = btn.getAttribute('data-room-id');
      if (window.miminoBooking) {
        window.miminoBooking.openModal(roomId);
      }
    });
  });

  document.querySelectorAll('[data-lightbox-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      const roomId = btn.getAttribute('data-lightbox-open');
      openLightboxForRoom(roomId);
    });
  });
}

/* Lightbox Gallery */
let lightboxImages = [];
let currentLightboxIndex = 0;

function initLightbox() {
  const lightbox = document.getElementById('photoLightbox');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showLightboxIndex(currentLightboxIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showLightboxIndex(currentLightboxIndex + 1));

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showLightboxIndex(currentLightboxIndex - 1);
    if (e.key === 'ArrowRight') showLightboxIndex(currentLightboxIndex + 1);
  });
}

function openLightboxForRoom(roomId) {
  const room = MIMINO_CONFIG.rooms.find(r => r.id === roomId);
  if (!room) return;
  lightboxImages = room.images;
  currentLightboxIndex = 0;
  renderLightboxThumbs();
  showLightboxIndex(0);
  const lightbox = document.getElementById('photoLightbox');
  if (lightbox) {
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function showLightboxIndex(idx) {
  if (lightboxImages.length === 0) return;
  if (idx < 0) idx = lightboxImages.length - 1;
  if (idx >= lightboxImages.length) idx = 0;
  currentLightboxIndex = idx;

  const mainImg = document.getElementById('lightboxMainImg');
  const caption = document.getElementById('lightboxCaption');
  const cur = lightboxImages[idx];

  if (mainImg) mainImg.src = cur.url;
  if (caption) caption.textContent = `${cur.alt} (${idx + 1} из ${lightboxImages.length})`;

  // Highlight thumbnail
  document.querySelectorAll('.lightbox-thumb').forEach((th, i) => {
    th.classList.toggle('active', i === idx);
  });
}

function renderLightboxThumbs() {
  const container = document.getElementById('lightboxThumbsContainer');
  if (!container) return;
  container.innerHTML = lightboxImages.map((img, i) => `
    <div class="lightbox-thumb ${i === 0 ? 'active' : ''}" data-thumb-idx="${i}">
      <img src="${img.url}" alt="Превью" loading="lazy">
    </div>
  `).join('');

  container.querySelectorAll('.lightbox-thumb').forEach(th => {
    th.addEventListener('click', () => {
      const idx = parseInt(th.getAttribute('data-thumb-idx'), 10);
      showLightboxIndex(idx);
    });
  });
}

function closeLightbox() {
  const lightbox = document.getElementById('photoLightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    if (!document.getElementById('bookingModal').classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }
}

/* FAQ Accordion */
function initFaqAccordion() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* Sticky Header Scroll */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* Mobile Menu */
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.main-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('mobile-active');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('mobile-active');
      });
    });
  }
}

/* Sync Hero Quick Bar */
function initHeroSync() {
  const heroBtn = document.getElementById('heroSearchBtn');
  if (heroBtn) {
    heroBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const heroRoom = document.getElementById('heroRoomType').value;
      if (window.miminoBooking) {
        window.miminoBooking.openModal(heroRoom);
      }
    });
  }

  // Pre-fill hero dates
  const heroIn = document.getElementById('heroCheckIn');
  const heroOut = document.getElementById('heroCheckOut');
  if (heroIn && heroOut) {
    const d1 = new Date();
    d1.setDate(d1.getDate() + 1);
    const d2 = new Date();
    d2.setDate(d2.getDate() + 3);
    
    const fmt = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    heroIn.value = fmt(d1);
    heroOut.value = fmt(d2);
    heroIn.min = fmt(new Date());
    heroOut.min = heroIn.value;
  }
}
