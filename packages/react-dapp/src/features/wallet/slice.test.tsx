import reducerUnderTest, { initialState, walletConnected, walletConnecting, walletDisconnected } from "./slice";
import { WalletConnectedPayload, WalletState } from "./types";

describe("wallet reducer", () => {
  it("should handle initial state", () => {
    expect(reducerUnderTest(undefined, { type: "unknown" })).toStrictEqual(initialState);
    expect(initialState.connectionStatus).toStrictEqual("disconnected");
  });

  it("walletConnecting", () => {
    const act = reducerUnderTest(initialState, walletConnecting());

    const expected: WalletState = {
      connectionStatus: "connecting",
      data: initialState.data,
    };
    expect(act).toStrictEqual(expected);
  });

  it("walletConnected", () => {
    const testOptions: WalletConnectedPayload = {
      account: "0xFakeAccount",
      chainId: 42,
    };
    const act = reducerUnderTest(initialState, walletConnected(testOptions));

    const expected: WalletState = {
      connectionStatus: "connected",
      data: {
        account: testOptions.account,
      },
    };
    expect(act).toStrictEqual(expected);
  });

  it("walletDisconnected", () => {
    const act = reducerUnderTest(initialState, walletDisconnected());

    const expected: WalletState = {
      connectionStatus: "disconnected",
      data: initialState.data,
    };
    expect(act).toStrictEqual(expected);
  });
});
