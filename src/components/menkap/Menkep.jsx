import React from "react";
import "./Menkep.css";
import mkap1 from "../imgs/mkap1.jpg";
import mkap2 from "../imgs/mkap2.jpg";
import mkap3 from "../imgs/mkap3.jpg";
import mkap4 from "../imgs/mkap4.jpg";
import mkap5 from "../imgs/mkap5.jpg";
import mkap6 from "../imgs/mkap6.jpg";
import mkap7 from "../imgs/mkap7.jpg";
import mkap8 from "../imgs/mkap8.jpg";
import mkap9 from "../imgs/mkap9.jpg";
import mkap10 from "../imgs/mkap10.jpg";
import mkap11 from "../imgs/mkap11.jpg";
import mkap12 from "../imgs/mkap12.jpg";
import { FaRegHeart } from "react-icons/fa";

const Menkep = () => {
  const products = [
    { id: 1, img: mkap1, title: "Digital Printed Suit - 42502243", type: "UNSTITCHED", price: "Rs. 6,490" },
    { id: 2, img: mkap2, title: "3 Piece - Printed Suit - 42502198", type: "UNSTITCHED", price: "Rs. 5,990" },
    { id: 3, img: mkap3, title: "3 Piece - Printed Suit - 42502193", type: "UNSTITCHED", price: "Rs. 5,990" },
    { id: 4, img: mkap4, title: "2 Piece - Printed Suit - 42502168", type: "UNSTITCHED", price: "Rs. 3,490" },
    { id: 5, img: mkap5, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 4,990" },
    { id: 6, img: mkap6, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 5,490" },
    { id: 7, img: mkap7, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 3,990" },
    { id: 8, img: mkap8, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 6,990" },
    { id: 9, img: mkap9, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 4,490" },
    { id: 10, img: mkap10, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 5,690" },
    { id: 11, img: mkap11, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 6,190" },
    { id: 12, img: mkap12, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 4,790" },
     { id: 1, img: mkap1, title: "Digital Printed Suit - 42502243", type: "UNSTITCHED", price: "Rs. 6,490" },
    { id: 2, img: mkap2, title: "3 Piece - Printed Suit - 42502198", type: "UNSTITCHED", price: "Rs. 5,990" },
    { id: 3, img: mkap3, title: "3 Piece - Printed Suit - 42502193", type: "UNSTITCHED", price: "Rs. 5,990" },
    { id: 4, img: mkap4, title: "2 Piece - Printed Suit - 42502168", type: "UNSTITCHED", price: "Rs. 3,490" },
    { id: 5, img: mkap5, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 4,990" },
    { id: 6, img: mkap6, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 5,490" },
    { id: 7, img: mkap7, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 3,990" },
    { id: 8, img: mkap8, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 6,990" },
    { id: 9, img: mkap9, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 4,490" },
    { id: 10, img: mkap10, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 5,690" },
    { id: 11, img: mkap11, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 6,190" },
    { id: 12, img: mkap12, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 4,790" },
     { id: 1, img: mkap1, title: "Digital Printed Suit - 42502243", type: "UNSTITCHED", price: "Rs. 6,490" },
    { id: 2, img: mkap2, title: "3 Piece - Printed Suit - 42502198", type: "UNSTITCHED", price: "Rs. 5,990" },
    { id: 3, img: mkap3, title: "3 Piece - Printed Suit - 42502193", type: "UNSTITCHED", price: "Rs. 5,990" },
    { id: 4, img: mkap4, title: "2 Piece - Printed Suit - 42502168", type: "UNSTITCHED", price: "Rs. 3,490" },
    { id: 5, img: mkap5, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 4,990" },
    { id: 6, img: mkap6, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 5,490" },
    { id: 7, img: mkap7, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 3,990" },
    { id: 8, img: mkap8, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 6,990" },
    { id: 9, img: mkap9, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 4,490" },
    { id: 10, img: mkap10, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 5,690" },
    { id: 11, img: mkap11, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 6,190" },
    { id: 12, img: mkap12, title: "Surprise - Printed Suit", type: "UNSTITCHED", price: "Rs. 4,790" },
  ];

  return (
    <div className="menkap-container">
      {products.map((item) => (
        <div className="menkap-card" key={item.id}>
          {/* Image & Overlay */}
          <div className="men-image-wrapper">
            <img src={item.img} alt={item.title} />
            <div className="men-hover-overlay">
              
            </div>
            <FaRegHeart className="heart-icon" />
          </div>

          {/* Info Section */}
          <div className="menkap-info">
            <p className="men-title">{item.title}</p>
            <p className="men-type">{item.type}</p>
            <p className="men-price">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menkep;
