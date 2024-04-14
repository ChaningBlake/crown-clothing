import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton
} from './checkout-item.styles';

const CheckoutItem = ({ item }) => {
    const { name, imageUrl, price, quantity } = item;
    const { addItemToCart, removeItemFromCart, decrementItemCount } = useContext(CartContext);

    const incrementCount = () => addItemToCart(item);
    const decrementCount = () => decrementItemCount(item);
    const removeItem = () => removeItemFromCart(item);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={decrementCount}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={incrementCount}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={removeItem}>&#10005;</RemoveButton>
        </CheckoutItemContainer >
    );
}

export default CheckoutItem;