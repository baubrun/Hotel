import React from 'react'
import Banner from "../Banner";
import { Link } from "react-router-dom";
import HeroImg from "../HeroImg";

const Rooms = () => {
    return (
        <HeroImg hero="roomsHero">
        <Banner title="Rooms">
          <Link className="btn-primary" to="/">
            Home
          </Link>
        </Banner>
      </HeroImg>
    )
}

export default Rooms
