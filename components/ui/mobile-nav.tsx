import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { MainNavItem } from '@/types';
import { Button } from './button';

interface MobileNavProps {
    items: MainNavItem[];
    children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
    return (
        <div
            className={cn(
                'fixed border border-red-500 inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-0 pb-32 shadow-md animate-in slide-in-from-top-20 md:hidden',
            )}
        >
            <div className="relative grid gap-6 p-4 border rounded-md shadow-md -z-20 bg-popover text-popover-foreground">
                <nav className="grid grid-flow-row text-sm auto-rows-max">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.disabled ? '#' : item.href}
                            className={cn(
                                'flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline',
                                item.disabled && 'cursor-not-allowed opacity-60',
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                    <a href="https://github.com/mauriciorobertodev" target="__blank">
                        <Button className="gap-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            Github
                        </Button>
                    </a>
                </nav>
                {children}
            </div>
        </div>
    );
}
