import {
  Activity,
  Award,
  Calendar,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { PortfolioData } from '../types';

export const PORTFOLIO_DATA: PortfolioData = {
  // 1. Global Site Configuration
  config: {
    name: "Swarup padhy",
    title: "QA Architect",
    logo: {
      main: "swarup.pdy",
      sub: "QA Architect"
    },
    email: "swarup.pdy@gmail.com",
    resumeUrl: "/Resume.pdf",
    resumeFileName: "Swarup_QA_Architect.pdf",
    socials: [
      { label: 'Github', url: 'https://github.com/swarup-padhy', icon: Github },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/swarup-padhy', icon: Linkedin },
      { label: 'X (Twitter)', url: 'https://x.com/swarup_pdy', icon: Twitter }
    ]
  },

  // 2. SEO Configuration
  seo: {
    title: "Swarup Padhy | QA Architect - Portfolio",
    description: "Professional QA Architect Portfolio - Automation, Testing, Frameworks",
    image: "https://swarup-pdy.vercel.app/og-image.png",
    url: "https://swarup-pdy.vercel.app/",
    type: "website"
  },


  // 2. Navigation
  navbar: {
    items: [
      { label: 'Overview', id: 'home' },
      { label: 'Case Studies', id: 'projects' },
      { label: 'Arsenal', id: 'skills' },
      { label: 'Dossier', id: 'about' },
    ],
    ctaText: "Connect"
  },

  // 3. Hero Section
  hero: {
    status: {
      label: "DEVELOPERMENT PHASE",
      version: "V1.0.0",
      readyText: "This portfolio is still under development. Stay tuned for updates!"
    },
    watermark: "QE",
    headline: {
      primary: "Quality",
      secondary: "Engineer"
    },
    bio: {
      prefix: "Dedicated to ",
      highlight: "delivering bug-free user experiences",
      suffix: " through rigorous manual & automated testing.",
      tagline: "// I break it so your users don't."
    },
    cta: "Download Resume",
    stats: [
      { label: "Attention to Detail", value: 100, suffix: "%", decimals: 0, highlight: true },
      { label: "Tech Stack", value: 4, suffix: "+" },
      { label: "Bug Tolerance", value: 0, suffix: "%" }
    ]
  },

  // 4. Projects Section
  projects: {
    label: "Engineering Logs",
    title: "Selected Case Studies",
    items: [
      {
        id: '01',
        title: 'HFT Algorithmic Core',
        description: 'Architected the validation framework for a nanosecond-latency trading engine. Implemented kernel-bypass networking tests and automated regression pipelines that reduced deployment risk by 99% in a high-frequency trading environment.',
        tags: ['C++', 'Python', 'FPGA Testing', 'Latency Mon'],
        metrics: [
          { label: 'Latency Reduct', value: 45, suffix: '%' },
          { label: 'Test Vector', value: 1.2, suffix: 'M' },
          { label: 'Deploy Freq', value: 12, suffix: '/day' },
        ],
        repoUrl: 'https://github.com/swarup-pdy/hft-core',
      },
      {
        id: '02',
        title: 'Distributed Load Mesh',
        description: 'Designed a self-healing load generation mesh on AWS Lambda capable of simulating 100k+ concurrent IoT devices. This framework identified critical race conditions in the ingestion layer before production rollout.',
        tags: ['Go', 'Terraform', 'AWS Lambda', 'MQTT'],
        metrics: [
          { label: 'Concurrency', value: 100, suffix: 'k' },
          { label: 'Cost/Test', value: 0.85, prefix: '$' },
          { label: 'Bugs Caught', value: 24 },
        ],
        repoUrl: 'https://github.com/swarup-pdy/load-mesh',
      },
      {
        id: '03',
        title: 'Security Compliance Bot',
        description: 'Developed an automated security auditing bot that continuously scans for OWASP Top 10 vulnerabilities and GDPR compliance issues within the CI pipeline, enforcing strict quality gates for banking applications.',
        tags: ['Python', 'Zap', 'SonarQube', 'DevSecOps'],
        metrics: [
          { label: 'Vuln. Blocked', value: 142 },
          { label: 'Audit Time', value: 3, suffix: 'm' },
          { label: 'Coverage', value: 100, suffix: '%' },
        ],
        repoUrl: 'https://github.com/swarup-pdy/sec-bot',
      },
    ]
  },

  // 5. Skills Section
  skills: {
    label: "Core Competencies",
    title: "Technical Arsenal",
    items: [
      {
        category: 'QA Fundamentals',
        items: ['Manual Testing', 'Test Case Design', 'Bug Lifecycle', 'Agile/Scrum', 'Jira'],
      },
      {
        category: 'Web Technologies',
        items: ['JavaScript (ES6+)', 'React.js', 'HTML5', 'CSS3', 'DOM Manipulation'],
      },
      {
        category: 'Automation Roadmap',
        items: ['Playwright (Learning)', 'Selenium', 'API Testing', 'VS Code', 'npm'],
      },
      {
        category: 'Tools & Utilities',
        items: ['Postman', 'Chrome DevTools', 'Git', 'GitHub', 'Vite'],
      },
      {
        category: 'Soft Skills',
        items: ['Analytical Thinking', 'Detail Oriented', 'Documentation', 'Collaboration', 'Problem Solving'],
      },
    ]
  },

  // 6. About Section (Dossier)
  about: {
    label: "Candidate Profile",
    title: "Operative Profile",
    // Bio rewritten to highlight MCA degree + Developer mindset applied to QA
    bio: `I am a recent MCA Graduate (2025) and aspiring Quality Engineer with a developer's mindset. With a strong foundation in web technologies (HTML, CSS, JS, React), I don't just find bugs—I understand why they happen. I am currently focused on mastering Manual Testing methodologies while building a robust automation skillset within the JavaScript ecosystem. My goal is to bridge the gap between code and customer satisfaction.`,
    metadata: [
      { label: "Base of Operations", value: "Hyderabad, India", sub: "Open to Relocate" }, // Updated location
      { label: "Availability", value: "Immediate", sub: "Full-time / Intern" }
    ],
    status: {
      clearance: "MCA Graduate",
      current: "Open to Work"
    },
    serviceRecord: {
      title: "Academic Record",
      id: "#MCA-2025",
      lastAudit: "Dec 2025",
      stats: [
        { label: "Graduation", value: 2025, suffix: " ", icon: Calendar },
        { label: "Projects", value: 5, suffix: "+", icon: Award },
        { label: "Learning Rate", value: 100, suffix: "%", decimals: 0, icon: Activity }
      ]
    }
  },

  // 7. Footer
  footer: {
    statusText: "System Status: Optimal",
  }
};

// Backward compatibility exports if needed, pointing to the new structure
export const NAV_ITEMS = PORTFOLIO_DATA.navbar.items;
export const SOCIAL_LINKS = PORTFOLIO_DATA.config.socials;
export const PROJECTS = PORTFOLIO_DATA.projects.items;
export const SKILLS = PORTFOLIO_DATA.skills.items;
export const ABOUT_TEXT = PORTFOLIO_DATA.about.bio;
