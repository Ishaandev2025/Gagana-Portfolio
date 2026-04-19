const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
const contactButton = document.getElementById("contactButton");

navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
});

contactButton.addEventListener("click", () => {
    alert("Thanks for your interest! Please reach out via email or LinkedIn.");
});

const navLinks = document.querySelectorAll(".site-nav a");
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (siteNav.classList.contains("open")) {
            siteNav.classList.remove("open");
        }
    });
});
    