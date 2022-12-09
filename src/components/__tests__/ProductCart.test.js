import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Chance from "chance";

import ProductCart from "../ProductCart";

const chance = new Chance();

const handleLess = jest.fn();
const handleMore = jest.fn();

// before() is run once before all the tests in a describe
// after() is run once after all the tests in a describe
// beforeEach() is run before each test in a describe
// afterEach() is run after each test in a describe

describe("when using ProductCart component", () => {
  let product;

  beforeEach(() => {
    product = {
      _id: chance.guid(),
      name: chance.name(),
      description: chance.string(),
      price: chance.integer(),
      imageUrl: chance.url(),
      qty: chance.integer(),
    };
  });

  it("should display the product image", () => {
    // Arrange
    render(<ProductCart product={product} />);

    //Act
    const image = screen.getByRole("img");

    //Assert
    expect(image).toBeVisible();
  });

  it("should display the product name", () => {
    render(<ProductCart product={product} />);

    const name = screen.getByText(product.name);

    // screen.debug();
    expect(name).toBeVisible();
  });

  it("should display the product description", () => {
    render(<ProductCart product={product} />);

    const description = screen.getByText(product.description);

    expect(description).toBeVisible();
  });

  it("should display the product price label", () => {
    render(<ProductCart product={product} />);

    const priceLabel = screen.getByText("Price");

    expect(priceLabel).toBeVisible();
  });

  it("should display the product price", () => {
    render(<ProductCart product={product} />);

    const price = screen.getByText("$" + product.price);

    expect(price).toBeVisible();
  });

  it("should display the add button", () => {
    render(<ProductCart product={product} />);

    const addButton = screen.getByRole("button", { name: "+" });

    expect(addButton).toBeVisible();
  });

  it("should display the remove button", () => {
    render(<ProductCart product={product} />);

    const removeButton = screen.getByRole("button", { name: "-" });

    expect(removeButton).toBeVisible();
  });

  it("should call onCLick property whe the add button is clicked", async () => {
    const use = userEvent.setup();
    render(<ProductCart product={product} handleMore={handleMore} />);

    const addButton = screen.getByRole("button", { name: "+" });
    await use.dblClick(addButton);

    expect(handleMore).toHaveBeenCalledTimes(2);
  });

  it("should call onClick property whe the remove button is clicked", async () => {
    const use = userEvent.setup();
    render(<ProductCart product={product} handleLess={handleLess} />);

    const removeButton = screen.getByRole("button", { name: "-" });
    await use.click(removeButton);

    expect(handleLess).toHaveBeenCalledTimes(1)
  });
});
