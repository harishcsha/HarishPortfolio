import { useRef, useState, useEffect } from 'react'
import { useMouseParallax } from '../../hooks/useParallax'
import { STATS } from '../../data/portfolio'
import profileImg from '../../assets/images/profile.png'
import heroBg1 from '../../assets/images/hero_bg1.png'
import heroBg2 from '../../assets/images/hero_bg2.png'
import backgroundVideo from './introductionVideo.mp4'
import resume from '../../assets/files/Harish_CurriculumViate.pdf'
import './Hero.css'

export default function Hero({ scrollY }) {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(true)
  const mouse = useMouseParallax()

  const videoStopped = scrollY > 500

  // Smooth parallax values
  const vWrap   = scrollY * 0.45
  const bgShift = scrollY * 0.2
  const contentY = scrollY * 0.12
  const contentO = Math.max(0, 1 - scrollY / 700)

  // Mouse parallax depth layers
  const mx1 = mouse.x * 12
  const my1 = mouse.y * 10
  const mx2 = mouse.x * 22
  const my2 = mouse.y * 18

  // Play/pause on scroll
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (videoStopped) { v.pause(); setPlaying(false) }
    else { v.play().catch(() => {}); setPlaying(true) }
  }, [videoStopped])

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true) } else { v.pause(); setPlaying(false) }
  }

  return (
    <section className="hero" id="home">
      {/* Layer 1: Video (fastest parallax) */}
      <div
        className="hero__video-wrap"
        style={{ transform: `translateY(${vWrap}px)` }}
      >
        <video
          ref={videoRef}
          className="hero__video"
          autoPlay muted loop playsInline
          poster={heroBg2}
        >
          {/* ⬇️ Replace with your actual video file path */}
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="hero__video-overlay" />
      </div>

      {/* Layer 2: Background image (mid parallax + mouse) */}
      <div
        className="hero__bg-layer"
        style={{
          backgroundImage: `url(${heroBg1})`,
          transform: `translateY(${bgShift}px) translate(${mx1}px, ${my1}px)`,
        }}
      />

      {/* Layer 3: Floating orbs (deep mouse parallax) */}
      <div className="hero__orb hero__orb--1"
        style={{ transform: `translate(${mx2}px, ${my2}px)` }} />
      <div className="hero__orb hero__orb--2"
        style={{ transform: `translate(${-mx2 * 0.7}px, ${my2 * 0.8}px)` }} />

      {/* Video controls */}
      <div className="hero__video-controls">
        <button onClick={togglePlay} className="hero__vc-btn" aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? '⏸' : '▶'}
        </button>
        <button onClick={toggleMute} className="hero__vc-btn" aria-label={muted ? 'Unmute' : 'Mute'}>
          {muted ? '🔇' : '🔊'}
        </button>
      </div>

      {/* Content */}
      <div
        className="hero__content"
        style={{ opacity: contentO, transform: `translateY(${contentY}px)` }}
      >
        <div className="hero__eyebrow">
          <span className="hero__available-dot" />
          Available for Senior / Lead / Architect Roles
        </div>

        <div className="hero__profile-wrap">
          <div className="hero__profile-ring">
            <img src={profileImg} alt="Harish C Jingade" className="hero__profile-img" loading="eager" />
          </div>
        </div>

        <h1 className="hero__name">
          <span className="hero__name-first">Harish C</span>
          <span className="hero__name-last">Jingade</span>
        </h1>

        <p className="hero__role">
          UI Architect <span className="hero__role-sep">·</span> Lead Frontend Engineer
        </p>

        <p className="hero__tagline">
          9+ years turning complex data into intuitive interfaces.
          <br />
          React · TypeScript · Vue · Micro-frontends · AI-augmented dev.
        </p>

        <div className="hero__ctas">
          <a href={resume} className="btn btn-primary" download>Download My CV</a>
          <a href="#experience" className="btn btn-ghost">View My Work</a>
          <a href="#contact" className="btn btn-ghost">Get In Touch</a>
        </div>

        <div className="hero__stats">
          {STATS.map(s => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-val">{s.value}</span>
              <span className="hero__stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
