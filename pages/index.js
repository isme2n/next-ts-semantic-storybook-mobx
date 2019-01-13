import fetch from 'isomorphic-unfetch'

import { List } from 'semantic-ui-react'

import DefaultLayout from '../layouts/Default'
import ListItem from '../components/ListItem';


const Index = (props) => (
  <DefaultLayout>
    <h1>Batman TV Shows</h1>
    <List>
      {props.shows.map(({show}) => (
        <ListItem key={show.id} id={show.id} title={show.name} description={show.genres[0]}/>
      ))}
    </List>
    <style jsx>{`
        h1, a {
            font-family: "Arial";
        }
        ul {
            padding: 0;
        }
        li {
            list-style: none;
            margin: 5px 0;
        }
        a {
            text-decoration: none;
            color: blue;
        }
        a:hover {
            opacity: 0.6;
        }
        `
        }
    </style>
  </DefaultLayout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)
  console.log(data)

  return {
    shows: data
  }
}

export default Index;
