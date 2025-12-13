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
    title: "QE Engineer",
    logo: {
      main: "swarup.pdy",
      sub: "QE Engineer"
    },
    email: "swarup.pdy@gmail.com",
    resumeUrl: "/Resume.pdf",
    resumeFileName: "Swarup_QE_Engineer.pdf",
    socials: [
      { label: 'Github', url: 'https://github.com/swarup-padhy', icon: Github },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/swarup-padhy', icon: Linkedin },
      { label: 'X (Twitter)', url: 'https://x.com/swarup_pdy', icon: Twitter }
    ]
  },

  // 2. SEO Configuration
  seo: {
    title: "Swarup Padhy | QE Engineer - Portfolio",
    description: "Professional QE Engineer Portfolio - Automation, Testing, Frameworks",
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
      label: "OPEN TO WORK",
      version: "IMMEDIATE JOINER",
      readyText: "Ready to deploy as a Quality Engineer."
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
    label: "Quality Assurance Logs", // Adjusted label to fit your role
    title: "Selected Case Studies",
    items: [
      {
        id: '01',
        title: 'Real-Time Chat App QA',
        description: 'Conducted end-to-end manual testing for a MERN-stack messaging application. Validated critical WebSocket synchronization logic, network resilience (offline/online states), and session management. Identified and reported critical bugs regarding data sync failures across multiple browser windows.',
        tags: ['Manual Testing', 'Jira Style Reporting', 'WebSocket Logic', 'Resilience Testing'],
        metrics: [
          { label: 'Bugs Found', value: 5 },
          { label: 'Test Cases', value: 42 },
          { label: 'Critical Defects', value: 1 },
        ],
        repoUrl: 'https://github.com/swarup-padhy/Mern-Chat-QA',
      },
      {
        id: '02',
        title: 'Personal Portfolio (Dev & Test)',
        description: 'Designed, developed, and tested this portfolio platform end-to-end. Acting as both Developer and QA, I executed rigorous non-functional testing to ensure 98% performance scores, fully responsive layout across devices, and cross-browser compatibility.',
        tags: ['React', 'Lighthouse Audits', 'Performance Testing', 'Dev + QA'],
        metrics: [
          { label: 'Lighthouse', value: 98, suffix: '/100' },
          { label: 'Accessibility', value: 100, suffix: '%' },
          { label: 'Roles', value: 'Dev + QA' }, // Creative use of metric to show dual role
        ],
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
        items: ['Manual Testing', 'Test Case Design', 'Bug Lifecycle', 'Agile', 'Jira'],
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
    bio: `Aspiring QA Engineer and 2025 MCA Graduate. I hold a strong proficiency in Manual Testing methodologies (STLC, Bug Life Cycle) and a technical background in Web Development (JavaScript, React). Currently transitioning into Test Automation to build scalable testing frameworks. Passionate about bridging the gap between development and quality assurance.`,
    metadata: [
      { label: "Base of Operations", value: "Hyderabad, India", sub: "Open to Relocate" },
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
