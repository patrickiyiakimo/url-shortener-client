// Advanced.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";


import Advanced from "../Advanced";

describe("Advanced Component", () => {
  test("renders Advanced component", () => {
    render(<Advanced />);

    // Check if the main heading is rendered
    expect(
      screen.getByRole("heading", { name: /advanced statistics/i })
    ).toBeInTheDocument();

    // Check if the subheading is rendered
    expect(
      screen.getByText(/track how your link are performing across the web/i)
    ).toBeInTheDocument();

    // Check if the three sections are rendered with the correct headings and text
    const sections = [
      {
        heading: "Brand Recognition",
        text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
      },
      {
        heading: "Detailed Records",
        text: "Gain insight into whois clicking your links. Knowing where and when people engage with your content help install better information.",
      },
      {
        heading: "Fully Customisable",
        text: "Improve brand awareness and content discovarability through customisable link, supercharging audience engagement.",
      },
    ];

    sections.forEach(({ heading, text }) => {
      expect(
        screen.getByRole("heading", { name: heading })
      ).toBeInTheDocument();
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
