import { memo, useEffect } from "react";
import { useEthers } from "@usedapp/core";
import { useAppDispatch, useAppSelector } from "../../../config/hooks";
import { selectWalletState, walletConnecting, walletConnected, walletDisconnected } from "../slice";
import WalletView from "./views/WalletView";

const Wallet = () => {
  const { activateBrowserWallet, account, chainId, deactivate } = useEthers();
  const walletState = useAppSelector(selectWalletState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (chainId && account) {
      dispatch(walletConnected({ account, chainId }));
    } else {
      dispatch(walletDisconnected());
    }
  }, [account, chainId, dispatch]);

  const handleConnect = () => {
    if (!account) {
      dispatch(walletConnecting());
      activateBrowserWallet();
    } else {
      deactivate();
    }
  };

  return <WalletView wallet={walletState} onConnect={handleConnect} />;
};

export default memo(Wallet);
