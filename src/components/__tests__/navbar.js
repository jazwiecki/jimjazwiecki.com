import React from "react"
import renderer from "react-test-renderer"

import Navbar from "../Navbar"

/**
 * @todo write another component test
 * @body try seeing if "todo" app has to have specific comment format
**/

describe("Navbar", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Navbar />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
});