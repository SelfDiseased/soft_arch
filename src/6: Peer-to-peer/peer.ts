export class Peer {
  private peers: Peer[] = [];

  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  getPeers(): Peer[] {
    return this.peers;
  }

  connect(peer: Peer): void {
    if (!this.peers.find((el) => el.name === peer.name)) {
      this.peers.push(peer);
    }
  }

  disconnect(peer: Peer): void {
    if (this.peers.find((el) => el.name === peer.name)) {
      this.peers = this.peers.filter((el) => el.name !== peer.name);
    }
  }

  send(data: string): void {
    console.log(`Data "${data}" was sent by ${this.name}`);

    this.peers.forEach((peer) => peer.receive(data));
  }

  receive(data: string): void {
    console.log(`Data "${data}" was received by ${this.name}`);
  }
}
