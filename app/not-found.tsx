import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-4 text-center">
            <p className="relative z-10 flex items-center justify-center font-black text-transparent text-10xl leading-title font-heading bg-clip-text bg-main">
                404
                <div className="absolute w-full h-2 bg-foreground"></div>
            </p>
            <h2 className="z-10 text-3xl font-bold text-foreground font-heading">
                Ops, Página não encontrada
            </h2>
            <Link href="/" className="z-10">
                <Button>Página inicial</Button>
            </Link>
        </div>
    );
}
