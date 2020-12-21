import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import SearchRooms from "./SearchRooms";
import RoomList from "./RoomList";

import { formatData } from "../util";
import { roomsState } from "../redux/roomSlice";

const RoomContainer = () => {
  const { rooms } = useSelector(roomsState);
  const [state, setState] = useState({
    rooms: [],
    type: "all",
    selectedRooms: [],
    capacity: 1,
    minSize: 0,
    maxSize: 0,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    breakfast: false,
    pets: false,
  });

  useEffect(() => {
    const data = formatData(rooms);
    const maxPrice = Math.max(...data.map((item) => item.price));
    const maxSize = Math.max(...data.map((item) => item.size));

    setState({
      ...state,
      maxPrice,
      maxSize,
      price: maxPrice,
      rooms: data,
      selectedRooms: data,
    });
  }, []);

  const handleChange = (evt) => {
    const target = evt.target;
    console.log("evt.target :>> ", evt.target);
    const value = target.type === "checkbox" ? target.checked : target.value;
    setState({ ...state, [evt.target.name]: value });
  };

  // useEffect(() => {
  //   selectRoom();
  //   // console.log('***** :>> ', )
  // }, [
  //   state.capacity,
  //   state.type,
  //   state.price,
  //   state.breakfast,
  //   state.pets,
  //   state.minSize,
  //   state.maxSize,
  // ]);

  const selectRoom = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = state;
    let sr = rooms;
    // console.log("rooms :>> ", rooms);

    capacity = parseInt(capacity);
    price = parseInt(price);
    minSize = parseInt(minSize);
    maxSize = parseInt(maxSize);

    if (type !== "all") {
      sr = sr.filter((r) => r.type === type);
    }
    if (capacity !== 1) {
      sr = sr.filter((r) => r.capacity >= capacity);
    }

    sr = sr.filter((r) => r.price <= price);
    sr = sr.filter((r) => r.size >= minSize && r.size <= maxSize);
    if (breakfast) {
      sr = sr.filter((r) => r.breakfast === true);
    }
    if (pets) {
      sr = sr.filter((r) => r.pets === true);
    }
    setState({ ...state, selectedRooms: sr });
  };

  return (
    <>
      <SearchRooms handleChange={handleChange} state={state} />
      <RoomList rooms={state.selectedRooms} />
    </>
  );
};

export default RoomContainer;
