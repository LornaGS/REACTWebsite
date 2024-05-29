// import ChangeState from '../components/ChangeState';
// import ShopCard from '../components/ShopCard';
// import data from '../data.json';

import React from 'react'
import { CartProvider } from '../context/cart-context';
import CartList from '../components/CartList';
import ItemList from '../components/ItemList';


const Shop = () => {
    return (

        <CartProvider>
        <CartList />
        <h1 className="header"> Our Plants </h1>
        <ItemList />
      </CartProvider>

        // <div><h1 className='header'>Our plants</h1>      
        //  <div class="flex-container">
        //         {data.map((Plant)=>(
        //                     <figure className="wrap">
        //                     <img src={Plant.imageUrl} alt='no plant'/>
        //                     <figcaption>  <h3 className='header'>{Plant.name}</h3></figcaption>
        //                     <figcaption> <h5 className='header'>£{Plant.price.toFixed(2)}</h5> </figcaption>
        //                      {/* <input type='button' value='Add to cart' disabled/>  */}
        //                     </figure >
                  
        //               ))}
        //     </div>
        // </div>
    );
}
 
export default Shop

