import React from "react";
import Title from "../components/Title";
import {getUniqueTypes} from "../util/utils"
import { connect } from "react-redux";
import { mapStateToProps } from "../util/reduxUtils";


const SearchRooms = (props) => {
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
  } = props;

  let types = getUniqueTypes(props.rooms, "type");
  console.log('types :>> ', types);
  types = ["all", ...types];
  return (
    <>
      <section className="search-container">
        <Title title="Search Rooms" />
        <form className="search-from">
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
        </form>
      </section>
    </>
  );
};

export default connect(mapStateToProps)(SearchRooms);
