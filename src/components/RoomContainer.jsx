import React, { useContext } from "react";
import SearchRooms from "./SearchRooms";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Spinner from "./Spinner";

const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <SearchRooms rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};

export default withRoomConsumer(RoomContainer);

