import { cav } from "./caver";
import { POST_CONTRACT_ABI } from "../constants/postContract";

class PostContract {
  private postContract: any;

  constructor() {
    this.postContract = new cav.klay.Contract(POST_CONTRACT_ABI);
  }

  public getAddress = () => {
    return this.postContract.options.address;
  };

  public setAddress = (address: string) => {
    this.postContract.options.address = address;
  };

  public posting = async (
    privateKey: string,
    title: string,
    contents: string
  ) => {
    const account = await cav.klay.accounts.privateKeyToAccount(privateKey);
    return await this.postContract.methods
      .posting(title, contents)
      .send({ from: account.address, gas: 2000000 });
  };

  public getAllPosts = async () => {
    const posts = [];
    const totalCount = await this.postContract.methods
      .getTotalPostCount()
      .call();

    for (let i = 0; i < totalCount; i++) {
      const res = await this.postContract.methods.getPost(i).call();
      posts.push({ title: res[1], contents: res[2], timestamp: res[3] });
    }

    return posts;
  };
}

export const postContract = new PostContract();
