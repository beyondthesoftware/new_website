document.addEventListener("DOMContentLoaded", function () {
  // Menu toggle
  const toggle = document.querySelector(".site-nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("site-nav--open");

      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
    });
  }

  // Carousel functionality
  const carousels = document.querySelectorAll(".carousel-wrapper");

  carousels.forEach(wrapper => {
    const container = wrapper.querySelector(".carousel-container");
    const prevBtn = wrapper.querySelector(".carousel-prev");
    const nextBtn = wrapper.querySelector(".carousel-next");

    if (!container || !prevBtn || !nextBtn) return;

    const scrollAmount = 340; // Card width + gap

    prevBtn.addEventListener("click", () => {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    // Update button states on scroll
    const updateButtons = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      prevBtn.disabled = container.scrollLeft <= 0;
      nextBtn.disabled = container.scrollLeft >= maxScroll - 1;
    };

    container.addEventListener("scroll", updateButtons);
    updateButtons(); // Initial state
  });
});
