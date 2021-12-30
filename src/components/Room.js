
import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";

export default function Room({name, slug, image, price}) {
  return (
    <article className="room">
      <div className="img-container">
        <img src={image} alt="single room" />
        <div className="price-top">
            <h6>{price}ETB</h6>
        </div>
      </div>
    </article>
  );
  }