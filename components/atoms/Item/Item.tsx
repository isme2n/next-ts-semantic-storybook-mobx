import { Item } from "semantic-ui-react";

export const SemanticItem = (props: any) => (
  <Item {...props}>{props.children}</Item>
);
