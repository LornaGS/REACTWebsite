import { Link } from 'react-router-dom';
import '../css/navbar.css';


 export default function Navbar() {
    return(

        
        <nav>
          <div className = "home-header"><h1>seed theory</h1></div>
            
            <div className="link">
              
                  <p>  <Link to="/">Home</Link> <Link to="/Shop">Shop</Link> </p>
               
                  
               <dl></dl> 
           </div>

             </nav>
    );
            }