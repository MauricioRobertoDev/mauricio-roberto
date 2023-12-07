import { MenuLogo } from './logo';
import { MenuNavbar } from './navbar';
import { MenuWrapper } from './wrapper';

export function Menu() {
    return (
        <MenuWrapper>
            <MenuLogo />
            <MenuNavbar />
        </MenuWrapper>
    );
}
