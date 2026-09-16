/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {
  revealObserver.observe(element);
});


/* ================= HEADER EFFECT ================= */

const header =
  document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {

    header.style.boxShadow =
      "0 10px 35px rgba(60,10,30,.08)";

  } else {

    header.style.boxShadow = "none";

  }

});


/* ================= SMOOTH PRODUCT FEEDBACK ================= */

document.querySelectorAll(".product-card").forEach(card => {

  card.addEventListener("mouseenter", () => {
    card.style.transition = "transform .35s ease";
  });

});


/* ================= YEAR ================= */

const year =
  document.querySelector(".footer-bottom span");

if (year) {

  year.textContent =
    `© ${new Date().getFullYear()} Wintimah's Makeover. All rights reserved.`;

}
