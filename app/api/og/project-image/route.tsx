import { OpImageDefaultRectangle } from '@/components/op/default-rectangle';
import { OpImageDefaultSquare } from '@/components/op/default-square';
import { OpImageProject } from '@/components/op/project';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

const Inter400 = fetch(new URL('../../../../assets/fonts/Inter-Regular.ttf', import.meta.url)).then(
    (res) => res.arrayBuffer(),
);

const Inter700 = fetch(new URL('../../../../assets/fonts/Inter-Bold.ttf', import.meta.url)).then(
    (res) => res.arrayBuffer(),
);

export const runtime = 'edge';

export async function GET(request: NextRequest) {
    try {
        const projectProps = getProjectProps(request);
        const { width, height, isSquare } = getDimensions(request);

        const element = (() => {
            if (isSquare) return <OpImageDefaultSquare height={height} width={width} />;
            if (projectProps) return <OpImageProject {...projectProps} />;
            return <OpImageDefaultRectangle />;
        })();

        return new ImageResponse(element, {
            width,
            height,
            fonts: [
                {
                    data: await Inter400,
                    name: 'Inter',
                    style: 'normal',
                    weight: 400,
                },
                {
                    data: await Inter700,
                    name: 'Inter',
                    style: 'normal',
                    weight: 800,
                },
            ],
        });
    } catch {
        return new Response(`Failed to generate the image`, { status: 500 });
    }
}

function getProjectProps(request: NextRequest): ProjectProps | null {
    const url = new URL(request.url.replaceAll('&amp%3B', '&').replaceAll('&amp;', ''));

    const title = url.searchParams.get('title');
    let date = url.searchParams.get('date');
    if (date) date = format(new Date(date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
    const tags = url.searchParams.get('tags')?.split(',') ?? [];
    // console.log('tags:', url.searchParams.get('tags'));
    if (!title || !date) return null;

    return { title, date, tags };
}

function getDimensions(request: NextRequest): Dimensions {
    const url = new URL(request.url.replace('&amp%3B', '&').replace('&amp;', ''));
    const aspect = url.searchParams.get('aspect');
    switch (aspect) {
        case '1/1':
            return { width: 1200, height: 1200, isSquare: true };
        case '2/1':
            return { width: 1200, height: 600, isSquare: false };
        case '4/3':
            return { width: 1200, height: 900, isSquare: false };
        case '16/9':
            return { width: 1200, height: 675, isSquare: false };
        default: // 1.9/1
            return { width: 1200, height: 630, isSquare: false };
    }
}

type ProjectProps = {
    title: string;
    date: string;
    tags: string[];
};

type Dimensions = {
    width: number;
    height: number;
    isSquare: boolean;
};
