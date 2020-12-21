import React from "react";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import HeroImg from "../components/HeroImg";
import RoomContainer from "../components/RoomContainer";


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
