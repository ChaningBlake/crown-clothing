import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { Outlet, Link } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { CartContext } from '../../contexts/cart.context';



const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { showCart } = useContext(CartContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrownLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>Sign Out</span>
                        ) : (
                            <Link className='nav-link' to='/authentication'>
                                SIGN IN
                            </Link>
                        )}
                    <CartIcon />
                </div>
                {showCart && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;