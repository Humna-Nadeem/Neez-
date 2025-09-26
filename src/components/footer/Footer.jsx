import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaMoneyBillWave, FaHeadset, FaStore, FaTruck } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* Top Info Section */}
      <div className="footer-top">
        <div className="info-item">
          <FaTruck className="icon truck" />
          <div>
            <h4>Track Your Order</h4>
            <p>Click here for quick update</p>
          </div>
        </div>
        <div className="info-item">
          <FaStore className="icon store" />
          <div>
            <h4>Store Locator</h4>
            <p>Click here to find your nearby store</p>
          </div>
        </div>
        <div className="info-item">
          <FaHeadset className="icon support" />
          <div>
            <h4>SUPPORT 24/7</h4>
            <p>Contact us anytime</p>
          </div>
        </div>
        <div className="info-item">
          <FaMoneyBillWave className="icon money" />
          <div>
            <h4>Payment Methods</h4>
            <p>COD, Visa, Master Card</p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-section contact-us">
          <h4>Contact Us</h4>
          <p><HiOutlineLocationMarker /> 21 Km Ferozpur Road Lahore</p>
          <p><HiOutlineMail /> neez@gmail.com</p>
          <p><BsTelephone /> +92 42 111 647 428</p>
        </div>

        <div className="footer-section information">
          <h4>Information</h4>
          <p>Blogs</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
        
        </div>

        <div className="footer-section customer-services">
          <h4>Customer Services</h4>
          <p>FAQs</p>
          <p>Order Tracking</p>
    
          <p>Return & Exchange Policy</p>
        </div>

        <div className="footer-section newsletter">
          <h4>Newsletter Signup</h4>
          <p>Subscribe to our newsletter to get latest updates.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
          <div className="social-icons">
            <FaFacebookF className="social-icon facebook" />
            <FaInstagram className="social-icon instagram" />
            <FaYoutube className="social-icon youtube" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright © 2025 Neez. All rights reserved.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
      </div>
    </footer>
  );
}
