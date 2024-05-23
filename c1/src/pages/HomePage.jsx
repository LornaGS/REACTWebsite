import plants from  '../images/plant.jpg'
import { Link } from 'react-router-dom';

import { useState } from 'react'
import Alerts from './Alerts'
import '../css/pages.css';

const HomePage=()=>  {
  return (
    


            <div className="grid-container">
                <div className="item1">
                    <h1>Bring your home to life</h1>
                    <p>Evaluate your living space with a touch of nature.</p>
                    <p>We offer a range of easy-care houseplants.</p>

                    <button className="button" onClick={Alerts} >Browse Plants </button> 

                </div>

                <div className="item2" >
                        <img className="img" src={plants} alt="plant"  />
                </div>
                
                    


              
                </div>

      

  );
}

export default HomePage;