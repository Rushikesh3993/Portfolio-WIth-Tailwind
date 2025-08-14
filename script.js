// Navbar toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });
});

// Skill bars animation
document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-bar");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const value = bar.getAttribute("data-skill");
        bar.style.width = value;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => observer.observe(bar));
});

// Infinite typing effect (multi-text)
const typingEl = document.getElementById("typing");
if (typingEl) {
  const texts = ["A Passionate Web Developer", "A Creative Coder", "A Learner & Problem Solver"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const TYPING_SPEED = 100, DELETING_SPEED = 50, PAUSE_AFTER = 1200, PAUSE_BEFORE = 600;

  typingEl.innerHTML = `<span id="typing-text" class="inline"></span><span id="typing-cursor" class="inline text-indigo-100 ml-1">|</span>`;
  const textEl = document.getElementById("typing-text");

  function tick() {
    const currentText = texts[textIndex];
    if (!isDeleting) {
      charIndex++;
      textEl.textContent = currentText.slice(0, charIndex);
    } else {
      charIndex--;
      textEl.textContent = currentText.slice(0, charIndex);
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(tick, PAUSE_AFTER);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(tick, PAUSE_BEFORE);
    } else {
      setTimeout(tick, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    }
  }

  tick();
}

// Certification Swiper
new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  speed: 800,
  autoplay: { delay: 2500, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});

// Contact form submission feedback
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  formMessage.classList.remove("hidden");
  setTimeout(() => {
    formMessage.classList.add("hidden");
    contactForm.reset();
  }, 2000);
  contactForm.submit();
});




const backToTopBtn = document.getElementById("backToTop");

// Show/hide button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("hidden");
    backToTopBtn.classList.add("show");
    backToTopBtn.classList.remove("hide");
  } else {
    backToTopBtn.classList.add("hide");
    setTimeout(() => {
      backToTopBtn.classList.add("hidden");
    }, 400); // match CSS transition duration
  }
});

// Smooth scroll to top
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
