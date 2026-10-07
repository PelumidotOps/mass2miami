// Mass2Miami Interactive Functionality

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFaqAccordion();
  initModals();
  initForms();
  initCalendar();
});

// Mobile Navigation
function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');

  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
      const spans = toggle.querySelectorAll('span');
      if (drawer.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close on link click
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }
}

// FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

// Modal handling
function initModals() {
  const modal = document.getElementById('registerModal');
  const openButtons = document.querySelectorAll('[data-open-modal="register"]');
  const closeButtons = document.querySelectorAll('.modal-close, [data-close-modal]');

  if (modal) {
    openButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('open');
      });
    });

    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.remove('open');
      });
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  }
}

// Forms & Toasts
function initForms() {
  const contactForm = document.getElementById('contactForm');
  const modalForm = document.getElementById('modalRegisterForm');
  const newsletterForm = document.getElementById('newsletterForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your message has been sent to Mass2Miami.');
      contactForm.reset();
    });
  }

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Registration submitted! We will contact you shortly with confirmation.');
      modalForm.reset();
      const modal = document.getElementById('registerModal');
      if (modal) modal.classList.remove('open');
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you for subscribing to the Mass2Miami Newsletter!');
      newsletterForm.reset();
    });
  }
}

function showToast(message) {
  let toast = document.querySelector('.toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Interactive Academy Calendar
function initCalendar() {
  const calWidget = document.querySelector('.calendar-widget');
  if (!calWidget) return;

  const btnToday = calWidget.querySelector('.btn-cal-today');
  const btnBack = calWidget.querySelector('.btn-cal-back');
  const btnNext = calWidget.querySelector('.btn-cal-next');
  const rangeLabel = calWidget.querySelector('.cal-range-label');
  const viewBtns = calWidget.querySelectorAll('.cal-view-btn');

  const weeks = [
    '03 July 2026 - 09 July 2026',
    '10 July 2026 - 16 July 2026',
    '17 July 2026 - 23 July 2026',
    '24 July 2026 - 30 July 2026'
  ];
  let currentWeekIndex = 1;

  function updateLabel() {
    if (rangeLabel) {
      rangeLabel.textContent = weeks[currentWeekIndex];
    }
  }

  if (btnBack) {
    btnBack.addEventListener('click', () => {
      if (currentWeekIndex > 0) {
        currentWeekIndex--;
        updateLabel();
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (currentWeekIndex < weeks.length - 1) {
        currentWeekIndex++;
        updateLabel();
      }
    });
  }

  if (btnToday) {
    btnToday.addEventListener('click', () => {
      currentWeekIndex = 1;
      updateLabel();
    });
  }

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Mobile Day Tab Chips
  const dayChips = calWidget.querySelectorAll('.cal-day-chip');
  const dayEvents = calWidget.querySelectorAll('.cal-day-events');

  dayChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const targetDay = chip.getAttribute('data-day');
      dayChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      dayEvents.forEach(events => {
        if (events.getAttribute('data-day') === targetDay) {
          events.style.display = 'flex';
        } else {
          events.style.display = 'none';
        }
      });
    });
  });

  // Clicking an event opens registration modal with prefilled subject
  calWidget.querySelectorAll('.cal-event-pill, .cal-mobile-card').forEach(pill => {
    pill.addEventListener('click', (e) => {
      // Don't duplicate if clicking the button directly
      if (e.target.tagName.toLowerCase() === 'button') return;
      const modal = document.getElementById('registerModal');
      const trackSelect = document.getElementById('modalTrackSelect');
      if (modal) {
        if (trackSelect) {
          trackSelect.value = 'Academy Session';
        }
        modal.classList.add('open');
      }
    });
  });
}
