import { About } from '@/components/sections/about';
import { Hero } from '@/components/sections/hero';
import { Separator } from '@/components/sections/separator';

export default function Home() {
    return (
        <main className="min-h-screen selection:bg-main selection:text-foreground">
            <Hero />
            <Separator />
            <About />
        </main>
    );
}
