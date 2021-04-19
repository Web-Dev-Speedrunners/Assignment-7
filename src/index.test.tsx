import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

describe("Tests it App Index", () => {
  // eslint-disable-next-line jest/expect-expect
  it("Renders App", () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
});
