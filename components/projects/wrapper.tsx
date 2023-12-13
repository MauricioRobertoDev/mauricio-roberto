import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export function ProjectWrapper({ children }: PropsWithChildren) {
    return (
        <div
            className={cn(
                'relative flex max-w-[600px] flex-col items-start justify-between p-6 rounded-xl bg-secondary min-h-[300px] group overflow-hidden max-h-[500px] space-y-8 hover:bg-main transition-colors duration-300',
            )}
        >
            {children}
        </div>
    );
}
