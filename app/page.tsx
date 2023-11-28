import { Hero } from '@/components/hero';

export default function Home() {
    return (
        <>
            <main className="min-h-screen selection:bg-main selection:text-foreground">
                <Hero />
                <div className="w-full h-screen bg-blue-500"></div>
                <div className="w-full h-screen bg-green-500"></div>
                <div className="w-full h-screen bg-blue-500"></div>
            </main>
        </>
    );
}
