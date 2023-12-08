import { cn } from '@/lib/utils';
import { Icons } from './icons';

export function MacWindowBar({ url, className }: { url?: string; className?: string }) {
    return (
        <div
            className={cn(
                'border-b px-5 flex items-center  justify-between py-2 bg-background rounded-tr-lg rounded-tl-lg gap-4',
                className,
            )}
        >
            {/* dots */}
            <div className="flex gap-3">
                <div className="flex gap-2 items-center">
                    <div className="h-3 w-3 rounded-full bg-[#EE6A5F]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#F5BD4F]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#61C454]"></div>
                </div>
                <div className="hidden md:flex">
                    <span className="h-6 w-6 flex items-center justify-center">
                        <Icons.chevronLeft className="h-4 w-4" />
                    </span>
                    <span className="h-6 w-6 flex items-center justify-center text-muted-foreground">
                        <Icons.chevronLeft className="rotate-180 h-4 w-4" />
                    </span>
                </div>
            </div>
            {/* search */}
            <div className="flex gap-3 text-foreground items-center w-full md:w-1/2">
                <Icons.semiShield className="hidden md:block text-muted-foreground" />
                <div className="bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs flex items-center justify-between w-full px-3 py-2 rounded-lg gap-3">
                    <div></div>
                    {url ?? 'mauricioroberto.com'}
                    <Icons.undo className="h-4 w-4" />
                </div>
            </div>
            {/* plus */}
            <div className="hidden md:flex  gap-2 text-muted-foreground">
                <span className="h-6 w-6 flex items-center justify-center">
                    <Icons.plus />
                </span>
                <span className="h-6 w-6 flex items-center justify-center ">
                    <Icons.copy />
                </span>
            </div>
        </div>
    );
}
