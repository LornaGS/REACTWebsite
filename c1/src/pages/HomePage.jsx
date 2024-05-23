import plants from  '../images/plant.jpg'
import { Link } from 'react-router-dom';

import { useState } from 'react'
import Alerts from './Alerts'

const HomePage=()=>  {
  return (
    <div className="home-page">



      <h1>Bring your home to life</h1>
      <p>Evaluate your living space with a touch of nature.</p>
      <p>We offer a range of easy-care houseplants.</p>

      <div className="image">
    
            <img src={plants} alt="" width="150px" height="150px" />
        </div>


       <button className="Button" onClick={Alerts} >Browse Plants </button> 
    </div>

        // {itemsData.map((item) => (
        //     <Card
        //         name = {item.id}
        //         price = {item.price}
        //         imageUrl = {item.imageUrl}
        //         />}


  );
}

export default HomePage;