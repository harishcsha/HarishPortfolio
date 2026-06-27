import { useInView } from '../../hooks/useParallax'
import heroBg2 from '../../assets/images/hero_bg2.png'
import './About.css'

export default function About() {
  const [ref, inView] = useInView()
  const [imgRef, imgInView] = useInView()
  return (
    <section className="section about-section" id="about">
      <div className="section-inner">
        <div className={`fade-up${inView ? ' visible' : ''}`} ref={ref}>
          <div className="section-label">01 — About</div>
          <h2 className="section-heading">Crafting enterprise-grade UIs that actually <span className="accent">scale</span>.</h2>
        </div>
        <div className="about__grid">
          <div className={`about__text fade-up delay-1${inView ? ' visible' : ''}`}>
            <p>Results-driven UI Architect with 9+ years building large-scale web applications across fintech, enterprise SaaS, and B2B domains. I specialize in React.js, TypeScript, and data-intensive dashboard architecture.</p>
            <p>I'm an active practitioner of AI-augmented development — GitHub Copilot, Claude Code, and GPT-4o consistently reduce sprint cycle times and elevate code quality across my teams.</p>
            <p>As a proven tech lead, I've mentored cross-functional teams, owned architectural decisions, and driven zero-defect delivery at scale across 5 companies over 9 years.</p>
            <div className="about__langs">
              <span className="about__langs-label">Languages:</span>
              {['Kannada', 'English', 'Hindi', 'Marathi', 'Telugu'].map(l => (
                <span key={l} className="tag">{l}</span>
              ))}
            </div>
          </div>
          <div className={`about__card fade-up delay-2${imgInView ? ' visible' : ''}`} ref={imgRef}>
            <div className="about__img-wrap">
              <img src={heroBg2} alt="Harish working" className="about__img" loading="lazy" />
              <div className="about__img-badge">
                <span className="about__badge-val">9+</span>
                <span className="about__badge-lbl">Years</span>
              </div>
            </div>
            <div className="about__meta">
              {[
                { icon: '📍', text: 'Bengaluru, Karnataka' },
                { icon: '📧', text: 'harishcjingade5064@gmail.com' },
                { icon: '📱', text: '+91-7975929778' },
                { icon: '🔗', text: 'harish-c-jingade-38b730123' },
              ].map(m => (
                <div key={m.text} className="about__meta-row">
                  <span>{m.icon}</span>
                  <span>{m.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
