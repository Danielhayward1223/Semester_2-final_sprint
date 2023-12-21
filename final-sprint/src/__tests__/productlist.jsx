import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../components/productlist";

jest.setTimeout(10000);

// Mock the fetchData module
jest.mock("../components/fetchData.js", () => () => [
  [
    {
      id: 1,
      title: "Product 1",
      price: 10,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      price: 20,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
  ],
  false,
]);

// test to check if products render properly
describe("Home component", () => {
  test("renders product images", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Check if images are rendered
    const imageElements = screen.getAllByAltText(/Product \d/i);
    expect(imageElements).toHaveLength(2);
  });
});
