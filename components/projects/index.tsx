'use client';
import { getFeaturedProjects, sortProjects } from '@/lib/utils';
import { allProjects } from 'contentlayer/generated';
import Link from 'next/link';
import { Icons } from '../icons';
import { Button } from '../ui/button';
import { ProjectImage } from './image';
import { ProductOverlay } from './overlay';
import { ProjectWrapper } from './wrapper';

export function Projects() {
    const projects = sortProjects(getFeaturedProjects(allProjects));
    return (
        <section id="projetos" className="px-4">
            <div className="container px-0 py-10 border-t md:mx-auto md:py-20">
                <div className="w-full max-w-6xl mx-auto text-left">
                    <div className="flex items-center justify-between w-full mb-6">
                        <h2 className="text-3xl font-bold md:text-4xl">Projetos</h2>
                        <Link href="/projetos" className="">
                            <Button
                                variant="ghost"
                                className="gap-2 transition-transform duration-300 group hover:scale-105"
                            >
                                Ver todos
                                <Icons.ArrowUp className="h-4 w-4 rotate-90 group-hover:rotate-[450deg] transition-transform duration-300" />
                            </Button>
                        </Link>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {projects.map((project, index) => (
                            <ProjectWrapper key={`project-${index}`}>
                                <span className="text-xs uppercase">Destaque</span>
                                <div className="space-y-3">
                                    <h3 className="text-lg font-bold md:text-2xl">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground group-hover:!text-foreground/75 transition-colors duration-300">
                                        {project.description}
                                    </p>
                                </div>
                                {project.image && <ProjectImage image={project.image} />}
                                {(project.preview || project.github) && (
                                    <ProductOverlay
                                        github={project.github}
                                        preview={project.preview}
                                        details={project.url}
                                    />
                                )}
                            </ProjectWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
