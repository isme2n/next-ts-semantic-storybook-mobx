import { Item } from "semantic-ui-react";

export const ItemHeader = (props: any) => {
  return <Item.Header {...props}>{props.children}</Item.Header>;
};
