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



  // ---------- INFINITE TYPING EFFECT (TYPE -> PAUSE -> DELETE -> REPEAT) ----------
  const typingEl = document.getElementById("typing");
  if (typingEl) {
    const text = "A Passionate Web Developer";          // text to type
    // create inner spans for text + cursor (keeps markup clean)
    typingEl.innerHTML = `<span id="typing-text" class="inline"></span><span id="typing-cursor" class="inline text-indigo-100 ml-1">|</span>`;

    const textEl = document.getElementById("typing-text");
    // const cursorEl = document.getElementById("typing-cursor"); // cursor styled by CSS above

    let index = 0;
    let isDeleting = false;

    const TYPING_SPEED = 100;     // ms per char while typing
    const DELETING_SPEED = 50;    // ms per char while deleting
    const PAUSE_AFTER = 1200;     // pause after finished typing
    const PAUSE_BEFORE = 600;     // pause before typing again after delete

    function tick() {
      if (!isDeleting) {
        index++;
        textEl.textContent = text.slice(0, index);
      } else {
        index--;
        textEl.textContent = text.slice(0, index);
      }

      if (!isDeleting && index === text.length) {
        // finished typing -> pause then start deleting
        isDeleting = true;
        setTimeout(tick, PAUSE_AFTER);
      } else if (isDeleting && index === 0) {
        // fully deleted -> pause then start typing again
        isDeleting = false;
        setTimeout(tick, PAUSE_BEFORE);
      } else {
        setTimeout(tick, isDeleting ? DELETING_SPEED : TYPING_SPEED);
      }
    }

    // start the loop
    tick();
  }
new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
