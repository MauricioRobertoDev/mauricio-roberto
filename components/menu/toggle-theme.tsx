'use client';
import { Icons } from '@/components/icons';
import { Button, ButtonProps } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export function ToggleTheme(props: ButtonProps) {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme && theme == 'light' ? 'dark' : 'light')}
            {...props}
        >
            <Icons.Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Icons.Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Mudar tema</span>
        </Button>
    );
}
