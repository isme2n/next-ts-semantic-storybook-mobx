import { Header, HeaderContent, HeaderSubheader } from "../../atoms/Header";

export const NameWithSymbol = (props: any) => (
  <Header as="h5">
    <HeaderContent>{props.name}</HeaderContent>
    <HeaderSubheader>{props.symbol}</HeaderSubheader>
  </Header>
);
