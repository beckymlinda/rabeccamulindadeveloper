// Editorial section layout: a numbered label on the left, content on the right.
export default function Section({ id, index, label, title, alt, children }) {
  return (
    <section id={id} className={alt ? 'alt' : undefined}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="kicker"><b>{index}</b>{label}</span>
          {title && <h2>{title}</h2>}
        </div>
        {children}
      </div>
    </section>
  )
}
