(function () {
  "use strict";

  /* Mobile navigation */
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");

  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        window.setTimeout(updateNavSpy, 450);
      });
    });
  }

  /* Scroll-triggered reveals */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Gentle hero parallax */
  const heroBg = document.querySelector(".hero__bg");
  if (heroBg) {
    let ticking = false;
    function updateParallax() {
      const hero = document.querySelector(".hero");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = Math.min(1, Math.max(0, 1 - rect.bottom / (vh + rect.height)));
      const y = progress * 36;
      heroBg.style.transform = "translate3d(0, " + y + "px, 0)";
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(updateParallax);
        }
      },
      { passive: true }
    );
    updateParallax();
  }

  /* Scroll spy: highlight nav link for section in view */
  const spyIds = [
    "intro",
    "thesis",
    "alzheimers",
    "music-emotion",
    "emotion-memory",
    "therapy",
    "closing",
    "references",
  ];
  const navLinks = document.querySelectorAll('.site-nav a.nav-link[href^="#"]');
  const spySections = spyIds
    .map(function (id) {
      return document.getElementById(id);
    })
    .filter(Boolean);

  function updateNavSpy() {
    if (!navLinks.length || !spySections.length) return;
    const header = document.querySelector(".site-header");
    const offset = (header && header.offsetHeight) || 64;
    const y = window.scrollY + offset + 12;
    let current = spySections[0].id;
    spySections.forEach(function (sec) {
      const top = sec.getBoundingClientRect().top + window.scrollY;
      if (top <= y) current = sec.id;
    });
    navLinks.forEach(function (link) {
      if (link.getAttribute("href") === "#" + current) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  let spyTick = false;
  window.addEventListener(
    "scroll",
    function () {
      if (!spyTick) {
        spyTick = true;
        requestAnimationFrame(function () {
          updateNavSpy();
          spyTick = false;
        });
      }
    },
    { passive: true }
  );
  window.addEventListener("resize", updateNavSpy, { passive: true });
  updateNavSpy();
})();
