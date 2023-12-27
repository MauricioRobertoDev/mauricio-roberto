import { ProjectContent } from '@/components/project/content';
import { ProjectDate } from '@/components/project/date';
import { ProjectInfo } from '@/components/project/info';
import { ProjectLinks } from '@/components/project/links';
import { ProjectTags } from '@/components/project/tags';
import { siteConfig } from '@/config/site';
import { getOgImagesToProject } from '@/lib/utils';
import { allProjects } from 'contentlayer/generated';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Article, Person, WithContext } from 'schema-dts';

export async function generateStaticParams() {
    return allProjects.map((project) => ({
        slug: project._raw.flattenedPath.replace('projects/', ''),
    }));
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const project = allProjects.find(
        (project) => project._raw.flattenedPath === 'projects/' + params.slug,
    );

    if (!project) return {};

    const publishedTime = new Date(project.publishedAt).toISOString();
    const modifiedTime = new Date(project.updatedAt || project.publishedAt).toISOString();
    const ogImages = getOgImagesToProject(project);

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            url: siteConfig.url + '/' + project.url,
            siteName: siteConfig.name,
            images: ogImages,
            locale: 'pt_BR',
            type: 'article',
            publishedTime,
            modifiedTime,
        },
        authors: {
            name: siteConfig.author,
            url: siteConfig.url,
        },
        twitter: {
            card: 'summary_large_image',
            title: project.title,
            description: project.description,
            images: ogImages,
            creator: '@imauriciodev',
        },
    };
}

export default function Page({ params }: { params: { slug: string } }) {
    const project = allProjects.find(
        (project) => project._raw.flattenedPath === 'projects/' + params.slug,
    );

    if (!project) notFound();

    const publishedTime = new Date(project.publishedAt).toISOString();
    const modifiedTime = new Date(project.updatedAt || project.publishedAt).toISOString();

    const author: Person = {
        '@type': 'Person',
        name: siteConfig.author,
        nationality: 'Brazilian',
        url: siteConfig.url,
    };

    const jsonLd: WithContext<Article> = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        name: project.title,
        description: project.description,
        datePublished: publishedTime,
        dateModified: modifiedTime,
        publisher: author,
        keywords: [...siteConfig.keywords, ...(project.tags ?? [])],
        // TODO: por imagem aqui
        image: 'https://nextjs.org/imgs/sticker.png',
    };

    return (
        <article className="flex-1 w-full min-h-screen pt-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="relative w-full max-w-6xl gap-4 p-0 px-4 py-10 mx-auto border-b">
                <div className="space-y-6">
                    <ProjectLinks {...project} />
                    <h1 className="text-3xl font-bold md:text-4xl">{project.title}</h1>
                    <ProjectDate {...project} />
                    {project.tags && <ProjectTags tags={project.tags} />}
                </div>
            </div>
            <div className="w-full max-w-6xl px-4 pt-6 pb-10 mx-auto prose dark:prose-invert prose-code:bg-code prose-code:py-1 prose-code:px-2 prose-code:rounded prose-code:font-fira">
                <div className="min-w-full gap-8 md:grid md:grid-cols-12">
                    <div className="col-span-8 ">
                        {/* <p>{project.description}</p> */}
                        <ProjectContent slug={params.slug} project={project} />
                    </div>
                    <ProjectInfo {...project} />
                </div>
            </div>
        </article>
    );
}
