import React, { createContext, useContext, useState } from "react";
// initialize context
const ShoppingCartContext = createContext();

// set up provider for shopping cart context
export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // function to add to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // fucntion to remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  //function for counting number of items in cart
  const cartItemCount = cartItems.length;

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartItemCount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

// export context
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
