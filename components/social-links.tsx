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
            <a
                href={siteConfig.links.twitter}
                className="group"
                rel="noreferrer noopener"
                target="_blank"
                aria-labelledby="link-for-twitter"
                role="link"
            >
                <Icons.Twitter className="w-5 h-5 group-hover:text-main" />
            </a>
            <p id="link-for-github" className="sr-only">
                link para o github
            </p>
            <p id="link-for-youtube" className="sr-only">
                link para o youtube
            </p>
            <p id="link-for-twitter" className="sr-only">
                link para o twitter
            </p>
            <p id="link-for-whatsapp" className="sr-only">
                link para o whatsapp
            </p>
        </div>
    );
}
