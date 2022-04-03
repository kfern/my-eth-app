import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import appReducer from "../features/app/slice";
import walletReducer from "../features/wallet/slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    wallet: walletReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
