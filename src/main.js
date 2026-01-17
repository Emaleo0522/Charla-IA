import './style.css'
import { gsap } from 'gsap'
import simpleParallax from 'simple-parallax-js'

// ========== COUNTDOWN CONFIGURATION ==========
const PRESENTATION_DATE = '2026-01-19 15:45:00' // Fecha y hora de la charla (Argentina timezone)

// ========== COUNTDOWN CONTROLLER ==========
class CountdownController {
  constructor() {
    this.countdownSection = document.getElementById('countdownSection')
    this.heroSection = document.querySelector('.hero')
    this.devSkipButton = document.getElementById('devSkipButton')

    this.days = { el: document.getElementById('days'), current: 0, previous: 0 }
    this.hours = { el: document.getElementById('hours'), current: 0, previous: 0 }
    this.minutes = { el: document.getElementById('minutes'), current: 0, previous: 0 }
    this.seconds = { el: document.getElementById('seconds'), current: 0, previous: 0 }

    this.init()
  }

  init() {
    // Create particles for countdown
    this.createCountdownParticles()

    // Start countdown
    this.update()
    this.intervalId = setInterval(() => this.update(), 1000)

    // Dev skip button
    this.devSkipButton.addEventListener('click', () => this.skipCountdown())
  }

  createCountdownParticles() {
    const particlesContainer = document.getElementById('countdownParticles')
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = `${Math.random() * 100}%`
      particle.style.bottom = '-10px'
      particle.style.animationDelay = `${Math.random() * 6}s`
      particle.style.animationDuration = `${6 + Math.random() * 4}s`
      particlesContainer.appendChild(particle)
    }
  }

  zerofill(value) {
    return (value < 10 && value > -1 ? '0' : '') + value
  }

  updateCard(card, newValue) {
    newValue = newValue < 0 ? 0 : newValue

    if (newValue !== card.current) {
      card.previous = card.current
      card.current = newValue

      const top = card.el.querySelector('.flip-card__top')
      const bottom = card.el.querySelector('.flip-card__bottom')
      const back = card.el.querySelector('.flip-card__back')
      const backBottom = card.el.querySelector('.flip-card__back-bottom')

      top.textContent = this.zerofill(card.current)
      bottom.setAttribute('data-value', this.zerofill(card.current))
      back.setAttribute('data-value', this.zerofill(card.previous))
      backBottom.setAttribute('data-value', this.zerofill(card.previous))

      // Trigger flip animation
      card.el.classList.remove('flip')
      void card.el.offsetWidth // Force reflow
      card.el.classList.add('flip')
    }
  }

  update() {
    const targetDate = moment(PRESENTATION_DATE, 'YYYY-MM-DD HH:mm:ss')
    const now = moment()
    const diff = targetDate.diff(now)

    if (diff <= 0) {
      // Countdown finished - show hero
      this.finishCountdown()
      return
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / 1000 / 60) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    // Hide days if 0
    const daysContainer = document.getElementById('days-container')
    if (days === 0) {
      daysContainer.style.display = 'none'
    } else {
      daysContainer.style.display = 'inline-block'
    }

    this.updateCard(this.days, days)
    this.updateCard(this.hours, hours)
    this.updateCard(this.minutes, minutes)
    this.updateCard(this.seconds, seconds)
  }

  skipCountdown() {
    this.finishCountdown()
  }

  finishCountdown() {
    clearInterval(this.intervalId)

    // Hide countdown with animation
    gsap.to(this.countdownSection, {
      duration: 1,
      opacity: 0,
      onComplete: () => {
        this.countdownSection.style.display = 'none'

        // Show hero section
        this.heroSection.style.display = 'flex'
        gsap.to(this.heroSection, {
          duration: 1,
          opacity: 1
        })

        // Initialize hero features
        initializeHero()
      }
    })
  }
}

// ========== HERO INITIALIZATION ==========
function initializeHero() {
  // Initialize parallax
  const parallaxImage = document.getElementById('parallax-image')
  if (parallaxImage) {
    new simpleParallax(parallaxImage, {
      scale: 1.6,
      delay: 0.6,
      transition: 'cubic-bezier(0,0,0,1)'
    })
  }

  // Create particles
  const particlesContainer = document.getElementById('particles')
  if (particlesContainer) {
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = `${Math.random() * 100}%`
      particle.style.bottom = '-10px'
      particle.style.animationDelay = `${Math.random() * 6}s`
      particle.style.animationDuration = `${6 + Math.random() * 4}s`
      particlesContainer.appendChild(particle)
    }
  }

  // GSAP Animations
  gsap.from('.hero-title .title-line', {
    duration: 1.2,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power4.out',
    delay: 0.3
  })

  gsap.from('.hero-subtitle', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.8
  })

  gsap.from('.play-button', {
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: 'back.out(1.7)',
    delay: 1.2
  })

  gsap.from('.hero-cta', {
    duration: 0.8,
    y: 20,
    opacity: 0,
    ease: 'power2.out',
    delay: 1.6
  })

  // Play button hover effects
  const playButton = document.getElementById('playButton')

  playButton.addEventListener('mouseenter', () => {
    gsap.to('.play-button', {
      duration: 0.3,
      scale: 1.1,
      ease: 'power2.out'
    })
  })

  playButton.addEventListener('mouseleave', () => {
    gsap.to('.play-button', {
      duration: 0.3,
      scale: 1,
      ease: 'power2.out'
    })
  })

  playButton.addEventListener('click', () => {
    gsap.to('.play-button', {
      duration: 0.2,
      scale: 0.9,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to('.play-button', {
          duration: 0.2,
          scale: 1,
          ease: 'power2.out'
        })
      }
    })
  })

  // Initialize presentation controller
  new PresentationController()
}

// ========== PRESENTATION CONTROLLER ==========
class PresentationController {
  constructor() {
    this.currentSlide = 0
    this.slides = document.querySelectorAll('.slide')
    this.totalSlides = this.slides.length
    this.presentationContainer = document.getElementById('presentationContainer')
    this.playButton = document.getElementById('playButton')
    this.closeButton = document.getElementById('closePresentation')
    this.currentSlideElement = document.getElementById('currentSlide')
    this.totalSlidesElement = document.getElementById('totalSlides')

    this.init()
  }

  init() {
    // Update total slides counter
    this.totalSlidesElement.textContent = this.totalSlides

    // Play button click
    this.playButton.addEventListener('click', () => this.startPresentation())

    // Close button click
    this.closeButton.addEventListener('click', () => this.closePresentation())

    // Keyboard navigation
    document.addEventListener('keydown', (e) => this.handleKeyPress(e))

    // ESC to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.presentationContainer.classList.contains('active')) {
        this.closePresentation()
      }
    })
  }

  startPresentation() {
    // Hide hero with animation
    gsap.to('.hero', {
      duration: 0.5,
      opacity: 0,
      onComplete: () => {
        document.querySelector('.hero').style.display = 'none'
      }
    })

    // Show presentation
    this.presentationContainer.style.display = 'flex'
    gsap.to(this.presentationContainer, {
      duration: 0.5,
      opacity: 1
    })

    // Show first slide
    this.goToSlide(0)
  }

  closePresentation() {
    // Hide presentation
    gsap.to(this.presentationContainer, {
      duration: 0.5,
      opacity: 0,
      onComplete: () => {
        this.presentationContainer.style.display = 'none'

        // Show hero again
        document.querySelector('.hero').style.display = 'flex'
        gsap.to('.hero', {
          duration: 0.5,
          opacity: 1
        })
      }
    })

    // Reset to first slide
    this.currentSlide = 0
  }

  handleKeyPress(e) {
    if (!this.presentationContainer.classList.contains('active')) return

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      this.nextSlide()
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      this.previousSlide()
    }
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.goToSlide(this.currentSlide + 1)
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.goToSlide(this.currentSlide - 1)
    }
  }

  goToSlide(index) {
    // Remove active class from all slides
    this.slides.forEach(slide => {
      slide.classList.remove('active', 'prev')
    })

    // Mark previous slides
    for (let i = 0; i < index; i++) {
      this.slides[i].classList.add('prev')
    }

    // Add active class to current slide
    this.slides[index].classList.add('active')

    // Update current slide index and counter
    this.currentSlide = index
    this.currentSlideElement.textContent = index + 1

    // Add presentation active class if not present
    if (!this.presentationContainer.classList.contains('active')) {
      this.presentationContainer.classList.add('active')
    }

    // Animate slide entrance
    gsap.fromTo(this.slides[index],
      {
        opacity: 0,
        x: 100
      },
      {
        duration: 0.6,
        opacity: 1,
        x: 0,
        ease: 'power3.out'
      }
    )
  }
}

// ========== INITIALIZE APP ==========
// Initialize countdown on page load
const countdown = new CountdownController()

console.log('⏰ Countdown iniciado para el 19/01/2026 a las 15:45')
console.log('🔧 Modo desarrollo: Click en "Skip" para saltar el countdown')
console.log('💡 Usa las flechas del teclado para navegar entre diapositivas')
