//get button and menu elements

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

//toggle the 'hidden' class on click

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

//Auto-close on link click
const menuLinks = mobileMenu.querySelectorAll("a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});
