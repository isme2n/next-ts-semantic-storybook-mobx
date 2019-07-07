import { Container } from "semantic-ui-react";

import Header from "../components/Header";

interface IDefaultLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const DefaultLayout = (props: IDefaultLayoutProps) => (
  <>
    <Header />
    <Container>{props.children}</Container>
  </>
);

export default DefaultLayout;
