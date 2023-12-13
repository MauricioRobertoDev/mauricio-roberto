import { ProjectTag } from './tag';

export function ProjectTags({ tags }: { tags: string[] }) {
    return (
        <div className="w-full space-x-4 overflow-x-auto whitespace-nowrap">
            {tags.map((tag) => (
                <ProjectTag tag={tag} key={`tag-${tag}`} />
            ))}
        </div>
    );
}
