import React from 'react'
import logo from "../../assets/logo-2.png"
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "./navbar.css"
import { Link } from 'react-router';

function Navbar() {
  return (
    <div className="navbars">
        <div className="nav-logo">
           <Link to="/"> <img src={logo} alt="" /></Link>
        </div>
        <div className="nav-list">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <li>Shop</li>
                <li>Products</li>
                <Link to="admin"><li>Admin</li></Link>
                <li>Contact</li>
            </ul>
        </div>
        <div className="nav-icons">
                    <ul>
                        <li><FaSearch/></li>
                        <li><FaRegHeart/> <span>0</span></li>
                        <Link  to= "basket"><li><FaShoppingBasket/><span>0</span></li></Link>
                    </ul>
                    
        </div>
    </div>
  )
}

export default Navbar