import { List, Segment } from "semantic-ui-react";

import Link from "next/link";

interface IListItemProps {
  timestamp: string;
  title: string;
  contents: string;
}

export const ListItem = (props: IListItemProps) => (
  <Segment>
    <List.Item>
      <List.Header as={"h4"}>{props.title}</List.Header>
      <List.Description>
        {new Date(parseInt(props.timestamp) * 1000).toLocaleString()}
      </List.Description>
      <br />
      <List.Description>{props.contents}</List.Description>
    </List.Item>
  </Segment>
);
