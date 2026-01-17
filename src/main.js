import './style.css'
import { gsap } from 'gsap'
import simpleParallax from 'simple-parallax-js'

// ========== PARALLAX BACKGROUND ==========
const parallaxImage = document.getElementById('parallax-image')
if (parallaxImage) {
  new simpleParallax(parallaxImage, {
    scale: 1.6,
    delay: 0.6,
    transition: 'cubic-bezier(0,0,0,1)'
  })
}

// ========== PARTICLES ANIMATION ==========
function createParticles() {
  const particlesContainer = document.getElementById('particles')
  const particleCount = 50

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div')
    particle.className = 'particle'

    // Random position
    particle.style.left = `${Math.random() * 100}%`
    particle.style.bottom = '-10px'

    // Random animation delay and duration
    particle.style.animationDelay = `${Math.random() * 6}s`
    particle.style.animationDuration = `${6 + Math.random() * 4}s`

    particlesContainer.appendChild(particle)
  }
}

createParticles()

// ========== GSAP ANIMATIONS ==========
// Animate hero elements on load
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

// Initialize presentation controller
const presentation = new PresentationController()

// ========== PLAY BUTTON HOVER EFFECT ==========
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

console.log('🚀 Presentación IA cargada correctamente')
console.log('💡 Usa las flechas del teclado para navegar entre diapositivas')
