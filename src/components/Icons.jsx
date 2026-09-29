const Svg = ({ children }) => (
  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">{children}</svg>
)

export const ArrowIcon = () => <Svg><path d="M5 12h14M13 5l7 7-7 7" /></Svg>
export const CodeIcon = () => <Svg><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></Svg>
export const CapIcon = () => <Svg><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></Svg>
export const PaletteIcon = () => <Svg><circle cx="13.5" cy="6.5" r="2.5" /><path d="M17 11a5 5 0 1 1-10 0" /><path d="M3 21h18" /></Svg>
export const MailIcon = () => <Svg><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></Svg>
export const PinIcon = () => <Svg><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></Svg>
export const LockIcon = () => <Svg><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></Svg>
export const PulseIcon = () => <Svg><path d="M3 12h4l2-5 4 10 2-5h6" /></Svg>
export const GithubIcon = () => (
  <Svg>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </Svg>
)
