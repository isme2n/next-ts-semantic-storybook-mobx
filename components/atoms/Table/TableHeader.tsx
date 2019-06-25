import { List, Header, Icon, Item, Input, Table } from "semantic-ui-react";

export const TableHeader = (props: any) => {
  return <Table.Header {...props}>{props.children}</Table.Header>;
};
