import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import FeaturedRooms from "./FeaturedRooms";
import { formatData } from "../util";
import { roomsState } from "../redux/roomSlice";

const FeaturedRoomsContainer = () => {
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const { rooms } = useSelector(roomsState);

  useEffect(() => {
    const data = formatData(rooms);
    getFeaturedRooms(data);
  }, [rooms]);

  const getFeaturedRooms = (rooms) => {
    const fr = rooms.filter((room) => room.featured === true);
    setFeaturedRooms(fr);
  };

  return <FeaturedRooms rooms={featuredRooms} />;
};

export default FeaturedRoomsContainer;
