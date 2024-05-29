import React, {createContext, useContext, useState} from 'react';
import itemsData from '../data.json';

// https://seed-theory-api.netlify.app/data.json


// first step  create global obj that can be accessed from anywhere and this makes context 

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState([])

  function addToCart(itemId) {
    const item = itemsData.find((item) => item.id === itemId)
    setItemsInCart((prev) => [...prev, item])
  }

  const contextValue = {
    itemsInCart,
    addToCart
  }

  return (

    //.provider is a component to wrap around components to access the context value
    // pass value that we want to share thru the tree using the value prop
    //wraps around the children making props passed to it avail at every component
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )

}