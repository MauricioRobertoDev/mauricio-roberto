'use client';
import { Twitter, Youtube } from 'lucide-react';
import { FormEvent, useRef, useState } from 'react';
import { Icons } from '../icons';
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
                        rel="noreferrer noopener"
                        role="link"
                        className="h-10 gap-3 border dark:border-white/20 px-3 flex items-center justify-center border-0.5 text-black/75 hover:text-black/100 dark:text-white/75 rounded-md hover:text-main hover:dark:text-main hover:border-main hover:dark:border-main hover:bg-main/5 hover:scale-110 duration-300 transition"
                    >
                        <Icons.gitHub className="w-5 h-5" />
                        @mauriciorobertodev
                    </a>

                    <a
                        href="https://twitter.com/imauriciodev"
                        target="__blank"
                        rel="noreferrer noopener"
                        role="link"
                        className="h-10 gap-3 border dark:border-white/20 px-3 flex items-center justify-center border-0.5 text-black/75 hover:text-black/100 dark:text-white/75 rounded-md hover:text-main hover:dark:text-main hover:border-main hover:dark:border-main hover:bg-main/5 hover:scale-110 duration-300 transition"
                    >
                        <Twitter />
                        @imauriciodev
                    </a>
                    <a
                        href="https://www.youtube.com/@mauriciorobertodev"
                        target="__blank"
                        rel="noreferrer noopener"
                        role="link"
                        className="h-10 gap-3 border dark:border-white/20 px-3 flex items-center justify-center border-0.5 text-black/75 hover:text-black/100 dark:text-white/75 rounded-md hover:text-main hover:dark:text-main hover:border-main hover:dark:border-main hover:bg-main/5 hover:scale-110 duration-300 transition"
                    >
                        <Youtube />
                        @mauriciorobertodev
                    </a>
                    <a
                        href="https://wa.me/message/GCD62NFTTGBEN1"
                        target="__blank"
                        rel="noreferrer noopener"
                        role="link"
                        className="h-10 gap-3 border dark:border-white/20 px-3 flex items-center justify-center border-0.5 text-black/75 hover:text-black/100 dark:text-white/75 rounded-md hover:text-main hover:dark:text-main hover:border-main hover:dark:border-main hover:bg-main/5 hover:scale-110 duration-300 transition"
                    >
                        <Icons.whatsapp className="w-5 h-5" />
                        Whatsapp
                    </a>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}
