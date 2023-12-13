import { About } from '@/components/about';
import { BackTopButton } from '@/components/back-top-button';
import { Contact } from '@/components/contact';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Technologies } from '@/components/technologies';

export default function Home() {
    return (
        <>
            <main className="min-h-screen selection:bg-main selection:text-foreground">
                <Hero />
                <About />
                <Technologies />
                <Projects />
                <Contact />
                <BackTopButton />
            </main>
        </>
    );
}
