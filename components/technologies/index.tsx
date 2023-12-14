import { technologies } from '@/data/technologies';
import { IconIndex, Icons } from '../icons';
import { TagItem } from '../tag-item';

export function Technologies() {
    return (
        <section id="tecnologias" className="px-4">
            <div className="container px-0 py-10 border-t md:mx-auto md:py-20">
                <div className="relative w-full max-w-6xl mx-auto text-left">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">Tecnologias</h2>
                    <div className="">
                        <p className="mb-6 leading-relaxed md:text-lg text-muted-foreground">
                            Navegar pelo vasto mundo da programação me deu a oportunidade de
                            trabalhar com diversas tecnologias e ferramentas. Abaixo estão algumas
                            das principais tecnologias que fazem parte do meu conjunto de
                            habilidades:
                        </p>
                        <div className="flex flex-wrap w-full gap-2 py-4 md:gap-4">
                            {Object.keys(technologies).map((tech, index) => {
                                const Icon = Icons[tech as IconIndex];
                                return (
                                    <TagItem
                                        key={'tech-icon-' + index}
                                        tag={tech}
                                        to="projetos"
                                        className="group"
                                    >
                                        <div className="absolute transition-opacity duration-300 opacity-0 -top-16 -left-16 group-hover:opacity-30 -z-10">
                                            <Icon className="w-32 h-32" />
                                        </div>
                                    </TagItem>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
