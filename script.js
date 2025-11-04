// ==================== GSAP ANIMATIONS ====================

// Import GSAP library
const gsap = window.gsap

// Hero text entrance animation
gsap.from(".hero-text", {
  duration: 1.5,
  opacity: 0,
  y: 30,
  ease: "power3.out",
})

// Navbar entrance animation
gsap.from(".navbar", {
  duration: 1,
  opacity: 0,
  y: -20,
  ease: "power2.out",
})

// Staggered hero content animation
gsap.from(".hero-text h1, .hero-text p, .buttons", {
  duration: 1.5,
  opacity: 0,
  y: 40,
  stagger: 0.3,
  ease: "power3.out",
})

// ==================== TYPED.JS ANIMATION ====================

// Import Typed library
const Typed = window.Typed

// Typing effect for role titles
var typed = new Typed("#typing", {
  strings: ["Software Engineer", "AI Specialist", "Data Engineer", "Full-Stack Developer", "Tech Enthusiast"],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 1200,
  loop: true,
  showCursor: true,
  cursorChar: "|",
})

// ==================== SCROLL ANIMATIONS ====================

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(window.ScrollTrigger)

// About section entrance animation with layered effects
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  })
  .from(".about-avatar img", {
    opacity: 0,
    scale: 0.8,
    y: 60,
    duration: 1.3,
    ease: "power3.out",
  })
  .to(
    ".about-text",
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    },
    "-=0.7",
  )

// ==================== CAROUSEL FUNCTIONALITY ====================

let currentSlide = 0
const slides = document.querySelectorAll(".carousel-slide")
const totalSlides = slides.length
const carouselWrapper = document.querySelector(".carousel-wrapper")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const dots = document.querySelectorAll(".carousel-dot")

function updateCarousel() {
  carouselWrapper.style.transform = `translateX(-${currentSlide * 100}%)`

  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide)
  })

  // Update button states
  prevBtn.disabled = currentSlide === 0
  nextBtn.disabled = currentSlide === totalSlides - 1
}

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--
    updateCarousel()
  }
})

nextBtn.addEventListener("click", () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++
    updateCarousel()
  }
})

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    currentSlide = Number.parseInt(e.target.dataset.slide)
    updateCarousel()
  })
})

// Auto-rotate carousel every 5 seconds
setInterval(() => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++
  } else {
    currentSlide = 0
  }
  updateCarousel()
}, 5000)

// ==================== DRAWER FUNCTIONALITY ====================

const drawerOverlay = document.getElementById("drawerOverlay")
const drawerTitle = document.getElementById("drawerTitle")
const drawerContent = document.getElementById("drawerContent")
const drawerClose = document.getElementById("drawerClose")
const viewProjectBtns = document.querySelectorAll(".view-project-btn")

// Project data
const projectData = {
  jobseeker: {
    title: "JobSeeker AI",
    icon: "🤖",
    description:
      "JobSeeker AI is your personal career assistant that revolutionizes the job search process. Using advanced AI algorithms, it helps you discover opportunities, tailor applications, and track your progress.",
    features: [
      "AI-powered job matching based on your skills and preferences",
      "Automated resume tailoring for each application",
      "Cover letter generation with personalized content",
      "Application tracking and follow-up reminders",
      "Interview preparation with AI-generated questions",
    ],
    tech: ["Python", "FastAPI", "OpenAI API", "React", "Supabase"],
    link: "#",
  },
  proposal: {
    title: "Proposal AI",
    icon: "📝",
    description:
      "Proposal AI streamlines the proposal creation process for businesses. It generates customized, professional proposals and automates client follow-ups, saving hours of manual work.",
    features: [
      "AI-generated proposals based on client requirements",
      "Template library with industry-specific formats",
      "Automated follow-up email sequences",
      "Proposal analytics and tracking",
      "Integration with CRM systems",
    ],
    tech: ["Python", "n8n", "OpenAI API", "Tailwind CSS", "PostgreSQL"],
    link: "#",
  },
  weather: {
    title: "Weather App",
    icon: "🌤️",
    description:
      "A beautiful and intuitive weather application that provides real-time weather data with stunning visualizations and accurate forecasts.",
    features: [
      "Real-time weather data from multiple sources",
      "7-day forecast with hourly breakdowns",
      "Interactive weather maps",
      "Location-based automatic updates",
      "Weather alerts and notifications",
    ],
    tech: ["JavaScript", "React", "OpenWeather API", "Chart.js"],
    link: "#",
  },
  portfolio: {
    title: "Portfolio Website",
    icon: "💼",
    description:
      "A modern, responsive portfolio website featuring smooth animations, glassmorphic design, and an engaging user experience.",
    features: [
      "Responsive design for all devices",
      "GSAP animations for smooth transitions",
      "Glassmorphic UI elements",
      "Project showcase with filtering",
      "Contact form with email integration",
    ],
    tech: ["HTML", "CSS", "JavaScript", "GSAP", "Typed.js"],
    link: "#",
  },
  leadgen: {
    title: "Lead Gen AI",
    icon: "🎯",
    description:
      "An intelligent lead generation system that automates prospect discovery, qualification, and outreach using AI-powered workflows.",
    features: [
      "Automated prospect research and scoring",
      "AI-powered lead qualification",
      "Personalized outreach campaigns",
      "CRM integration and data sync",
      "Analytics dashboard with conversion tracking",
    ],
    tech: ["Python", "n8n", "Supabase", "React", "OpenAI API"],
    link: "#",
  },
  dashboard: {
    title: "Data Dashboard",
    icon: "📊",
    description:
      "An interactive analytics dashboard that transforms complex data into actionable insights with beautiful visualizations and real-time updates.",
    features: [
      "Real-time data visualization",
      "Customizable dashboard layouts",
      "Multiple chart types and graphs",
      "Data export and reporting",
      "Role-based access control",
    ],
    tech: ["React", "D3.js", "FastAPI", "PostgreSQL", "Redis"],
    link: "#",
  },
}

// Open drawer with project details
viewProjectBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const projectKey = e.target.dataset.project
    const project = projectData[projectKey]

    if (project) {
      drawerTitle.textContent = project.title

      drawerContent.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">${project.icon}</div>
        <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">${project.description}</p>
        
        <h3>Key Features</h3>
        <ul>
          ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
        
        <h3>Technologies Used</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
          ${project.tech.map((tech) => `<span style="background: rgba(147, 197, 253, 0.2); padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid rgba(147, 197, 253, 0.3);">${tech}</span>`).join("")}
        </div>
        
        <a href="${project.link}" class="btn" style="display: inline-block; margin-top: 1rem;">Visit Project</a>
      `

      drawerOverlay.classList.add("active")
    }
  })
})

// Close drawer
drawerClose.addEventListener("click", () => {
  drawerOverlay.classList.remove("active")
})

drawerOverlay.addEventListener("click", (e) => {
  if (e.target === drawerOverlay) {
    drawerOverlay.classList.remove("active")
  }
})

// Close drawer with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && drawerOverlay.classList.contains("active")) {
    drawerOverlay.classList.remove("active")
  }
})


