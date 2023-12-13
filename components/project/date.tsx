import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Icons } from '../icons';

export function ProjectDate({
    publishedAt,
    readingTime,
}: {
    publishedAt: string;
    readingTime: {
        minutes: number;
        words: number;
        text: string;
    };
}) {
    return (
        <div className="absolute flex items-center gap-2 px-3 text-sm -bottom-2 w-min md:gap-4 text-muted-foreground bg-background md:left-4">
            <p className="flex items-center gap-2 whitespace-nowrap">
                <Icons.time />
                {readingTime.text}
            </p>
            <p className="flex items-center gap-2 whitespace-nowrap">
                <Icons.calendar />
                {format(new Date(publishedAt), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
            </p>
        </div>
    );
}
