import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "./config/store";
import { appLang } from "./features/app/lang";
import { connectLang } from "./features/wallet/lang";
import App from "./App";

describe("App", () => {
  it("should render", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText(new RegExp(appLang.en.title, "m"))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(connectLang.en.disconnected, "m"))).toBeInTheDocument();
    const button = screen.getByRole("button", { name: connectLang.en.connect });
    userEvent.click(button);
    expect(screen.getByText(new RegExp(connectLang.en.connecting, "m"))).toBeInTheDocument();
  });
});
