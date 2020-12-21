import React from "react";
import HeroImg from "../components/HeroImg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Amenities from "../components/Amenities"
import FeaturedRoomsContainer from "../components/FeaturedRoomsContainer"


const HomePage = () => {
  return (
    <>
    <HeroImg hero="defaultHero">
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
