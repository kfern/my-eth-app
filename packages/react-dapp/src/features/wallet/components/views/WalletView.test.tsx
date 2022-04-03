import { render, screen } from "@testing-library/react";
import ConnectView from "./WalletView";
import { WalletViewProps } from "../../types";
import { connectLang } from "../../lang";
import userEvent from "@testing-library/user-event";

describe("Wallet", () => {
  it("when disconnected", () => {
    const testProps: WalletViewProps = {
      wallet: {
        connectionStatus: "disconnected",
        data: {
          account: "0xfakeAddress",
        },
      },
      onConnect: jest.fn(),
    };

    render(<ConnectView {...testProps} />);

    expect(screen.getByText(new RegExp(connectLang.en.disconnected, "im"))).toBeInTheDocument();
    expect(screen.queryAllByText(testProps.wallet.data.account).length).toBe(0);

    const button = screen.getByRole("button", { name: connectLang.en.connect });
    userEvent.click(button);
    expect(testProps.onConnect).toHaveBeenCalledTimes(1);
    expect(testProps.onConnect).toBeCalledWith(true);
  });

  it("when connecting", () => {
    const testProps: WalletViewProps = {
      wallet: {
        connectionStatus: "connecting",
        data: {
          account: "0xfakeAddress",
        },
      },
      onConnect: jest.fn(),
    };

    render(<ConnectView {...testProps} />);

    expect(screen.getByText(new RegExp(connectLang.en.connecting, "im"))).toBeInTheDocument();
    expect(screen.queryAllByRole("button").length).toBe(0);
    expect(screen.queryAllByText(testProps.wallet.data.account).length).toBe(0);
    expect(testProps.onConnect).toHaveBeenCalledTimes(0);
  });

  it("when connected", () => {
    const testProps: WalletViewProps = {
      wallet: {
        connectionStatus: "connected",
        data: {
          account: "0xfakeAddress",
        },
      },
      onConnect: jest.fn(),
    };

    render(<ConnectView {...testProps} />);
    expect(screen.getByText(new RegExp(connectLang.en.connected, "im"))).toBeInTheDocument();
    expect(screen.queryAllByText(testProps.wallet.data.account).length).toBe(1);

    const button = screen.getByRole("button", { name: connectLang.en.disconnect });
    userEvent.click(button);
    expect(testProps.onConnect).toHaveBeenCalledTimes(1);
    expect(testProps.onConnect).toBeCalledWith(false);
  });
});
