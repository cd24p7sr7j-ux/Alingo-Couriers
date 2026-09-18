/* =====================================================
   ALINGO COURIERS JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");
const navbar = document.getElementById("navbar");

if (menuButton && navbar) {

    menuButton.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const icon = menuButton.querySelector("i");

        if (navbar.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* Close menu after clicking */

    navbar.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            const icon = menuButton.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =====================================================
   HEADER SCROLL
===================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =====================================================
   FOOTER YEAR
===================================================== */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =====================================================
   REVEAL ANIMATIONS
===================================================== */

const revealElements = document.querySelectorAll(
    ".service-card, .gallery-item, .process-card, .why-item, .contact-box"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =====================================================
   REVEAL CSS
===================================================== */

const revealStyle = document.createElement("style");

revealStyle.textContent = `

    .reveal {
        opacity: 0;
        transform: translateY(35px);
        transition:
            opacity .7s ease,
            transform .7s ease;
    }

    .reveal.show {
        opacity: 1;
        transform: translateY(0);
    }

`;

document.head.appendChild(revealStyle);


/* =====================================================
   WHATSAPP TRACKING
===================================================== */

document.querySelectorAll(
    'a[href*="wa.me"]'
).forEach(button => {

    button.addEventListener("click", () => {

        console.log(
            "ALINGO: WhatsApp contact opened."
        );

    });

});


/* =====================================================
   BUTTON RIPPLE
===================================================== */

document.querySelectorAll(".button").forEach(button => {

    button.addEventListener("click", function(event) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});
