import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import StyledHero from "../components/StyledHero";

import { roomsState } from "../redux/roomSlice";
import { formatData } from "../util";

const SingleRoom = (props) => {
  const { rooms } = useSelector(roomsState);
  const history = useHistory();

  const [state, setState] = useState({
    defaultImage: `${process.env.PUBLIC_URL}/images/$room-1.jpeg`,
    slug: props.match.params.slug,
    rooms,
    room: {},
  });

  useEffect(() => {
    if (rooms.length < 1) {
      history.push("/rooms");
    }
  }, [rooms]);


  const getRoom = (slug) => {
    let tempRooms = state.rooms;
    const room = tempRooms.filter((item) => item.fields.slug === slug);
    if (room) {
      const found = formatData(room)[0];
      return found;
    }
  };


  useEffect(() => {
    setState({ ...state, room: getRoom(state.slug) });
  }, []);

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = state && state.room;

  if (!images || !extras) {
    return (
      <div className="error">
        <h3>Room not found</h3>
        <Link className="btn-primary" to="/rooms">
          Return to rooms
        </Link>
      </div>
    );
  }

  return (
    <>
      <StyledHero
        hero="roomsHero"
        img={`${process.env.PUBLIC_URL}/images/${images[0]}`}
      >
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Return to Rooms
          </Link>
        </Banner>
      </StyledHero>

      <section className="single-room">
        <div className="single-room-images">
          {images.slice(1).map((img, idx) => {
            return (
              <img
                key={idx}
                src={`${process.env.PUBLIC_URL}/images/${img}`}
                alt={name}
              />
            );
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>price: ${price}</h6>
            <h6>
              size: {(size / 0.3048).toFixed(0)} m<sup>2</sup>
            </h6>
            <h6>
              max capacity :
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "Pets" : "No pets"} allowed</h6>
            <h6>{breakfast && "Free breakfast"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extras.map((item, idx) => {
            return <li key={idx}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
