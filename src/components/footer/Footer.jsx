import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMoneyBillWave,
  FaHeadset,
  FaStore,
  FaTruck,
  FaWhatsapp
} from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        

        {/* Main Footer */}
        <div className="footer-main">
          <div className="footer-section contact-us">
            <h4>Contact Us</h4>
            <p><HiOutlineLocationMarker /> 21 Km Ferozpur Road Lahore</p>
            <p><HiOutlineMail /> neez@nishatmills.com</p>
            <p><BsTelephone /> +92 42 111 647 428</p>
          </div>

          <div className="footer-section information">
            <h4>Information</h4>
            <p>Blogs</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
          </div>

          <div className="footer-section newsletter">
            <h4>Newsletter Signup</h4>
            <p>Subscribe to our newsletter and get latest updates.</p>
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
          <p className="brand-bar">Copyright © 2025 Neez. All rights reserved.</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
          />
        </div>
      </footer>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/923001234567"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </>
  );
}
