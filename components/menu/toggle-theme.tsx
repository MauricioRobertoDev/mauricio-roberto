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
            <Icons.Moon className="w-5 h-5 dark:hidden" />
            <Icons.Sun className="hidden w-5 h-5 dark:block" />
            <span className="sr-only">Mudar tema</span>
        </Button>
    );
}
