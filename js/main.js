
/* ==========================
   WINDOWS SAN ANTONIO
   MAIN JAVASCRIPT
========================== */

/* FOOTER YEAR */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");

    });

}