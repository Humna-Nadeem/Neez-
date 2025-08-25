import React from "react";
import "./Womenkap.css";
import kap1 from "../imgs/kap1.jpg";
import kap2 from "../imgs/kap2.jpg";
import kap3 from "../imgs/kap3.jpg";
import kap4 from "../imgs/kap4.jpg";
import kap5 from "../imgs/kap5.jpg";
import kap6 from "../imgs/kap6.jpg";
import kap7 from "../imgs/kap7.jpg";
import kap8 from "../imgs/kap8.jpg";
import kap9 from "../imgs/kap9.jpg";
import kap10 from "../imgs/kap10.jpg";
import kap11 from "../imgs/kap11.jpg";
import kap12 from "../imgs/kap12.jpg";
import { FaRegHeart } from "react-icons/fa";

const Womenkap = () => {
  const products = [
    {
      id: 1,
      img: kap1,
      title: "Digital Printed Suit - 42502243",
      type: "UNSTITCHED",
      price: "Rs. 6,490",
    },
    {
      id: 2,
      img: kap2,
      title: "3 Piece - Printed Suit - 42502198",
      type: "UNSTITCHED",
      price: "Rs. 5,990",
    },
    {
      id: 3,
      img: kap3,
      title: "3 Piece - Printed Suit - 42502193",
      type: "UNSTITCHED",
      price: "Rs. 5,990",
    },
    {
      id: 4,
      img: kap4,
      title: "2 Piece - Printed Suit - 42502168",
      type: "UNSTITCHED",
      price: "Rs. 3,490",
    },
    {
      id: 5,
      img: kap5,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 4,990",
    },
    {
      id: 6,
      img: kap6,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 5,490",
    },
    {
      id: 7,
      img: kap7,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 3,990",
    },
    {
      id: 8,
      img: kap8,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 6,990",
    },
    {
      id: 9,
      img: kap9,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 4,490",
    },
    {
      id: 10,
      img: kap10,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 5,690",
    },
    {
      id: 11,
      img: kap11,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 6,190",
    },
    {
      id: 12,
      img: kap12,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 4,790",
    },
    {
      id: 1,
      img: kap1,
      title: "Digital Printed Suit - 42502243",
      type: "UNSTITCHED",
      price: "Rs. 6,490",
    },
    {
      id: 2,
      img: kap2,
      title: "3 Piece - Printed Suit - 42502198",
      type: "UNSTITCHED",
      price: "Rs. 5,990",
    },
    {
      id: 3,
      img: kap3,
      title: "3 Piece - Printed Suit - 42502193",
      type: "UNSTITCHED",
      price: "Rs. 5,990",
    },
    {
      id: 4,
      img: kap4,
      title: "2 Piece - Printed Suit - 42502168",
      type: "UNSTITCHED",
      price: "Rs. 3,490",
    },
    {
      id: 5,
      img: kap5,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 4,990",
    },
    {
      id: 6,
      img: kap6,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 5,490",
    },
    {
      id: 7,
      img: kap7,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 3,990",
    },
    {
      id: 8,
      img: kap8,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 6,990",
    },
    {
      id: 9,
      img: kap9,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 4,490",
    },
    {
      id: 10,
      img: kap10,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 5,690",
    },
    {
      id: 11,
      img: kap11,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 6,190",
    },
    {
      id: 12,
      img: kap12,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 4,790",
    },
    {
      id: 1,
      img: kap1,
      title: "Digital Printed Suit - 42502243",
      type: "UNSTITCHED",
      price: "Rs. 6,490",
    },
    {
      id: 2,
      img: kap2,
      title: "3 Piece - Printed Suit - 42502198",
      type: "UNSTITCHED",
      price: "Rs. 5,990",
    },
    {
      id: 3,
      img: kap3,
      title: "3 Piece - Printed Suit - 42502193",
      type: "UNSTITCHED",
      price: "Rs. 5,990",
    },
    {
      id: 4,
      img: kap4,
      title: "2 Piece - Printed Suit - 42502168",
      type: "UNSTITCHED",
      price: "Rs. 3,490",
    },
    {
      id: 5,
      img: kap5,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 4,990",
    },
    {
      id: 6,
      img: kap6,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 5,490",
    },
    {
      id: 7,
      img: kap7,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 3,990",
    },
    {
      id: 8,
      img: kap8,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 6,990",
    },
    {
      id: 9,
      img: kap9,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 4,490",
    },
    {
      id: 10,
      img: kap10,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 5,690",
    },
    {
      id: 11,
      img: kap11,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 6,190",
    },
    {
      id: 12,
      img: kap12,
      title: "Surprise - Printed Suit",
      type: "UNSTITCHED",
      price: "Rs. 4,790",
    },
  ];

  return (
    <div className="womankep-container">
      {products.map((item) => (
        <div className="womankep-card" key={item.id}>
          <div className="image-wrapper">
            <img src={item.img} alt={item.title} />
            <div className="hover-overlay">
              
            </div>
            <FaRegHeart className="heart-icon" />
          </div>
          <div className="womankep-info">
            <p className="title">{item.title}</p>
            <p className="type">{item.type}</p>
            <p className="price">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Womenkap;
