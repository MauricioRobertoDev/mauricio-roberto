import { Project } from '@/.contentlayer/generated';
import { siteConfig } from '@/config/site';
import { clsx, type ClassValue } from 'clsx';
import { compareDesc, parseISO } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function sortProjects(projects: Project[]) {
    return projects
        .slice()
        .sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)));
}

export function getFeaturedProjects(projects: Project[]) {
    return projects.slice().filter((project) => project.featured);
}

export function getProjectsWithTag(projects: Project[], tag: string) {
    return projects.slice().filter((project) => project.tags?.includes(tag));
}

export function getOgImagesToProject(project: Project) {
    function generateProjectImageUrl(aspect?: string) {
        const url = new URL(`${siteConfig.url}/api/og/project-image`);
        url.searchParams.set('title', project.title);
        url.searchParams.set('date', project.publishedAt);
        url.searchParams.set(
            'tags',
            project.tags?.map((tag) => encodeURIComponent(tag))?.join(',') ?? '',
        );

        // console.log(project.tags?.map((tag) => encodeURIComponent(tag))?.join(',') ?? '');

        if (aspect) url.searchParams.set('aspect', aspect);
        // console.log(url.toString());
        return url.toString();
    }

    return [
        {
            url: generateProjectImageUrl(),
            alt: siteConfig.author,
            width: 1200,
            height: 630,
        },
        {
            url: generateProjectImageUrl('1/1'),
            alt: siteConfig.author,
            width: 1200,
            height: 1200,
        },
        {
            url: generateProjectImageUrl('2/1'),
            alt: siteConfig.author,
            width: 1200,
            height: 600,
        },
        {
            url: generateProjectImageUrl('4/3'),
            alt: siteConfig.author,
            width: 1200,
            height: 900,
        },
        {
            url: generateProjectImageUrl('16/9'),
            alt: siteConfig.author,
            width: 1200,
            height: 675,
        },
    ];
}

export function getDefaultOgImages(title?: string) {
    const alt = `${title ? title + '| ' : ''}Mauricio Roberto`;
    function generateProjectImageUrl(aspect?: string) {
        const url = new URL(`${siteConfig.url}/api/og/project-image`);
        if (aspect) url.searchParams.set('aspect', aspect);
        return url;
    }

    return [
        {
            url: generateProjectImageUrl(),
            alt,
            width: 1200,
            height: 630,
        },
        {
            url: generateProjectImageUrl('1/1'),
            alt,
            width: 1200,
            height: 1200,
        },
        {
            url: generateProjectImageUrl('2/1'),
            alt,
            width: 1200,
            height: 600,
        },
        {
            url: generateProjectImageUrl('4/3'),
            alt,
            width: 1200,
            height: 900,
        },
        {
            url: generateProjectImageUrl('16/9'),
            alt,
            width: 1200,
            height: 675,
        },
    ];
}
