import { shallow } from "enzyme";
import ResultDisplay from "./ResultDisplay";
import React from "react";

describe("ResultDisplay", () => {
    it("renders correctly", () => {
        shallow(<ResultDisplay />);
    });
});
