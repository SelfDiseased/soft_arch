import axios from "axios";

export class Client {
  async connectToServer() {
    const { data } = await axios.get("http://localhost:3000");

    console.log("Client was connected");

    return data;
  }
}

const client = new Client();

client.connectToServer().then();
