import { profile } from '../data.js'
import { ArrowIcon, GithubIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <span className="eyebrow">Available for freelance projects</span>
          <h1>Hi, I'm Rabecca.<br />I build <em>web apps</em> that people rely on.</h1>
          <p className="lead">
            Senior Software Engineer based in {profile.location}. I design and ship full-stack systems
            with React, Laravel and MySQL, from SaaS products and business tools to e-learning platforms for colleges.
          </p>
          <div className="cta">
            <a className="btn primary" href="#work">View my work <ArrowIcon /></a>
            <a className="btn" href="#contact">Hire me</a>
            <a className="btn" href={profile.github} target="_blank" rel="noopener"><GithubIcon /> GitHub</a>
          </div>
          <div className="quick-facts">
            <div><strong>20+</strong>projects shipped</div>
            <div><strong>4</strong>organisations served</div>
            <div><strong>Full-stack</strong>front to database</div>
          </div>
        </div>
        <div className="portrait">
          <img src="/rabecca.jpg" alt="Rabecca Mulinda, software engineer in Lilongwe, Malawi" width="962" height="1280" fetchPriority="high" />
          <div className="badge"><b>Senior Engineer</b>LettsCommerce</div>
        </div>
      </div>
    </header>
  )
}
