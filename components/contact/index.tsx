import { MacWindowBar } from '../mac-window-bar';
import { ContactForm } from './contact-form';
import { ContactSocialLink } from './social';

export function Contact() {
    return (
        <section id="contato" className="px-4">
            <div className="container px-0 pt-10 border-t md:mx-auto md:pt-20">
                <div className="w-full md:max-w-6xl mx-auto text-left flex flex-col gap-8">
                    {/* text */}
                    <div className="col-span-1 row-span-1">
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                            Vamos trabalhar juntos ?
                        </h2>
                        <p className="leading-relaxed md:text-lg text-muted-foreground">
                            Fique à vontade para entrar em contato comigo para discutir
                            oportunidades, freelance ou apenas para trocar ideias! Estou sempre
                            aberto a novas conexões e experiências.
                        </p>
                    </div>
                    {/* form */}
                    <div className="w-full mx-auto col-span-1 row-span-1 relative">
                        <div className="w-full h-full absolute bg-main/10 blur-xl -z-10 "></div>
                        <div>
                            <MacWindowBar url="para: Mauricio Roberto" className="z-10 " />
                            <div className="flex flex-col w-full py-8 md:pt-20 md:pb-20 items-center justify-center bg-background gap-8 px-4">
                                <ContactForm />
                                {/* social */}
                                <div className="flex flex-wrap gap-2 w-full md:justify-center">
                                    <ContactSocialLink icon="github" text="Github" href="#" />
                                    <ContactSocialLink icon="whatsapp" text="Whatsapp" href="#" />
                                    <ContactSocialLink icon="Youtube" text="Youtube" href="#" />
                                    <ContactSocialLink icon="discord" text="Discord" href="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
