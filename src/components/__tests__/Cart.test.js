import RestaurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react";

it("Should render Restaurant Menu Component", async () => {
  await act(() => render(<RestaurantMenu />));
  
});
