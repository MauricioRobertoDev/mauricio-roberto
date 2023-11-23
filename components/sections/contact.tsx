'use client';
import { Twitter, Youtube } from 'lucide-react';
import { FormEvent, useRef, useState } from 'react';
import { ContactForm } from './contact-form';

export function Contact() {
    const [emailState, setEmailState] = useState<'sending' | 'success' | 'error' | null>(null);
    const name = useRef(null);
    const email = useRef(null);
    const subject = useRef(null);
    const message = useRef(null);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setEmailState('sending');

        await fetch('/api/email/send', {
            method: 'POST',
            body: JSON.stringify({
                name: name.current,
                email: email.current,
                subject: subject.current,
                message: message.current,
            }),
        });
    }

    return (
        <section id="contato">
            <div className="container px-4 py-16 mx-auto md:py-20">
                <div className="w-full mx-auto prose text-left max-w-prose">
                    <h2 className="flex items-center gap-4 mb-8 text-3xl font-black md:mb-10 md:text-4xl font-heading dark:text-white">
                        Vamos trabalhar juntos ⁉️
                    </h2>
                    <p className="mb-8 text-lg leading-relaxed md:text-xl text-muted-foreground">
                        Fique à vontade para entrar em contato comigo para discutir oportunidades,
                        freelance ou apenas para trocar ideias! Estou sempre aberto a novas conexões
                        e experiências.
                    </p>
                </div>
                <div className="flex flex-wrap items-start w-full gap-4 mx-auto md:items-center md:justify-center lg:w-2/3">
                    <a
                        href="https://github.com/mauriciorobertodev"
                        target="__blank"
                        className="h-10 gap-3 border dark:border-white/20 px-3 flex items-center justify-center border-0.5 text-black/75 hover:text-black/100 dark:text-white/75 dark:hover:text-white/100 rounded-md hover:bg-black/5 dark:hover:bg-white/5 hover:scale-110 duration-300 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="w-5 h-5"
                        >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        @mauriciorobertodev
                    </a>

                    <a
                        href="https://twitter.com/imauriciodev"
                        target="__blank"
                        className="h-10 gap-3 border dark:border-white/20 px-3 flex items-center justify-center border-0.5 text-black/75 hover:text-black/100 dark:text-white/75 dark:hover:text-white/100 rounded-md hover:bg-black/5 dark:hover:bg-white/5 hover:scale-110 duration-300 transition"
                    >
                        <Twitter />
                        @imauriciodev
                    </a>
                    <a
                        href="https://www.youtube.com/@mauriciorobertodev"
                        target="__blank"
                        className="h-10 gap-3 border dark:border-white/20 px-3 flex items-center justify-center border-0.5 text-black/75 hover:text-black/100 dark:text-white/75 dark:hover:text-white/100 rounded-md hover:bg-black/5 dark:hover:bg-white/5 hover:scale-110 duration-300 transition"
                    >
                        <Youtube />
                        @mauriciorobertodev
                    </a>
                    <a
                        href="https://wa.me/message/GCD62NFTTGBEN1"
                        target="__blank"
                        className="h-10 gap-3 border dark:border-white/20 px-3 flex items-center justify-center border-0.5 text-black/75 hover:text-black/100 dark:text-white/75 dark:hover:text-white/100 rounded-md hover:bg-black/5 dark:hover:bg-white/5 hover:scale-110 duration-300 transition"
                    >
                        <svg
                            fill="currentColor"
                            height="800px"
                            width="800px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 308 308"
                            className="w-5 h-5"
                        >
                            <g id="XMLID_468_">
                                <path
                                    id="XMLID_469_"
                                    d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
                                    c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
                                    c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
                                    c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
                                    c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
                                    c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
                                    c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
                                    c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
                                    c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
                                    C233.168,179.508,230.845,178.393,227.904,176.981z"
                                />
                                <path
                                    id="XMLID_470_"
                                    d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
                                    c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
                                    c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
                                    M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
                                    l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
                                    c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
                                    C276.546,215.678,222.799,268.994,156.734,268.994z"
                                />
                            </g>
                        </svg>
                        Whatsapp
                    </a>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}
