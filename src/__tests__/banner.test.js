import React from "react";
import { shallow } from "enzyme";

import Banner from "../components/Banner";

describe("Banner", () => {
    const title ="Luxury Rooms"
    const subtitle ="Deluxe Rooms starting at $299"
    const children = () => <a>link</a>
    let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Banner
        title={title}
        subtitle={subtitle}
      >
        {children()}
      </Banner>
    );
  });

  it("has className banner", () => {
    expect(wrapper.find("div").hasClass("banner")).toBe(true);
   
  });


    it('receives props title and subtitle ', () => {
        wrapper.setProps({
            title,
            subtitle,
        })
        expect(wrapper.find("h1").text()).toBe(title);
        expect(wrapper.find("p").text()).toBe(subtitle);
        expect(wrapper.containsMatchingElement(children()))
    })


});
