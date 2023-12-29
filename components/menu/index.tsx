import { links } from '@/config/menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { MenuLogo } from './logo';
import { MenuNavbar } from './navbar';
import { MenuWrapper } from './wrapper';

export function Menu() {
    return (
        <MenuWrapper>
            <MenuLogo />
            <MenuNavbar>
                {links.map((item, index) => (
                    <Link
                        href={item.disabled ? '#' : '/' + item.href}
                        key={index}
                        role="menuitem"
                        className={cn(
                            `
                                items-center text-4xl py-2 md:py-0 font-bold md:font-normal md:text-sm w-min transition-colors hover:text-foreground text-foreground 
                                md:text-foreground/70 justify-center after:hover:scale-x-100 after:scale-x-0 after:block block after:border-b-2 after:border-foreground 
                                after:transition after:duration-300 group
                            `,
                            item.disabled && 'cursor-not-allowed opacity-80',
                        )}
                    >
                        <span className="flex gap-2 whitespace-nowrap"># {item.title}</span>
                    </Link>
                ))}
            </MenuNavbar>
        </MenuWrapper>
    );
}
