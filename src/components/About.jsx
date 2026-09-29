import Section from './SectionHead.jsx'

const facts = [
  ['Based in', 'Lilongwe, Malawi'],
  ['Currently', 'Senior Engineer, LettsCommerce'],
  ['Also', 'Freelance & consulting'],
]

export default function About() {
  return (
    <Section id="about" index="01" label="About">
      <p className="statement reveal">
        I turn messy, real-world processes into <em>clean, dependable software</em>, from SaaS products
        to national verification systems.
      </p>
      <dl className="facts reveal">
        {facts.map(([k, v]) => (
          <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
        ))}
      </dl>
    </Section>
  )
}
