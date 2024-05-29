import React, { Link } from "react-router-dom";
import '../css/navbar.css'

export default function Navbar() {
  return (



    <nav className='navbar'>
    <h1 className='header-nav'> seed theory</h1>
        <div className='nav-link'>
            <Link style={{textDecoration: 'none'}} to="/">Home</Link>
            <Link style={{textDecoration: 'none'}} to="/Shop">Shop</Link>
        </div>
</nav>

)
}
    // <nav>





      {/* <div className="nav-header">
        <h1>seed theory</h1>
      </div>

      <div className="nav-bar" wordspacing="30px">

      <ul>
        <li><Link style={{textDecoration: 'none'}} to="/">Home </Link></li>
        <li> <Link style={{textDecoration: 'none'}} to="/Shop">Shop</Link></li>
        {/* <li><Link to="/">Home </Link></li>
        <li> <Link to="/Shop">Shop</Link></li> */}

    
