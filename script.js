
console.log('sct');

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Fade in sections on scroll
  gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
    });
  });

  // Animate profile image and text on load
  gsap.from("#profile .section__pic-container", {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from("#profile .section__text", {
    opacity: 0,
    x: 100,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
  });

  // Button hover bounce effect
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.05, duration: 0.2 });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, duration: 0.2 });
    });
  });
});
