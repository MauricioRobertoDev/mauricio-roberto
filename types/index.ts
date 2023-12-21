export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        twitter: string;
        github: string;
        youtube: string;
        whatsapp: string;
        discord: string;
        source: string;
    };
    author: string;
    keywords: string[];
};

export type MainNavItem = {
    title: string;
    href: string;
    disabled?: boolean;
};

export type MenuConfig = {
    links: MainNavItem[];
};
