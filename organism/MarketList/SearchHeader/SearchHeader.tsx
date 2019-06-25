import { Input } from "semantic-ui-react";

import { Icon } from "../../../components/atoms/Icon";

import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell
} from "../../../components/atoms/Table";

export const SearchHeader = () => (
  <Table
    basic
    celled
    compact
    size="small"
    style={{ border: "none", margin: 0 }}
  >
    <TableHeader>
      <TableRow textAlign="center">
        <TableHeaderCell style={{ margin: 0, paddingLeft: 8, paddingRight: 8 }}>
          <Input
            transparent
            icon="search"
            placeholder="Search..."
            style={{ margin: 0, width: "100%" }}
          />
        </TableHeaderCell>
        <TableHeaderCell>
          <Icon name="star outline" />
        </TableHeaderCell>
        <TableHeaderCell>
          <Icon name="setting" />
        </TableHeaderCell>
      </TableRow>
    </TableHeader>
  </Table>
);
