import { useInView } from '../../hooks/useParallax'
import './Education.css'

const EDU = [
  { year: '2012–2016', inst: 'STJ Institute of Technology', degree: 'B.E — Computer Science & Engineering', grade: '62.32%' },
  { year: '2011–2012', inst: 'Sri Vyshnavi Chetana PU College', degree: 'Pre-University — PCMC Stream', grade: '71.5%' },
  { year: '2009–2010', inst: 'Lourdes Boys High School', degree: 'Class 10', grade: '64.48%' },
]

const AWARDS = [
  { icon: '🏆', text: "Participated in Zeta's 1st Ever 24-hour Hackathon" },
  { icon: '🎓', text: 'Conducted Website Development workshop for 100+ engineering students at STJIT College, Ranibennur' },
  { icon: '🥇', text: 'Participated in Website Development competition by Forum of CSE, UBDTCE Davanagere' },
]

function EduItem({ e, index }) {
  // Each row has its own observer — no parent clipping the animation
  const [ref, inView] = useInView(0.1)
  return (
    <div
      ref={ref}
      className={`edu-item fade-up${inView ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="edu-item__year">{e.year}</div>
      <div className="edu-item__content">
        <div className="edu-item__inst">{e.inst}</div>
        <div className="edu-item__degree">{e.degree}</div>
      </div>
      <div className="edu-item__grade">{e.grade}</div>
    </div>
  )
}

export default function Education() {
  const [ref, inView] = useInView()
  const [awardsRef, awardsInView] = useInView()

  return (
    <section className="section edu-section" id="education">
      <div className="section-inner">

        {/* Heading */}
        <div className={`fade-up${inView ? ' visible' : ''}`} ref={ref}>
          <div className="section-label">05 — Education</div>
          <h2 className="section-heading">Academic <span className="accent">foundation</span>.</h2>
        </div>

        {/* Education rows — plain div, NO fade-up on the wrapper */}
        <div className="edu__list">
          {EDU.map((e, i) => <EduItem key={i} e={e} index={i} />)}
        </div>

        {/* Awards */}
        <div
          ref={awardsRef}
          className={`awards fade-up${awardsInView ? ' visible' : ''}`}
        >
          <div className="awards__title">Awards &amp; Highlights</div>
          <div className="awards__list">
            {AWARDS.map((a, i) => (
              <div key={i} className="award-item">
                <span className="award-item__icon">{a.icon}</span>
                <span>{a.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
