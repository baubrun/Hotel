import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

const getUniqueTypes = (items, value) => {
  return [...new Set(items.map((i) => i[value]))];
};

const SearchRooms = ({ rooms }) => {
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

  let types = getUniqueTypes(rooms, "type");
  types = ["all", ...types];
  return (
    <>
      <section className="search-container">
        <Title title="Search Rooms" />
        <form className="search-from">
          {/* select type*/}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              className="form-control"
              id="type"
              name="type"
              onChange={handleChange}
              value={type}
            >
              {types.map((item, idx) => {
                return (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end select type*/}
        </form>
      </section>
    </>
  );
};

export default SearchRooms;
