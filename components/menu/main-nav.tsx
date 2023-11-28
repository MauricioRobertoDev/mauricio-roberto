'use client';
import { Icons } from '@/components/icons';
import { ToggleTheme } from '@/components/menu/toggle-theme';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { MainNavItem } from '@/types';
import Link from 'next/link';
import * as React from 'react';

interface MainNavProps {
    items?: MainNavItem[];
    children?: React.ReactNode;
}

export function MainNav({ items }: MainNavProps) {
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

    return (
        <div className="flex gap-4 ">
            {items?.length ? (
                <nav
                    className={cn(
                        'gap-6 flex flex-col md:flex-row h-screen md:h-full items-center justify-center transition-all duration-300 transform  inset-0 top-16 bg-background  w-full px-4 md:px-0',
                        'shadow-md md:shadow-none animate-in slide-in-from-right-full md:animate-none md:animate-in md:slide-in-from-top-full w-full fixed md:static inset-0 ',
                        showMobileMenu ? 'left-0' : 'left-full',
                    )}
                >
                    {items?.map((item, index) => (
                        <Link
                            key={index}
                            href={item.disabled ? '#' : item.href}
                            className={cn(
                                'flex items-center text-lg md:text-sm  w-min font-medium transition-colors hover:text-foreground text-foreground/70  justify-center',
                                'after:hover:scale-x-100 after:scale-x-0 after:block block after:border-b-2 after:border-foreground after:transition after:duration-300',
                                item.disabled && 'cursor-not-allowed opacity-80',
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                    <a href={siteConfig.links.github} target="__blank">
                        <Button className="gap-2 text-lg md:text-sm">
                            <Icons.gitHub className="w-6 h-5 md:h-4 md:w-4" />
                            Github
                        </Button>
                    </a>
                </nav>
            ) : null}

            <div className="flex gap-1">
                <ToggleTheme className="z-50  md:animate-none md:animate-in md:slide-in-from-top-full" />
                <Button
                    variant="outline"
                    size="icon"
                    className="z-50 md:hidden"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    aria-label="abrir ou fechar menu"
                >
                    {showMobileMenu ? <Icons.X /> : <Icons.Menu />}
                </Button>
            </div>
        </div>
    );
}
