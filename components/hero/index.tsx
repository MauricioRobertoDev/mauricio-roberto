import { siteConfig } from '@/config/site';
import { Icons } from '../icons';

export function Hero() {
    return (
        <section id="hero" className="w-full pt-16 lg:h-screen">
            <div className="container relative flex flex-col items-center justify-center px-4 py-20 md:py-24 lg:h-full">
                <div className="absolute z-0 flex items-center justify-center">
                    <div className="absolute w-40 rounded-full opacity-75 lg:w-80 xl:w-96 md:w-60 aspect-square bg-main blur-2xl md:blur-3xl"></div>
                    <Icons.Logo className="absolute w-32 md:w-48 lg:w-80 xl:w-96 fill-foreground aspect-square" />
                </div>
                <h1 className="z-30 flex flex-col items-center -space-y-4 uppercase sm:-space-y-5 md:-space-y-7 lg:-space-y-8 xl:-space-y-10">
                    <div className="flex flex-col items-start -space-y-2 lg:-space-y-3 xl:-space-y-4">
                        <span className="font-black text-md lg:text-2xl xl:text-3xl whitespace-nowrap font-heading">
                            <span className="animate-waving-hand">👋</span>
                            Olá eu sou
                        </span>
                        <span className="flex flex-col -space-y-2 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl xl:-space-y-6 lg:-space-y-4 font-heading text-main">
                            <span>Maurício</span>
                            <span>Roberto</span>
                        </span>
                    </div>
                    <div className="relative flex flex-col items-start -space-y-2 lg:-space-y-3 xl:-space-y-4">
                        <span className="flex items-center gap-4 text-xs font-black sm:text-sm md:text-lg lg:text-2xl xl:text-3xl whitespace-nowrap font-heading">
                            aspirante a
                        </span>
                        <span className="flex flex-col -space-y-2 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl xl:-space-y-6 lg:-space-y-4 font-heading text-main">
                            <span>Desenvolvedor</span>
                            <span>Junior</span>
                        </span>
                    </div>
                </h1>
                <div className="absolute bottom-0 left-0 flex-col items-center justify-between hidden gap-5 text-muted-foreground w-min md:flex">
                    <a href={siteConfig.links.github} className="group">
                        <Icons.gitHub className="w-5 h-5 group-hover:text-main" />
                    </a>
                    <a href={siteConfig.links.youtube} className="group">
                        <Icons.Youtube className="w-5 h-5 group-hover:text-main" />
                    </a>
                    <a href={siteConfig.links.whatsapp} className="group">
                        <Icons.whatsapp className="w-4 h-4 group-hover:text-main" />
                    </a>
                    <a href={siteConfig.links.twitter} className="group">
                        <Icons.Twitter className="w-5 h-5 group-hover:text-main" />
                    </a>
                    <div className="w-0.5 rounded-full h-12 bg-muted-foreground"></div>
                </div>
            </div>
        </section>
    );
}
