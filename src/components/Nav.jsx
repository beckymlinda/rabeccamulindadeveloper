import { useEffect, useState } from 'react'
import { useTheme } from '../hooks.js'

const links = [
  ['#about', 'About'],
  ['#work', 'Work'],
  ['#experience', 'Experience'],
  ['#skills', 'Skills'],
  ['#contact', 'Contact'],
]

export default function Nav() {
  const toggleTheme = useTheme()
  const [open, setOpen] = useState(false)

  // Close the mobile menu with Escape, and lock page scroll while it is open.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <nav className={`nav ${open ? 'open' : ''}`}>
      <div className="wrap">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>Rabecca<span>.</span></a>
        <div className="nav-links" id="nav-links">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle dark mode">◐</button>
          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="nav-links"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
