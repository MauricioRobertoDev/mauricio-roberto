export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        twitter: string;
        github: string;
    };
};

export type MainNavItem = {
    title: string;
    href: string;
    disabled?: boolean;
};

export type DashboardConfig = {
    mainNav: MainNavItem[];
};
