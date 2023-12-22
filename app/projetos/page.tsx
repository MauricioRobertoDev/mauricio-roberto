import { Icons } from '@/components/icons';
import { TagItem } from '@/components/tag-item';
import { siteConfig } from '@/config/site';
import { getDefaultOgImages, getProjectsWithTag, sortProjects } from '@/lib/utils';
import { allProjects } from 'contentlayer/generated';
import { Metadata } from 'next';
import Link from 'next/link';

const title = 'Projetos';
const description =
    'Explore minha carteira de projetos de desenvolvimento, abrangendo tecnologias modernas e soluções inovadoras. Desde aplicativos web responsivos até sistemas robustos, descubra como transformo ideias em realidade. Conheça meu trabalho agora';
const url = siteConfig.url + '/projetos';

const ogImages = getDefaultOgImages(title);

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
        title,
        description,
        url,
        siteName: siteConfig.name,
        images: ogImages,
        locale: 'pt_BR',
        type: 'website',
    },
    authors: {
        name: siteConfig.author,
        url: siteConfig.url,
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: ogImages,
        creator: '@imauriciodev',
    },
};

export default function Page({ searchParams }: { searchParams: { tag?: string } }) {
    const { tag } = searchParams;
    const projects = sortProjects(tag ? getProjectsWithTag(allProjects, tag) : allProjects);
    const hasProjects = projects.length > 0;
    return (
        <div className="flex-1 w-full min-h-screen gap-4 pt-16">
            <div className="container px-4 mx-auto">
                <div className=" py-4 md:min-h-[200px] flex flex-col items-start justify-center">
                    <h1 className="text-2xl font-bold md:text-5xl ">
                        Projetos {tag && `com a tag: "${tag}"`}
                    </h1>
                    <p className="text-muted-foreground">Todos os projetos.</p>
                </div>
                {!hasProjects && (
                    <div className="py-8 text-lg md:text-2xl">
                        {tag && <h2>Infelizmente não tenho nenhum projeto com esta tag. :(</h2>}
                        {!tag && <h2>Infelizmente não tenho nenhum projeto ainda. :(</h2>}
                    </div>
                )}
                {hasProjects && (
                    <div className="grid w-full gap-10 md:grid-cols-2">
                        {projects.map((project, index) => (
                            <div
                                key={`project-${index}`}
                                className="w-full p-4 space-y-4 border rounded-lg md:p-6"
                            >
                                <h2 className="text-lg font-bold">{project.title}</h2>
                                <p className="text-muted-foreground">{project.description}</p>
                                {project.tags && (
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <TagItem
                                                key={`tag-${tag}-${index}`}
                                                to="projetos"
                                                tag={tag}
                                            />
                                        ))}
                                    </div>
                                )}
                                <div className="flex flex-wrap gap-4 pt-10">
                                    <Link
                                        href={project.url}
                                        className="flex items-center gap-2 transition-transform duration-300 hover:text-main hover:scale-105"
                                    >
                                        Ver mais
                                        <Icons.ArrowUp className="w-4 h-4 rotate-90" />
                                    </Link>
                                    {project.preview && (
                                        <Link
                                            href={project.preview}
                                            rel="noreferrer noopener"
                                            target="_blank"
                                            role="link"
                                            aria-label="link para o preview"
                                            className="flex items-center gap-2 transition-transform duration-300 hover:text-main hover:scale-105"
                                        >
                                            Preview
                                            <Icons.external />
                                        </Link>
                                    )}
                                    {project.github && (
                                        <Link
                                            rel="noreferrer noopener"
                                            target="_blank"
                                            role="link"
                                            aria-label="link para o github"
                                            href={project.github}
                                            className="flex items-center gap-2 transition-transform duration-300 hover:text-main hover:scale-105"
                                        >
                                            Github
                                            <Icons.external />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
