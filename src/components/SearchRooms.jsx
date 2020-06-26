import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

const SearchRooms = () => {
  const context = useContext(RoomContext);
  const {
    capacity,
    minSize,
    maxSize,
    price,
    minPrice,
    maxPrice,
    breakfast,
    pets,
    handleChange,
    type,
  } = context;
  return (
      <>
      <section className="search-container">
          <Title title="Search Rooms" />
          <form className="search-from">
              {/* select type*/}
              {/* end select type*/}
          </form>
      </section>
      </>
  )
};

export default SearchRooms;
