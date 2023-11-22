export function Contact() {
    return (
        <section id="contato">
            <div className="container py-16 md:py-20 mx-auto px-4">
                <div className="w-full mx-auto prose text-left max-w-prose">
                    <h2 className="flex items-center gap-4 mb-8 md:mb-10 text-3xl md:text-4xl font-black font-heading dark:text-white">
                        Vamos trabalhar juntos ⁉️
                    </h2>
                    <p className="mb-8 text-lg md:text-xl leading-relaxed text-muted-foreground">
                        Fique à vontade para entrar em contato comigo para discutir oportunidades,
                        freelance ou apenas para trocar ideias! Estou sempre aberto a novas conexões
                        e experiências.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href=""
                            className="h-10 gap-3 border dark:border-white/20 px-3 flex items-center justify-center border-0.5 text-black/75 hover:text-black/100 dark:text-white/75 dark:hover:text-white/100 rounded-md hover:bg-black/5 dark:hover:bg-white/5 hover:scale-110 duration-300 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                className="h-5 w-5"
                            >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            @mauriciorobertodev
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
