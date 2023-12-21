import { render, screen } from "@testing-library/react";
import Checkout from "../components/checkout";
import { ShoppingCartProvider } from "../components/ShoppingCartContext";

// Test to check if checkout page order button render correctly
describe("checkout checking", () => {
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
