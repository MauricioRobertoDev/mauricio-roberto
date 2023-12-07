import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import { Icons } from '../icons';

export function HeroSocial({ className }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'flex flex-row items-center justify-center gap-4 text-muted-foreground',
                className,
            )}
        >
            <a
                href={siteConfig.links.github}
                className="group"
                rel="noreferrer noopener"
                target="_blank"
                aria-labelledby="link-for-github"
                role="link"
            >
                <Icons.github className="w-5 h-5 group-hover:text-main" />
            </a>

            <a
                href={siteConfig.links.youtube}
                className="group"
                rel="noreferrer noopener"
                target="_blank"
                aria-labelledby="link-for-youtube"
                role="link"
            >
                <Icons.Youtube className="w-5 h-5 group-hover:text-main" />
            </a>
            <a
                href={siteConfig.links.whatsapp}
                className="group"
                rel="noreferrer noopener"
                target="_blank"
                aria-labelledby="link-for-whatsapp"
                role="link"
            >
                <Icons.whatsapp className="w-4 h-4 group-hover:text-main" />
            </a>
            <p id="link-for-github" className="sr-only">
                link para o github
            </p>
            <p id="link-for-youtube" className="sr-only">
                link para o youtube
            </p>
            <p id="link-for-whatsapp" className="sr-only">
                link para o whatsapp
            </p>
        </div>
    );
}
