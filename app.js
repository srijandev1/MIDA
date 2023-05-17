const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    const target = link.getAttribute("target");

    if (target !== "_blank") {
      e.preventDefault();

      // Close mobile navigation
      if (link.classList.contains("main-nav-link")) {
        headerEl.classList.remove("nav-open");
      }

      // Scroll to other links
      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        if (sectionEl) {
          sectionEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  });
});
