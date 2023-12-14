import { links } from '@/config/menu';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { Icons } from '../icons';
import { FooterTop } from './top';

export function Footer() {
    return (
        <footer className="w-full bg-background">
            <div className="container flex flex-wrap items-start justify-between gap-4 pt-8 mx-auto border-t">
                {/* my name */}
                <div>
                    <h5 className="font-semibold">Mauricio Roberto</h5>
                    <p className="text-muted-foreground">Feito com ❤️‍🔥 e 🧠 usando Next JS.</p>
                </div>
                {/* links */}
                <div className="flex flex-col">
                    <h6 className="mb-2 font-semibold">Interno</h6>
                    {links.map((link) => (
                        <Link
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                            key={`footer-link-${link.title}`}
                            href={link.href}
                        >
                            {link.title}
                            <Icons.ArrowUp className="w-4 h-4 rotate-90" />
                        </Link>
                    ))}
                </div>
                {/* social */}
                <div className="flex flex-col">
                    <h6 className="mb-2 font-semibold">Social</h6>

                    <Link
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                        key="footer-link-discord"
                        href={siteConfig.links.github}
                    >
                        Github
                        <Icons.external className="w-4 h-4" />
                    </Link>

                    <Link
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                        key="footer-link-discord"
                        href={siteConfig.links.whatsapp}
                    >
                        Whatsapp
                        <Icons.external className="w-4 h-4" />
                    </Link>

                    <Link
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                        key="footer-link-discord"
                        href={siteConfig.links.youtube}
                    >
                        Youtube
                        <Icons.external className="w-4 h-4" />
                    </Link>

                    <Link
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                        key="footer-link-discord"
                        href={siteConfig.links.discord}
                    >
                        Discord
                        <Icons.external className="w-4 h-4" />
                    </Link>
                </div>
                {/* other */}
                <div className="flex flex-col">
                    <h6 className="mb-2 font-semibold">Outros</h6>
                    <Link
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                        href="/projetos"
                    >
                        Todos os projetos
                        <Icons.ArrowUp className="w-4 h-4 rotate-90" />
                    </Link>
                    <Link
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                        href={siteConfig.links.source}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Código fonte
                        <Icons.external className="w-4 h-4" />
                    </Link>
                </div>
            </div>
            <div className="container flex items-start justify-between pt-4 pb-8 mx-auto ">
                <h6 className="text-muted-foreground">Todos os direitos reservados.</h6>
                {/* go to top */}
                <FooterTop />
            </div>
        </footer>
    );
}
