import { shallow } from "enzyme";
import InputPanel from "./InputPanel";
import React from "react";

describe("InputPanel", () => {
    it("renders correctly", () => {
        shallow(<InputPanel />);
    });
});
