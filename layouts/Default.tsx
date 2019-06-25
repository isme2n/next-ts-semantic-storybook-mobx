import { Container } from "semantic-ui-react";

import Header from "../components/Header";

import { Segment } from "../components/atoms/Segment";

interface IDefaultLayoutProps {
  children: JSX.Element[];
}

const DefaultLayout = (props: IDefaultLayoutProps) => (
  <>
    <Header />
    <Container fluid style={{ display: "flex", justifyContent: "center" }}>
      <Segment width={"900px"}>{props.children[0]}</Segment>

      <Segment width={"400px"}>{props.children[1]}</Segment>
    </Container>
  </>
);

export default DefaultLayout;
