import Image from 'next/image';
import { MacWindowBar } from '../mac-window-bar';

export function ProjectImage({ image }: { image: string }) {
    return (
        <div className="relative w-full h-full transition-all duration-300 group-hover:rotate-6 ">
            <MacWindowBar className="" />
            <Image src={image} width={960} height={540} alt="projeto" />
        </div>
    );
}
