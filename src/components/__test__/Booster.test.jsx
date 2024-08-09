// Booster.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import Booster from "../Booster";

describe("Booster Component", () => {
  test("renders Booster component", () => {
    render(<Booster />);

    // Check if the main heading is rendered
    expect(
      screen.getByRole("heading", { name: /Boost Your Links Today/i })
    ).toBeInTheDocument();

    // Check if the button is rendered
    const button = screen.getByRole("button", { name: /Get Started/i });
    expect(button).toBeInTheDocument();

    // Check if the button has the correct attributes
    expect(button).toHaveClass(
      "px-8 mt-3 py-3 text-gray-800 hover:bg-gray-200 hover:text-gray-700 rounded-full bg-blue-300"
    );
  });
});
