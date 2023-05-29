import { Peer } from "../peer";

describe("Peer", () => {
  describe("connect", () => {
    it("should connect peers", async () => {
      const [peer1, peer2] = [new Peer("Peer 1"), new Peer("Peer 2")];

      peer1.connect(peer2);

      const result = peer1.getPeers();

      expect(result).toStrictEqual([peer2]);
    });

    it("should not connect duplicating peers", async () => {
      const [peer1, peer2] = [new Peer("Peer 1"), new Peer("Peer 2")];

      peer1.connect(peer2);
      peer1.connect(peer2);

      const result = peer1.getPeers();

      expect(result.length).toStrictEqual(1);
      expect(result).toStrictEqual([peer2]);
    });
  });

  describe("disconnect", () => {
    it("should disconnect peers", async () => {
      const [peer1, peer2] = [new Peer("Peer 1"), new Peer("Peer 2")];

      peer1.connect(peer2);
      peer1.disconnect(peer2);

      const result = peer1.getPeers();

      expect(result).toStrictEqual([]);
    });

    it("should ignore disconnected peers", async () => {
      const [peer1, peer2] = [new Peer("Peer 1"), new Peer("Peer 2")];

      peer1.disconnect(peer2);

      const result = peer1.getPeers();

      expect(result).toStrictEqual([]);
    });
  });

  describe("receive", () => {
    it("should send and receive data", async () => {
      const [peer1, peer2] = [new Peer("Peer 1"), new Peer("Peer 2")];

      jest.spyOn(peer2, "receive").mockImplementation(() => {
        return (data: string) => data;
      });

      const data = "test data";

      peer1.connect(peer2);
      peer1.send(data);

      expect(peer2.receive).toHaveBeenCalledWith(data);
      expect(peer2.receive).toHaveBeenCalledTimes(1);
    });
  });
});
