import React from "react";
import {Link} from "react-router-dom";
import "../App.css";
const Navbar=()=>{
    return(
       <header>
         <h1>The Theme park</h1>
         <nav>
        <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </nav>
        </header>

    );
};
export default Navbar;