'use client';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './button';

export function BackTopButton() {
    const [backTop, setBackTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            window.scrollY > 100 ? setBackTop(true) : setBackTop(false);
        });
    });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
            {backTop && (
                <Button
                    onClick={() => scrollToTop()}
                    variant="outline"
                    size="icon"
                    className="fixed z-50 flex items-center justify-center w-12 h-12 text-white rounded-full text-background bg-main bottom-4 right-4"
                >
                    <ArrowUp />
                </Button>
            )}
        </>
    );
}
