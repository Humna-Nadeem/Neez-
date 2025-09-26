import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaSearch,
  FaUser,
  FaHeart,
  FaCar,
  FaShoppingCart,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import logo from "../imgs/logo.jpg";
import "./Navbar1.css";

export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Top Navbar */}
      <div className="main-navbar-div">
        {/* Hide icons when sidebar open */}
        {!isOpen && (
          <div className="navbar-icons">
            <a href="https://web.facebook.com/NishatLinen?_rdc=1&_rdr#"><FaFacebookF className="facebook" /></a>
            <a href="https://www.instagram.com/nishatlinen/"><FaInstagram className="instagram" /></a>
            <a href="https://www.youtube.com/c/NishatLinenofficial"><FaYoutube className="youtube" /></a>
          </div>
        )}

        {/* Always visible logo */}
        <div className="navbar-img">
          <img src={logo} alt="Logo" />
          
          
        </div>

        {/* Hide icons when sidebar open */}
        {!isOpen && (
          <div className="navbar-icons-2">
            <FaSearch />
            <FaUser />
            <FaHeart />
            <FaCar />
            <FaShoppingCart />
          </div>
        )}

        {/* Toggle button always visible */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FiMenu />}
        </div>
      </div>

      <hr />

      {/* Desktop Menu (hidden on small screens anyway) */}
      <ul className="Navbar-flex">
        
       <li>
        <Link to="secondsection" smooth={true} duration={500}>
         WOMEN
        </Link>
       </li>
        
        <li>
        <Link to="thirdsection" smooth={true} duration={500}>
         MEN
        </Link>
       </li>
        
      </ul>

      {/* Mobile Sidebar (slides from left) */}
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <h3>MENU</h3>
        <ul>
         
           <li>
             <Link to="secondsection" smooth={true} duration={500}>
             <span>WOMEN</span> <FaPlus />
             </Link>
             </li>
         
          <li>
          <Link to="thirdsection" smooth={true} duration={500}>
          <span>MEN</span> <FaPlus />
          </Link>
           </li>
          
          <li><FaHeart className="menu-icon" /> Wishlist</li>
          <li><FaUser className="menu-icon" /> Login / Register</li>
        </ul>

        <div className="contact-info">
          <p>Need help?</p>
          <p><FaPhone /> 042-38103311</p>
          <p><FaEnvelope /> nishatonline@nishatmills.com</p>
        </div>
      </div>
    </div>
  );
}
