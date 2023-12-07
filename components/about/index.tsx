export function About() {
    return (
        <section id="sobre" className="px-4">
            <div className="container px-0 py-10 border-t md:mx-auto md:py-20">
                <div className="w-full max-w-6xl mx-auto text-left">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">Sobre mim</h2>
                    <div className="grid grid-cols-1 mx-auto md:gap-10 md:grid-cols-2 ">
                        <div>
                            <p className="mb-8 leading-relaxed md:text-lg text-muted-foreground">
                                Um entusiasta de tecnologia de 25 anos, originário do interior do
                                estado de São Paulo. Desde cedo, desenvolvi uma paixão pelo mundo da
                                tecnologia e, decidido a transformar essa paixão em uma carreira,
                                embarquei em uma jornada de autodidatismo na programação.
                            </p>
                            <h3 className="mb-3 text-2xl font-bold">Jornada na Programação</h3>
                            <p className="mb-8 leading-relaxed md:text-lg text-muted-foreground">
                                Minha jornada na programação começou como um desafio pessoal. Com
                                determinação e autodisciplina, mergulhei em diferentes linguagens de
                                programação, cursos online e projetos práticos. Essa dedicação não
                                foi apenas um meio de aprendizado, mas também uma expressão do meu
                                compromisso em transformar meu interesse em habilidades concretas.
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-3 text-2xl font-bold">Objetivo Profissional</h3>
                            <p className="mb-8 leading-relaxed md:text-lg text-muted-foreground">
                                Atualmente, meu objetivo é ingressar no mercado de trabalho como
                                desenvolvedor júnior. Acredito que a combinação de minha paixão pela
                                tecnologia e minha sólida base em programação me coloca em uma
                                posição única para contribuir de maneira significativa em um
                                ambiente profissional.
                            </p>
                            <div className="mb-8 leading-relaxed md:text-lg text-muted-foreground">
                                <p>
                                    Idade: <span className="font-medium text-foreground">25</span>
                                </p>
                                <p>
                                    Início do foco:{' '}
                                    <span className="font-medium text-foreground">2022</span>
                                </p>
                                <p>
                                    Projetos feitos:{' '}
                                    <span className="font-medium text-foreground">20</span>
                                </p>
                                <p>
                                    Principais linguagens:{' '}
                                    <span className="font-medium text-foreground">
                                        PHP, Typescript
                                    </span>
                                </p>
                                <p>
                                    Principal framework backend:{' '}
                                    <span className="font-medium text-foreground">Laravel</span>
                                </p>
                                <p>
                                    Principal framework frontend:{' '}
                                    <span className="font-medium text-foreground">React JS</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
