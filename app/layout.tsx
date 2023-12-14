import { Analytics } from '@/components/analytics';
import { Footer } from '@/components/footer';
import { Menu } from '@/components/menu';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Viewport } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Suspense } from 'react';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
});

const heading = localFont({
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
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    alternates: {
        canonical: `${siteConfig.url}`,
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
            name: siteConfig.author,
            url: siteConfig.url,
        },
    ],
    creator: siteConfig.author,
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
                    'min-h-screen bg-background antialiased font-sans scroll-smooth scrollbar-thin scrollbar-track-foreground/5 scrollbar-thumb-main',
                    inter.variable,
                    heading.variable,
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Menu />
                    {children}
                    <Footer />
                </ThemeProvider>
                <Suspense>
                    <SpeedInsights />
                    <VercelAnalytics />
                    <Analytics />
                </Suspense>
            </body>
        </html>
    );
}
