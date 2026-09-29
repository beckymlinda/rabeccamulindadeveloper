import { featured } from '../data.js'
import { ArrowIcon, LockIcon, PulseIcon } from './Icons.jsx'

const checks = [
  { host: 'shop.example.mw', type: 'HTTP', value: '182 ms' },
  { host: 'api.example.mw/v1/health', type: 'API', value: '94 ms' },
  { host: 'mail.example.mw:587', type: 'TCP', value: 'open' },
  { host: '*.example.mw', type: 'SSL', value: '64 days' },
]

// Response-time sparkline points (ms), purely decorative.
const series = [92, 88, 101, 95, 87, 90, 84, 97, 93, 89, 86, 94, 91, 88, 85, 90, 96, 89, 87, 92, 88, 86, 90, 89]

function Sparkline() {
  const w = 280, h = 48, max = 110, min = 75
  const pts = series.map((v, i) => `${(i / (series.length - 1)) * w},${h - ((v - min) / (max - min)) * h}`)
  return (
    <svg className="spark" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity=".35" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,${h} ${pts.join(' ')} ${w},${h}`} fill="url(#sparkFill)" />
      <polyline points={pts.join(' ')} fill="none" stroke="#38bdf8" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

function DashboardMock() {
  return (
    <div className="dm-window" role="img" aria-label="Illustration of the Dawn Monitor dashboard">
      <div className="dm-bar">
        <span /><span /><span />
        <div className="dm-url">app.dawnmonitor.findartmw.com</div>
      </div>
      <div className="dm-body">
        <div className="dm-head">
          <div className="dm-brand"><span className="dm-logo"><PulseIcon /></span>Dawn <b>Monitor</b></div>
          <span className="dm-live">● All systems up</span>
        </div>
        <div className="dm-stats">
          <div><small>Uptime 30d</small><strong>99.98%</strong></div>
          <div><small>Avg response</small><strong>90 ms</strong></div>
          <div><small>Incidents</small><strong>0</strong></div>
        </div>
        <div className="dm-chart">
          <small>Response time · 24h</small>
          <Sparkline />
        </div>
        <ul className="dm-checks">
          {checks.map((c) => (
            <li key={c.host}>
              <i />
              <span className="dm-host">{c.host}</span>
              <span className="dm-type">{c.type}</span>
              <span className="dm-val">{c.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function FeaturedProject() {
  return (
    <article className="featured reveal">
      <div className="featured-copy">
        <div className="featured-meta">
          <span className="pill live">● Live</span>
          <span className="pill"><LockIcon /> Private repo</span>
          <span className="pill">SaaS</span>
        </div>
        <h3>{featured.name}</h3>
        <p className="featured-desc">{featured.description}</p>
        <ul className="highlights">
          {featured.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
        <div className="featured-foot">
          <a className="btn sky" href={featured.url} target="_blank" rel="noopener">Visit site <ArrowIcon /></a>
          <span className="stack">{featured.stack.join(' · ')}</span>
        </div>
      </div>
      <DashboardMock />
    </article>
  )
}
