import { shallow } from "enzyme";
import Calculator from "./Calculator";
import React from "react";

describe("Calculator", () => {
    it("renders correctly", () => {
        shallow(<Calculator />);
    });
});
