import { SearchHeader } from "./SearchHeader/SearchHeader";
import { Tab } from "../../components/atoms/Tab";
import { KrwMarket } from "./KrwMarket";

const panes = [
  { menuItem: "원화거래", render: () => <KrwMarket /> },
  { menuItem: "BTC", render: () => <KrwMarket /> },
  { menuItem: "ETH", render: () => <KrwMarket /> },
  { menuItem: "USDT", render: () => <KrwMarket /> }
];

export const MarketList = () => (
  <>
    <SearchHeader />
    <Tab panes={panes} />
  </>
);
