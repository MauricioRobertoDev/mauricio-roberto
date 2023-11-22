import { ArrowDown } from 'lucide-react';
import Logo from '../ui/logo';

export function Hero() {
    return (
        <section id="hero" className="w-full md:h-screen pt-16">
            <div className="container relative flex flex-col items-start md:items-center justify-center h-fit md:h-full mx-auto overflow-hidden px-4 py-20">
                <div className="hidden  md:absolute md:flex items-center justify-center">
                    <div className="absolute w-96 h-96 scale-[.2] md:scale-[.7] rounded-full aspect-square bg-main  opacity-50 blur-3xl"></div>
                    <Logo className="absolute  aspect-square w-96 scale-[.15] md:scale-[.7] lg:scale-100" />
                </div>
                <h1 className="md:absolute md:block flex flex-col items-start justify-center text-5xl md:text-8xl lg:text-9xl leading-title font-heading uppercase font-black bg-clip-text text-transparent bg-main z-10">
                    <span className="grid place-items-center ">
                        <span className="md:grid place-items-start mb-2 md:mb-0 leading-title">
                            <span className="flex items-center gap-2 text-xl md:text-2xl text-black dark:text-white text-start w-fit mb-2 md:mb-0">
                                <span className="animate-waving-hand">👋</span>
                                Olá eu sou
                            </span>
                            Maurício <br />
                            Roberto <br />
                        </span>
                    </span>
                    <span className="md:absolute font-sans text-xl md:text-2xl text-black dark:text-white left-2 bottom-40 lg:bottom-56 flex-nowrap whitespace-nowrap">
                        aspirante a
                    </span>
                    <div className="leading-title">
                        Desenvolvedor <br />
                        Junior
                    </div>
                </h1>
                <div className="hidden absolute left-0 md:flex items-center justify-between w-full px-4 bottom-6">
                    <ArrowDown className="w-10 h-10 stroke-2 animate-bounce dark:text-white/20 text-black/20" />
                </div>
            </div>
        </section>
    );
}
