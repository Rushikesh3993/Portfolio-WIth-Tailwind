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



document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-bar");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const value = bar.getAttribute("data-skill");
        bar.style.width = value;
        observer.unobserve(bar); // Stop observing after animation
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => {
    observer.observe(bar); // Observe each bar individually
  });
});





