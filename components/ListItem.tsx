import { List } from 'semantic-ui-react'

import Link from 'next/link'

interface IListItemProps {
    id: string;
    title: string;
    description: string;
    as?: string;
    href?: string;
}

const ListItem = (props: IListItemProps) => (
    <Link as={props.as} href={props.href}>
        <List.Item >
            <List.Header as='a'>{props.title}</List.Header>
            <List.Description>{props.description}</List.Description>
        </List.Item>
    </Link>
)

export default ListItem
