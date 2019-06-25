import { Item, ItemContent, ItemHeader } from "../../atoms/Item";

export const DoubleLineText = (props: any) => {
  return (
    <Item>
      <ItemHeader>{props.first}</ItemHeader>
      <ItemContent>{props.second}</ItemContent>
    </Item>
  );
};
