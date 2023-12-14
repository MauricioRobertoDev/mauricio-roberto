import { HeroLogo } from './logo';
import { HeroTitle } from './title';

export function Hero() {
    return (
        <section id="hero" className="relative w-full pt-16 overflow-hidden lg:h-screen">
            <div className="container relative flex flex-col items-center justify-center px-4 py-20 md:py-24 lg:h-full">
                <HeroLogo />
                <HeroTitle />
            </div>
        </section>
    );
}
