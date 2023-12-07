import {
    ArrowUp,
    LucideProps,
    Menu,
    Moon,
    Sun,
    Twitter,
    X,
    Youtube,
    type LucideIcon,
} from 'lucide-react';
import { BiLogoPhp, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { DiJavascript1 } from 'react-icons/di';
import { FaGit, FaLaravel, FaNodeJs, FaNpm, FaVuejs } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { LuArrowUpRight, LuGithub } from 'react-icons/lu';
import { MdOutlineCss, MdOutlineHtml } from 'react-icons/md';
import { SiDocker, SiInsomnia, SiVitest } from 'react-icons/si';
import { TbBrandGolang, TbBrandVite } from 'react-icons/tb';

export type Icon = LucideIcon;

export const Icons = {
    Logo: ({ ...props }: LucideProps) => (
        <svg
            role="img"
            aria-hidden="true"
            data-icon="logo"
            viewBox="0 0 381 381"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            stroke="none"
            {...props}
        >
            <path d="M254 104.712V187.579L190.5 240.856L0 80.9943V-1.90494L190.5 157.956L254 104.712Z" />
            <path d="M380.968 0V82.7723L285.782 162.655L285.75 79.8513L380.968 0Z" />
            <path d="M381 120.936V328.168L317.5 381.444V257.111L190.436 363.728L95.25 283.813V200.85L190.5 280.765L381 120.936Z" />
            <path d="M63.5 174.117V381.349L0 328.073V120.841L63.5 174.117Z" />
        </svg>
    ),

    whatsapp: ({ ...props }: LucideProps) => (
        <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 308 308"
            {...props}
        >
            <g>
                <path
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
    ),
    pestphp: ({ ...props }: LucideProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 204" {...props}>
            <title>pestphp logo</title>
            <path
                fill="currentColor"
                d="M227.3,57.9C232.9,26,211.6,0,179.8,0h-144L25.6,57.9h144l-3.4,19.3h-144L0,204h57.6l12.1-69h86.4 c31.8,0,62.2-26,67.8-57.9L227.3,57.9z M396.6,77.8H243.5l-9,48.4h153L396.6,77.8z M458.2,0H256.6l-10.2,58h201.7L458.2,0z M220.8,204h201.7l10.1-58H231L220.8,204z M535,0c-31.4,0-61.7,26.5-67.8,58l-1.7,9.7h0.1c-3.9,30.8,16.7,57,47.6,57h86.4l-3.8,21.3 h-144l-10.2,58h144c31.8,0,62.2-26,67.8-58l3.7-21.3c5.6-32-15.7-58-47.5-58h-86.4l1.5-8.7h192.1l-25.6,146H749l25.6-146h57.6 C864,58,894.4,32,900,0H535z"
            />
        </svg>
    ),
    X,
    Menu,
    Moon,
    Sun,
    Youtube,
    Twitter,
    ArrowUp,
    external: LuArrowUpRight,
    // techs
    php: BiLogoPhp,
    laravel: FaLaravel,
    react: BiLogoReact,
    javascript: DiJavascript1,
    typescript: BiLogoTypescript,
    html: MdOutlineHtml,
    css: MdOutlineCss,
    tailwindcss: BiLogoTailwindCss,
    vuejs: FaVuejs,
    nodejs: FaNodeJs,
    npm: FaNpm,
    git: FaGit,
    github: LuGithub,
    mysql: GrMysql,
    docker: SiDocker,
    vite: TbBrandVite,
    vitest: SiVitest,
    golang: TbBrandGolang,
    insomnia: SiInsomnia,
};
