import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

import { signOutUser } from '../../utils/firebase.utils';

const Navigation = () => {

    const { currentUser } = useContext(UserContext);

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

                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;