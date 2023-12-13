import { technologies } from '@/data/technologies';
import Link from 'next/link';
import { IconIndex, Icons } from '../icons';

export function ProjectTag({ tag }: { tag: string }) {
    const tech = technologies[tag];
    const Icon = Icons[tag as IconIndex];

    return (
        <Link
            href={`/produtos?tag=${tag}`}
            className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium transition-colors rounded-md group text-foreground whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary hover:bg-secondary/80 w-min"
        >
            <Icon className="w-7 h-7 aspect-square" />
            <span className="pl-2 ml-2 border-l border-muted-foreground/40">{tech}</span>
            <Icons.external className="w-0 h-0 ml-0 transition-all duration-300 group-hover:ml-2 group-hover:w-4 group-hover:h-4" />
        </Link>
    );
}
