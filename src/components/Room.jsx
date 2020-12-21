import React, {useState}  from "react";
import { Link } from "react-router-dom";

const Room = ({ room }) => {
  const [imgLoaded, setImgLoaded] = useState(false)
  
  const { images, name, price, slug } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img 
        onLoad={() => setImgLoaded(true)}
        style={{ display: `${imgLoaded ? "block": "none"}` }} 
        src={`${process.env.PUBLIC_URL}/images/${images[0] || 'default.jpeg'}`} 
        alt="single room" 
        />
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
