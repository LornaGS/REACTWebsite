import ItemCard from './ShopCard'
import itemdata from '../data.json'
// import React, {useState, useEffect } from 'react'
import React from 'react'
import { useState, useEffect } from 'react'
import '../css/ShopPage.css'


const  ItemList = () => {

    // const apiUrl = 'https://seed-theory-api.netlify.app/data.json'

 
  const [apiData, setData] = useState([]);

    useEffect(() => {
     fetch('https://seed-theory-api.netlify.app/data.json')
        .then((response) => response.json())
        .then((data) => setData(data))
    }, 
  []
  );

    return(

     
        <div className="items-grid">
          
             {apiData.map((item) => (
              <ItemCard
                id={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
    
    
   
    )
        }

export default ItemList;

      
    // <div className="items-grid">
    //         {itemdata.map((item) => (
    //           <ItemCard
    //             id={item.id}
    //             name={item.name}
    //             price={item.price}
    //             imageUrl={item.imageUrl}
    //           />
    //         ))}
    //       </div>
    
  