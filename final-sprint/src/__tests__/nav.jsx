import { render, screen } from "@testing-library/react";
import Checkout from "../components/checkout";
import {
  ShoppingCartProvider,
  useShoppingCart,
} from "../components/ShoppingCartContext";
import { Link } from "react-router-dom";
import { browserRouter as router } from "react-router-dom";
import useFetch from "../components/fetchData";

describe("Nav testing", () => {
  test("Checks if order button renders properly", () => {
    render(
      <ShoppingCartProvider>
        <Checkout />
      </ShoppingCartProvider>
    );
    const linkElement = screen.getByRole("button");
    expect(linkElement).toBeInTheDocument();
  });
});
