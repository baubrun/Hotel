import React, { createContext, useState, useEffect } from "react";
import items from "./data";

const RoomContext = createContext();

const RoomProvider = (props) => {
 
  const [rooms, setRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("all");
  const [capacity, setCapacity] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);

  useEffect(() => {
    const rooms = formatData(items);
    const featuredRooms = rooms.filter((r) => r.featured === true);
    const maxPrice = Math.max(...rooms.map((item) => item.price));
    const maxSize = Math.max(...rooms.map((item) => item.size));

    setRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setSortedRooms(rooms);
    setLoading(false);
    setPrice(maxPrice);
    setMaxPrice(maxPrice);
    setMaxSize(maxSize);
  },[]);

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
    let tempRooms = [...rooms];
    const room = tempRooms.find((item) => item.slug === slug);
    return room;
  };

  const handleChange = (event) => {
    const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;
    console.log(type, name, value);
  };

  const filterRooms = () => {
    console.log("filter");
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        featuredRooms,
        sortedRooms,
        loading,
        type, 
        capacity,
        minSize, 
        maxSize, 
        price, 
        minPrice,
        maxPrice,
        breakfast,
        pets, 
        getRoom,
        handleChange,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
  return function ConsumerWrapper(props){
    return <RoomConsumer>
      {value => <Component {...props} context={value}/>}
    </RoomConsumer>
  }
}


export { RoomContext, RoomConsumer, RoomProvider };
