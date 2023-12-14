import { TagItem } from '../tag-item';

export function ProjectTags({ tags }: { tags: string[] }) {
    return (
        <div className="w-full space-x-4 overflow-x-auto whitespace-nowrap">
            {tags.map((tag) => (
                <TagItem to="projetos" tag={tag} key={`tag-${tag}`} />
            ))}
        </div>
    );
}
