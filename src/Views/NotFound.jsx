import React from "react";
import HeroImg from "../components/HeroImg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
      <HeroImg hero="defaultHero">
        <Banner title="404" subtitle="Page not found">
          <Link className="btn-primary" to="/">
            Home
          </Link>
        </Banner>
      </HeroImg>
  );
};

export default NotFound;
