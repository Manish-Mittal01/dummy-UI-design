import DepositDialog from "../Comps/dialogBox/deposit";
import ExchangeDialog from "../Comps/dialogBox/exchange";
import WithdrawDialog from "../Comps/dialogBox/withdraw";
import { sidebarKeys } from "./contants";

export const tab = [
  {
    label: sidebarKeys.deposit,
    content: DepositDialog,
  },
  {
    label: sidebarKeys.withdraw,
    content: WithdrawDialog,
  },
  {
    label: sidebarKeys.transfer,
    content: ExchangeDialog,
  },
  {
    label: sidebarKeys.exchange,
    content: ExchangeDialog,
  },
];
