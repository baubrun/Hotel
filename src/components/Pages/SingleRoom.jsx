import React, { useState, useContext } from "react";
import defaultImg from "../../images/room-1.jpeg";
import Hero from "../HeroImg";
import Banner from "../Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../../context";
import StyledHero from "../StyledHero";

const SingleRoom = (props) => {
  const [slug, setSlug] = useState(props.match.params.slug);
  const [defaultImage, setDefaultImg] = useState(defaultImg);

  const { getRoom } = useContext(RoomContext);
  const room = getRoom(slug);
  if (!room) {
    return (
      <div className="error">
        <h3>Room not found</h3>
        <Link className="btn-primary" to="/rooms">
          Return to rooms
        </Link>
      </div>
    );
  }

  const [mainImg, ...restImages] = room.images;

  return (
    <>
      <StyledHero hero="roomsHero" img={mainImg}>
        <Banner title={`${room.name} room`}>
          <Link to="/rooms" className="btn-primary">
            Return to Rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {restImages.map((img, idx) => {
            return <img key={idx} src={img} alt={room.name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{room.description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>price: ${room.price}</h6>
            <h6>size: {(room.size / 0.3048).toFixed(0)} m<sup>2</sup></h6>
            <h6> max capacity : {room.capacity > 1 ? `${room.capacity} people`: `${room.capacity} person`}</h6>
            <h6>{room.pets ? "Pets" : "No pets"} allowed</h6>
        <h6>{room.breakfast && "Free breakfast"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {room.extras.map((item, idx) => {
            return <li key={idx}>- {item}</li>
            
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
