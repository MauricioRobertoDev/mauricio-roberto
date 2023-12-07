import { techs } from '@/data/technologies';
import { TechLink, TechLinkProps } from './link';

export function Technologies() {
    return (
        <section id="sobre" className="px-4">
            <div className="container px-0 py-10 border-t md:mx-auto md:py-20">
                <div className="w-full max-w-6xl mx-auto text-left">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">Tecnologias</h2>
                    <div className="">
                        <p className="mb-6 leading-relaxed md:text-lg text-muted-foreground">
                            Navegar pelo vasto mundo da programação me deu a oportunidade de
                            trabalhar com diversas tecnologias e ferramentas. Abaixo estão algumas
                            das principais tecnologias que fazem parte do meu conjunto de
                            habilidades:
                        </p>
                        <div className="flex flex-wrap w-full gap-4 py-4">
                            {techs.map((tech, index) => (
                                <TechLink key={'tech-icon-' + index} {...(tech as TechLinkProps)} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
