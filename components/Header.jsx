import { Menu } from 'semantic-ui-react'

import Link from 'next/link'

const Header = () => (
    <Menu tabular>
        <Link href="/">
            <Menu.Item name='home' />
        </Link>
        <Link href="/post">
            <Menu.Item name='post' />
        </Link>
    </Menu>
)

export default Header
