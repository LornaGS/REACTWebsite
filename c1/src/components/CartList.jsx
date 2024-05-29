import React,  { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import '../css/Cart.css'


export default function CartList() {
  const { itemsInCart } = useContext(CartContext)

  return (
    <div>
      
      <div className="sticky">
        <h6>Cart</h6>
        {itemsInCart.map((item) => (
        <span >{item.name}</span>
        ))}
      </div>
    </div>
  )
}