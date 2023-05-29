import { Peer } from "./peer";

const [peer1, peer2, peer3] = [
  new Peer("Peer 1"),
  new Peer("Peer 2"),
  new Peer("Peer 3"),
];

peer1.connect(peer2);
peer1.connect(peer3);

peer1.send("hello from peer 1");
peer2.send("hello from peer 2");
peer3.send("hello from peer 3");
console.log("\n");

peer1.disconnect(peer2);
peer1.disconnect(peer3);

peer1.send("bye from peer 1");
peer2.send("bye from peer 2");
