import DefaultLayout from "../layouts/Default";

import { Header, Input, Divider, List, Button } from "semantic-ui-react";

import { useState } from "react";
import { cav } from "../caver/caver";
import { postContract } from "../caver/postContract";

import { ListItem } from "../components/ListItem";

interface IIndexProps {
  posts: IPost[];
}

interface IPost {
  title: string;
  contents: string;
  timestamp: string;
}

const Board = (props: IIndexProps) => {
  const [privateKey, setPrivateKey] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [posts, setPosts] = useState();

  const getPosts = async () => {
    postContract.setAddress(contractAddress);
    const postsState = await postContract.getAllPosts();
    setPosts(postsState);
  };

  return (
    <DefaultLayout>
      <Header>DongDuk Klaytn DAPP</Header>
      <Header sub>Private Key</Header>
      <Input
        fluid
        placeholder="plz input your private key"
        value={privateKey}
        onChange={(e: any) => setPrivateKey(e.target.value)}
      />
      <Header sub>Contract Address</Header>
      <Input
        fluid
        placeholder="plz input your contract address"
        value={contractAddress}
        onChange={(e: any) => setContractAddress(e.target.value)}
      />
      <br />
      <Button primary floated="right" onClick={getPosts}>
        GET POSTS
      </Button>
      <br />
      <br />
      <Divider />
      <List>
        {props.posts.length > 0
          ? props.posts.reverse().map((post: IPost) => {
              return (
                <ListItem
                  title={post.title}
                  contents={post.contents}
                  timestamp={post.timestamp}
                />
              );
            })
          : posts &&
            posts.reverse().map((post: IPost) => {
              return (
                <ListItem
                  title={post.title}
                  contents={post.contents}
                  timestamp={post.timestamp}
                />
              );
            })}
      </List>
    </DefaultLayout>
  );
};

Board.getInitialProps = async () => {
  if (postContract.getAddress()) {
    const res = await postContract.getAllPosts();
    return { posts: res };
  }
  return { posts: [] };
};

export default Board;
