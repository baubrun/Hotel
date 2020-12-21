import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/default.jpeg";

const Room = ({ room }) => {
  const { images, name, price, slug } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0] || defaultImg}`} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link 
        className="btn-primary room-link" 
        to={`/rooms/${slug}`}>Features</Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

export default Room;
