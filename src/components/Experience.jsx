import Section from './SectionHead.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <Section id="experience" index="03" label="Experience" title="Where I've worked">
      <ol className="rows">
        {experience.map((job) => (
          <li className="row reveal" key={job.org}>
            <span className="row-org">{job.org}</span>
            <span className="row-role">{job.role}</span>
            <span className="row-note">{job.note}</span>
            <span className={`status ${job.status === 'Past' ? 'past' : ''}`}>{job.status}</span>
          </li>
        ))}
      </ol>
    </Section>
  )
}
