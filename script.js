document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var sidebar = document.querySelector(".sidebar");
  var backdrop = document.querySelector(".sidebar-backdrop");

  function closeMenu() {
    sidebar.classList.remove("is-open");
    toggle.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    sidebar.classList.add("is-open");
    toggle.classList.add("is-open");
    backdrop.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  if (toggle && sidebar && backdrop) {
    toggle.addEventListener("click", function () {
      if (sidebar.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
    backdrop.addEventListener("click", closeMenu);

    // Close menu on nav link click (mobile)
    document.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Close on escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  // Simple contact form handler (front-end only placeholder)
  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type='submit']");
      var original = btn.textContent;
      btn.textContent = "Message sent";
      setTimeout(function () {
        btn.textContent = original;
        form.reset();
      }, 2200);
    });
  }
});
