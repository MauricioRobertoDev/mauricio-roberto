'use client';
import { Icons } from '@/components/icons';
import { ToggleTheme } from '@/components/toggle-theme';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PropsWithChildren, useState } from 'react';
import { SocialLinks } from '../social-links';

export function MenuNavbar({ children }: PropsWithChildren) {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    function toggleMobileMenu() {
        setShowMobileMenu(!showMobileMenu);
    }

    return (
        <div className="flex items-center gap-4">
            <nav
                role="menubar"
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
                {children}
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
