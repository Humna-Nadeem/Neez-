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
            <p><HiOutlineLocationMarker /> Hayatabad</p>
            <p><HiOutlineMail /> neez@.com</p>
            <p><BsTelephone /> +923219733749</p>
          </div>

          <div className="footer-section information">
            <h4>Information</h4>
            <p>Blogs</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
          </div>

          
        </div>

       
      </footer>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/923219733749"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </>
  );
}
