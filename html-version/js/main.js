// ── Mobile menu toggle ──
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("navbar-toggle");
  const menu = document.getElementById("mobile-menu");
  const menuLinks = menu ? menu.querySelectorAll("a") : [];

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("active");
      const isOpen = menu.classList.contains("active");
      toggle.innerHTML = isOpen
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    });

    menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("active");
      });
    });
  }

  // ── Testimonials Carousel ──
  const track = document.getElementById("carousel-track");
  const cards = track ? track.querySelectorAll(".testimonial-card") : [];
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const dotsContainer = document.getElementById("carousel-dots");
  let currentIndex = 0;

  function getVisibleCount() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  function updateCarousel() {
    if (!track || cards.length === 0) return;
    var visible = getVisibleCount();
    var gap = 16;
    var cardWidth = (track.parentElement.offsetWidth - gap * (visible - 1)) / visible;

    cards.forEach(function (card) {
      card.style.minWidth = cardWidth + "px";
    });

    var offset = currentIndex * (cardWidth + gap);
    track.style.transform = "translateX(-" + offset + "px)";
    track.style.transition = "transform 0.4s ease";

    // Update dots
    if (dotsContainer) {
      var dots = dotsContainer.querySelectorAll(".carousel-dot");
      dots.forEach(function (dot, i) {
        dot.classList.toggle("active", i === currentIndex);
      });
    }
  }

  function maxIndex() {
    return Math.max(0, cards.length - getVisibleCount());
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      currentIndex = currentIndex <= 0 ? maxIndex() : currentIndex - 1;
      updateCarousel();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      currentIndex = currentIndex >= maxIndex() ? 0 : currentIndex + 1;
      updateCarousel();
    });
  }

  // Dot clicks
  if (dotsContainer) {
    dotsContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("carousel-dot")) {
        currentIndex = parseInt(e.target.dataset.index, 10);
        updateCarousel();
      }
    });
  }

  window.addEventListener("resize", function () {
    if (currentIndex > maxIndex()) currentIndex = maxIndex();
    updateCarousel();
  });

  updateCarousel();

  // Autoplay every 5 seconds
  var autoplayInterval = setInterval(function () {
    currentIndex = currentIndex >= maxIndex() ? 0 : currentIndex + 1;
    updateCarousel();
  }, 5000);

  // Pause on hover
  if (track) {
    track.parentElement.addEventListener("mouseenter", function () {
      clearInterval(autoplayInterval);
    });
    track.parentElement.addEventListener("mouseleave", function () {
      autoplayInterval = setInterval(function () {
        currentIndex = currentIndex >= maxIndex() ? 0 : currentIndex + 1;
        updateCarousel();
      }, 5000);
    });
  }

  // ── Animated numbers (Intersection Observer) ──
  var numberEls = document.querySelectorAll("[data-target]");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseFloat(el.dataset.target);
          var suffix = el.dataset.suffix || "";
          var decimals = parseInt(el.dataset.decimals || "0", 10);
          var start = 0;
          var duration = 1800;
          var startTime = null;

          function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            // easeOut
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = start + (target - start) * eased;
            el.textContent = (decimals ? current.toFixed(decimals) : Math.round(current)) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          }

          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.4 }
  );

  numberEls.forEach(function (el) {
    observer.observe(el);
  });

  // ── Contact form → WhatsApp ──
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("contact-name").value;
      var phone = document.getElementById("contact-phone").value;
      var message =
        "Olá! Meu nome é " + name + " e meu telefone é " + phone + ". Gostaria de saber mais sobre os serviços da SÓ Multas.";
      window.open(
        "https://wa.me/5561992212024/?text=" + encodeURIComponent(message),
        "_blank",
        "noopener,noreferrer"
      );
    });
  }
});
