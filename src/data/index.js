import React from "react";
import { MdLocalLaundryService } from "react-icons/md";
import { FaCocktail, FaUmbrellaBeach } from "react-icons/fa";
import { FiClock } from "react-icons/fi";


export const fakeText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, fugit!"

export const amenities = [
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

