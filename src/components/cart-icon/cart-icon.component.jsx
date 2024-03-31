import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';

import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CartIcon = () => {

    const { showCart, setShowCart } = useContext(CartContext);
    const toggleShowCart = () => setShowCart(!showCart);

    return (
        <div className='cart-icon-container' onClick={toggleShowCart}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>10</span>
        </div>
    );
}

export default CartIcon;