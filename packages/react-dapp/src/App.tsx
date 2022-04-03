import { Container, Header } from "semantic-ui-react";
import { useAppSelector } from "./config/hooks";
import { selectAppShow } from "./features/app/slice";
import { appLang } from "./features/app/lang";
import WalletComponent from "./features/wallet/components/Wallet";

function App() {
  const show = useAppSelector(selectAppShow);

  return (
    <Container text>
      <Header as="h1" attached="top" textAlign="center">
        {appLang.en.title}
      </Header>
      {show.wallet && <WalletComponent />}
    </Container>
  );
}

export default App;
