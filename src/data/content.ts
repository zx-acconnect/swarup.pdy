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
    title: "Swarup Padhy | QA Engineer | API & Automation Testing",
    description: "QA Engineer specializing in API testing, automation using Pytest & Selenium, and manual testing. Built automation frameworks and identified critical defects in real-world applications.",
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
       stats: [
    { label: "Test Cases Designed", value: 150, suffix: "+" },
    { label: "Bugs Identified", value: 13, suffix: "+" },
    { label: "Automation Coverage", value: 3, suffix: " Layers" }
]
        watermark: "QE",
        headline: {
            primary: "Quality",
            secondary: "Engineer"
        },
        bio: {
    prefix: "Focused on ",
    highlight: "API validation and automation testing with Python",
    suffix: " to identify defects early and improve system reliability.",
    tagline: "// I break systems before users do."
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
    id: '00',
    title: 'E-Commerce QA Automation Framework (API + UI + E2E)',
    description: 'Built a Python-based automation framework using Pytest and Selenium to test a MERN e-commerce application. Automated API and UI workflows including login, product browsing, cart, and checkout. Implemented end-to-end test scenarios and structured the framework using Page Object Model and reusable fixtures for maintainability.',
    tags: ['Python', 'Pytest', 'Selenium', 'API Testing', 'Automation Framework'],
    metrics: [
        { label: 'Test Coverage', value: 3, suffix: ' Layers' },
        { label: 'Test Cases', value: 16 },
        { label: 'Execution Time', value: 28, suffix: 's' },
    ],
    repoUrl: 'https://github.com/swarup-padhy/QA-Automation-E-Commerce-Testing-Framework',
},
            {
                id: '01',
                title: 'Authentication System — Security & Functional Testing',
                description: 'Performed QA testing on a MERN authentication system covering functional, API, and basic security validation. Designed and executed 150+ test cases for login, signup, and session handling. Identified 13 defects including NoSQL injection and missing rate limiting.',
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
        { label: 'Errors Found', value: 28 },
        { label: 'Contrast Issues', value: 100 },
        { label: 'Accessibility Alerts', value: 1322 },
    ],
    repoUrl: 'https://github.com/swarup-padhy/Wikipedia-Accessibility-Audit'
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
            }
                ],
            },

        ]
    },

   // Skills
skills: {
    label: "Core Competencies",
    title: "QA Skillset & Tooling",
    items: [

        {
            category: 'Manual & Functional Testing',
            items: [
                'Test Case Design',
                'Test Scenario Creation',
                'STLC & SDLC Understanding',
                'Boundary Value Analysis',
                'Negative Testing',
                'Defect Lifecycle Management'
            ],
        },

        {
            category: 'API & Backend Testing',
            items: [
                'Postman',
                'REST API Testing',
                'HTTP Methods & Status Codes',
                'JSON Response Validation',
                'Authentication Token Testing'
            ],
        },

        {
            category: 'Accessibility Testing',
            items: [
                'WCAG 2.1 Guidelines',
                'Keyboard Navigation Testing',
                'WAVE Accessibility Tool',
                'Screen Reader Compatibility Basics',
                'Color Contrast Validation'
            ],
        },

        {
            category: 'Database Validation',
            items: [
                'MongoDB',
                'SQL Queries',
                'Data Integrity Verification',
                'Backend Data Validation'
            ],
        },

        {
            category: 'QA Tools',
            items: [
                'Jira',
                'Git',
                'GitHub',
                'Chrome DevTools'
            ],
        },

        {
    category: 'Automation Testing',
    items: [
        'Python',
        'Pytest',
        'Selenium WebDriver',
        'API Automation (Requests)',
        'Test Framework Design'
    ],
},

    ]
},

    // About
    about: {
        label: "Candidate Profile",
        title: "Operative Profile",

        bio: `QA Engineer with hands-on experience in API testing, manual testing, and automation using Python.

Built an automation framework using Pytest and Selenium covering API, UI, and end-to-end testing for a full-stack application.

Experienced in designing test cases, validating REST APIs, and identifying critical defects including security vulnerabilities such as NoSQL injection.

Background in MCA (2025) with understanding of web architecture, enabling effective debugging across frontend and backend systems.`,        metadata: [
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
