document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll(".section-content");

  // Switching content sections
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.dataset.section;

      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      sections.forEach(s => s.classList.remove("active"));
      document.getElementById(target).classList.add("active");
    });
  });

  // Typing Effect on Home
  new Typed("#typing", {
    strings: [
      "Full-Stack Engineer",
      "AI Engineer",
      "Data Analyst",
      "Tech Enthusiast",
      "Automation Specialist"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1200,
    loop: true,
  });

// ===== Drawer Logic =====
const learnButtons = document.querySelectorAll('.learn-more-btn');
const drawers = document.querySelectorAll('.project-drawer');
const closeButtons = document.querySelectorAll('.close-drawer');

learnButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const project = btn.getAttribute('data-project');
    const drawer = document.querySelector(`#drawer-${project}`);
    if (drawer) drawer.classList.add('open');
  });
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.project-drawer').classList.remove('open');
  });
});

// Optional: close if clicking outside drawer content
drawers.forEach(drawer => {
  drawer.addEventListener('click', e => {
    if (e.target === drawer) drawer.classList.remove('open');
  });
});





});

// ===================== Skills Animation =====================




// Re-animate when user clicks the "Skills" nav link
document.querySelector('a[href="#skills"]').addEventListener("click", () => {
  animateSkills();
});

// Optional: also trigger once on load (for testing)
window.addEventListener("load", () => {
  if (window.location.hash === "#skills") animateSkills();
});


// Animation function
function animateSkills() {
  // Reset initial states
  gsap.set(".skill-card", { opacity: 0, y: 40 });
  gsap.set(".skill-tags span", { opacity: 0, y: 20 });



  
  // Animate cards
  gsap.to(".skill-card", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
  });

  // Animate tags inside each card
  gsap.to(".skill-tags span", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: 0.8, // waits until cards appear
    ease: "power2.out",
    stagger: {
      each: 0.05,
      from: "random",
    },
  });
}



