import { LucideProps, Menu, Moon, Sun, X, type LucideIcon } from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
    logo: ({ ...props }: LucideProps) => (
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
            <path
                d="M380.968 0V82.7723L285.782 162.655L285.75 79.8513L380.968 0Z"
                fill="currentColor"
            />
            <path
                d="M381 120.936V328.168L317.5 381.444V257.111L190.436 363.728L95.25 283.813V200.85L190.5 280.765L381 120.936Z"
                fill="currentColor"
            />
            <path d="M63.5 174.117V381.349L0 328.073V120.841L63.5 174.117Z" fill="currentColor" />
        </svg>
    ),

    gitHub: ({ ...props }: LucideProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            role="img"
            aria-hidden="true"
            focusable="false"
            data-icon="github"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            {...props}
        >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
    ),
    X,
    Menu,
    Moon,
    Sun,
};
