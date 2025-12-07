import { type LucideIcon } from 'lucide-react';

export interface NavItem {
  readonly label: string;
  readonly id: string;
}

export interface SocialLink {
  readonly label: string;
  readonly url: string;
  readonly icon: LucideIcon;
}

export interface ProjectMetric {
  readonly label: string;
  readonly value: number;
  readonly suffix?: string;
  readonly prefix?: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly metrics: readonly ProjectMetric[];
  readonly repoUrl?: string;
  readonly demoUrl?: string;
}

export interface SkillGroup {
  readonly category: string;
  readonly items: readonly string[];
  readonly icon?: LucideIcon;
}

export interface MetaDetail {
  readonly label: string;
  readonly value: string;
  readonly sub?: string;
}

export interface ServiceStat {
  readonly label: string;
  readonly value: number;
  readonly suffix: string;
  readonly decimals?: number;
  readonly icon?: LucideIcon;
}

export interface SiteConfig {
  readonly name: string;
  readonly title: string;
  readonly logo: {
    readonly main: string;
    readonly sub: string;
  };
  readonly email: string;
  readonly resumeUrl: string;
  readonly socials: readonly SocialLink[];
}

export interface HeroContent {
  readonly status: {
    readonly label: string;
    readonly version: string;
    readonly readyText: string;
  };
  readonly watermark: string;
  readonly headline: {
    readonly primary: string;
    readonly secondary: string;
  };
  readonly bio: {
    readonly prefix: string;
    readonly highlight: string;
    readonly suffix: string;
    readonly tagline: string;
  };
  readonly cta: string;
  readonly stats: readonly {
    readonly label: string;
    readonly value: number;
    readonly suffix: string;
    readonly decimals?: number;
    readonly highlight?: boolean;
  }[];
}

export interface SectionHeader {
  readonly label: string;
  readonly title: string;
}

export interface ProjectsContent extends SectionHeader {
  readonly items: readonly Project[];
}

export interface SkillsContent extends SectionHeader {
  readonly items: readonly SkillGroup[];
}

export interface AboutContent extends SectionHeader {
  readonly bio: string;
  readonly metadata: readonly MetaDetail[];
  readonly status: {
    readonly clearance: string;
    readonly current: string;
  };
  readonly serviceRecord: {
    readonly title: string;
    readonly id: string;
    readonly lastAudit: string;
    readonly stats: readonly ServiceStat[];
  };
}

export interface FooterContent {
  readonly statusText: string;
}

export interface PortfolioData {
  readonly config: SiteConfig;
  readonly navbar: { readonly items: readonly NavItem[]; readonly ctaText: string };
  readonly hero: HeroContent;
  readonly projects: ProjectsContent;
  readonly skills: SkillsContent;
  readonly about: AboutContent;
  readonly footer: FooterContent;
}
