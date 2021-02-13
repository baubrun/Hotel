import React from "react";
import {
    shallow,
} from "enzyme";
import HomePage from "../Views/HomePage"
import toJSON from "enzyme-to-json"

describe("Homepage", () => {
    const wrapper = shallow(<HomePage />)

    it('renders correctly', () => {
        expect(toJSON(wrapper)).toMatchSnapshot()
    })

});


