import { HeroLogo } from './logo';
import { HeroSocial } from './social';
import { HeroTitle } from './title';

export function Hero() {
    return (
        <section id="hero" className="relative w-full pt-16 overflow-hidden lg:h-screen">
            <div className="container relative flex flex-col items-center justify-center px-4 py-20 md:py-24 lg:h-full">
                <HeroLogo />
                <HeroSocial className="absolute hidden bottom-32 md:flex !text-muted-foreground/50" />
                <HeroTitle />
            </div>
        </section>
    );
}
