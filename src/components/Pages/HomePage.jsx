import React from "react";
import HeroImg from "../HeroImg";
import Banner from "../Banner";
import { Link } from "react-router-dom";
import Amenities from "../Amenities"
import FeaturedRooms from "../FeaturedRooms"


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
    <FeaturedRooms />
    </>
  );
};

export default HomePage;
