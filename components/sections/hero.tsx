import { ArrowDown } from 'lucide-react';
import Logo from '../ui/logo';

export function Hero() {
    return (
        <section id="hero" className="w-full pt-16 md:h-screen">
            <div className="container relative flex flex-col items-start justify-center px-4 py-20 mx-auto overflow-hidden md:items-center h-fit md:h-full">
                <div className="items-center justify-center hidden md:absolute md:flex">
                    <div className="absolute w-96 h-96 scale-[.2] md:scale-[.7] rounded-full aspect-square bg-main  opacity-50 blur-3xl"></div>
                    <Logo className="absolute  aspect-square w-96 scale-[.15] md:scale-[.7] lg:scale-100" />
                </div>
                <h1 className="z-10 flex flex-col items-start justify-center text-5xl font-black text-transparent uppercase md:absolute md:block md:text-8xl lg:text-9xl leading-title font-heading bg-clip-text bg-main">
                    <span className="grid place-items-center ">
                        <span className="mb-2 md:grid place-items-start md:mb-0 leading-title">
                            <span className="flex items-center gap-2 mb-2 text-xl text-black md:text-2xl dark:text-white text-start w-fit md:mb-0">
                                <span className="animate-waving-hand">👋</span>
                                Olá eu sou
                            </span>
                            Maurício <br />
                            Roberto <br />
                        </span>
                    </span>
                    <span className="font-sans text-xl text-black md:absolute md:text-2xl dark:text-white left-2 bottom-40 lg:bottom-56 flex-nowrap whitespace-nowrap">
                        aspirante a
                    </span>
                    <div className="leading-title">
                        Desenvolvedor <br />
                        Junior
                    </div>
                </h1>
                <div className="absolute left-0 items-center justify-between hidden w-full px-4 md:flex bottom-6">
                    <ArrowDown className="w-10 h-10 stroke-2 animate-bounce dark:text-white/20 text-black/20" />
                </div>
            </div>
        </section>
    );
}
