'use client';
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export function MenuWrapper({ children }: PropsWithChildren) {
    return (
        <header
            className={cn(
                'fixed top-0 z-50 w-full bg-background/70 backdrop-blur-200 transition-all duration-300 transform',
            )}
        >
            <div className="container flex items-center justify-between h-16 px-4">{children}</div>
        </header>
    );
}
