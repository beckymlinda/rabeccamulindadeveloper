export const profile = {
  name: 'Rabecca Mulinda',
  title: 'Senior Software Engineer',
  location: 'Lilongwe, Malawi',
  email: 'beckymlinda@gmail.com',
  github: 'https://github.com/beckymlinda',
}

export const experience = [
  { org: 'LettsCommerce', role: 'Senior Engineer', note: 'Leading commerce features end to end.', status: 'Now' },
  { org: 'EduConsultancy International', role: 'Consultant Software Developer', note: 'Web platforms and internal tools.', status: 'Now' },
  { org: 'Nalikule College of Education', role: 'Moodle Installation & Support', note: 'Installed and configured Moodle. Now providing support.', status: 'Now' },
  { org: 'NCHE', role: 'Junior Developer', note: 'Worked on the Qualification Verification System.', status: 'Past' },
  { org: 'Freelance', role: 'Developer & Designer', note: 'Systems, websites and branding for SMEs and NGOs.', status: 'Ongoing' },
]

export const skills = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap'] },
  { group: 'Backend', items: ['Laravel', 'PHP', 'REST APIs', 'Auth & roles'] },
  { group: 'Data', items: ['MySQL', 'Supabase', 'Firebase'] },
  { group: 'Platforms', items: ['Moodle', 'Vercel', 'Git', 'Graphic design'] },
]

export const featured = {
  name: 'Dawn Monitor',
  url: 'https://app.dawnmonitor.findartmw.com/',
  description: 'Uptime monitoring for websites, APIs, servers and cron jobs, with instant alerts when something breaks.',
  highlights: ['6 monitor types', 'WhatsApp, SMS & Slack alerts', 'Public status pages', 'Team workspaces & billing'],
  stack: ['Next.js', 'TypeScript', 'Tailwind'],
}

const LANG = {
  ts: { label: 'TypeScript', color: '#3178c6' },
  laravel: { label: 'Laravel', color: '#f05340' },
  html: { label: 'HTML/CSS', color: '#e34c26' },
}

export const projects = [
  { name: 'Tickit', lang: LANG.ts, cats: ['react'], repo: 'Tickit', live: 'https://tickit-phi.vercel.app', text: 'Issue tracking with roles and real-time updates.' },
  { name: 'NzeruEd', lang: LANG.laravel, cats: ['laravel'], repo: 'NzeruEd', text: 'E-learning platform with paid courses.' },
  { name: 'Reviews', lang: LANG.ts, cats: ['react'], repo: 'Reviews', live: 'https://reviews-ruddy.vercel.app', text: 'Restaurant reviews on Firebase and Supabase.' },
  { name: 'Pharmacy System', lang: LANG.laravel, cats: ['laravel'], repo: 'pharmacysystem', text: 'Stock, prescriptions and expiry alerts.' },
  { name: 'BizTrack', lang: LANG.ts, cats: ['react'], repo: 'biztrack', live: 'https://biztrack-mu.vercel.app', text: 'Business tracking dashboard.' },
  { name: 'Pixies', lang: LANG.laravel, cats: ['laravel'], repo: 'pixies', text: 'Liquor shop stock and profit tracking.' },
  { name: 'EduConsultancy', lang: LANG.ts, cats: ['react', 'web'], repo: 'Educ-website', live: 'https://educonsultancy-one.vercel.app', text: 'Company website.' },
  { name: 'Budget System', lang: LANG.laravel, cats: ['laravel'], repo: 'BUDGET-SYTEM', text: 'Institutional budget tracking.' },
  { name: 'CancerCare Connect', lang: LANG.ts, cats: ['react'], repo: 'cancercare-malawi-connect', text: 'Cancer care support platform for Malawi.' },
  { name: 'Dawn Digital Hub', lang: LANG.html, cats: ['web'], repo: 'Dawndigitalhub', text: 'Digital agency website.' },
  { name: 'Dzuka', lang: LANG.html, cats: ['web'], repo: 'dzukamw-site', text: 'Coaching and wellbeing website.' },
  { name: 'Wonderland Preschool', lang: LANG.html, cats: ['web'], repo: 'wonderland-preschool-website', text: 'Preschool website for parents.' },
]

export const filters = [
  { id: 'all', label: 'All' },
  { id: 'react', label: 'React' },
  { id: 'laravel', label: 'Laravel' },
  { id: 'web', label: 'Websites' },
]

export const services = [
  { title: 'Web applications', text: 'Custom systems in Laravel or React.' },
  { title: 'Moodle', text: 'Installation, configuration and support.' },
  { title: 'Websites & brand', text: 'Sites and visuals that look professional.' },
]
