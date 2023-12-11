import { ProjectDetails } from '@/components/project/details';
import { allProjects } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

export default function Page({ params }: { params: { slug: string } }) {
    const project = allProjects.find(
        (project) => project._raw.flattenedPath === 'projects/' + params.slug,
    );

    if (!project) notFound();

    return (
        <div className="flex items-center justify-center flex-1 w-full h-screen">
            <ProjectDetails slug={params.slug} project={project} />
        </div>
    );
}
