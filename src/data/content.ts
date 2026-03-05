import {
  Activity,
  Award,
  Calendar,
  Github,
  Linkedin,
} from 'lucide-react';
import { PortfolioData } from '../types';

export const PORTFOLIO_DATA: PortfolioData = {

  // 1. Global Site Configuration
  config: {
    name: "Swarup Padhy",
    title: "QA Engineer",
    logo: {
      main: "swarup.pdy",
      sub: "QA Engineer"
    },
    email: "swarup.pdy@gmail.com",
    resumeUrl: "/Resume.pdf",
    socials: [
      { label: 'Github', url: 'https://github.com', icon: Github },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/swarup-padhy', icon: Linkedin }
    ]
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
      label: "Open to Work",
      version: "2025 Graduate",
      readyText: "Immediate Joiner"
    },
    watermark: "QE",
    headline: {
      primary: "Quality",
      secondary: "Engineer"
    },
    bio: {
      prefix: "Focused on ",
      highlight: "breaking systems before users do",
      suffix: " through structured manual testing, API validation, and security analysis.",
      tagline: "// 150+ test cases executed • 13 defects discovered • STLC documented"
    },
    cta: "Download Resume",
    stats: [
      { label: "Test Cases Executed", value: 150, suffix: "+" },
      { label: "Defects Identified", value: 13, suffix: "" },
      { label: "Modules Tested", value: 13, suffix: "" }
    ]
  },

  // 4. Projects Section
  projects: {
    label: "Engineering Logs",
    title: "Selected Case Studies",
    items: [
      {
        id: '01',
        title: 'Authentication System — QA & Security Testing',
        description: 'Executed a complete Software Testing Life Cycle (STLC) audit for a MERN-based authentication system. Designed 113 test scenarios and 150 manual test cases covering signup, login, password recovery, session handling, and API validation. Identified 13 defects including critical security vulnerabilities such as NoSQL injection, missing rate limiting, and sensitive error message exposure.',
        tags: ['Manual Testing', 'API Testing', 'Security Testing', 'Postman', 'MongoDB'],
        metrics: [
          { label: 'Test Cases', value: 150 },
          { label: 'Bugs Found', value: 13 },
          { label: 'Modules', value: 13 },
        ],
        repoUrl: 'https://github.com'
      },
      {
        id: '02',
        title: 'AI Data Analysis Automation (RAG System)',
        description: 'Built a Python-based Retrieval-Augmented Generation (RAG) workflow during internship to analyze large CSV and Excel datasets. Implemented data preprocessing, chunking, embeddings, and vector indexing for semantic search. Integrated Ollama LLM with Top-K retrieval to automate dataset pattern analysis and reduce manual research effort.',
        tags: ['Python', 'RAG', 'Data Processing', 'Ollama', 'Vector DB'],
        metrics: [
          { label: 'Internship', value: 4, suffix: 'mo' },
          { label: 'Data Sources', value: 2, suffix: '+' },
          { label: 'Automation Gain', value: 60, suffix: '%' },
        ],
        repoUrl: 'https://github.com'
      },
    ]
  },

  // 5. Skills Section
  skills: {
    label: "Core Competencies",
    title: "Technical Arsenal",
    items: [
      {
        category: 'Testing Fundamentals',
        items: [
          'Manual Testing',
          'Test Case Design',
          'Test Scenario Development',
          'Bug Reporting',
          'STLC & SDLC'
        ],
      },
      {
        category: 'API & Backend Testing',
        items: [
          'API Testing',
          'Postman',
          'JSON Validation',
          'HTTP Methods',
          'Status Code Analysis'
        ],
      },
      {
        category: 'Security Awareness',
        items: [
          'OWASP Basics',
          'Authentication Testing',
          'Input Validation',
          'Session Testing',
          'Injection Vulnerabilities'
        ],
      },
      {
        category: 'Tools',
        items: [
          'Postman',
          'MongoDB Compass',
          'Chrome DevTools',
          'Git',
          'GitHub'
        ],
      },
      {
        category: 'Automation (Learning)',
        items: [
          'Python',
          'Selenium',
          'Playwright',
          'Pytest',
          'Automation Framework Basics'
        ],
      },
    ]
  },

  // 6. About Section
  about: {
    label: "Candidate Profile",
    title: "Operative Profile",
    bio: `QA Engineer with hands-on experience executing full Software Testing Life Cycle processes on real web applications. Designed and executed 150+ manual test cases across authentication workflows including login, signup, password recovery, and token management. Identified 13 defects including critical security vulnerabilities such as NoSQL injection and brute-force attack exposure.

Additionally completed an AI Automation internship where I built Python-based data analysis pipelines using Retrieval-Augmented Generation (RAG) techniques. Currently expanding expertise in API testing and Python automation to build scalable QA pipelines.`,
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
        { label: "Graduation", value: 2025, suffix: "", icon: Calendar },
        { label: "QA Case Studies", value: 2, suffix: "+", icon: Award },
        { label: "Learning Rate", value: 100, suffix: "%", decimals: 0, icon: Activity }
      ]
    }
  },

  // 7. Footer
  footer: {
    statusText: "System Status: Open for QA Opportunities"
  }
};

// Backward compatibility exports
export const NAV_ITEMS = PORTFOLIO_DATA.navbar.items;
export const SOCIAL_LINKS = PORTFOLIO_DATA.config.socials;
export const PROJECTS = PORTFOLIO_DATA.projects.items;
export const SKILLS = PORTFOLIO_DATA.skills.items;
export const ABOUT_TEXT = PORTFOLIO_DATA.about.bio;
