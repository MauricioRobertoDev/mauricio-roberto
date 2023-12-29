import { siteConfig } from '@/config/site';
import { HTMLAttributes } from 'react';
import { Icons } from './icons';

export function SocialLinks(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className="absolute bottom-0 flex-col items-center justify-start hidden gap-5 mx-0 text-muted-foreground w-min md:flex"
            {...props}
        >
            <a
                href={siteConfig.links.github}
                className="group"
                rel="noreferrer noopener"
                target="_blank"
                aria-label="link para o github"
                role="link"
            >
                <Icons.github className="w-5 h-5 group-hover:text-main" />
            </a>

            <a
                href={siteConfig.links.youtube}
                className="group"
                rel="noreferrer noopener"
                target="_blank"
                aria-label="link para o youtube"
                role="link"
            >
                <Icons.Youtube className="w-5 h-5 group-hover:text-main" />
            </a>
            <a
                href={siteConfig.links.whatsapp}
                className="group"
                rel="noreferrer noopener"
                target="_blank"
                aria-label="link para o whatsapp"
                role="link"
            >
                <Icons.whatsapp className="w-4 h-4 group-hover:text-main" />
            </a>
            <a
                href={siteConfig.links.twitter}
                className="group"
                rel="noreferrer noopener"
                target="_blank"
                aria-label="link para o twitter"
                role="link"
            >
                <Icons.Twitter className="w-5 h-5 group-hover:text-main" />
            </a>
        </div>
    );
}
