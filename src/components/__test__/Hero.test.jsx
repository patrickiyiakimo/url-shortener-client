// Hero.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import Hero from "../Hero";

describe("Hero Component", () => {
  test("renders Hero component", () => {
    render(<Hero />);

    // Check if the image is rendered
    const image = screen.getByAltText(/programmer's image/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "/images/undraw_Programming_re_kg9v (1).png"
    );

    // Check if the heading is rendered
    const heading = screen.getByRole("heading", {
      name: /more than just shorter links/i,
    });
    expect(heading).toBeInTheDocument();

    // Check if the paragraph is rendered
    const paragraph = screen.getByText(
      /build your brand's recognition and get detailed insights/i
    );
    expect(paragraph).toBeInTheDocument();

    // Check if the button is rendered
    const button = screen.getByRole("button", { name: /get started/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "#input");
  });
});
