import { Menu } from "semantic-ui-react";

import Link from "next/link";

const Header = () => (
  <Menu tabular>
    <Link href="/">
      <Menu.Item name="home" />
    </Link>
  </Menu>
);

export default Header;
