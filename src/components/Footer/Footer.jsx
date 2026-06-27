import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">HCJ<span>.</span></div>
        <p className="footer__copy">© 2026 Harish C Jingade · Built with React & ❤</p>
        <div className="footer__links">
          <a href="#home" className="footer__link">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
