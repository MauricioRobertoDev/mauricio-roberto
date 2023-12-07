'use client';
import { Icons } from '@/components/icons';
import { ToggleTheme } from '@/components/toggle-theme';
import { Button } from '@/components/ui/button';
import { links } from '@/config/menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';
import { SocialLinks } from '../social-links';

export function MenuNavbar() {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    function toggleMobileMenu() {
        setShowMobileMenu(!showMobileMenu);
    }

    return (
        <div className="flex items-center gap-4">
            <nav
                className={cn(
                    `	
						bg-background md:bg-transparent md:gap-6 gap-2 flex flex-col md:flex-row h-screen md:h-full 
						items-start justify-end transition-all duration-300 transform top-16 w-full 
						px-4 md:px-0 shadow-md md:shadow-none animate-in slide-in-from-right-full 
						md:animate-none md:animate-in md:slide-in-from-top-full fixed md:static inset-0
                        pb-6 md:pb-0
					`,
                    showMobileMenu ? 'left-0' : 'left-full',
                )}
                data-mobile={showMobileMenu}
            >
                {links.map((item, index) => (
                    <Link
                        onClick={toggleMobileMenu}
                        href={item.disabled ? '#' : item.href}
                        key={index}
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
                <SocialLinks className="flex flex-row items-center w-full gap-6 pt-4 md:hidden text-muted-foreground" />
            </nav>

            <div className="flex gap-1">
                <ToggleTheme className="z-50 md:animate-none md:animate-in md:slide-in-from-top-full" />
                <Button
                    variant="ghost"
                    size="icon"
                    className="z-50 md:hidden"
                    onClick={toggleMobileMenu}
                    aria-label="abrir ou fechar menu"
                >
                    {showMobileMenu ? <Icons.X /> : <Icons.Menu />}
                </Button>
            </div>
        </div>
    );
}
