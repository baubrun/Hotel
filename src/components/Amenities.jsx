import React from "react";
import Title from "./Title";
import { MdLocalLaundryService } from "react-icons/md";
import { FaCocktail, FaUmbrellaBeach } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

const fakeText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, fugit!"
const Amenities = () => {
  const amenities = [
    {
      icon: <FiClock />,
      title: "24 hour service",
      info: fakeText,
    },
    {
      icon: <FaCocktail />,
      title: "Free Cocktail",
      info: fakeText,
    },
    {
      icon: <MdLocalLaundryService />,
      title: "Free Laundry",
      info: fakeText,
    },
    {
      icon: <FaUmbrellaBeach />,
      title: "Private Beach",
      info: fakeText,
    },
  ];
  
  return (
    <section className="amenities">
      <Title title="Amenities" />
      <div className="amenities-center">
        {amenities.map((item, idx) => {
          return (
            <article key={idx} className="amenity">
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
