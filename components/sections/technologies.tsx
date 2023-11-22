import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';

export function Technologies() {
    const technologies = [
        'php',
        'javascript',
        'typescript',
        'golang',
        'html',
        'css',
        'tailwindcss',
        'vue',
        'reactjs',
        'node',
        'npm',
        'laravel',
        'composer',
        'figma',
        'git',
        'github',
        'mysql',
        'pestphp',
        'postman',
        'visual',
        'vite',
        'vitest',
    ];

    return (
        <section id="tecnologias">
            <div className="container py-16 md:py-20 mx-auto px-4">
                <div className="w-full mx-auto prose text-left max-w-prose">
                    <h2 className="flex items-center gap-4 mb-8 md:mb-10 text-3xl md:text-4xl font-black font-heading dark:text-white">
                        Tecnologias ✨
                    </h2>
                    <p className="mb-8 text-lg md:text-xl leading-relaxed text-muted-foreground">
                        Navegar pelo vasto mundo da programação me deu a oportunidade de trabalhar
                        com diversas tecnologias e ferramentas. Abaixo estão algumas das principais
                        tecnologias que fazem parte do meu conjunto de habilidades:
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center w-full md:w-2/3 gap-4 mx-auto">
                    {technologies.map((tech, key) => (
                        <TooltipProvider key={key}>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="flex items-center justify-center p-3 border rounded-lg dark:border-white/20">
                                        <Image
                                            src={'/images/' + tech + '.png'}
                                            alt={tech}
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{tech}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>
            </div>
        </section>
    );
}
