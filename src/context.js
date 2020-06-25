import React, { createContext, useState, useEffect } from "react";
import items from "./data";

const RoomContext = createContext();

const RoomProvider = (props) => {
  const [rooms, setRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const rooms = formatData(items);
    const featuredRooms = rooms.filter((r) => r.featured === true);
    setRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setLoading(false)
  }, []);

  const formatData = () => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((i) => i.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  const getData = () => {};

  const getRoom = (slug) => {
      let tempRooms = [...rooms]
      const room = tempRooms.find(item => item.slug === slug)
      return room
  }

  return (
    <RoomContext.Provider
      value={{ rooms, featuredRooms, sortedRooms, loading, getRoom}}
    >
      {props.children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomConsumer, RoomProvider };
