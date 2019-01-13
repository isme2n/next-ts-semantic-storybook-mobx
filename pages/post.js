import { Header } from 'semantic-ui-react'

import fetch from 'isomorphic-unfetch'

import DefaultLayout from '../layouts/Default'

const Post = (props) => (
    <DefaultLayout>
        <Header as='h1'>{props.show.name}</Header>
        <p>{props.show.summary.replace(/<[/]?p>/g)}</p>
        <img src={props.show.image.medium}/>
        <style jsx>{`
            h1, p {
                font-family: "Arial";
            }
            img {
                width: 300;
                height: 400;
            }
            `
            }
        </style>
    </DefaultLayout>
)

Post.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return {show}
}

export default Post