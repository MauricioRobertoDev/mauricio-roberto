import { Project } from '@/.contentlayer/generated';
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
