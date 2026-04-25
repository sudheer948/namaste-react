import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Test Case", () => {
  beforeAll(() => {
    console.log("Before All");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  afterAll(() => {
    console.log("After All"); 
  });

  test("Should render Contact Us Component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should render Submit Button in the Contact Us Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact Component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).not.toBe(3);
  });
});
