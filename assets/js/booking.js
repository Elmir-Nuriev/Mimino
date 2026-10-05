/**
 * Hotel Mimino Batumi - Booking Engine Logic
 * Handles interactive booking modal, price calculation, validation & voucher generation
 */

class MiminoBookingEngine {
  constructor() {
    this.state = {
      step: 1,
      checkIn: this.formatDate(this.getRelativeDate(1)),
      checkOut: this.formatDate(this.getRelativeDate(3)),
      adults: 2,
      children: 0,
      selectedRoomId: "standard-double",
      selectedServices: new Set(),
      promoCode: "",
      discountPercent: 0,
      currentCurrency: "RUB",
      guest: {
        name: "",
        phone: "",
        email: "",
        requests: ""
      },
      bookingRef: ""
    };

    this.init();
  }

  getRelativeDate(daysFromNow) {
    const d = new Date();
    d.setDate(d.getDate() + daysFromNow);
    return d;
  }

  formatDate(dateObj) {
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const d = String(dateObj.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  formatDateHuman(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  init() {
    this.cacheElements();
    this.bindEvents();
    this.renderRoomChoices();
    this.renderServiceChoices();
    this.updateSummary();
  }

  cacheElements() {
    this.modal = document.getElementById('bookingModal');
    this.stepper = document.getElementById('bookingStepper');
    this.stepViews = document.querySelectorAll('.booking-step-view');
    this.summarySidebar = document.getElementById('bookingSummarySidebar');
    
    // Step 1 inputs
    this.inCheckIn = document.getElementById('bkCheckIn');
    this.inCheckOut = document.getElementById('bkCheckOut');
    this.inAdults = document.getElementById('bkAdults');
    this.inChildren = document.getElementById('bkChildren');

    // Step 4 inputs
    this.inName = document.getElementById('bkGuestName');
    this.inPhone = document.getElementById('bkGuestPhone');
    this.inEmail = document.getElementById('bkGuestEmail');
    this.inRequests = document.getElementById('bkGuestRequests');
    this.inPromo = document.getElementById('bkPromoCode');

    // Summary fields
    this.sumRoomImg = document.getElementById('sumRoomImg');
    this.sumRoomTitle = document.getElementById('sumRoomTitle');
    this.sumDates = document.getElementById('sumDates');
    this.sumNights = document.getElementById('sumNights');
    this.sumGuests = document.getElementById('sumGuests');
    this.sumRoomTotal = document.getElementById('sumRoomTotal');
    this.sumServicesTotal = document.getElementById('sumServicesTotal');
    this.sumDiscountRow = document.getElementById('sumDiscountRow');
    this.sumDiscountVal = document.getElementById('sumDiscountVal');
    this.sumGrandTotal = document.getElementById('sumGrandTotal');

    // Set initial date inputs
    if (this.inCheckIn) this.inCheckIn.value = this.state.checkIn;
    if (this.inCheckOut) this.inCheckOut.value = this.state.checkOut;
    if (this.inAdults) this.inAdults.value = this.state.adults;
    if (this.inChildren) this.inChildren.value = this.state.children;

    // Minimum dates
    const today = this.formatDate(new Date());
    if (this.inCheckIn) this.inCheckIn.min = today;
    if (this.inCheckOut) this.inCheckOut.min = this.state.checkIn;
  }

  bindEvents() {
    // Open modal buttons
    document.querySelectorAll('[data-open-booking]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const roomId = btn.getAttribute('data-room-id');
        this.openModal(roomId);
      });
    });

    // Close modal
    document.querySelectorAll('[data-close-booking]').forEach(btn => {
      btn.addEventListener('click', () => this.closeModal());
    });

    // Close on overlay click
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.closeModal();
      });
    }

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && this.modal.classList.contains('active')) {
        this.closeModal();
      }
    });

    // Date changes
    if (this.inCheckIn) {
      this.inCheckIn.addEventListener('change', () => {
        this.state.checkIn = this.inCheckIn.value;
        // ensure checkout is after checkin
        if (this.state.checkOut <= this.state.checkIn) {
          const nextDay = new Date(this.state.checkIn);
          nextDay.setDate(nextDay.getDate() + 1);
          this.state.checkOut = this.formatDate(nextDay);
          if (this.inCheckOut) this.inCheckOut.value = this.state.checkOut;
        }
        if (this.inCheckOut) this.inCheckOut.min = this.state.checkIn;
        this.updateSummary();
      });
    }

    if (this.inCheckOut) {
      this.inCheckOut.addEventListener('change', () => {
        this.state.checkOut = this.inCheckOut.value;
        this.updateSummary();
      });
    }

    if (this.inAdults) {
      this.inAdults.addEventListener('change', () => {
        this.state.adults = parseInt(this.inAdults.value, 10);
        this.updateSummary();
      });
    }

    if (this.inChildren) {
      this.inChildren.addEventListener('change', () => {
        this.state.children = parseInt(this.inChildren.value, 10);
        this.updateSummary();
      });
    }

    // Step navigation buttons
    document.querySelectorAll('[data-step-nav]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-step-nav');
        if (target === 'next') this.goNext();
        else if (target === 'prev') this.goPrev();
        else this.goToStep(parseInt(target, 10));
      });
    });

    // Promo code apply
    const promoBtn = document.getElementById('bkApplyPromoBtn');
    if (promoBtn) {
      promoBtn.addEventListener('click', () => this.applyPromo());
    }

    // Confirm form submit
    const confirmBtn = document.getElementById('bkConfirmSubmitBtn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.processConfirmation();
      });
    }

    // Print voucher button
    const printBtn = document.getElementById('bkPrintVoucherBtn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }

  openModal(preselectedRoomId = null) {
    if (preselectedRoomId) {
      this.state.selectedRoomId = preselectedRoomId;
      this.updateRoomChoiceVisuals();
    }
    
    // Copy any hero quick bar dates if set
    const heroIn = document.getElementById('heroCheckIn');
    const heroOut = document.getElementById('heroCheckOut');
    const heroGuests = document.getElementById('heroGuests');
    const heroRoom = document.getElementById('heroRoomType');

    if (heroIn && heroIn.value) {
      this.state.checkIn = heroIn.value;
      if (this.inCheckIn) this.inCheckIn.value = this.state.checkIn;
    }
    if (heroOut && heroOut.value) {
      this.state.checkOut = heroOut.value;
      if (this.inCheckOut) this.inCheckOut.value = this.state.checkOut;
    }
    if (heroGuests && heroGuests.value) {
      this.state.adults = parseInt(heroGuests.value, 10);
      if (this.inAdults) this.inAdults.value = this.state.adults;
    }
    if (heroRoom && heroRoom.value && !preselectedRoomId) {
      this.state.selectedRoomId = heroRoom.value;
      this.updateRoomChoiceVisuals();
    }

    if (this.state.step === 5) {
      this.goToStep(1);
    }

    this.updateSummary();
    if (this.modal) this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    if (this.modal) this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  goToStep(stepNumber) {
    if (stepNumber < 1 || stepNumber > 5) return;
    this.state.step = stepNumber;

    // Update views
    this.stepViews.forEach(view => {
      const vStep = parseInt(view.getAttribute('data-step'), 10);
      view.classList.toggle('active', vStep === stepNumber);
    });

    // Update Stepper indicators
    document.querySelectorAll('.step-item').forEach(item => {
      const s = parseInt(item.getAttribute('data-step-index'), 10);
      item.classList.toggle('active', s === stepNumber);
      item.classList.toggle('completed', s < stepNumber);
    });

    // Scroll to top of content
    const scrollContainer = document.querySelector('.booking-content-scroll');
    if (scrollContainer) scrollContainer.scrollTop = 0;
  }

  goNext() {
    if (this.state.step === 1) {
      // Validate dates
      if (!this.state.checkIn || !this.state.checkOut) {
        alert('Пожалуйста, выберите даты заезда и выезда');
        return;
      }
      if (this.getNights() <= 0) {
        alert('Дата выезда должна быть позже даты заезда');
        return;
      }
    } else if (this.state.step === 2) {
      if (!this.state.selectedRoomId) {
        alert('Пожалуйста, выберите номер');
        return;
      }
    }
    this.goToStep(this.state.step + 1);
  }

  goPrev() {
    this.goToStep(this.state.step - 1);
  }

  getNights() {
    const d1 = new Date(this.state.checkIn);
    const d2 = new Date(this.state.checkOut);
    const diffTime = d2.getTime() - d1.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  }

  getSelectedRoom() {
    return MIMINO_CONFIG.rooms.find(r => r.id === this.state.selectedRoomId) || MIMINO_CONFIG.rooms[0];
  }

  renderRoomChoices() {
    const container = document.getElementById('bookingRoomChoicesContainer');
    if (!container) return;

    container.innerHTML = MIMINO_CONFIG.rooms.map(room => {
      const priceFormatted = this.formatCurrency(room.priceRUB);
      const isSelected = room.id === this.state.selectedRoomId;
      return `
        <div class="booking-room-choice-card ${isSelected ? 'selected' : ''}" data-room-select="${room.id}">
          <div class="choice-thumb">
            <img src="${room.images[0].url}" alt="${room.title}" loading="lazy">
          </div>
          <div class="choice-info">
            <h4>${room.title}</h4>
            <p>${room.bed}</p>
            <div class="choice-specs">
              <span>📏 ${room.area} м²</span>
              <span>👥 ${room.capacity}</span>
              <span>🌊 ${room.view}</span>
            </div>
          </div>
          <div class="choice-price-col">
            <div class="choice-price-value">${priceFormatted} <small style="font-size:0.7rem; font-weight:normal; color:#8E8276;">/ночь</small></div>
            <div class="choice-radio-indicator"></div>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('[data-room-select]').forEach(card => {
      card.addEventListener('click', () => {
        this.state.selectedRoomId = card.getAttribute('data-room-select');
        this.updateRoomChoiceVisuals();
        this.updateSummary();
      });
    });
  }

  updateRoomChoiceVisuals() {
    const container = document.getElementById('bookingRoomChoicesContainer');
    if (!container) return;
    container.querySelectorAll('.booking-room-choice-card').forEach(card => {
      const rId = card.getAttribute('data-room-select');
      card.classList.toggle('selected', rId === this.state.selectedRoomId);
    });
  }

  renderServiceChoices() {
    const container = document.getElementById('bookingServicesContainer');
    if (!container) return;

    container.innerHTML = MIMINO_CONFIG.extraServices.map(srv => {
      const isSelected = this.state.selectedServices.has(srv.id);
      const priceFormatted = this.formatCurrency(srv.priceRUB);
      return `
        <div class="service-choice-item ${isSelected ? 'selected' : ''}" data-service-id="${srv.id}">
          <div class="service-left">
            <div class="service-checkbox">✓</div>
            <div class="service-info">
              <h5>${srv.name}</h5>
              <p>${srv.description}</p>
            </div>
          </div>
          <div class="service-price">+${priceFormatted}</div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.service-choice-item').forEach(item => {
      item.addEventListener('click', () => {
        const sId = item.getAttribute('data-service-id');
        if (this.state.selectedServices.has(sId)) {
          this.state.selectedServices.delete(sId);
          item.classList.remove('selected');
        } else {
          this.state.selectedServices.add(sId);
          item.classList.add('selected');
        }
        this.updateSummary();
      });
    });
  }

  applyPromo() {
    const code = (this.inPromo ? this.inPromo.value : '').trim().toUpperCase();
    const feedback = document.getElementById('promoFeedback');
    
    if (code === 'MIMINO10' || code === 'BATUMI' || code === 'WELCOME') {
      this.state.discountPercent = 10;
      this.state.promoCode = code;
      if (feedback) {
        feedback.textContent = '🎉 Промокод применен! Скидка 10% на проживание';
        feedback.style.color = 'var(--accent-emerald)';
      }
    } else if (code === '') {
      this.state.discountPercent = 0;
      this.state.promoCode = '';
      if (feedback) feedback.textContent = '';
    } else {
      if (feedback) {
        feedback.textContent = 'Неверный промокод. Попробуйте MIMINO10';
        feedback.style.color = 'var(--accent-wine)';
      }
    }
    this.updateSummary();
  }

  updateSummary() {
    const nights = this.getNights();
    const room = this.getSelectedRoom();

    if (this.sumRoomImg) this.sumRoomImg.src = room.images[0].url;
    if (this.sumRoomTitle) this.sumRoomTitle.textContent = room.title;
    if (this.sumDates) this.sumDates.textContent = `${this.formatDateHuman(this.state.checkIn)} — ${this.formatDateHuman(this.state.checkOut)}`;
    if (this.sumNights) this.sumNights.textContent = `${nights} ${this.pluralNights(nights)}`;
    
    const guestsText = `${this.state.adults} взр.` + (this.state.children > 0 ? `, ${this.state.children} дет.` : '');
    if (this.sumGuests) this.sumGuests.textContent = guestsText;

    // Calculate prices in RUB first
    const roomSubtotalRUB = room.priceRUB * nights;
    
    let servicesTotalRUB = 0;
    this.state.selectedServices.forEach(sId => {
      const srv = MIMINO_CONFIG.extraServices.find(s => s.id === sId);
      if (srv) servicesTotalRUB += srv.priceRUB;
    });

    const discountRUB = (roomSubtotalRUB * this.state.discountPercent) / 100;
    const grandTotalRUB = roomSubtotalRUB - discountRUB + servicesTotalRUB;

    if (this.sumRoomTotal) this.sumRoomTotal.textContent = this.formatCurrency(roomSubtotalRUB);
    if (this.sumServicesTotal) this.sumServicesTotal.textContent = this.formatCurrency(servicesTotalRUB);
    
    if (this.sumDiscountRow) {
      if (this.state.discountPercent > 0) {
        this.sumDiscountRow.style.display = 'flex';
        if (this.sumDiscountVal) this.sumDiscountVal.textContent = `-${this.formatCurrency(discountRUB)} (10%)`;
      } else {
        this.sumDiscountRow.style.display = 'none';
      }
    }

    if (this.sumGrandTotal) this.sumGrandTotal.textContent = this.formatCurrency(grandTotalRUB);

    // Also update services choice prices if currency changed
    this.refreshServicePriceLabels();
  }

  refreshServicePriceLabels() {
    document.querySelectorAll('.service-choice-item').forEach(item => {
      const sId = item.getAttribute('data-service-id');
      const srv = MIMINO_CONFIG.extraServices.find(s => s.id === sId);
      if (srv) {
        const el = item.querySelector('.service-price');
        if (el) el.textContent = `+${this.formatCurrency(srv.priceRUB)}`;
      }
    });
  }

  pluralNights(n) {
    if (n % 10 === 1 && n % 100 !== 11) return 'ночь';
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return 'ночи';
    return 'ночей';
  }

  formatCurrency(amountRUB) {
    const curr = MIMINO_CONFIG.currencies[this.state.currentCurrency] || MIMINO_CONFIG.currencies.RUB;
    const converted = Math.round(amountRUB * curr.rate);
    const formattedNum = converted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return `${curr.prefix}${formattedNum}${curr.suffix}`;
  }

  setCurrency(currCode) {
    if (!MIMINO_CONFIG.currencies[currCode]) return;
    this.state.currentCurrency = currCode;
    this.renderRoomChoices();
    this.updateSummary();
  }

  processConfirmation() {
    // Read guest form
    const name = (this.inName ? this.inName.value : '').trim();
    const phone = (this.inPhone ? this.inPhone.value : '').trim();
    const email = (this.inEmail ? this.inEmail.value : '').trim();
    const requests = (this.inRequests ? this.inRequests.value : '').trim();

    if (!name || !phone) {
      alert('Пожалуйста, введите ваше имя и номер телефона для связи');
      return;
    }

    this.state.guest = { name, phone, email, requests };
    
    // Generate Booking reference
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    this.state.bookingRef = `MIM-BAT-${randomNum}`;

    this.renderVoucher();
    this.goToStep(5);
  }

  renderVoucher() {
    const room = this.getSelectedRoom();
    const nights = this.getNights();
    
    let servicesList = [];
    this.state.selectedServices.forEach(sId => {
      const srv = MIMINO_CONFIG.extraServices.find(s => s.id === sId);
      if (srv) servicesList.push(srv.name);
    });

    const roomSubtotalRUB = room.priceRUB * nights;
    let servicesTotalRUB = 0;
    this.state.selectedServices.forEach(sId => {
      const srv = MIMINO_CONFIG.extraServices.find(s => s.id === sId);
      if (srv) servicesTotalRUB += srv.priceRUB;
    });
    const discountRUB = (roomSubtotalRUB * this.state.discountPercent) / 100;
    const grandTotalRUB = roomSubtotalRUB - discountRUB + servicesTotalRUB;
    const formattedTotal = this.formatCurrency(grandTotalRUB);

    const refEl = document.getElementById('vouchRefNumber');
    if (refEl) refEl.textContent = this.state.bookingRef;

    const guestEl = document.getElementById('vouchGuestName');
    if (guestEl) guestEl.textContent = this.state.guest.name;

    const phoneEl = document.getElementById('vouchGuestPhone');
    if (phoneEl) phoneEl.textContent = this.state.guest.phone;

    const roomEl = document.getElementById('vouchRoomTitle');
    if (roomEl) roomEl.textContent = room.title;

    const datesEl = document.getElementById('vouchDates');
    if (datesEl) datesEl.textContent = `${this.formatDateHuman(this.state.checkIn)} — ${this.formatDateHuman(this.state.checkOut)} (${nights} ${this.pluralNights(nights)})`;

    const totalEl = document.getElementById('vouchTotal');
    if (totalEl) totalEl.textContent = formattedTotal;

    const srvEl = document.getElementById('vouchServices');
    if (srvEl) {
      srvEl.textContent = servicesList.length > 0 ? servicesList.join(', ') : 'Без доп. услуг';
    }

    // Set up WhatsApp button
    const waBtn = document.getElementById('bkWaShareBtn');
    if (waBtn) {
      const message = encodeURIComponent(
        `Здравствуйте, отель Mimino! Я оформил бронирование #${this.state.bookingRef}.\n` +
        `Гость: ${this.state.guest.name}\n` +
        `Номер: ${room.title}\n` +
        `Даты: ${this.state.checkIn} — ${this.state.checkOut} (${nights} ночей)\n` +
        `Сумма: ${formattedTotal}\n` +
        (servicesList.length ? `Доп. услуги: ${servicesList.join(', ')}\n` : '') +
        `Прошу подтвердить бронь. Спасибо!`
      );
      waBtn.href = `https://wa.me/995599123456?text=${message}`;
    }
  }
}

// Global instance attached to window
window.miminoBooking = null;
document.addEventListener('DOMContentLoaded', () => {
  window.miminoBooking = new MiminoBookingEngine();
});
