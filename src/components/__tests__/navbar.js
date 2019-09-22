import React from "react"
import renderer from "react-test-renderer"

import Navbar from "../Navbar"

// @todo write another component test

describe("Navbar", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Navbar />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
});