import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";

export default function Room({name, slug, image, price}) {
  console.log("Images", image);
  
  return (
    <article className="room">
      <div className="img-container">
        <img src={image} alt="single room" />
      </div>
    </article>
  );
}
