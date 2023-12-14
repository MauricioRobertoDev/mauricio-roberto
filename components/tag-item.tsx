import { technologies } from '@/data/technologies';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Icons } from './icons';

export function TagItem({
    tag,
    to,
    children,
    className,
}: {
    tag: string;
    to: 'projetos' | 'posts';
    children?: ReactNode;
    className?: string;
}) {
    const tech = technologies[tag];

    return (
        <Link
            href={`/${to}?tag=${tag}`}
            className={cn(
                'inline-flex items-center justify-center px-3 py-2 text-sm font-medium transition-colors rounded-md group text-foreground whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary hover:bg-secondary/80 w-min',
                className,
            )}
        >
            <span className="text-sm border-muted-foreground/40">{tech}</span>
            <Icons.ArrowUp className="w-0 h-0 ml-0 transition-all duration-300 rotate-90 group-hover:ml-2 group-hover:w-4 group-hover:h-4" />
            {children}
        </Link>
    );
}
