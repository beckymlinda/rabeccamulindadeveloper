import { profile } from '../data.js'
import { ArrowIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap reveal">
        <span className="kicker"><b>06</b>Contact</span>
        <h2>Have a project in mind?</h2>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email} <ArrowIcon />
        </a>
        <div className="contact-links">
          <a href={profile.github} target="_blank" rel="noopener">GitHub</a>
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  )
}
