import fetch from 'isomorphic-unfetch'

import { List } from 'semantic-ui-react'

import DefaultLayout from '../layouts/Default'
import ListItem from '../components/ListItem';

interface IIndexProps {
  shows: {
    score: number;
    show: IShow;
  }[]
}

interface IShow {
  id: string;
  name: string;
  genres: string[]
}

const Index = (props: IIndexProps) => (
  <DefaultLayout>
    <h1>Batman TV Shows</h1>
    <List>
      {props.shows.map(({show}) => (
        <ListItem key={show.id} id={show.id} title={show.name} description={show.genres[0]}/>
      ))}
    </List>
    <style jsx>{`
        h1 {
            font-family: "Arial";
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
