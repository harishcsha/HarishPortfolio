import { useState, useEffect, useRef, useCallback } from 'react'
import { useInView } from '../../hooks/useParallax'
import './Testimonials.css'
import Husain from '../../assets/images/testimonials/Husain.jpg'
import Lekhak from '../../assets/images/testimonials/KumarLekhak.jpeg'
import PriyaNagol from '../../assets/images/testimonials/PriyaNagol.jpeg'
import Anup from '../../assets/images/testimonials/Anup.jpg'
import Shivaganga from '../../assets/images/testimonials/Shivaganga.jpg'
import ShivamMishra from '../../assets/images/testimonials/ShivamMishra.jpeg'
import SourabhShukla from '../../assets/images/testimonials/Sourabh_Shukla.jpeg'
import AlokRanjan from '../../assets/images/testimonials/Alok_R.jpeg'
import NAGARAJA from '../../assets/images/testimonials/NagarajaBV.png'

// ── Data ─────────────────────────────────────────────────────────────────────
// Replace avatar URLs with real LinkedIn profile photos — use picsum seeds as placeholders
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Kumar Lekhak BK',
    role: 'Senior Executive Engineer | Angular, React, JavaScript, TypeScript | Leveling up with Scaler and Crio.Do',
    avatar: Lekhak,
    linkedIn: 'https://www.linkedin.com/in/kumar-lekhak/',
    quote: 'Harish C Jingade, a very tech geek and savvy kind of guy. He\'s pro at vivid web cutting-edge technologies. It was my pleasure working with him on my annual project. We had a great time sharing thoughts and tech-talks. I enjoy discussing the recent technologies and trends with him. He is my great tech-partner. He\'s kick-ass developer!',
  },
  {
    id: 2,
    name: 'Shivaganga Shantharaj',
    role: 'Senior Engineer at L&T Technology services | Ex Sr. QA Analyst at Knowledge lens',
    avatar: Shivaganga,
    linkedIn: 'https://www.linkedin.com/in/shivaganga-b-s-3a9b30115/',
    quote: 'I am glad to share that Harish is my Tech guide. He has a good knowledge in trending technologies and skilled to decode any tech related confusions.',
  },
  {
    id: 3,
    name: 'Priya Nagol',
    role: 'Elekrbit, India',
    avatar: PriyaNagol,
    linkedIn: 'https://www.linkedin.com/in/priya-nagol-19990a106/',
    quote: 'Harish you really have a good technical skills.Even the softskills are well know for you.continue with the same knowledge. All the best',
  },
  {
    id: 4,
    name: 'Husain M',
    role: 'Senior Software Engineer | 8+ Years Experience in B2B SaaS FinTech | JavaScript, React, TypeScript | High-Performance & Scalable Systems | AI-Augmented Engineering | IIIT-B ',
    avatar: Husain,
    linkedIn: 'https://www.linkedin.com/in/experienced-front-end-engineer/',
    quote: 'Harish is a honest and hardworking person who has the efficiency to being a team player in the organization. I worked with him and I really appreciated on top of his strong expertise and dedication to the job, it is his very positive attitude always. I wish him all the best..!!',
  },
  {
    id: 5,
    name: 'Shivam Mishra',
    role: 'Product Manager | QA Lead @Centific | AI | Product Management | Product Quality Assurance | Automation | Ex-Directi/Zeta | Ex-Apna',
    avatar: ShivamMishra,
    linkedIn: 'https://www.linkedin.com/in/shivam-mishra-2a689b34/',
    quote: 'Harish and i worked together @ Zeta. He is very enthusiastic and always eager to learn . He is very passionate about frontend development and open to feedbacks. He has a constructive attitude towards work and will complete the given work perfectly. I wish Him all the best and recommend him highly.Harish',
  },
  {
    id: 6,
    name: 'Sourabh Shukla',
    role: 'Products| Cross Border Payments| Product Development | FinTech Innovator | Strategic Visionary | Banking at Karbon Card',
    avatar: SourabhShukla,
    linkedIn: 'https://www.linkedin.com/in/sourabhshukla58032177/',
    quote: 'I had the pleasure of working with Harish at Karbon, where he showcased exceptional front-end development and design skills. Their expertise in HTML, CSS, JavaScript, and various frameworks, combined with a keen eye for detail, consistently resulted in visually stunning and highly functional web applications. Harish is a dedicated, innovative, and collaborative team player, always bringing valuable insights and a positive attitude to our projects.',
  },
  {
    id: 7,
    name: 'Alok R',
    role: 'Strategy | Alliances | Partnerships | Fintech | BFSI | B2B Payments | Cards | Cross Border Payments | Commercial Payments | Commercial Lending | Ex-ICICI | Ex-Axis | Ex-RBL',
    avatar: AlokRanjan,
    linkedIn: 'https://www.linkedin.com/in/alok-ranjan1990/',
    quote: 'I had the pleasure of working with Harish at Karbon in 2022-23. I am thrilled to write this recommendation for Harish as his contributions were exceptional. Harish is a highly skilled front-end developer with an impressive ability to turn creative concepts into stunning, user-friendly websites and applications. He consistently delivered high-quality work, always meeting or exceeding our project expectations. During our time together, I was consistently impressed by Harish\'s technical expertise. His proficiency in HTML, CSS, JavaScript, React JS, Front-End Architect Solutions, and front-end frameworks was evident in the seamless and visually appealing web applications he produced. He has a keen eye for detail, ensuring that every element on the page not only looks great but functions flawlessly. Beyond his technical skills, Harish is a fantastic team player. He communicates effectively, collaborates with cross-functional teams, and always seeks to understand the broader project goals. He takes feedback constructively and is proactive in addressing challenges, making him a true asset to any development team. Harish consistently met project deadlines and demonstrated a strong commitment to the success of our projects. He possesses a can-do attitude and is always eager to learn and adapt to new technologies and tools, which is valuable in the ever-evolving world of web development. In summary, I wholeheartedly recommend Harish as a Front-End Engineer. His technical expertise, commitment, and ability to work effectively within a team make him an outstanding asset. I have no doubt that he will continue to excel in future endeavours, and I look forward to the opportunity to work with him again. If you\'re seeking a top-notch Front-End Engineer for your team or project, I highly recommend Harish.',
  },
  {
    id: 8,
    name: 'NAGARAJA BV',
    role: 'Founder & CEO @ Radiant Infinity | Building Intelligent & Secure Digital Ecosystems | Software • Cloud • Cybersecurity • AI Solutions | @radianttechnos.com · @vaultq.in',
    avatar: NAGARAJA,
    linkedIn: 'https://www.linkedin.com/in/nagaraja-bv/',
    quote: 'I had a great time working with Harish Jingade. His coding knowledge and approach to Software product development were really solid. He’s dedicated, reliable, and always delivered quality work. Would definitely recommend him for any tech team.',
  },
  {
    id: 9,
    name: 'Anup Tuppad',
    role: 'Sr. Network Architect |  Data Center Expert | Azure Networking | Cisco , Aruba,Juniper | Firewall & Security Specialist | Global Enterprise Infrastructure | IET Member',
    avatar: Anup,
    linkedIn: 'https://www.linkedin.com/in/anup-tuppad-17426929/',
    quote: 'Great team player with extraordinary skill set..😊',
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

// ── Full-quote Modal ──────────────────────────────────────────────────────────
function TestimonialModal({ t, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="t-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Full testimonial from ${t.name}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="t-modal">
        {/* Close button */}
        <button className="t-modal__close" onClick={onClose} aria-label="Close">✕</button>

        {/* Header: avatar + name + role + LinkedIn */}
        <div className="t-modal__header">
          <div className="t-modal__avatar-ring">
            <img src={t.avatar} alt={t.name} className="t-modal__avatar" />
          </div>
          <div className="t-modal__meta">
            <div className="t-modal__name">{t.name}</div>
            <div className="t-modal__role">{t.role}</div>
            <a
              href={t.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="t-modal__linkedin-btn"
              aria-label={`View ${t.name} on LinkedIn`}
            >
              <LinkedInIcon />
              View on LinkedIn
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="t-modal__divider" />

        {/* Full quote */}
        <div className="t-modal__body">
          <QuoteIcon className="t-modal__quote-icon" />
          <p className="t-modal__text">{t.quote}</p>
        </div>
      </div>
    </div>
  )
}

// ── Single card ───────────────────────────────────────────────────────────────
function TestimonialCard({ t, isActive, onOpen }) {
  return (
    <div
      className={`t-card${isActive ? ' t-card--active' : ''}`}
      aria-label={`Testimonial from ${t.name} — click to read full`}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen() }}
    >
      <QuoteIcon className="t-card__quote-icon" />
      <p className="t-card__text">{t.quote}</p>

      {/* "Read more" hint */}
      <div className="t-card__read-more">
        <span>Read full</span>
        <span className="t-card__read-more-arrow">→</span>
      </div>

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
        <div className="t-card__linkedin-badge" aria-hidden="true">
          <LinkedInIcon />
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [headRef, headInView] = useInView();

  // Index into LOOPED array; starts at 0 (= first real card)
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const trackRef  = useRef(null);
  const timerRef  = useRef(null);
  const pausedRef = useRef(false);
  const AUTO_INTERVAL = 3500;
  const TRANSITION_MS = 500;

  // ── Modal state ──────────────────────────────────────
  const [modalData, setModalData] = useState(null) // null = closed, testimonial obj = open

  const openModal  = useCallback((t) => {
    pausedRef.current = true   // pause auto-scroll while modal is open
    setModalData(t)
  }, [])
  const closeModal = useCallback(() => {
    pausedRef.current = false
    setModalData(null)
  }, [])

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

  const advance = useCallback(() => {
    setTransitioning(true)
    setIndex(i => i + 1)
  }, [])

  // After reaching the duplicate set, silently jump back to real set
  useEffect(() => {
    if (index >= TESTIMONIALS.length) {
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
      if (next < 0) return TESTIMONIALS.length - 1
      return next
    })
    startTimer()
  }

  // Pause on hover
  const onMouseEnter = () => { pausedRef.current = true  }
  const onMouseLeave = () => { if (!modalData) pausedRef.current = false }

  // Touch swipe
  const touchX = useRef(null)
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd   = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 40) goTo(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  const dotIndex = index % TESTIMONIALS.length
  const translateX = `translateX(calc(-${index * (100 / visible)}%))`

  return (
    <section className="section t-section" id="testimonials">
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
                  onOpen={() => openModal(t)}
                />
              </div>
            ))}
          </div>

          <button className="t-nav t-nav--prev" onClick={() => goTo(-1)} aria-label="Previous testimonial">‹</button>
          <button className="t-nav t-nav--next" onClick={() => goTo(1)}  aria-label="Next testimonial">›</button>
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

      {/* Full-quote modal — rendered outside section-inner so it overlays everything */}
      {modalData && <TestimonialModal t={modalData} onClose={closeModal} />}
    </section>
  )
}
