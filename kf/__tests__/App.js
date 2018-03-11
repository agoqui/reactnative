import "react-native";

import App from "../src/containers/App";
import React from "react";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<App />);
});

it("should do something", () => {
  expect(true).toEqual(true);
});
