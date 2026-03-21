import {
    Activity,
    Award,
    Calendar,
    Github,
    Linkedin,
} from 'lucide-react';
import { PortfolioData } from '../types';

export const PORTFOLIO_DATA: PortfolioData = {

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

    seo: {
        title: "Swarup Padhy | QA Engineer | API & Automation Testing",
        description: "QA Engineer specializing in API testing, automation using Pytest & Selenium, and manual testing.",
        image: "/og-image.png",
        url: "https://swarup.pdy",
        type: "website"
    },

    navbar: {
        items: [
            { label: 'Overview', id: 'home' },
            { label: 'Case Studies', id: 'projects' },
            { label: 'Arsenal', id: 'skills' },
            { label: 'Dossier', id: 'about' },
        ],
        ctaText: "Connect"
    },

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
            highlight: "API validation and automation testing with Python",
            suffix: " to identify defects early and improve system reliability.",
            tagline: "// I break systems before users do."
        },
        cta: "Download Resume",
        stats: [
            { label: "Test Cases Designed", value: 150, suffix: "+" },
            { label: "Bugs Identified", value: 13, suffix: "+" },
            { label: "Automation Coverage", value: 3, suffix: " Layers" }
        ]
    },

    projects: {
        label: "Engineering Logs",
        title: "QA Case Studies",
        items: [
            {
                id: '00',
                title: 'E-Commerce QA Automation Framework (API + UI + E2E)',
                description: 'Built a Python-based automation framework using Pytest and Selenium to test a MERN e-commerce application. Automated API and UI workflows including login, product browsing, cart, and checkout.',
                tags: ['Python', 'Pytest', 'Selenium', 'API Testing'],
                metrics: [
                    { label: 'Test Coverage', value: 3, suffix: ' Layers' },
                    { label: 'Test Cases', value: 16 },
                    { label: 'Execution Time', value: 28, suffix: 's' },
                ],
                repoUrl: 'https://github.com/swarup-padhy/QA-Automation-E-Commerce-Testing-Framework',
            },
            {
                id: '01',
                title: 'Authentication System — QA Testing (API + Security)',
                description: 'Performed QA testing on a MERN authentication system covering functional, API, and basic security validation. Designed and executed 150+ test cases and identified 13 defects including NoSQL injection and missing rate limiting.',
                tags: ['Manual Testing', 'API Testing', 'Security Testing', 'Postman'],
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
                description: 'Conducted accessibility testing using WAVE and manual checks. Identified issues including missing alt text, contrast failures, and navigation problems based on WCAG 2.1.',
                tags: ['Accessibility Testing', 'WCAG 2.1', 'Manual Testing'],
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
                description: 'Executed manual testing on a MERN chat application. Validated authentication, messaging workflows, and session handling.',
                tags: ['Manual Testing', 'Functional Testing'],
                metrics: [
                    { label: 'Modules Tested', value: 5 },
                    { label: 'Test Scenarios', value: 40, suffix: '+' },
                    { label: 'Workflows', value: 10, suffix: '+' },
                ],
                repoUrl: 'https://github.com/swarup-padhy/Mern-Chat-QA',
            }
        ]
    },

    skills: {
        label: "Core Competencies",
        title: "QA Skillset & Tooling",
        items: [
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
            {
                category: 'API & Backend Testing',
                items: [
                    'Postman',
                    'REST API Testing',
                    'HTTP Methods',
                    'JSON Validation'
                ],
            },
            {
                category: 'Manual Testing',
                items: [
                    'Test Case Design',
                    'STLC',
                    'Boundary Testing',
                    'Defect Reporting'
                ],
            },
            {
                category: 'Tools',
                items: [
                    'Git',
                    'GitHub',
                    'Jira',
                    'Chrome DevTools'
                ],
            }
        ]
    },

    about: {
        label: "Candidate Profile",
        title: "Operative Profile",
        bio: `QA Engineer with experience in API testing, manual testing, and automation using Python.

Built automation frameworks using Pytest and Selenium covering API and UI workflows.

Experienced in identifying defects and validating backend systems.`,
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
                { label: "Projects", value: 4, suffix: "+", icon: Award },
                { label: "Learning", value: 100, suffix: "%", icon: Activity }
            ]
        }
    },

    footer: {
        statusText: "System Status: Nominal"
    }
};

export const NAV_ITEMS = PORTFOLIO_DATA.navbar.items;
export const SOCIAL_LINKS = PORTFOLIO_DATA.config.socials;
export const PROJECTS = PORTFOLIO_DATA.projects.items;
export const SKILLS = PORTFOLIO_DATA.skills.items;
export const ABOUT_TEXT = PORTFOLIO_DATA.about.bio;
