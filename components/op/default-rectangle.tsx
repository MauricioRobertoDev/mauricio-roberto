import { COLOR_ACCENT, COLOR_BLACK_1, COLOR_BLACK_2 } from './colors';
import { OpImageLogo } from './logo';

export function OpImageDefaultRectangle({
    title = 'Mauricio Roberto',
    description = 'Autodidata aspirante a desenvolvedor junior.',
}: {
    title?: string;
    description?: string;
}) {
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                position: 'relative',
                fontFamily: 'Inter',
            }}
        >
            <div
                style={{
                    backgroundImage:
                        'linear-gradient(to right,#e5e7eb 1px,transparent 1px),linear-gradient(to bottom,#e5e7eb 1px,transparent 1px)',
                    backgroundSize: '60px 60px',
                    maskImage:
                        'radial-gradient(ellipse 80% 50% at 50% 0%,#000 70%,transparent 110%)',
                    position: 'absolute',
                    top: '0px',
                    bottom: '0px',
                    left: '0px',
                    right: '0px',
                }}
            />

            <div
                style={{
                    padding: '60px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1.5rem',
                }}
            >
                <OpImageLogo width={60} height={60} />
                <h1
                    style={{
                        fontSize: '48px',
                        textAlign: 'center',
                        color: COLOR_BLACK_1,
                        position: 'relative',
                        display: 'flex',
                        margin: '0px',
                        padding: '0px',
                        fontWeight: 700,
                    }}
                >
                    {title}
                </h1>
                <div style={{ color: COLOR_BLACK_2, position: 'relative', fontSize: '24px' }}>
                    {description}
                </div>
            </div>

            <div
                style={{
                    position: 'absolute',
                    left: '0px',
                    bottom: '0px',
                    backgroundColor: COLOR_ACCENT,
                    height: '20px',
                    width: '100%',
                }}
            />
        </div>
    );
}
