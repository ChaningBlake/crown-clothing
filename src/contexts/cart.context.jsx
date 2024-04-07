import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    else {
        return [...cartItems, { ...productToAdd, quantity: 1 }];
    }

}

const removeCartItem = (cartItems, productToRemove) => {
    const filteredCartItems = cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    return [...filteredCartItems];
}

const decrementCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }
    else {
        return cartItems.map((cartItem) => {
            return cartItem.id === productToRemove.id ?
                { ...cartItem, quantity: cartItem.quantity - 1 }
                :
                cartItem
        });
    }
}
export const CartContext = createContext({
    showCart: null,
    setShowCart: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    decrementItemCount: () => { },
    cartCount: 0
});

export const CartProvider = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, current) => total + current.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, current) => total + (current.quantity * current.price), 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);


    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const decrementItemCount = (productToDecrement) => {
        setCartItems(decrementCartItem(cartItems, productToDecrement));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const value = { showCart, setShowCart, addItemToCart, removeItemFromCart, decrementItemCount, cartItems, cartCount, cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}