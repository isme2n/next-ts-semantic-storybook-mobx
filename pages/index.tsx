import fetch from "isomorphic-unfetch";

import {
  Button,
  Form,
  Input,
  Header,
  Divider,
  TextArea
} from "semantic-ui-react";

import DefaultLayout from "../layouts/Default";

import { useState } from "react";
import { cav } from "../caver/caver";
import { postContract } from "../caver/postContract";

interface IIndexProps {}

const Index = (props: IIndexProps) => {
  const [privateKey, setPrivateKey] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const savePostOnKlaytn = async () => {
    postContract.setAddress(contractAddress);
    const accounts = await cav.klay.accounts.wallet;
    if (!!!accounts[0]) {
      await cav.klay.accounts.wallet.add(privateKey);
    }

    try {
      await postContract.posting(privateKey, title, contents);
      alert("success");
    } catch (err) {
      alert(err);
    }
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
      <Divider />
      <Header sub>Title</Header>
      <Input
        fluid
        placeholder="title"
        onChange={(e: any) => setTitle(e.target.value)}
      />
      <Header sub>Content</Header>
      <Form>
        <TextArea
          fluid
          placeholder="content"
          onChange={(e: any) => setContents(e.target.value)}
        />
      </Form>
      <br />
      <Button primary floated="right" onClick={savePostOnKlaytn}>
        SAVE
      </Button>
    </DefaultLayout>
  );
};

export default Index;
