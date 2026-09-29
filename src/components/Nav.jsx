import { useTheme } from '../hooks.js'

const links = [
  ['#about', 'About'],
  ['#work', 'Work'],
  ['#experience', 'Experience'],
  ['#skills', 'Skills'],
]

export default function Nav() {
  const toggleTheme = useTheme()
  return (
    <nav className="nav">
      <div className="wrap">
        <a href="#top" className="logo">Rabecca<span>.</span></a>
        <div className="nav-links">
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          <a href="#contact" className="keep">Contact</a>
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle dark mode">◐</button>
        </div>
      </div>
    </nav>
  )
}
