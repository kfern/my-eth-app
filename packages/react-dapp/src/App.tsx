import { DAppProvider, Config, Mainnet } from "@usedapp/core";
import { getDefaultProvider } from "ethers";
import { Container, Header } from "semantic-ui-react";
import { useAppSelector } from "./config/hooks";
import { selectAppShow } from "./features/app/slice";
import lang from "./features/app/lang";
import WalletComponent from "./features/wallet/components/Wallet";

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider(),
  },
};

function App() {
  const show = useAppSelector(selectAppShow);

  return (
    <DAppProvider config={config}>
      <Container text>
        <Header as="h1" attached="top" textAlign="center">
          {lang.en.title}
        </Header>
        {show.wallet && <WalletComponent />}
      </Container>
    </DAppProvider>
  );
}

export default App;
