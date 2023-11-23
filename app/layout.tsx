import { ThemeProvider } from '@/components/theme-provider';
import Logo from '@/components/ui/logo';
import { MainNav } from '@/components/ui/main-nav';
import { dashboardConfig } from '@/config/dashboard';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Viewport } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
});

const fontHeading = localFont({
    src: '../assets/fonts/Head-Black.woff2',
    variable: '--font-heading',
});

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
};

export const metadata = {
    metadataBase: new URL('https://mauricioroberto.com'),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        'Desenvolvedor',
        'Programador',
        'Júnior',
        'Freelancer',
        'PHP',
        'ReactJS',
        'Javascript',
        'Typescript',
        'Laravel',
    ],
    authors: [
        {
            name: 'Mauricio Roberto',
            url: 'https://mauricioroberto.com',
        },
    ],
    creator: 'Mauricio Roberto',

    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og.jpg`],
        creator: '@imauriciodev',
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <body
                className={cn(
                    'min-h-screen bg-background antialiased font-sans',
                    inter.variable,
                    fontHeading.variable,
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <header className="fixed top-0 z-40 w-full border-b bg-background">
                        <div className="container flex items-center justify-between h-16 px-4 py-4">
                            <Logo />
                            <MainNav items={dashboardConfig.mainNav} />
                        </div>
                    </header>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
