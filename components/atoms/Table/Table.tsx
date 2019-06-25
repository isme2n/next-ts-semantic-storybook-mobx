import { Table } from "semantic-ui-react";

export const SemanticTable = (props: any) => {
  return (
    <Table style={{ borderRadius: 0, margin: 0 }} {...props}>
      {props.children}
    </Table>
  );
};
