import { useInView } from '../../hooks/useParallax'
import './Contact.css'

const WA_NUMBER = '917975929778'   // country code + number, no +
const WA_MESSAGE = encodeURIComponent('Hi Harish.')
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

const MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4848.754478659752!2d77.6894629759607!3d13.029194487291464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11acc947174b%3A0x5cda7fd971e25c43!2sSri%20Satyanarayana%20Nilaya%20-%20Anish!5e1!3m2!1sen!2sin!4v1782550353128!5m2!1sen!2sin`

const CONTACT_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    label: 'Email',
    value: 'harishcjingade5064@gmail.com',
    href: 'mailto:harishcjingade5064@gmail.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.26.2 2.47.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91-7975929778',
    href: 'tel:+917975929778',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'harish-c-jingade-38b730123',
    href: 'https://www.linkedin.com/in/harish-c-jingade-38b730123',
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        width="22"
        height="22"
        aria-hidden="true"
      >
        <path d="M12 .297a12 12 0 0 0-3.794 23.39c.6.111.82-.258.82-.577v-2.257c-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.304.762-1.604-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.469-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 0 1 6.006 0c2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.609-2.807 5.624-5.48 5.921.43.371.815 1.102.815 2.222v3.293c0 .322.216.694.825.576A12.003 12.003 0 0 0 12 .297z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'harishcsha',
    href: 'https://github.com/harishcsha',
  },
]

// WhatsApp SVG icon
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}

export default function Contact() {
  const [ref, inView] = useInView()
  const [rightRef, rightInView] = useInView()

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-section__orb" />
      <div className="section-inner">

        {/* Heading */}
        <div className={`contact__heading-wrap fade-up${inView ? ' visible' : ''}`} ref={ref}>
          <div className="section-label">07 — Contact</div>
          <h2 className="section-heading">
            Let's build something<br />
            <span className="accent">remarkable</span> together.
          </h2>
          <p className="contact__sub">
            Open to Senior / Principal / Lead Frontend Engineer and UI Architect roles.
            Based in Bengaluru — open to hybrid and remote opportunities.
          </p>
        </div>

        {/* Two-column body */}
        <div className="contact__body">

          {/* LEFT — Map */}
          <div className={`contact__map-wrap fade-up${inView ? ' visible' : ''}`}>
            <div className="contact__map-label">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              Bengaluru, Karnataka, India
            </div>
            <iframe
              src={MAPS_EMBED}
              className="contact__map"
              title="Harish's location — Sri Satyanarayana Nilaya, Bengaluru"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          {/* RIGHT — Links + WhatsApp CTA */}
          <div
            className={`contact__right fade-up${rightInView ? ' visible' : ''}`}
            ref={rightRef}
            style={{ transitionDelay: '0.12s' }}
          >
            <div className="contact__links">
              {CONTACT_ITEMS.map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  className="contact__link"
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  <span className="contact__link-icon">{c.icon}</span>
                  <div>
                    <div className="contact__link-label">{c.label}</div>
                    <div className="contact__link-val">{c.value}</div>
                  </div>
                  <svg className="contact__link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WA_URL}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Contact me over WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
