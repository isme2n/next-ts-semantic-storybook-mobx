import { Container } from "semantic-ui-react";

import Header from "../components/Header";

interface IDefaultLayoutProps {
  children: JSX.Element[];
}

const DefaultLayout = (props: IDefaultLayoutProps) => (
  <>
    <Header />
    <Container>
      {props.children}
      <style jsx>
        {`
          div {
            width: 720px;
            padding-right: 15px;
            padding-left: 15px;
          }
        `}
      </style>
    </Container>
  </>
);

export default DefaultLayout;
