import React from 'react';
import './Slider.css';
import mc1img from '../imgs/mc1img.jpg';
import mkap3 from '../imgs/mkap3.jpg';
import mkap2 from '../imgs/mkap2.jpg';
import p3img from '../imgs/p3img.jpg';
import Carousel from "react-bootstrap/Carousel";

export default function Slider() {
  const slides = [
    { img: mc1img, title: "Latest Collection", subtitle: "Buy Now" },
    { img: mkap3, title: "Exclusive Style", subtitle: "Buy Now" },
    { img: mkap2, title: "Trendy Fashion", subtitle: "Buy Now" },
    { img: p3img, title: "Elegant Wear", subtitle: "Buy Now" },
  ];

  return (
    <div className="slider-container">
      <Carousel fade interval={2500} controls indicators pause={false}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 slider-img"
              src={slide.img}
              alt={`Slide ${index + 1}`}
            />
            <div className="slider-overlay">
              <h2 className="slider-heading">{slide.title}</h2>
              <h3 className="slider-subheading">{slide.subtitle}</h3>
              <button className="slider-btn">Shop Now</button>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
