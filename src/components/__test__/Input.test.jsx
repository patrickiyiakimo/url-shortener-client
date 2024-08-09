// Input.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import Input from "../Input";

// Mocking the fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ shortUrl: "http://short.url/test" }),
  })
);

describe("Input Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("renders Input component", () => {
    render(<Input />);
    expect(
      screen.getByPlaceholderText(/shorten a link here.../i)
    ).toBeInTheDocument();
    expect(screen.getByText(/enter your long url here/i)).toBeInTheDocument();
  });

  test("shows validation error when URL is invalid", async () => {
    render(<Input />);

    fireEvent.change(screen.getByPlaceholderText(/shorten a link here.../i), {
      target: { value: "invalid-url" },
    });
    fireEvent.click(screen.getByText(/shorten it!/i));

    await waitFor(() => {
      expect(screen.getByText(/invalid url/i)).toBeInTheDocument();
    });
  });

  test("shows validation error when URL is empty", async () => {
    render(<Input />);

    fireEvent.click(screen.getByText(/shorten it!/i));

    await waitFor(() => {
      expect(screen.getByText(/url is required/i)).toBeInTheDocument();
    });
  });

  test("shortens URL successfully", async () => {
    render(<Input />);

    fireEvent.change(screen.getByPlaceholderText(/shorten a link here.../i), {
      target: { value: "http://valid.url" },
    });
    fireEvent.click(screen.getByText(/shorten it!/i));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        "https://weblifyurl.vercel.app/urlSubmit",
        expect.any(Object)
      );
      expect(screen.getByText(/shortened url:/i)).toBeInTheDocument();
      expect(screen.getByText(/http:\/\/short.url\/test/i)).toBeInTheDocument();
    });
  });

  test("handles network error", async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({ ok: false }));
    render(<Input />);

    fireEvent.change(screen.getByPlaceholderText(/shorten a link here.../i), {
      target: { value: "http://valid.url" },
    });
    fireEvent.click(screen.getByText(/shorten it!/i));

    await waitFor(() => {
      expect(
        screen.getByText(/network response was not ok/i)
      ).toBeInTheDocument();
    });
  });

  test("copies shortened URL", async () => {
    render(<Input />);

    fireEvent.change(screen.getByPlaceholderText(/shorten a link here.../i), {
      target: { value: "http://valid.url" },
    });
    fireEvent.click(screen.getByText(/shorten it!/i));

    await waitFor(() => {
      const copyButton = screen.getByText(/copy/i);
      fireEvent.click(copyButton);
      expect(screen.getByText(/copied!/i)).toBeInTheDocument();
    });
  });
});
