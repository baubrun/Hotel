import React from "react";
import { shallow } from "enzyme";

import Amenities from "../components/Amenities";
import Title from "../components/Title";
import { amenities } from "../data";

describe("Amenities", () => {
  let wrapper;
  let amenitiesCenter;

  beforeEach(() => {
    wrapper = shallow(<Amenities />);
  });

  it("has child div with className amenities", () => {
    expect(wrapper.find("section").hasClass("amenities")).toBe(true);
  });

  it("has child div with className amenities-center", () => {
    amenitiesCenter = wrapper.find("div");
    expect(amenitiesCenter.hasClass("amenities-center")).toBe(true);
  });

  it("has child component <Title />", () => {
    const component = <Title />;
    expect(wrapper.containsMatchingElement(component)).toEqual(true);
  });

  describe("amenities", () => {
    it(`has ${amenities.length} article elements matching title text`, () => {
      expect(
        amenitiesCenter.find("h6").forEach((node, idx) => {
          expect(node.text()).toBe(amenities[idx].title);
        })
      );
    });
  });
});
