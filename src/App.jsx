import { ThemeProvider } from './context/ThemeContext'
import { useScrollY } from './hooks/useParallax'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Gallery from './components/Gallery/Gallery'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function PortfolioApp() {
  const scrollY = useScrollY()
  return (
    <div className="app">
      <Nav scrollY={scrollY} />
      <Hero scrollY={scrollY} />
      <About />
      <Experience />
      <Gallery />
      <Skills />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  )
}
