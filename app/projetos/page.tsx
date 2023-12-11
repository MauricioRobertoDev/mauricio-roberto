import { sortProjects } from '@/lib/utils';
import { allProjects } from 'contentlayer/generated';
import Link from 'next/link';

export default function Page() {
    const projects = sortProjects(allProjects);
    return (
        <div className="flex flex-col items-center justify-center flex-1 w-full h-screen gap-4">
            {projects.map((project, index) => (
                <Link href={project.url} key={`project-${index}`}>
                    {project.title}
                </Link>
            ))}
        </div>
    );
}
