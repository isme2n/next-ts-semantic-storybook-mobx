import { Table } from "semantic-ui-react";

export const TableCell = (props: any) => {
  return <Table.Cell {...props}>{props.children}</Table.Cell>;
};
