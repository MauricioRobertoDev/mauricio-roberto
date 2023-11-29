'use client';
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/menu/main-nav';
import { links } from '@/config/menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Menu() {
    const [scrollY, setScrollY] = useState({ current: 0, last: 0, show: true });

    useEffect(() => {
        function handleWithScroll() {
            setScrollY((prev) => {
                return {
                    last: prev.current,
                    current: window.scrollY,
                    show: prev.current - window.scrollY > 0,
                };
            });
        }

        window.addEventListener('scroll', handleWithScroll);

        return () => {
            window.removeEventListener('scroll', handleWithScroll);
        };
    });

    return (
        <header
            className={cn(
                'fixed top-0 z-50 w-full bg-background transition-all duration-300 transform',
                scrollY.show ? 'top-0 opacity-100' : '-top-full opacity-0',
            )}
        >
            <div className="container flex items-center justify-between h-16 px-4 py-4">
                <Link
                    href="/"
                    className="z-50 md:animate-none md:animate-in md:slide-in-from-top-full"
                    aria-labelledby="link-for-home"
                    role="link"
                    tabIndex={0}
                >
                    <Icons.Logo className="w-8 h-8 text-foreground" />
                </Link>
                <p id="link-for-home" className="sr-only">
                    link para home do site
                </p>
                <MainNav items={links} />
            </div>
        </header>
    );
}
