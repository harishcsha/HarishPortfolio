import { useTheme } from '../../context/ThemeContext'
import './ThemeToggle.css'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb">
          {theme === 'dark' ? '🌙' : '☀️'}
        </span>
      </span>
    </button>
  )
}
