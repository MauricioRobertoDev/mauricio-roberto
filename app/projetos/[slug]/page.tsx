import { ProjectContent } from '@/components/project/content';
import { ProjectDate } from '@/components/project/date';
import { ProjectInfo } from '@/components/project/info';
import { ProjectLinks } from '@/components/project/links';
import { ProjectTags } from '@/components/project/tags';
import { allProjects } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return allProjects.map((project) => ({
        slug: project._raw.flattenedPath.replace('projects/', ''),
    }));
}

export default function Page({ params }: { params: { slug: string } }) {
    const project = allProjects.find(
        (project) => project._raw.flattenedPath === 'projects/' + params.slug,
    );

    if (!project) notFound();

    return (
        <article className="flex-1 w-full min-h-screen pt-16">
            <div className="relative w-full max-w-6xl gap-4 p-0 px-4 py-10 mx-auto border-b">
                <div className="space-y-6">
                    <ProjectLinks {...project} />
                    <h1 className="text-3xl font-bold md:text-4xl">{project.title}</h1>
                    <ProjectDate {...project} />
                    {project.tags && <ProjectTags tags={project.tags} />}
                </div>
            </div>
            <div className="w-full max-w-6xl px-4 pt-6 pb-10 mx-auto prose dark:prose-invert">
                <div className="min-w-full gap-8 md:grid md:grid-cols-12">
                    <div className="col-span-8">
                        <p>{project.description}</p>
                        <ProjectContent slug={params.slug} project={project} />
                    </div>
                    <ProjectInfo {...project} />
                </div>
            </div>
        </article>
    );
}
