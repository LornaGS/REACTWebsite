import plants from  '../images/plant.jpg';
import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
// import Alerts from './Alerts';
import '../css/HomePage.css'


const HomePage=()=>  {
  return (
 
<div className="grid-container">
<div >
                       
                       <h1>Bring your home to life</h1>
                       <p>Evaluate your living space with a touch of nature.</p>
                       <p>We offer a range of easy-care houseplants.</p>
                       <Link to ="/shop">  <button> Browse Plants </button></Link>
                     
                       </div>
              
                  
                      <div >  
                      <img className="img" src={plants} alt="plant" height={500} width={390}  />
                     </div>
                       
                       
                   
</div>


  );
}

export default HomePage;