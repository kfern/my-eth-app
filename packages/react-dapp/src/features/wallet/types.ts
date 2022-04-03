export type NetworkConnectionStatus = "disconnected" | "connecting" | "connected";

export interface WalletData {
  account: string;
}
export interface WalletState {
  connectionStatus: NetworkConnectionStatus;
  data: WalletData;
}
export interface WalletViewProps {
  wallet: WalletState;
  onConnect: () => void;
}
export interface WalletConnectedPayload {
  account: string;
  chainId: number;
}
