import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "./config/store";
import lang from "./lang";
import App from "./App";

describe.skip("App", () => {
  it("should render", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText(new RegExp(lang.app.en.title, "m"))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(lang.wallet.en.disconnected, "m"))).toBeInTheDocument();
    const button = screen.getByRole("button", { name: lang.wallet.en.connect });
    await act(async () => {
      userEvent.click(button);
    });
    expect(screen.getByText(new RegExp(lang.wallet.en.connecting, "m"))).toBeInTheDocument();
  });
});
