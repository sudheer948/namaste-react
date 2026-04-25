import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import resMock from "../mocks/resCardMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={resMock} />);

  const name = screen.getByText("Epic Bite");
  expect(name).toBeInTheDocument();
});
