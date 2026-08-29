import type { Content } from './components/Sections';

export const content: Content = {
  name: 'Rohan Kapoor',
  role: 'Software Developer',
  tagline: 'Shipping clean, scalable code',
  photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  email: 'rohan@devforge.dev',
  phone: '+91 98330 44881',
  location: 'Bengaluru, India',
  languages: ['English', 'Hindi', 'Kannada'],
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Stack Overflow', href: 'https://stackoverflow.com' },
  ],
  about: [
    'I am a software developer with 6 years of experience building web applications that people actually enjoy using. I care about clean code, thoughtful architecture and shipping features that solve real problems — from the API that powers a product to the interface that makes it a joy to use.',
    'Frontend, backend, tooling — I am comfortable across the stack and always learning. I write readable, tested code, design resilient backend systems that scale under load, and believe the best engineers improve the people around them through reviews, mentoring and honest feedback.',
  ],
  services: [
    { title: 'Backend Engineering', desc: 'Designing and building reliable APIs and services on Node, Python and Go that scale cleanly under real load.', icon: '⚙️' },
    { title: 'System Architecture', desc: 'Turning fuzzy product goals into clear, maintainable architectures with the right trade-offs for each problem.', icon: '🏗️' },
    { title: 'API Design', desc: 'Crafting REST and GraphQL contracts that are intuitive, versioned and a pleasure for other teams to consume.', icon: '🔌' },
    { title: 'Performance & Scale', desc: 'Profiling and optimising slow paths — database queries, caching and bottlenecks — to keep products fast at scale.', icon: '🚀' },
    { title: 'Code Reviews & Mentoring', desc: 'Running disciplined reviews and mentoring that raise code quality and grow the engineers around me.', icon: '🤝' },
    { title: 'Dev Tools & Automation', desc: 'Building internal tools, CI pipelines and automations that save teams hundreds of hours a year.', icon: '🔧' },
  ],
  skills: [
    { name: 'JavaScript / TypeScript', level: 94, note: 'Node, frontend & tooling' },
    { name: 'React', level: 92, note: 'SPAs & component systems' },
    { name: 'Node.js', level: 88, note: 'APIs & services' },
    { name: 'Python', level: 80, note: 'Automation & data' },
    { name: 'SQL', level: 82, note: 'Postgres & query design' },
  ],
  skillsIcons: [
    { name: 'System Design', note: 'Backend architecture', icon: '🏛️' },
    { name: 'Docker & CI', note: 'Deploy & automate', icon: '🐳' },
    { name: 'GraphQL', note: 'Typed data APIs', icon: '🔗' },
    { name: 'Testing', note: 'Unit & integration', icon: '🧪' },
  ],
  stats: [
    { label: 'Projects shipped', value: 60, suffix: '+' },
    { label: 'Open-source contributions', value: 250, suffix: '+' },
    { label: 'Lines of production code', value: 2, suffix: 'M+', prefix: '' },
    { label: 'Years coding', value: 8, suffix: '+' },
  ],
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Codeway',
      period: '2021 — Present',
      desc: 'Lead a squad building a SaaS analytics product in React/Node. Improved app performance 3x and mentored 4 junior engineers.',
    },
    {
      role: 'Full Stack Developer',
      company: 'Startloop',
      period: '2019 — 2021',
      desc: 'Built customer-facing features across a Django + React codebase, from design handoff to production deployment.',
    },
    {
      role: 'Software Developer',
      company: 'Innovatech',
      period: '2018 — 2019',
      desc: 'Maintained and extended internal tools, building REST APIs and automating workflows that saved teams hundreds of hours.',
    },
  ],
  education: [
    {
      degree: 'B.Tech, Computer Science',
      school: 'National Institute of Technology',
      period: '2014 — 2018',
      desc: 'Graduated with distinction, specialising in algorithms, databases and distributed systems.',
    },
    {
      degree: 'Higher Secondary — Science',
      school: 'Delhi Public School',
      period: '2012 — 2014',
      desc: 'Focused on mathematics, physics and computer science.',
    },
  ],
  certificates: [
    'AWS Certified Developer — Associate',
    'Meta Front-End Developer Certificate',
    'freeCodeCamp Full Stack Certification',
    'Google Technical Fundamentals',
  ],
  awards: [
    { title: 'Engineer of the Year', detail: 'Recognised at Codeway for leading the platform performance initiative and mentoring peers.', year: '2023' },
    { title: 'Hackathon Winner', detail: 'First place for a real-time collaboration tool built by a cross-functional team in 36 hours.', year: '2022' },
    { title: 'Rising Star', detail: 'Awarded for shipping the highest-impact feature set in a first full year at Startloop.', year: '2020' },
  ],
  cards: [
    {
      title: 'TaskFlow',
      desc: 'A collaborative project management app with real-time sync. Used by 10k+ teams with 99.9% uptime.',
      stack: 'React, Node, WebSockets',
      metric: '10k+ teams',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    },
    {
      title: 'InsightBoard',
      desc: 'A data-visualization dashboard rendering millions of points smoothly in the browser.',
      stack: 'React, TypeScript, D3',
      metric: '1M+ points',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    },
    {
      title: 'DevNotes',
      desc: 'A markdown note app with offline-first sync and end-to-end encryption.',
      stack: 'Next.js, SQLite, IndexedDB',
      metric: 'offline-first',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    },
  ],
  projects: [
    {
      title: 'Aurora Analytics API',
      desc: 'Designed and built a high-throughput analytics API processing millions of events a day with sub-second latency.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
      tags: ['Node.js', 'Backend', 'Scale'],
    },
    {
      title: 'ShipIt CI Pipeline',
      desc: 'Re-engineered the build and deploy pipeline, cutting release time from hours to minutes across all squads.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
      tags: ['DevOps', 'Automation', 'CI/CD'],
    },
    {
      title: 'Real-time Collaboration Engine',
      desc: 'Built a WebSocket-backed sync engine powering live edits with conflict resolution for thousands of users.',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop',
      tags: ['WebSockets', 'Architecture', 'Real-time'],
    },
  ],
  hobbies: [
    { name: 'Open Source', note: 'Contributing to OSS tools', icon: '🐙' },
    { name: 'Gaming', note: 'Strategy & co-op titles', icon: '🎮' },
    { name: 'Reading', note: 'Sci-fi & technical books', icon: '📚' },
    { name: 'Cycling', note: 'Weekend endurance rides', icon: '🚴' },
  ],
  testimonials: [
    {
      quote:
        'Rohan writes some of the cleanest PRs I have reviewed. Thoughtful, well-tested and fast.',
      author: 'Sarah Lin',
      role: 'Engineering Manager, Codeway',
    },
    {
      quote:
        'He has a knack for breaking big problems into small, shippable increments. A joy to work with.',
      author: 'Tom Becker',
      role: 'Product Manager, Startloop',
    },
  ],
  footnote: '© Rohan Kapoor · React, TypeScript & Framer Motion',
  ticker: ['Backend Engineering', 'API Design', 'System Architecture', 'Performance', 'TypeScript', 'Dev Tools'],

  blogPosts: [
    { title: 'Clean Code Principles in Practice', excerpt: 'How to write maintainable, readable code that stands the test of time.', date: '2024-01-14', tags: ['Clean Code', 'Best Practices'], readTime: '7 min' },
    { title: 'Microservices vs Monolith: Making the Right Choice', excerpt: 'Understanding when to use each architecture pattern based on team size and business needs.', date: '2024-01-03', tags: ['Architecture', 'Microservices'], readTime: '10 min' },
  ],

  faqItems: [
    { question: 'What programming languages do you work with?', answer: 'I specialize in JavaScript/TypeScript, Python, and Java, with experience in Go and Rust for performance-critical applications.' },
    { question: 'What is your development methodology?', answer: 'I follow agile practices with test-driven development, code reviews, and continuous integration to ensure quality.' },
    { question: 'How do you approach debugging?', answer: 'I use a systematic approach combining logging, debugging tools, and root cause analysis to identify and fix issues efficiently.' },
    { question: 'What is your experience with databases?', answer: 'I work with both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) databases, choosing the right tool for each use case.' },
  ],

  skillsDetailed: [
    { category: 'Languages', items: [
      { name: 'JavaScript/TypeScript', level: 95 },
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
    ]},
    { category: 'Frameworks', items: [
      { name: 'React/Next.js', level: 92 },
      { name: 'Node.js', level: 90 },
      { name: 'Spring Boot', level: 82 },
    ]},
  ],

  contactMethods: [
    { type: 'Email', value: 'developer@email.com', icon: '📧', href: 'mailto:developer@email.com' },
    { type: 'GitHub', value: 'github.com/developer', icon: '🐙', href: 'https://github.com' },
  ],
};
