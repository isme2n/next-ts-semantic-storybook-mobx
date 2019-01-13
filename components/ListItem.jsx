import { List } from 'semantic-ui-react'

import Link from 'next/link'

const ListItem = (props) => (
    <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
        <List.Item as='a'>
            <List.Header>{props.title}</List.Header>
            <List.Description>{props.description}</List.Description>
        </List.Item>
    </Link>
)

export default ListItem
