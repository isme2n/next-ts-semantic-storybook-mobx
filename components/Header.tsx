import { Menu, Container } from "semantic-ui-react";

import Link from "next/link";

const Header = () => (
  <Menu tabular>
    <Container>
      <Link href="/">
        <Menu.Item name="home" />
      </Link>
      <Link href="/board">
        <Menu.Item name="board" />
      </Link>
    </Container>
  </Menu>
);

export default Header;
