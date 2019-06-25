import { List, Header, Icon, Item, Input, Table } from "semantic-ui-react";

export const TableHeaderCell = (props: any) => {
  return (
    <Table.HeaderCell style={{ textAlign: "center" }} {...props}>
      {props.children}
    </Table.HeaderCell>
  );
};
