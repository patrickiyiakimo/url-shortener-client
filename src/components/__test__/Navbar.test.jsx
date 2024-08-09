// Navbar.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Navbar";

describe("Navbar Component", () => {
  beforeEach(() => {
    localStorage.setItem("theme", "light");
  });

  test("renders Navbar component", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByText(/Weblify/i)).toBeInTheDocument();
  });

  test("toggles theme from light to dark", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const toggle = screen.getAllByRole("checkbox")[0];
    fireEvent.click(toggle);
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  test("toggles theme from dark to light", () => {
    localStorage.setItem("theme", "dark");
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const toggle = screen.getAllByRole("checkbox")[0];
    fireEvent.click(toggle);
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
    expect(localStorage.getItem("theme")).toBe("light");
  });

  test("renders login and signup buttons", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getAllByText(/log in/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/sign up/i)[0]).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(screen.getByText(/features/i)).toBeInTheDocument();
    expect(screen.getByText(/faq/i)).toBeInTheDocument();
    expect(screen.getByText(/footer/i)).toBeInTheDocument();
  });
});
