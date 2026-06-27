// ── Work Gallery Data ─────────────────────────────────────────────────────────
// Images use picsum.photos as placeholders — replace src with real image paths

export const GALLERY_ALBUMS = [
  {
    id: 'kudos',
    label: 'Kudos',
    icon: '🏅',
    description: 'Recognition & appreciation received from colleagues and managers',
    images: [
      { id: 'k1', src: 'https://picsum.photos/seed/kudos1/800/600', thumb: 'https://picsum.photos/seed/kudos1/400/300', caption: 'Appreciated by the KIBO team for delivering the Pivot Widget ahead of schedule', year: '2025' },
      { id: 'k2', src: 'https://picsum.photos/seed/kudos2/800/600', thumb: 'https://picsum.photos/seed/kudos2/400/300', caption: 'Recognized for championing AI-assisted dev workflows across the frontend team', year: '2024' },
      { id: 'k3', src: 'https://picsum.photos/seed/kudos3/800/600', thumb: 'https://picsum.photos/seed/kudos3/400/300', caption: 'Shoutout from Karbon Card leadership for the Forex Dashboard release', year: '2023' },
      { id: 'k4', src: 'https://picsum.photos/seed/kudos4/800/600', thumb: 'https://picsum.photos/seed/kudos4/400/300', caption: 'Team recognition at NIUM for revamping SPOC Dashboard UI/UX', year: '2022' },
      { id: 'k5', src: 'https://picsum.photos/seed/kudos5/800/600', thumb: 'https://picsum.photos/seed/kudos5/400/300', caption: 'Best Code Reviewer award at Zeta/Directi internal awards', year: '2020' },
      { id: 'k6', src: 'https://picsum.photos/seed/kudos6/800/600', thumb: 'https://picsum.photos/seed/kudos6/400/300', caption: 'Kudos for mentoring 3 junior engineers who got promoted', year: '2019' },
    ]
  },
  {
    id: 'certificates',
    label: 'Certificates',
    icon: '🎓',
    description: 'Professional certifications and course completions',
    images: [
      { id: 'c1', src: 'https://picsum.photos/seed/cert1/800/600', thumb: 'https://picsum.photos/seed/cert1/400/300', caption: 'React Advanced Patterns — Frontend Masters', year: '2024' },
      { id: 'c2', src: 'https://picsum.photos/seed/cert2/800/600', thumb: 'https://picsum.photos/seed/cert2/400/300', caption: 'TypeScript Deep Dive — Udemy', year: '2023' },
      { id: 'c3', src: 'https://picsum.photos/seed/cert3/800/600', thumb: 'https://picsum.photos/seed/cert3/400/300', caption: 'Micro-frontend Architecture — Pluralsight', year: '2023' },
      { id: 'c4', src: 'https://picsum.photos/seed/cert4/800/600', thumb: 'https://picsum.photos/seed/cert4/400/300', caption: 'Web Accessibility (WCAG 2.1) — Deque University', year: '2022' },
      { id: 'c5', src: 'https://picsum.photos/seed/cert5/800/600', thumb: 'https://picsum.photos/seed/cert5/400/300', caption: 'UI/UX Design Fundamentals — Interaction Design Foundation', year: '2021' },
    ]
  },
  {
    id: 'teaching',
    label: 'College Teaching',
    icon: '🧑‍🏫',
    description: 'Free website development coaching for engineering students',
    images: [
      { id: 't1', src: 'https://picsum.photos/seed/teach1/800/600', thumb: 'https://picsum.photos/seed/teach1/400/300', caption: 'Website Development Workshop — Day 1, STJIT College Ranibennur (100+ students)', year: '2019' },
      { id: 't2', src: 'https://picsum.photos/seed/teach2/800/600', thumb: 'https://picsum.photos/seed/teach2/400/300', caption: 'Hands-on HTML & CSS session — Day 2 at STJIT College', year: '2019' },
      { id: 't3', src: 'https://picsum.photos/seed/teach3/800/600', thumb: 'https://picsum.photos/seed/teach3/400/300', caption: 'JavaScript fundamentals live demo for final-year students', year: '2019' },
      { id: 't4', src: 'https://picsum.photos/seed/teach4/800/600', thumb: 'https://picsum.photos/seed/teach4/400/300', caption: 'Website Development competition — UBDTCE Davanagere', year: '2018' },
      { id: 't5', src: 'https://picsum.photos/seed/teach5/800/600', thumb: 'https://picsum.photos/seed/teach5/400/300', caption: 'Mentoring session: building your first portfolio website', year: '2018' },
    ]
  },
  {
    id: 'dashboards',
    label: 'Dashboards',
    icon: '📊',
    description: 'Enterprise dashboard & data visualization projects',
    images: [
      { id: 'd1', src: 'https://picsum.photos/seed/dash1/800/600', thumb: 'https://picsum.photos/seed/dash1/400/300', caption: 'KIBO Pivot Widget — O9 Solutions (React + jQuery micro-frontend)', year: '2025' },
      { id: 'd2', src: 'https://picsum.photos/seed/dash2/800/600', thumb: 'https://picsum.photos/seed/dash2/400/300', caption: 'KIBO Charts Widget — Line, Bar, Area, Stacked multi-chart dashboard', year: '2024' },
      { id: 'd3', src: 'https://picsum.photos/seed/dash3/800/600', thumb: 'https://picsum.photos/seed/dash3/400/300', caption: 'Forex Payment Dashboard — Karbon Card (React + Recoil + Ant Design)', year: '2023' },
      { id: 'd4', src: 'https://picsum.photos/seed/dash4/800/600', thumb: 'https://picsum.photos/seed/dash4/400/300', caption: 'Ops Dashboard — Internal transaction & document approval system', year: '2023' },
      { id: 'd5', src: 'https://picsum.photos/seed/dash5/800/600', thumb: 'https://picsum.photos/seed/dash5/400/300', caption: 'SPOC Dashboard — NIUM transaction management (Vue.js + Nuxt.js)', year: '2022' },
      { id: 'd6', src: 'https://picsum.photos/seed/dash6/800/600', thumb: 'https://picsum.photos/seed/dash6/400/300', caption: 'Optima HR Dashboard — Zeta cloud card provisioning system', year: '2020' },
      { id: 'd7', src: 'https://picsum.photos/seed/dash7/800/600', thumb: 'https://picsum.photos/seed/dash7/400/300', caption: 'Aphrodite — Parent dashboard architecture for all child dashboards', year: '2019' },
    ]
  },
  {
    id: 'mobile',
    label: 'Mobile Apps',
    icon: '📱',
    description: 'Hybrid & responsive mobile application projects',
    images: [
      { id: 'm1', src: 'https://picsum.photos/seed/mob1/800/600', thumb: 'https://picsum.photos/seed/mob1/400/300', caption: 'Cash Bean — Hybrid mobile app (Vue.js + Nuxt.js, responsive cross-platform)', year: '2021' },
      { id: 'm2', src: 'https://picsum.photos/seed/mob2/800/600', thumb: 'https://picsum.photos/seed/mob2/400/300', caption: 'Zeta on Web — Cloud card & bill upload mobile-responsive web app', year: '2019' },
      { id: 'm3', src: 'https://picsum.photos/seed/mob3/800/600', thumb: 'https://picsum.photos/seed/mob3/400/300', caption: 'Claim Centre — Mobile webview for complete claims details', year: '2018' },
      { id: 'm4', src: 'https://picsum.photos/seed/mob4/800/600', thumb: 'https://picsum.photos/seed/mob4/400/300', caption: 'Multi Bill Upload — PWA for employee expense bill submissions', year: '2018' },
    ]
  },
  {
    id: 'hackathon',
    label: 'Hackathons',
    icon: '⚡',
    description: "Zeta's 1st Ever 24-hour hackathon and competition highlights",
    images: [
      { id: 'h1', src: 'https://picsum.photos/seed/hack1/800/600', thumb: 'https://picsum.photos/seed/hack1/400/300', caption: "Zeta's 1st Ever Hackathon — 24-hour coding marathon (team project)", year: '2018' },
      { id: 'h2', src: 'https://picsum.photos/seed/hack2/800/600', thumb: 'https://picsum.photos/seed/hack2/400/300', caption: 'Hackathon demo — real-time dashboard prototype built in 24 hours', year: '2018' },
      { id: 'h3', src: 'https://picsum.photos/seed/hack3/800/600', thumb: 'https://picsum.photos/seed/hack3/400/300', caption: 'Team presentation at hackathon final round', year: '2018' },
    ]
  },
]

// ── Experience ────────────────────────────────────────────────────────────────
export const EXPERIENCES = [
  {
    company: 'O9 Solutions',
    role: 'Senior Software Engineer - II',
    period: 'Nov 29th 2023 – Apr 07th 2026',
    location: 'Bengaluru, India',
    color: '#7c3aed',
    projects: [
      { name: 'KIBO Dashboard — Pivot Widget', desc: 'Led the Pivot team and developed scalable pivot modules using grid.js, jQuery, Kendo UI, and Vanilla JavaScript within a Micro-frontend Architecture, enabling data editing, advanced filtering, and Excel export for enterprise reporting.' },
      { name: 'KIBO Dashboard — Charts Widget', desc: 'Built interactive dashboard visualizations using React, Redux, TypeScript, jqPlot, and Vanilla JavaScript within a Micro-frontend-based frontend ecosystem, including Line, Bar, Area, Stacked, and Multi-line charts with real-time updates based on pivot data.' },
      { name: 'KIBO Dashboard — Filters Widget', desc: 'Developed responsive filter components using React, Redux, TypeScript, and Vanilla JavaScript with customizable dimensions/measures and auto-wrap layouts for dynamic viewport adaptation in a Micro-frontend Architecture.' },
      { name: 'Design Systems & Accessibility', desc: 'Designed reusable dashboard widgets using enterprise Design Systems with strong focus on Accessibility (WCAG), scalable component architecture, responsive UI development, and seamless interoperability between React and jQuery-based micro-frontends.' },
      { name: 'Mentoring Junior Engineers', desc: 'Mentored frontend engineers through active code reviews, task prioritization, architectural contributions, and comprehensive unit testing using Jasmine, ensuring high-quality and bug-free releases.' },
      { name: 'Development Workflows', desc: 'Championed AI-assisted development workflows (GitHub Copilot, Claude Code) across the team to accelerate feature delivery and enforce consistency.' },
    ]
  },
  {
    company: 'Karbon Card',
    role: 'Senior Software Engineer',
    period: 'Aug 1st 2022 – Nov 24th 2023',
    location: 'Bengaluru, India',
    color: '#a855f7',
    projects: [
      { name: 'Forex Dashboard', desc: 'Developed corporate forex payment dashboards using React.js, Recoil, Ant Design(AntD), enabling seamless vendor and merchant payments across 100+ countries.' },
      { name: 'Ops Dashboard', desc: 'Built internal operational dashboards using React.js, Recoil and Material UI for processing forex transactions, payment workflows, and document approval systems.' },
      { name: 'Connected Banking', desc: 'Developed user-facing banking integrations using React.js, Redux, and Tailwind.CSS, enabling secure multi-bank payment processing with ICICI, SBM, and Karbon Card platforms.' },
      { name: 'GST & TDS Payments', desc: 'Built tax payment workflows using React.js, Redux, Next.js, AntD, allowing users to generate GST challans from the GST Portal and complete GST/TDS payments through connected banking integrations.' },
      { name: 'User Dashboard', desc: 'Worked on core user dashboard features using React.js, and Redux while modernizing the legacy Node.js codebase by upgrading from v16.17.0 to v18.17.1 to improve performance, security, and maintainability.' },
      { name: 'Admin Portal', desc: 'Developed internal credit operations dashboards using React.js, Redux, and AntD to streamline workflows for the Karbon credit team.' },
      { name: 'Figma Design', desc: 'Designed and prototyped scalable dashboard architectures using Figma, creating reusable UI patterns, responsive layouts, and intuitive user experiences aligned with enterprise-grade frontend standards before project implementation.' },

    ]
  },
  {
    company: 'NIUM',
    role: 'Senior Software Engineer',
    period: 'Dec 6th 2021 – Jul 20th 2022',
    location: 'Bengaluru, India',
    color: '#c084fc',
    projects: [
      { name: 'SPOC Dashboard', desc: 'Revamped the complete UI/UX of the internal transaction management dashboard using Vue.js and Nuxt.js, while designing scalable dashboard prototypes and responsive user experiences using Figma.' },
      { name: 'Figma Design', desc: 'Designed and prototyped scalable dashboard architectures using Figma, creating reusable UI patterns, responsive layouts, and intuitive user experiences aligned with enterprise-grade frontend standards before project implementation.' },
      { name: 'Mentoring Junior Engineers & Unit Test Cases', desc: 'Mentored junior frontend and QA engineers through code reviews and technical guidance while collaborating with cross-functional teams and backend developers to deliver scalable frontend solutions, architectural improvements, and high-quality releases with comprehensive testing using Cypress.' },
    ]
  },
  {
    company: 'PC Financial',
    role: 'Software Development Engineer',
    period: 'May 24th 2021 – Nov 29th 2021',
    location: 'Bengaluru, India',
    color: '#7c3aed',
    projects: [
      { name: 'PC Financial Website', desc: 'Revamped and maintained the frontend codebase using Vue.js and Nuxt.js, improving application scalability, performance, and overall code maintainability.' },
      { name: 'Cash Bean Website', desc: 'Developed hybrid mobile application features using Vue.js and Nuxt.js, delivering responsive and seamless cross-platform user experiences.' },
      { name: 'Contribution & Team Size', desc: 'Worked as an Individual Contributor (Frontend Developer) building scalable and maintainable web applications using Vue.js and Nuxt.js within agile cross-functional teams. Designed and prototyped scalable dashboard architectures using Figma, creating reusable UI patterns, responsive layouts, and intuitive user experiences aligned with enterprise-grade frontend standards before project implementation. Developed responsive and reusable email templates for customer communication workflows aligned with enterprise UI/UX standards. Mentored junior frontend and QA engineers through code reviews and technical guidance while collaborating with cross-functional teams and backend developers to deliver scalable frontend solutions, architectural improvements, and high-quality releases with comprehensive testing using Cypress.' },
    ]
  },
  {
    company: 'ZETA | DIRECTI',
    role: 'Software Development Engineer',
    period: 'Jan 2nd 2017 – May 12th 2021',
    location: 'Bengaluru, India',
    color: '#a855f7',
    projects: [
      { name: 'Optima HR + Aphrodite Dashboard', desc: 'Built HR cloud card provisioning dashboard and a parent dashboard architecture for all child dashboards including SP Dashboard and Merchant List.' },
      { name: 'Marketing Center', desc: 'A dashboard for sending SMS, Email, Push notifications, Inbox Templates, and Spotlight campaigns across the enterprise.' },
      { name: 'Order Management + Digital Display', desc: 'Full-featured system to process ordered food items and render live digital food menus on TV screens.' },
      { name: 'Zeta on Web + Claim Centre', desc: 'User-facing web dashboards for cloud cards, bill uploads, and claim detail webviews. Included reusable email templates using Zurb Foundation.' },
    ]
  },
]

export const SKILL_GROUPS = [
  { label: 'Core', icon: '⚛️', skills: ['React.js', 'TypeScript', 'Vue.js', 'Next.js', 'Nuxt.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / SCSS / LESS'] },
  { label: 'State & Data', icon: '🗂️', skills: ['Redux', 'Recoil', 'Vuex', 'REST APIs', 'Axios', 'Fetch API', 'Ajax'] },
  { label: 'UI Libraries', icon: '🎨', skills: ['Ant Design', 'Material UI', 'Tailwind CSS', 'Kendo UI', 'Slick Grid', 'Zurb Foundation', 'PWA'] },
  { label: 'Tooling & DevOps', icon: '🔧', skills: ['Webpack', 'Vite', 'Babel', 'Gulp', 'Git', 'Jenkins', 'NPM', 'Bun', 'Nginx / Apache'] },
  { label: 'Testing', icon: '🧪', skills: ['Cypress', 'Jasmine', 'Web Security'] },
  { label: 'AI & Productivity', icon: '🤖', skills: ['GitHub Copilot', 'Claude Code', 'GPT-4o', 'Cursor IDE', 'Figma'] },
]

export const STATS = [
  { value: '9+', label: 'Years Experience' },
  { value: '5', label: 'Companies' },
  { value: '50+', label: 'Projects' },
  { value: '100+', label: 'Engineers Mentored' },
]
