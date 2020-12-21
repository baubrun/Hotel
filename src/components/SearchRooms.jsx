import React from "react";
import Title from "../components/Title";
import { getUniqueTypes } from "../util/utils";


const options = (arr) => {
  return arr.map((item, idx) => {
    return (
      <option key={idx} value={item}>
        {item}
      </option>
    );
  });
};

const SearchRooms = (props) => {
  const {
    capacity,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    price,
    rooms,
    type,
  } = props.state;
  let cpc = getUniqueTypes(rooms, "capacity");
  let types = getUniqueTypes(rooms, "type");
  types = ["all", ...types];

  return (
    <>
      <section className="search-container">
        <Title title="Search Rooms" />
        <form className="search-form">
          <div className="form-group">
            <label htmlFor="price">Price ${price}</label>
            <input
              min={minPrice}
              max={maxPrice}
              name="price"
              onChange={(evt) => props.handleChange(evt)}
              type="range"
              value={price}
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              className="form-control"
              id="type"
              name="type"
              onChange={(evt) => props.handleChange(evt)}
              value={type}
            >
              {options(types)}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select
              className="form-control"
              id="capacity"
              name="capacity"
              onChange={(evt) => props.handleChange(evt)}
              value={capacity}
            >
              {options(cpc)}
            </select>
          </div>
          <div className="size-inputs">
            <label htmlFor="size">Room Size</label>
            <input
              className="size-input"
              id="size"
              name="minSize"
              onChange={(evt) => props.handleChange(evt)}
              value={minSize}
            />
            <input
              className="size-input"
              id="size"
              name="maxSize"
              onChange={(evt) => props.handleChange(evt)}
              value={maxSize}
            />
          </div>
            <div className="single-extra">
              <input
                name="breakfast"
                id="breakfast"
                onChange={(evt) => props.handleChange(evt)}
                type="checkbox"
              />
              <label htmlFor="breakfast" checked>
                breakfast
              </label>
            </div>
          <div className="single-extra">
            <input
              name="pets"
              id="pets"
              onChange={(evt) => props.handleChange(evt)}
              type="checkbox"
            />
            <label htmlFor="pets" checked>
              pets
            </label>
          </div>
        </form>
      </section>
    </>
  );
};

export default SearchRooms
