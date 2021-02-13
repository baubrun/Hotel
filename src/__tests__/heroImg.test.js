import React from "react";
import { shallow } from "enzyme";

import HeroImg from "../components/HeroImg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

describe("HeroImg", () => {

  const heroText = "VIEW ROOMS";
  let wrapper


  beforeEach(() => {
    wrapper = shallow(
        <HeroImg>
          <Banner title="Luxury Rooms" subtitle="Deluxe Rooms starting at $299">
            <Link to="/rooms" className="btn-primary">
             {heroText}
            </Link>
          </Banner>
        </HeroImg>
      );
  });


  it('has component <Banner>', () => {
      expect(wrapper.containsMatchingElement(<Banner />));
  });

  it('has component <Link>', () => {
      expect(wrapper.containsMatchingElement(<Link to="/rooms" className="btn-primary"></Link>));
  });




});
