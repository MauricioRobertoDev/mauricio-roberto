import { OpImageLogo } from './logo';

export function OpImageDefaultSquare({
    height = 1000,
    width = 1000,
}: {
    height?: number;
    width?: number;
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
                    backgroundSize: '10% 10%',
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
                    width: '100vh',
                    height: '100vw',
                }}
            >
                <OpImageLogo width={width * 0.6} height={height * 0.6} />
            </div>
        </div>
    );
}
