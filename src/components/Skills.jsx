import Section from './SectionHead.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <Section id="skills" index="04" label="Skills" title="Toolkit" alt>
      <div className="skills">
        {skills.map(({ group, items }) => (
          <div className="skill-row reveal" key={group}>
            <span className="skill-group">{group}</span>
            <div className="chips">
              {items.map((s, i) => <span className={`chip ${i === 0 ? 'hot' : ''}`} key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
