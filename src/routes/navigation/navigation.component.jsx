import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { Outlet } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { CartContext } from '../../contexts/cart.context';

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.jsx';



const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { showCart } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
                        ) : (
                            <NavLink to='/authentication'>
                                SIGN IN
                            </NavLink>
                        )}
                    <CartIcon />
                </NavLinks>
                {showCart && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;