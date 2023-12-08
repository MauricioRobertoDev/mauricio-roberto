'use client';
import { FormEvent, useRef, useState } from 'react';
import { ContactSocialLink } from './social';

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
        <section id="contato" className="px-4">
            <div className="container px-0 py-10 border-t md:mx-auto md:py-20">
                <div className="w-full max-w-6xl mx-auto text-left">
                    <div className="grid grid-cols-1 mx-auto md:gap-10 md:grid-cols-2 ">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                                Vamos trabalhar juntos ?
                            </h2>
                            <p className="mb-8 leading-relaxed md:text-lg text-muted-foreground">
                                Fique à vontade para entrar em contato comigo para discutir
                                oportunidades, freelance ou apenas para trocar ideias! Estou sempre
                                aberto a novas conexões e experiências.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 w-min">
                            <ContactSocialLink icon="github" text="Github" href="#" />
                            <ContactSocialLink icon="whatsapp" text="Whatsapp" href="#" />
                            <ContactSocialLink icon="Youtube" text="Youtube" href="#" />
                            <ContactSocialLink icon="discord" text="Discord" href="#" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
