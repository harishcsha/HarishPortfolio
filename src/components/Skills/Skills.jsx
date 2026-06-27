import { useInView } from '../../hooks/useParallax'
import { SKILL_GROUPS } from '../../data/portfolio'
import './Skills.css'

function SkillCard({ group, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`skill-card fade-up${inView ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="skill-card__header">
        <span className="skill-card__icon">{group.icon}</span>
        <span className="skill-card__label">{group.label}</span>
      </div>
      <div className="skill-card__pills">
        {group.skills.map(s => (
          <span key={s} className="skill-pill">{s}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()
  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner">
        <div className={`fade-up${inView ? ' visible' : ''}`} ref={ref}>
          <div className="section-label">04 — Skills</div>
          <h2 className="section-heading">The toolkit behind the <span className="accent">work</span>.</h2>
        </div>
        <div className="skills__grid">
          {SKILL_GROUPS.map((g, i) => <SkillCard key={g.label} group={g} index={i} />)}
        </div>
      </div>
    </section>
  )
}
