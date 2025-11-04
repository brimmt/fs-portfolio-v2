// GSAP Intro Animation
gsap.from(".hero-text", {
  duration: 1.5,
  opacity: 0,
  y: 30,
  ease: "power3.out"
});

gsap.from(".navbar", {
  duration: 1,
  opacity: 0,
  y: -20,
  ease: "power2.out"
});

gsap.from(".hero-text h1, .hero-text p, .buttons", {
  duration: 1.5,
  opacity: 0,
  y: 40,
  stagger: 0.3,
  ease: "power3.out"
});

// Typed.js typing animation
var typed = new Typed("#typing", {
  strings: [
    "Software Engineer",
    "AI Specialist",
    "Data Engineer",
    "Full-Stack Developer",
    "Tech Enthusiast"
  ],
  typeSpeed: 70,       // typing speed
  backSpeed: 50,       // deleting speed
  backDelay: 1200,     // delay before deleting
  loop: true,          // keep looping
  showCursor: true,    // show blinking cursor
  cursorChar: "|",     // cursor style
});



// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// 🔹 About Section Entrance Animation (smooth + layered)
gsap.timeline({
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
})
.from(".about-avatar img", {
  opacity: 0,
  scale: 0.8,
  y: 60,
  duration: 1.3,
  ease: "power3.out"
})
.to(".about-text", {           // 👈 changed from .from() → .to()
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: "power3.out"
}, "-=0.7");

