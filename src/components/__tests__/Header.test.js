import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

it("Should render the Header Component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  const button = screen.getByRole("button", { name: "Login" });
  expect(button).toBeInTheDocument();
});

it("Should render the Header Component with a Cart Items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

it("Should change Login button to Logout button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
