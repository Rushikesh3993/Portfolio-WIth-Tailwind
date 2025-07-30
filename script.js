//get button and menu elements

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

//toggle the 'hidden' class on click

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
});


//Auto-close on link click + reset icons
const menuLinks = mobileMenu.querySelectorAll("a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        hamburgerIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
    });
});
