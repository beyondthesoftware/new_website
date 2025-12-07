document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".site-nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    nav.classList.toggle("site-nav--open");

    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
  });
});
