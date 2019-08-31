import { shallow } from "enzyme";
import NumberInput from "./NumberInput";
import React from "react";

describe("NumberInput", () => {
    it("renders correctly", () => {
        shallow(<NumberInput />);
    });
});
