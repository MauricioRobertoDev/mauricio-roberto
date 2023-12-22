import { CSSProperties } from 'react';
import { COLOR_BLACK_1 } from './colors';

export function OpImageLogo({
    width,
    height,
    color = COLOR_BLACK_1,
    style,
}: {
    width: string | number;
    height: string | number;
    color?: string;
    style?: CSSProperties;
}) {
    return (
        <svg
            style={{ width, height, padding: '0px', margin: '0px', ...style }}
            viewBox="0 0 381 381"
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            stroke="none"
        >
            <path d="M254 104.712V187.579L190.5 240.856L0 80.9943V-1.90494L190.5 157.956L254 104.712Z" />
            <path d="M380.968 0V82.7723L285.782 162.655L285.75 79.8513L380.968 0Z" />
            <path d="M381 120.936V328.168L317.5 381.444V257.111L190.436 363.728L95.25 283.813V200.85L190.5 280.765L381 120.936Z" />
            <path d="M63.5 174.117V381.349L0 328.073V120.841L63.5 174.117Z" />
        </svg>
    );
}
