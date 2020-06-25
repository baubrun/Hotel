import React from "react";
import HeroImg from "../HeroImg";
import Banner from "../Banner";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
      <HeroImg>
        <Banner title="404" subtitle="Page not found">
          <Link className="btn-primary" to="/">
            Home
          </Link>
        </Banner>
      </HeroImg>
  );
};

export default NotFound;
