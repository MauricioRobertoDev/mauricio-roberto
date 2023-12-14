'use client';
import { Icons } from '../icons';
import { Button } from '../ui/button';

export function FooterTop() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <Button
            onClick={() => scrollToTop()}
            className="gap-2 transition-transform duration-300 group hover:scale-105"
            variant="ghost"
        >
            Voltar ao topo
            <Icons.ArrowUp className="w-4 h-4 group-hover:rotate-[360deg] transition-transform duration-300" />
        </Button>
    );
}
