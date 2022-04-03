import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { WalletViewProps } from "../../types";
import WalletView from "./WalletView";

const ComponentUnderTest = (props: WalletViewProps) => {
  return <WalletView {...props} />;
};

export default {
  title: "View/Wallet",
  component: ComponentUnderTest,
} as ComponentMeta<typeof ComponentUnderTest>;

const Template: ComponentStory<typeof ComponentUnderTest> = (args) => <ComponentUnderTest {...args} />;

const basicProps: WalletViewProps = {
  wallet: {
    connectionStatus: "disconnected",
    data: {
      account: "0xfakeAccount",
    },
  },
  onConnect: () => action("Clicked"),
};

export const Disconnected = Template.bind({});
Disconnected.args = basicProps;
Disconnected.storyName = "Disconnected";

export const Connecting = Template.bind({});
Connecting.args = {
  ...basicProps,
  wallet: { ...basicProps.wallet, connectionStatus: "connecting" },
};
Connecting.storyName = "Connecting";

export const Connected = Template.bind({});
Connected.args = {
  ...basicProps,
  wallet: { ...basicProps.wallet, connectionStatus: "connected" },
};
Connected.storyName = "Connected";
