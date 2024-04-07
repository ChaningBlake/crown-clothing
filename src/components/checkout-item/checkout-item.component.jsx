import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
    const { name, imageUrl, price, quantity } = item;
    const { addItemToCart, removeItemFromCart, decrementItemCount } = useContext(CartContext);

    const incrementCount = () => addItemToCart(item);
    const decrementCount = () => decrementItemCount(item);
    const removeItem = () => removeItemFromCart(item);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={decrementCount}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={incrementCount}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div onClick={removeItem}>&#10005;</div>
        </div >
    );
}

export default CheckoutItem;