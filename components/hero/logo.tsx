import { Icons } from '../icons';

export function HeroLogo() {
    return (
        <div className="absolute z-0 flex items-center justify-center">
            <div className="absolute w-40 rounded-full opacity-75 lg:w-80 xl:w-96 md:w-60 aspect-square bg-main blur-2xl md:blur-3xl"></div>
            <Icons.Logo className="absolute w-32 md:w-48 lg:w-80 xl:w-96 fill-foreground aspect-square" />
        </div>
    );
}
