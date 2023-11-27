import { Icons } from '@/components/icons';
import { MainNav } from '@/components/menu/main-nav';
import { links } from '@/config/menu';
import Link from 'next/link';

export function Menu() {
    return (
        <header className="fixed top-0 z-50 w-full bg-background">
            <div className="container flex items-center justify-between h-16 px-4 py-4">
                <Link href="/">
                    <Icons.logo className="text-foreground h-8 w-8" />
                </Link>
                <MainNav items={links} />
            </div>
        </header>
    );
}
