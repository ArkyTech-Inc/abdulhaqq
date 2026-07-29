document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var sidebar = document.querySelector(".sidebar");
  var nav = document.querySelector(".nav");
  var backdrop = document.querySelector(".sidebar-backdrop");

  function closeMenu() {
    if (sidebar) sidebar.classList.remove("is-open");
    if (nav) nav.classList.remove("is-open");
    if (toggle) toggle.classList.remove("is-open");
    if (backdrop) backdrop.classList.remove("is-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    if (sidebar) sidebar.classList.add("is-open");
    if (nav) nav.classList.add("is-open");
    if (toggle) toggle.classList.add("is-open");
    if (backdrop) backdrop.classList.add("is-open");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
  }

  if (toggle && (sidebar || nav)) {
    toggle.addEventListener("click", function () {
      var isOpen = (sidebar && sidebar.classList.contains("is-open")) || (nav && nav.classList.contains("is-open"));
      if (isOpen) closeMenu(); else openMenu();
    });
    if (backdrop) backdrop.addEventListener("click", closeMenu);

    document.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  // Contact form handler (unchanged)
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
