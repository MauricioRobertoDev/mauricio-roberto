'use client';
import components from '@/components/mdx';
import { Project } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export function ProjectContent({ project, slug }: { project: Project; slug: string }) {
    const MDXContent = useMDXComponent(project.body.code);

    return (
        <div>
            <MDXContent components={{ ...components }} />
        </div>
    );
}
