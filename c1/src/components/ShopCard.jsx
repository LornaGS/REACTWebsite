
// format the card 
import React, { useState } from 'react';
import { useContext } from 'react'
import { CartContext } from '../context/cart-context'




export default function ShopCard ({ id, name, price, imageUrl }) {


// console.log({name})

 let [isButtonPressed, setButtonName] = useState("Add to cart")

 function newButtonName(){
   setButtonName("In Cart")
 }

function oldButtonName(){
setButtonName("Add to cart")
 }

  function change() {
if (isButtonPressed === "Add to cart") isButtonPressed = newButtonName();
     else isButtonPressed = oldButtonName();
     }

  const{addToCart} = useContext(CartContext)

  function handleAddToCart() {
    addToCart(id)
    change()


  }

  return (

   
    <div className="wrapper">
                <img src={imageUrl} width={200} height={250} alt={name} title={name} />
                <p className="name">{name}</p>
                <p className="price">£{price.toFixed(2)}</p>
                <button className="add-cart-button" onClick={handleAddToCart}>{isButtonPressed}</button>
           
        </div>
   
  )
}

