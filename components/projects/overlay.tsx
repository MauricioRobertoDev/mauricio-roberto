import Link from 'next/link';
import { Icons } from '../icons';
import { Button } from '../ui/button';

export function ProductOverlay({
    preview,
    github,
    details,
}: {
    preview?: string;
    github?: string;
    details: string;
}) {
    return (
        <div className="absolute left-0 flex items-end justify-start w-full h-0 gap-2 p-6 overflow-hidden transition-all duration-300 -bottom-full group-hover:bottom-0 group-hover:h-1/2 bg-gradient-to-t from-main">
            <Link href={details}>
                <Button
                    variant="outline"
                    className="gap-2 transition-transform duration-300 hover:scale-105 bg-background"
                >
                    Detalhes
                    <Icons.ArrowUp className="w-4 h-4 rotate-90" />
                </Button>
            </Link>
            {preview && (
                <a
                    href={preview}
                    rel="noreferrer noopener"
                    target="_blank"
                    role="link"
                    aria-labelledby="link-for-preview"
                >
                    <Button
                        variant="outline"
                        className="gap-2 transition-transform duration-300 hover:scale-105 bg-background"
                    >
                        Preview
                        <Icons.external />
                    </Button>
                    <p id="link-for-preview" className="sr-only">
                        link para o preview
                    </p>
                </a>
            )}
            {github && (
                <a
                    rel="noreferrer noopener"
                    target="_blank"
                    role="link"
                    aria-labelledby="link-for-github"
                    href={github}
                >
                    <Button
                        variant="outline"
                        className="gap-2 transition-transform duration-300 hover:scale-105 bg-background"
                    >
                        Github
                        <Icons.external />
                    </Button>
                    <p id="link-for-github" className="sr-only">
                        link para o github
                    </p>
                </a>
            )}
        </div>
    );
}
