import { cn } from '@/lib/utils';
import { Icons } from '../icons';

export function ContactSocialLink({
    text,
    href,
    icon,
}: {
    text: string;
    href: string;
    icon: keyof typeof Icons;
}) {
    const Icon = Icons[icon];
    return (
        <a
            href={href}
            target="__blank"
            rel="noreferrer noopener"
            role="link"
            className={cn(`
                inline-flex items-center text-sm md:text-base justify-start whitespace-nowrap rounded-md font-medium disabled:pointer-events-none disabled:opacity-50
                hover:bg-accent hover:text-accent-foreground px-4 gap-2 h-10 md:h-12 group hover:scale-110 transition-all duration-300
            `)}
        >
            <Icon className="w-5 h-5 " />
            {text}
            <Icons.external className="w-4 h-4 group-hover:rotate-[360deg] transition-transform duration-300" />
        </a>
    );
}
