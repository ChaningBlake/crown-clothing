import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CartIcon = () => {

    const { showCart, setShowCart, cartCount } = useContext(CartContext);
    const toggleShowCart = () => setShowCart(!showCart);

    return (
        <CartIconContainer onClick={toggleShowCart}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;