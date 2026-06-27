import { useState } from 'react'
import { useInView } from '../../hooks/useParallax'
import { EXPERIENCES } from '../../data/portfolio'
import './Experience.css'

function ExpCard({ exp, index, defaultOpen }) {
  const [ref, inView] = useInView()
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div
      ref={ref}
      className={`exp-card fade-up${inView ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <button className="exp-card__header" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <div className="exp-card__marker" style={{ background: exp.color }} />
        <div className="exp-card__info">
          <div className="exp-card__company">{exp.company}</div>
          <div className="exp-card__role">{exp.role}</div>
          <div className="exp-card__meta">
            <span className="exp-card__period">{exp.period}</span>
            <span className="exp-card__dot">·</span>
            <span>{exp.location}</span>
          </div>
        </div>
        <div className={`exp-card__chevron${open ? ' open' : ''}`}>▾</div>
      </button>
      <div className={`exp-card__body${open ? ' open' : ''}`}>
        {exp.projects.map((p, i) => (
          <div key={i} className="exp-card__project">
            <div className="exp-card__proj-name">⬦ {p.name}</div>
            <p className="exp-card__proj-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView()
  return (
    <section className="section exp-section" id="experience">
      <div className="exp-section__glow" />
      <div className="section-inner">
        <div className={`fade-up${inView ? ' visible' : ''}`} ref={ref}>
          <div className="section-label">02 — Experience</div>
          <h2 className="section-heading">5 companies. 9+ years.<br />Always <span className="accent">frontend</span>.</h2>
        </div>
        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <ExpCard key={exp.company} exp={exp} index={i} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
