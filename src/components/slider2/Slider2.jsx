import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import "./Slider2.css";

import w1img from "../imgs/w1img.jpg";
import w2img from "../imgs/w2img.jpg";
import w3img from "../imgs/w3img.jpg";
import w4img from "../imgs/w4img.jpg";
import w5img from "../imgs/w5img.jpg";
import w6img from "../imgs/w6img.jpg";
import w7img from "../imgs/w7img.jpg";
import w8img from "../imgs/w8img.jpg";
import w9img from "../imgs/w9img.jpg";
import w10img from "../imgs/w10img.jpg";

export default function Slider2() {
  const images = [
    { src: w1img, title: "Shop By Concept" },
    { src: w2img, title: "Ammi Aur Mei" },
    { src: w3img, title: "Endless Summer" },
    { src: w4img, title: "Unstitched Glow" },
    { src: w5img, title: "Pret Story" },
    { src: w6img, title: "Men's Club" },
    { src: w7img, title: "Luxury Line" },
    { src: w8img, title: "Summer Collection" },
    { src: w9img, title: "Casual Wear" },
    { src: w10img, title: "Festive Edit" },
  ];

  // Two slides: 5 images each
  const slides = [images.slice(0, 5), images.slice(5, 10)];

  return (
    <div className="custom-slider2-container">
      <Carousel interval={3000} indicators controls pause={false}>
        {slides.map((group, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {group.map((item, idx) => (
                <Col key={idx} xs={6} sm={4} md={2} lg={2} className="custom-slider2-col">
                  <div className="custom-slider2-circle">
                    <img src={item.src} alt={item.title} className="custom-slider2-img" />
                  </div>
                  <p className="custom-slider2-title">{item.title}</p>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
