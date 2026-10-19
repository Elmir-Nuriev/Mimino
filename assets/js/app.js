/**
 * Hotel Aura Del Mar Batumi - Main Application JavaScript
 * Handles site interactions, currency conversion, room filtering, lightbox, FAQ, i18n sync
 */

let currentCurrency = localStorage.getItem('auradelmar_curr') || 'GEL';
let currentRoomFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initCurrencySelector();
  renderRoomCards();
  initRoomFilters();
  initLightbox();
  initFaqAccordion();
  initHeaderScroll();
  initMobileMenu();
  initHeroSync();
  renderDistances();

  // Listen to language changes from i18n.js
  window.addEventListener('languageChanged', (e) => {
    renderRoomCards(currentRoomFilter);
    renderDistances();
  });
});

function initCurrencySelector() {
  const buttons = document.querySelectorAll('.currency-btn');
  
  // Set initial active state
  buttons.forEach(btn => {
    if (btn.getAttribute('data-curr') === currentCurrency) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      currentCurrency = btn.getAttribute('data-curr');
      localStorage.setItem('auradelmar_curr', currentCurrency);
      
      buttons.forEach(b => {
        if (b.getAttribute('data-curr') === currentCurrency) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      updateAllSitePrices();
      if (window.miminoBooking) {
        window.miminoBooking.setCurrency(currentCurrency);
      }
    });
  });
}

function formatPrice(amountGEL) {
  const curr = MIMINO_CONFIG.currencies[currentCurrency] || MIMINO_CONFIG.currencies.GEL;
  const converted = Math.round(amountGEL * curr.rate);
  if (currentCurrency === 'GEL') return `${converted} ₾`;
  if (currentCurrency === 'RUB') return `${converted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽`;
  if (currentCurrency === 'USD') return `$${converted}`;
  if (currentCurrency === 'EUR') return `€${converted}`;
  return `${converted} ${curr.symbol}`;
}

function updateAllSitePrices() {
  document.querySelectorAll('[data-price-gel]').forEach(el => {
    const gel = parseFloat(el.getAttribute('data-price-gel'));
    if (!isNaN(gel)) {
      el.textContent = formatPrice(gel);
    }
  });

  // Legacy support for data-price-rub if any exists
  document.querySelectorAll('[data-price-rub]').forEach(el => {
    const rub = parseFloat(el.getAttribute('data-price-rub'));
    if (!isNaN(rub)) {
      const gel = rub / 35;
      el.textContent = formatPrice(gel);
    }
  });

  // Update mobile bottom bar preview price
  const mobPrice = document.getElementById('mobPricePreview');
  if (mobPrice) {
    const minPriceGEL = Math.min(...MIMINO_CONFIG.rooms.map(r => r.priceGEL || (r.priceRUB / 35)));
    const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'ru';
    const fromWord = lang === 'en' ? 'from ' : lang === 'ka' ? 'დან ' : lang === 'tr' ? 'başlayan ' : 'от ';
    mobPrice.textContent = `${fromWord}${formatPrice(minPriceGEL)}`;
  }
}

function renderRoomCards(filter = 'all') {
  currentRoomFilter = filter;
  const container = document.getElementById('roomsGridContainer');
  if (!container) return;

  const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'ru';

  const filtered = filter === 'all' 
    ? MIMINO_CONFIG.rooms 
    : MIMINO_CONFIG.rooms.filter(r => r.category === filter);

  container.innerHTML = filtered.map(room => {
    const priceFormatted = formatPrice(room.priceGEL);
    const photosCount = room.images.length;
    
    // Localized room details
    const roomInfo = (room.i18n && room.i18n[lang]) 
      ? room.i18n[lang] 
      : (room.i18n && room.i18n.ru ? room.i18n.ru : {
          title: room.title,
          subtitle: room.subtitle,
          capacity: room.capacity,
          bed: room.bed,
          view: room.view,
          badge: room.badge,
          description: room.description
        });

    return `
      <article class="room-card" data-category="${room.category}" id="room-${room.id}">
        <div class="room-card-media" data-lightbox-open="${room.id}" style="cursor: pointer;" title="${window.t ? window.t('rooms.gallery_btn') : 'Смотреть все фото'}">
          <img class="room-card-img" src="${room.images[0].url}" alt="${roomInfo.title}" loading="lazy">
          <div class="room-badge">${roomInfo.badge}</div>
          <button class="room-photo-count" data-lightbox-open="${room.id}" title="${window.t ? window.t('rooms.gallery_btn') : 'Смотреть все фото'}">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
            </svg>
            <span>+${photosCount}</span>
          </button>
        </div>
        <div class="room-card-body">
          <div class="room-header">
            <div>
              <h3 class="room-title" data-lightbox-open="${room.id}" style="cursor: pointer;" title="${window.t ? window.t('rooms.gallery_btn') : 'Посмотреть фотографии'}">${roomInfo.title}</h3>
              <p class="room-subtitle">${roomInfo.subtitle}</p>
            </div>
          </div>
          
          <div class="room-spec-chips">
            <div class="spec-chip">
              <svg fill="currentColor" viewBox="0 0 16 16"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3z"/></svg>
              <span>${room.area} m²</span>
            </div>
            <div class="spec-chip">
              <svg fill="currentColor" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
              <span>${roomInfo.capacity}</span>
            </div>
            <div class="spec-chip">
              <svg fill="currentColor" viewBox="0 0 16 16"><path d="M3 10V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8h2a1 1 0 0 1 1 1v3H0v-3a1 1 0 0 1 1-1h2z"/></svg>
              <span>${roomInfo.bed}</span>
            </div>
          </div>

          <p class="room-desc">${roomInfo.description}</p>

          <div class="room-amenities-mini">
            <span class="amenity-tag highlight">${window.t ? window.t('rooms.breakfast_tag') : '☕ Завтрак включен'}</span>
            <span class="amenity-tag">${window.t ? window.t('rooms.ac_tag') : '❄ Кондиционер'}</span>
            <span class="amenity-tag">${window.t ? window.t('rooms.tv_tag') : '📺 Smart TV'}</span>
            <span class="amenity-tag">${window.t ? window.t('rooms.wifi_tag') : '📶 Wi-Fi 100 Мбит'}</span>
            <span class="amenity-tag">${window.t ? window.t('rooms.shower_tag') : '🚿 Собственный душ'}</span>
            <span class="amenity-tag">${window.t ? window.t('rooms.balcony_tag') : '🌿 Балкон'}</span>
          </div>

          <div class="room-footer">
            <div class="room-price-box">
              <span class="price-label">${window.t ? window.t('rooms.price_label') : 'Цена за 1 ночь'}</span>
              <div class="price-value">
                <span data-price-gel="${room.priceGEL}">${priceFormatted}</span>
                <span class="price-period">${window.t ? window.t('rooms.per_night') : '/ сутки'}</span>
              </div>
            </div>
            <div class="room-actions">
              <button class="btn btn-outline btn-sm" data-lightbox-open="${room.id}" title="${window.t ? window.t('rooms.gallery_btn') : 'Посмотреть фотографии'}">
                ${window.t ? window.t('rooms.gallery_btn') : 'Галерея'}
              </button>
              <button class="btn btn-primary" data-open-booking data-room-id="${room.id}">
                ${window.t ? window.t('rooms.book_btn') : 'Забронировать'}
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  bindRoomCardButtons();
  updateAllSitePrices();
}

function renderDistances() {
  const container = document.querySelector('.distances-list') || document.getElementById('distancesList');
  if (!container || !MIMINO_CONFIG.distances) return;

  const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'ru';

  container.innerHTML = MIMINO_CONFIG.distances.map(item => {
    const placeName = typeof item.place === 'object' ? (item.place[lang] || item.place.ru) : item.place;
    const walkTime = typeof item.walk === 'object' ? (item.walk[lang] || item.walk.ru) : item.walk;
    return `
      <div class="distance-item">
        <span class="distance-place">${placeName}</span>
        <div class="distance-metrics">
          <span class="dist-badge">${item.distance}</span>
          <span class="dist-walk">${walkTime}</span>
        </div>
      </div>
    `;
  }).join('');
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
  // Re-bind booking buttons
  document.querySelectorAll('[data-open-booking]').forEach(btn => {
    btn.removeEventListener('click', handleBookingClick);
    btn.addEventListener('click', handleBookingClick);
  });

  // Re-bind lightbox triggers
  document.querySelectorAll('[data-lightbox-open]').forEach(btn => {
    btn.removeEventListener('click', handleLightboxClick);
    btn.addEventListener('click', handleLightboxClick);
  });

  // Re-bind entire room-card click to open gallery when clicking room card (excluding booking button)
  document.querySelectorAll('.room-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.removeEventListener('click', handleCardClick);
    card.addEventListener('click', handleCardClick);
  });
}

function handleCardClick(e) {
  // If user clicked inside booking button or an interactive link, let that handle it
  if (e.target.closest('[data-open-booking]')) return;
  const roomId = this.getAttribute('id').replace('room-', '');
  openLightboxForRoom(roomId);
}

function handleBookingClick(e) {
  e.preventDefault();
  e.stopPropagation();
  const roomId = this.getAttribute('data-room-id');
  if (window.miminoBooking) {
    window.miminoBooking.openModal(roomId);
  }
}

function handleLightboxClick(e) {
  e.preventDefault();
  e.stopPropagation();
  const roomId = this.getAttribute('data-lightbox-open');
  openLightboxForRoom(roomId);
}

// Lightbox logic
let currentLightboxImages = [];
let currentLightboxIndex = 0;
let currentRoomTitle = '';

function initLightbox() {
  const modal = document.getElementById('photoLightbox');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-main-view')) {
      closeLightbox();
    }
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
      updateLightboxImage();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
      updateLightboxImage();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
    if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
  });
}

function openLightboxForRoom(roomId) {
  const room = MIMINO_CONFIG.rooms.find(r => r.id === roomId) || MIMINO_CONFIG.rooms[0];
  if (!room || !room.images || room.images.length === 0) return;

  currentLightboxImages = room.images;
  currentLightboxIndex = 0;

  const modal = document.getElementById('photoLightbox');
  const lang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'ru';
  const roomInfo = (room.i18n && room.i18n[lang]) ? room.i18n[lang] : room;
  currentRoomTitle = roomInfo.title;

  // Render thumbnails
  const thumbsContainer = document.getElementById('lightboxThumbsContainer');
  if (thumbsContainer) {
    thumbsContainer.innerHTML = currentLightboxImages.map((img, idx) => `
      <div class="lightbox-thumb ${idx === 0 ? 'active' : ''}" data-thumb-idx="${idx}">
        <img src="${img.url}" alt="${img.alt || roomInfo.title}">
      </div>
    `).join('');

    thumbsContainer.querySelectorAll('.lightbox-thumb').forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(thumb.getAttribute('data-thumb-idx'), 10);
        currentLightboxIndex = idx;
        updateLightboxImage();
      });
    });
  }

  updateLightboxImage();
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function updateLightboxImage() {
  const imgEl = document.getElementById('lightboxMainImg');
  const captionEl = document.getElementById('lightboxCaption');

  if (!imgEl || currentLightboxImages.length === 0) return;

  const current = currentLightboxImages[currentLightboxIndex];
  imgEl.src = current.url;
  imgEl.alt = current.alt || 'Aura Del Mar Room';
  
  if (captionEl) {
    captionEl.textContent = `${currentRoomTitle ? currentRoomTitle + ' • ' : ''}${current.alt || ''} (${currentLightboxIndex + 1} / ${currentLightboxImages.length})`;
  }

  // Update active thumbnail
  const thumbs = document.querySelectorAll('.lightbox-thumb');
  thumbs.forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === currentLightboxIndex);
  });
}

function closeLightbox() {
  const modal = document.getElementById('photoLightbox');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// FAQ Accordion
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active') || item.classList.contains('open');
        items.forEach(i => {
          i.classList.remove('active');
          i.classList.remove('open');
        });
        if (!isOpen) {
          item.classList.add('active');
          item.classList.add('open');
        }
      });
    }
  });
}

// Header Sticky shadow
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Mobile Menu
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.main-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
  });

  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      btn.classList.remove('active');
    });
  });
}

// Hero Search Syncer
function initHeroSync() {
  const heroBtn = document.getElementById('heroSearchBtn');
  if (heroBtn) {
    heroBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const heroRoom = document.getElementById('heroRoomType');
      const roomId = heroRoom ? heroRoom.value : null;
      if (window.miminoBooking) {
        window.miminoBooking.openModal(roomId);
      }
    });
  }
}
