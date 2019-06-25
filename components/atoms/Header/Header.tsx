import { Header } from "semantic-ui-react";

export const SemanticHeader = (props: any) => (
  <Header {...props}>{props.children}</Header>
);
