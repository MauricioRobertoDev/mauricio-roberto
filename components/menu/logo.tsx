import { Icons } from '@/components/icons';
import Link from 'next/link';

export function MenuLogo() {
    return (
        <>
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
        </>
    );
}
