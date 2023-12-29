import Link from 'next/link';
import { Icons } from '../icons';
import { Button } from '../ui/button';

export function ProjectLinks({ preview, github }: { github?: string; preview?: string }) {
    return (
        <div className="flex items-center justify-between w-full">
            <Link href="/projetos">
                <Button
                    variant="ghost"
                    className="gap-2 transition-transform duration-300 group hover:scale-105"
                >
                    <Icons.ArrowUp className="w-5 h-5 -rotate-90 group-hover:rotate-[270deg] transition-transform duration-300" />
                    Todos
                </Button>
            </Link>
            <div className="space-x-2">
                {github && (
                    <a
                        href={github}
                        rel="noreferrer noopener"
                        target="_blank"
                        aria-label="link para o github do projeto"
                        role="link"
                    >
                        <Button
                            variant="ghost"
                            className="gap-2 transition-transform duration-300 group hover:scale-105"
                        >
                            <Icons.github className="hidden w-4 h-4 sm:block" />
                            Github
                            <Icons.external className="w-5 h-5 group-hover:rotate-[360deg] transition-transform duration-300" />
                        </Button>
                    </a>
                )}
                {preview && (
                    <a
                        href="/projetos"
                        rel="noreferrer noopener"
                        target="_blank"
                        aria-label="link para a página de preview"
                        role="link"
                    >
                        <Button
                            variant="ghost"
                            className="gap-2 transition-transform duration-300 group hover:scale-105"
                        >
                            <Icons.eye className="hidden w-4 h-4 sm:block" />
                            Preview
                            <Icons.external className="w-5 h-5 group-hover:rotate-[360deg] transition-transform duration-300" />
                        </Button>
                    </a>
                )}
            </div>
        </div>
    );
}
