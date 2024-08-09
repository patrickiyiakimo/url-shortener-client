// Footer.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import Footer from "../Footer";
import Booster from "../Booster";

// Mock the Booster component to avoid testing its functionality here
jest.mock("../Booster", () => () => <div>Booster Component</div>);

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test("renders Booster component", () => {
    // Check if the Booster component is rendered
    expect(screen.getByText("Booster Component")).toBeInTheDocument();
  });

  test("renders the footer heading", () => {
    // Check if the main heading "Weblify" is rendered
    expect(
      screen.getByRole("heading", { name: /Weblify/i })
    ).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    // Check if the service navigation links are rendered
    const services = ["Branding", "Design", "Marketing", "Advertisement"];
    services.forEach((service) => {
      expect(screen.getByText(service)).toBeInTheDocument();
    });

    // Check if the company navigation links are rendered
    const company = ["About us", "Contact", "Jobs", "Press kit"];
    company.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });

    // Check if the social navigation section is rendered
    expect(screen.getByRole("link", { name: /Twitter/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /YouTube/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Facebook/i })).toBeInTheDocument();
  });

  test("renders social media icons", () => {
    // Check if the social media icons are rendered
    const icons = screen.getAllByRole("link");
    expect(icons.length).toBe(3); // Ensure there are three social media icons
  });
});
