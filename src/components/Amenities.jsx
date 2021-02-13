import React from "react";

import Title from "./Title";
import {amenities} from "../data"



const Amenities = () => {
  return (
    <section className="amenities">
      <Title title="Amenities" />
      <div className="amenities-center">
        {amenities.map((item, idx) => {
          return (
            <article key={item.title} className="amenity">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Amenities;
