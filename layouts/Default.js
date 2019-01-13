import { Container } from 'semantic-ui-react'

import Header from '../components/Header'

const DefaultLayout = (props) => (
    <Container>
        <Header/>
        {props.children}
    <style jsx>{
        `
        div {
            width: 720px;
            padding-right: 15px;
            padding-left: 15px;
        }
        `}
    </style>
    </Container>
)

export default DefaultLayout