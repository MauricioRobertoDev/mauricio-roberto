import { About } from '@/components/about';
import { Hero } from '@/components/hero';
import { Technologies } from '@/components/technologies';

export default function Home() {
    return (
        <>
            <main className="min-h-screen selection:bg-main selection:text-foreground">
                <Hero />
                <About />
                <Technologies />
            </main>
        </>
    );
}
