import {
    Activity,
    Award,
    Calendar,
    Github,
    Linkedin,
} from 'lucide-react';
import { PortfolioData } from '../types';

export const PORTFOLIO_DATA: PortfolioData = {

    // Global Site Configuration
    config: {
        name: "Swarup Padhy",
        title: "QA Engineer",
        logo: {
            main: "swarup.pdy",
            sub: "QA Engineer"
        },
        email: "swarup.pdy@gmail.com",
        resumeUrl: "/Resume.pdf",
        resumeFileName: "Resume.pdf",
        socials: [
            { label: 'Github', url: 'https://github.com/swarup-padhy', icon: Github },
            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/swarup-padhy', icon: Linkedin }
        ]
    },

    // SEO
    seo: {
        title: "Swarup Padhy | QA Engineer",
        description: "QA Engineer (MCA 2025) specializing in Manual Testing, API validation, and security analysis. Executed 150+ test cases and identified critical vulnerabilities in authentication systems.",
        image: "/og-image.png",
        url: "https://swarup.pdy",
        type: "website"
    },

    // Navigation
    navbar: {
        items: [
            { label: 'Overview', id: 'home' },
            { label: 'Case Studies', id: 'projects' },
            { label: 'Arsenal', id: 'skills' },
            { label: 'Dossier', id: 'about' },
        ],
        ctaText: "Connect"
    },

    // Hero Section
    hero: {
        status: {
            label: "Open to Work",
            version: "2025 Batch",
            readyText: "Immediate Joiner"
        },
        watermark: "QE",
        headline: {
            primary: "Quality",
            secondary: "Engineer"
        },
        bio: {
            prefix: "Focused on ",
            highlight: "finding critical defects before users do",
            suffix: " through structured manual and API testing.",
            tagline: "// I break it so your users don't."
        },
        cta: "Download Resume",
        stats: [
            { label: "Test Cases Designed", value: 150, suffix: "+" },
            { label: "Bugs Identified", value: 13, suffix: "+" },
            { label: "Projects Tested", value: 3, suffix: "+" }
        ]
    },

    // Projects
    projects: {
        label: "Engineering Logs",
        title: "QA Case Studies",
        items: [

            {
                id: '01',
                title: 'Authentication System — Security & Functional Testing',
                description: 'Performed full QA audit on a MERN authentication system. Designed 150 manual test cases across 13 modules including signup, login, password recovery, token management, and security validation. Identified 13 defects including critical vulnerabilities such as NoSQL injection and missing rate limiting.',
                tags: ['Manual Testing', 'Security Testing', 'API Testing', 'Postman', 'MongoDB'],
                metrics: [
                    { label: 'Test Cases', value: 150 },
                    { label: 'Bugs Found', value: 13 },
                    { label: 'Critical Bugs', value: 2 },
                ],
                repoUrl: 'https://github.com/swarup-padhy/Authentication-system-QA',
            },

            {
    id: '02',
    title: 'Wikipedia Accessibility Audit — WCAG 2.1 Testing',
    description: 'Performed an accessibility audit on a Wikipedia article page following WCAG 2.1 guidelines. Conducted manual keyboard navigation testing and automated scanning using WAVE to evaluate accessibility compliance. Identified multiple accessibility issues including missing alternative text, empty links, contrast violations, and dropdown focus behavior affecting readability.',
    tags: [
        'Accessibility Testing',
        'WCAG 2.1',
        'Manual Testing',
        'Keyboard Testing',
        'WAVE Tool'
    ],
    metrics: [
        { label: 'Errors Found', value: 5 },
        { label: 'Contrast Issues', value: 13 },
        { label: 'Accessibility Alerts', value: 436 },
    ],
    repoUrl: 'https://github.com/swarup-padhy/Mern-Chat-QA'
},

            {
                id: '03',
                title: 'MERN Chat Application — Functional QA Testing',
                description: 'Executed structured manual testing on a MERN stack real-time chat application. Validated authentication flows, user sessions, message delivery, chat creation, and UI state changes. Designed test scenarios covering user registration, login/logout, message sending, chat history persistence, and edge cases in real-time messaging workflows.',
                tags: ['Manual Testing', 'Functional Testing', 'Web Testing', 'Test Scenarios', 'Bug Reporting'],
                metrics: [
                    { label: 'Modules Tested', value: 5 },
                    { label: 'Test Scenarios', value: 40, suffix: '+' },
                    { label: 'Workflows Validated', value: 10, suffix: '+' },
                ],
                repoUrl: 'https://github.com/swarup-padhy/Mern-Chat-QA',
            },


            {
                id: '04',
                title: 'AI Data Automation (RAG System)',
                description: 'Built during AI Automation Internship. Developed a Python-based Retrieval-Augmented Generation pipeline for analyzing large CSV/Excel datasets. Implemented preprocessing, embeddings, vector database indexing, and integrated Ollama LLM for semantic pattern retrieval.',
                tags: ['Python', 'RAG', 'Vector Database', 'Ollama', 'Data Automation'],
                metrics: [
                    { label: 'Data Files', value: 100, suffix: '+' },
                    { label: 'Automation Gain', value: 60, suffix: '%' },
                    { label: 'Processing Pipeline', value: 1 },
                ],
            },

        ]
    },

    // Skills
    skills: {
        label: "Core Competencies",
        title: "Technical Arsenal",
        items: [

            {
                category: 'Manual Testing',
                items: ['Test Case Design', 'Test Scenarios', 'STLC', 'Bug Lifecycle', 'Defect Reporting'],
            },

            {
                category: 'API Testing',
                items: ['Postman', 'REST API Testing', 'JSON Validation', 'HTTP Methods', 'Status Code Validation'],
            },

            {
                category: 'Database Validation',
                items: ['MongoDB', 'SQL ', 'Data Integrity Verification'],
            },

            {
                category: 'Tools',
                items: ['Jira', 'Git', 'GitHub', 'Chrome DevTools'],
            },

            {
                category: 'Automation (Learning)',
                items: ['Python', 'Selenium', 'Pytest', 'Playwright'],
            },

            {
                category: 'Soft Skills',
                items: ['Analytical Thinking', 'Attention to Detail', 'Documentation', 'Problem Solving', 'Collaboration'],
            },

        ]
    },

    // About
    about: {
        label: "Candidate Profile",
        title: "Operative Profile",

        bio: `QA Engineer with strong focus on Manual Testing, API validation, and security analysis.

Designed and executed 150+ test cases for a MERN authentication system and identified multiple critical vulnerabilities including NoSQL injection and missing rate limiting.

Background in MCA (2025) with technical understanding of web architecture, allowing deeper debugging beyond UI-level testing.

Currently expanding into Python-based automation using Selenium and Pytest to build scalable regression testing frameworks.`,

        metadata: [
            { label: "Base of Operations", value: "Hyderabad, India", sub: "Open to Relocate" },
            { label: "Availability", value: "Immediate", sub: "Full-time / Intern" }
        ],

        status: {
            clearance: "MCA Graduate",
            current: "Open to Work"
        },

        serviceRecord: {
            title: "Academic & Internship Record",
            id: "#MCA-2025",
            lastAudit: "Dec 2025",

            stats: [
                { label: "Graduation", value: 2025, suffix: "", icon: Calendar },
                { label: "Projects", value: 4, suffix: "+", icon: Award },
                { label: "Learning Rate", value: 100, suffix: "%", decimals: 0, icon: Activity }
            ]
        }
    },

    // Footer
    footer: {
        statusText: "System Status: Nominal"
    }
};


// Backward compatibility exports
export const NAV_ITEMS = PORTFOLIO_DATA.navbar.items;
export const SOCIAL_LINKS = PORTFOLIO_DATA.config.socials;
export const PROJECTS = PORTFOLIO_DATA.projects.items;
export const SKILLS = PORTFOLIO_DATA.skills.items;
export const ABOUT_TEXT = PORTFOLIO_DATA.about.bio;
