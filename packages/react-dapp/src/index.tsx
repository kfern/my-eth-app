import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./config/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { DAppProvider, Config, Mainnet } from "@usedapp/core";
import { getDefaultProvider } from "ethers";

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider(),
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DAppProvider config={config}>
        <App />
      </DAppProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
