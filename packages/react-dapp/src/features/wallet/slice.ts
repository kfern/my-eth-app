import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../config/store";
import * as Slice from "./types";

export const initialState: Slice.WalletState = {
  connectionStatus: "disconnected",
  data: {
    account: "",
  },
};

export const slice = createSlice({
  name: "wallet",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    walletConnecting: (state) => {
      state.connectionStatus = "connecting";
      state.data = initialState.data;
    },
    walletConnected: (state, action: PayloadAction<Slice.WalletConnectedPayload>) => {
      state.connectionStatus = "connected";
      state.data.account = action.payload.account;
    },
    walletDisconnected: (state) => {
      state.connectionStatus = "disconnected";
      state.data = initialState.data;
    },
  },
});

// Actions
export const { walletConnecting, walletConnected, walletDisconnected } = slice.actions;

// Selectors
export const selectWalletState = (state: RootState) => state.wallet;

// default
export default slice.reducer;
