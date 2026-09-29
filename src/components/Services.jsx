import Section from './SectionHead.jsx'
import { services } from '../data.js'

export default function Services() {
  return (
    <Section id="services" index="05" label="Services" title="Hire me for">
      <div className="services">
        {services.map((s, i) => (
          <div className="service reveal" key={s.title}>
            <span className="num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
