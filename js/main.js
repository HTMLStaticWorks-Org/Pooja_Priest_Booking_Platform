(() => {
  // Theme Toggle with LocalStorage
  const body = document.body;
  const savedTheme = localStorage.getItem('pp-theme');
  if (savedTheme) {
    body.dataset.theme = savedTheme;
  }

  const updateThemeButtons = (theme) => {
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.textContent = theme === 'dark' ? '☀ Light' : '☾ Theme';
    });
  };

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
      body.dataset.theme = nextTheme;
      localStorage.setItem('pp-theme', nextTheme);
      updateThemeButtons(nextTheme);
    });
  });
  updateThemeButtons(body.dataset.theme || 'light');

  // RTL Toggle with LocalStorage
  const savedRTL = localStorage.getItem('pp-rtl');
  if (savedRTL === '1') {
    body.classList.add('rtl');
  }

  const updateRTLButtons = (isRtl) => {
    document.querySelectorAll('[data-rtl-toggle]').forEach((btn) => {
      btn.textContent = isRtl ? 'LTR' : 'RTL';
    });
  };

  document.querySelectorAll('[data-rtl-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      body.classList.toggle('rtl');
      const isRtl = body.classList.contains('rtl');
      localStorage.setItem('pp-rtl', isRtl ? '1' : '0');
      updateRTLButtons(isRtl);
    });
  });
  updateRTLButtons(body.classList.contains('rtl'));

  // Mobile Menu Toggle (Point 18, 1024px tablet fix)
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.navlinks');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
      menuBtn.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove('open');
        menuBtn.textContent = '☰';
      }
    });
  }

  // Password Visibility Toggle with Eye Icon (Point 17)
  document.querySelectorAll('.show-pass-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('input');
      if (!input) return;
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');

      if (isPassword) {
        btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>`;
      } else {
        btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>`;
      }
    });
  });

  // Back to Top Button (Point 2 in Image 1: Icon only)
  const backToTopBtn = document.getElementById('backToTop');
  const floatingBackTop = document.getElementById('floatingBackTop');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', scrollToTop);
  }
  if (floatingBackTop) {
    floatingBackTop.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        floatingBackTop.classList.add('show');
      } else {
        floatingBackTop.classList.remove('show');
      }
    });
  }

  // FAQ Accordion (Point 5)
  const faqItems = document.querySelectorAll('.faq-dropdown');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach((other) => {
          if (other !== item && other.open) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });

  // Dashboard Tabs Interactive Switcher (Point 4 in Image 2)
  const dashTabBtns = document.querySelectorAll('.dash-tab-btn');
  const dashPanels = document.querySelectorAll('.dash-panel');
  if (dashTabBtns.length && dashPanels.length) {
    dashTabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        dashTabBtns.forEach((b) => b.classList.remove('active'));
        dashPanels.forEach((p) => p.classList.remove('active'));

        btn.classList.add('active');
        const activePanel = document.getElementById(targetTab);
        if (activePanel) {
          activePanel.classList.add('active');
        }
      });
    });

    // Quick switch links within dashboard cards
    document.querySelectorAll('.dash-quick-tab').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetTab = link.getAttribute('data-tab');
        const targetBtn = document.querySelector(`.dash-tab-btn[data-tab="${targetTab}"]`);
        if (targetBtn) {
          targetBtn.click();
          targetBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  }

  // Form Submissions in Demo
  document.querySelectorAll('form[data-demo]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = form.querySelector('.form-message');
      if (msg) {
        msg.textContent = 'Namaste! Your ceremony request has been recorded. Our coordinator will contact you shortly.';
        msg.style.color = 'var(--brand)';
        msg.style.fontWeight = '700';
      }
    });
  });

  // Dynamic Year in Footer
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
