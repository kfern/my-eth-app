import { memo } from "react";
import { Message, SemanticICONS, Button } from "semantic-ui-react";
import lang from "../../lang";
import { WalletViewProps, NetworkConnectionStatus } from "../../types";

const icons: Record<NetworkConnectionStatus, SemanticICONS> = {
  disconnected: "unlinkify",
  connecting: "spinner",
  connected: "linkify",
};

const getContent = (connectionStatus: NetworkConnectionStatus, onConnect: (connect: boolean) => void) => {
  if (connectionStatus === "connecting") {
    return <p>{lang.en.connecting}</p>;
  } else {
    return (
      <div>
        <span>{lang.en[connectionStatus]}</span>
        <Button primary onClick={() => onConnect(connectionStatus === "disconnected")} floated="right">
          {connectionStatus === "connected" ? lang.en.disconnect : lang.en.connect}
        </Button>
      </div>
    );
  }
};

const ConnectView = ({ onConnect, wallet }: WalletViewProps) => {
  return (
    <div>
      <div>
        <Message
          attached
          icon={icons[wallet.connectionStatus]}
          info={wallet.connectionStatus === "connecting"}
          success={wallet.connectionStatus === "connected"}
          error={wallet.connectionStatus === "disconnected"}
          content={getContent(wallet.connectionStatus, onConnect)}
        />
      </div>
      <div>{wallet.connectionStatus === "connected" && <strong>{wallet.data.account}</strong>}</div>
    </div>
  );
};

export default memo(ConnectView);
