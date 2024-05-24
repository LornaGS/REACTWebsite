import { Link } from "react-router-dom";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-header">
        <h1>seed theory</h1>
      </div>

      <div className="nav-bar" wordspacing="30px">

      <ul>
        <li><Link style={{textDecoration: 'none'}} to="/">Home </Link></li>
        <li> <Link style={{textDecoration: 'none'}} to="/Shop">Shop</Link></li>

        
     </ul>
        
       
      </div>
    </nav>
  );
}
