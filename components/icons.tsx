import { ArrowUp, LucideProps, Menu, Moon, Sun, X, Youtube, type LucideIcon } from 'lucide-react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiLogoPhp, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { CiCalendarDate } from 'react-icons/ci';
import { DiJavascript1 } from 'react-icons/di';
import { FaGit, FaLaravel, FaNodeJs, FaNpm, FaShieldAlt, FaVuejs } from 'react-icons/fa';
import { FaChevronLeft, FaXTwitter } from 'react-icons/fa6';
import { GrMysql } from 'react-icons/gr';
import { IoTimeOutline } from 'react-icons/io5';
import { LiaUndoAltSolid } from 'react-icons/lia';
import { LuArrowUpRight, LuCopy, LuGithub } from 'react-icons/lu';
import { MdOutlineCss, MdOutlineHtml, MdOutlineRemoveRedEye, MdWhatsapp } from 'react-icons/md';
import { RiDiscordLine } from 'react-icons/ri';
import { SiDocker, SiInsomnia, SiVitest } from 'react-icons/si';
import { TbBrandGolang, TbBrandVite } from 'react-icons/tb';

export type IconIndex = keyof typeof Icons;

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

    whatsapp: MdWhatsapp,
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
    Twitter: FaXTwitter,
    ArrowUp,
    external: LuArrowUpRight,
    discord: RiDiscordLine,
    chevronLeft: FaChevronLeft,
    plus: AiOutlinePlus,
    copy: LuCopy,
    semiShield: FaShieldAlt,
    undo: LiaUndoAltSolid,
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
    eye: MdOutlineRemoveRedEye,
    time: IoTimeOutline,
    calendar: CiCalendarDate,
};
