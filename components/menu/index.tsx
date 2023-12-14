import { Suspense } from 'react';
import { MenuLogo } from './logo';
import { MenuNavbar } from './navbar';
import { MenuWrapper } from './wrapper';

export function Menu() {
    return (
        <Suspense>
            <MenuWrapper>
                <MenuLogo />
                <MenuNavbar />
            </MenuWrapper>
        </Suspense>
    );
}
