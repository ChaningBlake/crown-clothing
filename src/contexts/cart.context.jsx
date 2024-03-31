import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
    showCart: null,
    setShowCart: () => { }
});

export const CartProvider = ({ children }) => {
    const [showCart, setShowCart] = useState(false);

    const value = { showCart, setShowCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}