import React from "react";
import Banner from "../Banner";
import { Link } from "react-router-dom";
import HeroImg from "../HeroImg";
import RoomContainer from "../RoomContainer";
import SearchRooms from "../SearchRooms";

const Rooms = () => {
  return (
    <>
      <HeroImg hero="roomsHero">
        <Banner title="Rooms">
          <Link className="btn-primary" to="/">
            Home
          </Link>
        </Banner>
      </HeroImg>
      <RoomContainer />
    </>
  );
};

export default Rooms;
