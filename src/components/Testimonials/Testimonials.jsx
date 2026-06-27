import { useState, useEffect, useRef, useCallback } from 'react'
import { useInView } from '../../hooks/useParallax'
import './Testimonials.css'

// ── Data ─────────────────────────────────────────────────────────────────────
// Replace avatar URLs with real LinkedIn profile photos — use picsum seeds as placeholders
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Kumar Lekhak BK',
    role: 'Software Engineer — Angular Developer',
    avatar: 'https://picsum.photos/seed/kumar/120/120',
    linkedIn: 'https://linkedin.com',
    quote:
      'Harish C Jingade, a very tech geek and savvy kind of guy. He\'s pro at vivid web cutting-edge technologies. It was my pleasure working with him on my annual project. We had a great time sharing thoughts and tech-talks. I enjoy discussing the recent technologies and trends with him. He is my great tech-partner. He\'s kick-ass developer!',
  },
  {
    id: 2,
    name: 'Shivaganga Shantharaj',
    role: 'Sr. QA Analyst at Knowledge Lens',
    avatar: 'https://picsum.photos/seed/shivaganga/120/120',
    linkedIn: 'https://linkedin.com',
    quote:
      'I am glad to share that Harish is my Tech guide. He has a good knowledge in trending technologies and skilled to decode any tech related confusions.',
  },
  {
    id: 3,
    name: 'Priya Nagol',
    role: 'Elekrbit, India',
    avatar: 'https://picsum.photos/seed/priya/120/120',
    linkedIn: 'https://linkedin.com',
    quote:
      'Harish you really have a good technical skills. Even the soft skills are well known for you. Continue with the same knowledge. All the best!',
  },
  {
    id: 4,
    name: 'Arjun Mehta',
    role: 'Senior Frontend Engineer at Razorpay',
    avatar: 'https://picsum.photos/seed/arjun/120/120',
    linkedIn: 'https://linkedin.com',
    quote:
      'Working with Harish was an absolute pleasure. His deep understanding of micro-frontend architecture and React ecosystems helped us ship features 40% faster. He mentors with patience and leads with clarity.',
  },
  {
    id: 5,
    name: 'Sneha Rao',
    role: 'Product Manager at Karbon Card',
    avatar: 'https://picsum.photos/seed/sneha/120/120',
    linkedIn: 'https://linkedin.com',
    quote:
      'Harish consistently delivered pixel-perfect, accessible UIs even under tight deadlines. His proactive communication and architectural thinking set him apart from any frontend engineer I\'ve worked with.',
  },
  {
    id: 6,
    name: 'Rahul Deshmukh',
    role: 'Engineering Manager at NIUM',
    avatar: 'https://picsum.photos/seed/rahul/120/120',
    linkedIn: 'https://linkedin.com',
    quote:
      'Harish revamped our SPOC Dashboard from the ground up. Beyond the technical excellence, he brought energy and initiative to every sprint. He is the kind of engineer every team needs.',
  },
]

// Duplicate list for seamless infinite scroll
const LOOPED = [...TESTIMONIALS, ...TESTIMONIALS]

// ── Quote SVG ─────────────────────────────────────────────────────────────────
function QuoteIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 40 30" fill="currentColor" aria-hidden="true">
      <path d="M0 30V18.182C0 7.955 6.212 1.818 18.636 0l2.546 3.636C14.697 5.03 11.06 8.485 10.91 13.636H18V30H0zm22 0V18.182C22 7.955 28.212 1.818 40.636 0l2.546 3.636C36.697 5.03 33.06 8.485 32.91 13.636H40V30H22z"/>
    </svg>
  )
}

// LinkedIn icon
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

// ── Single card ───────────────────────────────────────────────────────────────
function TestimonialCard({ t, isActive }) {
  return (
    <div className={`t-card${isActive ? ' t-card--active' : ''}`} aria-label={`Testimonial from ${t.name}`}>
      <QuoteIcon className="t-card__quote-icon" />
      <p className="t-card__text">{t.quote}</p>
      <div className="t-card__author">
        <div className="t-card__avatar-ring">
          <img
            src={t.avatar}
            alt={t.name}
            className="t-card__avatar"
            loading="lazy"
          />
        </div>
        <div className="t-card__author-info">
          <div className="t-card__name">{t.name}</div>
          <div className="t-card__role">{t.role}</div>
        </div>
        <a
          href={t.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="t-card__linkedin"
          aria-label={`View ${t.name} on LinkedIn`}
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  )
}

// ── Carousel ──────────────────────────────────────────────────────────────────
const AUTO_INTERVAL = 3500   // ms between auto-advances
const TRANSITION_MS  = 500   // must match CSS transition duration

export default function Testimonials() {
  const [headRef, headInView] = useInView()

  // Index into LOOPED array; starts at 0 (= first real card)
  const [index, setIndex] = useState(0)
  const [transitioning, setTransitioning] = useState(true)
  const trackRef  = useRef(null)
  const timerRef  = useRef(null)
  const pausedRef = useRef(false)

  // How many cards are visible at once (responsive)
  const [visible, setVisible] = useState(3)
  useEffect(() => {
    const calc = () => {
      if (window.innerWidth < 640)       setVisible(1)
      else if (window.innerWidth < 1024) setVisible(2)
      else                               setVisible(3)
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  // Card width = track-width / visible (set via CSS var)
  // We translate by: index * (100% / visible)

  const advance = useCallback(() => {
    setTransitioning(true)
    setIndex(i => i + 1)
  }, [])

  // After reaching the duplicate set, silently jump back to real set
  useEffect(() => {
    if (index >= TESTIMONIALS.length) {
      // Wait for the CSS transition to finish, then snap back without animation
      const t = setTimeout(() => {
        setTransitioning(false)
        setIndex(i => i - TESTIMONIALS.length)
      }, TRANSITION_MS + 50)
      return () => clearTimeout(t)
    }
  }, [index])

  // Auto-play
  const startTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) advance()
    }, AUTO_INTERVAL)
  }, [advance])

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [startTimer])

  // Manual nav — restart timer after user click
  const goTo = (dir) => {
    setTransitioning(true)
    setIndex(i => {
      const next = i + dir
      // Allow going negative — will snap to end of real set
      if (next < 0) return TESTIMONIALS.length - 1
      return next
    })
    startTimer()
  }

  // Pause on hover
  const onMouseEnter = () => { pausedRef.current = true  }
  const onMouseLeave = () => { pausedRef.current = false }

  // Touch swipe
  const touchX = useRef(null)
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd   = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 40) goTo(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  // Active dot index (mapped back to 0-based real set)
  const dotIndex = index % TESTIMONIALS.length

  const translateX = `translateX(calc(-${index * (100 / visible)}%))`

  return (
    <section className="section t-section" id="testimonials">
      {/* Decorative orb */}
      <div className="t-section__orb" />

      <div className="section-inner">

        {/* Heading */}
        <div className={`fade-up${headInView ? ' visible' : ''}`} ref={headRef}>
          <div className="section-label">06 — Testimonials</div>
          <h2 className="section-heading">
            What colleagues <span className="accent">say</span>.
          </h2>
          <p className="t-section__sub">
            Recommendations from colleagues &amp; friends on LinkedIn.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="t-carousel"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{ '--visible': visible }}
        >
          {/* Track */}
          <div
            ref={trackRef}
            className="t-track"
            style={{
              transform: translateX,
              transition: transitioning
                ? `transform ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
                : 'none',
            }}
          >
            {LOOPED.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="t-slide"
                style={{ width: `calc(100% / var(--visible))` }}
              >
                <TestimonialCard
                  t={t}
                  isActive={i % TESTIMONIALS.length === dotIndex}
                />
              </div>
            ))}
          </div>

          {/* Prev / Next */}
          <button
            className="t-nav t-nav--prev"
            onClick={() => goTo(-1)}
            aria-label="Previous testimonial"
          >‹</button>
          <button
            className="t-nav t-nav--next"
            onClick={() => goTo(1)}
            aria-label="Next testimonial"
          >›</button>
        </div>

        {/* Dots */}
        <div className="t-dots" role="tablist" aria-label="Testimonial navigation">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === dotIndex}
              className={`t-dot${i === dotIndex ? ' t-dot--active' : ''}`}
              onClick={() => { setTransitioning(true); setIndex(i); startTimer() }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
