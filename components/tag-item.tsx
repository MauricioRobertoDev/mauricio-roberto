import { technologies } from '@/data/technologies';
import Link from 'next/link';
import { Icons } from './icons';

export function TagItem({ tag }: { tag: string }) {
    const tech = technologies[tag];

    return (
        <Link
            href={`/projetos?tag=${tag}`}
            className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium transition-colors rounded-md group text-foreground whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary hover:bg-secondary/80 w-min"
        >
            <span className="text-sm border-muted-foreground/40"># {tech}</span>
            <Icons.ArrowUp className="w-0 h-0 ml-0 transition-all duration-300 rotate-90 group-hover:ml-2 group-hover:w-4 group-hover:h-4" />
        </Link>
    );
}
