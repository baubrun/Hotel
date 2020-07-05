import React from "react";
import Title from "../components/Title";
import { getUniqueTypes } from "../util/utils";
import { connect } from "react-redux";
import {dispatchStateToProps } from "../util/reduxUtils";


const SearchRooms = ({handleChange, rooms, type}) => {

    let types = getUniqueTypes(rooms, "type");
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
  }


export default connect(null, dispatchStateToProps)(SearchRooms);
