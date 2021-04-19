import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("Tests it App Index", () => {
  // eslint-disable-next-line jest/expect-expect
  it("Renders App", () => {
    render(<App />);
  });
});
