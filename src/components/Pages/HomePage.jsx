import React from "react";
import HeroImg from "../HeroImg";
import Banner from "../Banner";
import { Link } from "react-router-dom";
import Amenities from "../Amenities"
import FeaturedRoomsContainer from "../FeaturedRoomsContainer"


const HomePage = () => {
  return (
    <>
    <HeroImg>
      <Banner title="Luxury Rooms" subtitle="Deluxe Rooms starting at $299">
        <Link to="/rooms" className="btn-primary">
          View Rooms
        </Link>
      </Banner>
    </HeroImg>
    <Amenities />
    <FeaturedRoomsContainer />
    </>
  );
};

export default HomePage;
