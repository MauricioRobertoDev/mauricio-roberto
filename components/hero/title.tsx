import { HTMLAttributes } from 'react';

export function HeroTitle(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <h1
            className="z-30 flex flex-col items-center -space-y-4 uppercase sm:-space-y-5 md:-space-y-7 lg:-space-y-8 xl:-space-y-10"
            {...props}
        >
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
                <span className="flex items-center gap-4 text-xs font-black sm:text-sm md:text-lg lg:text-2xl xl:text-3xl whitespace-nowrap ">
                    aspirante a
                </span>
                <span className="flex flex-col -space-y-2 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl xl:-space-y-6 lg:-space-y-4 font-heading text-main">
                    <span>Desenvolvedor</span>
                    <span>Junior</span>
                </span>
            </div>
        </h1>
    );
}
