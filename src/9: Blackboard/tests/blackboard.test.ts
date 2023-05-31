import { Blackboard } from "../blackboard";

describe("Blackboard", () => {
  const blackboard = new Blackboard();

  describe("getKnowledge", () => {
    it("should return knowledge", async () => {
      const result = blackboard.getKnowledge();

      expect(result).toStrictEqual(blackboard["knowledge"]);
    });
  });

  describe("addKnowledge", () => {
    it("should add knowledge", async () => {
      const knowledge = "test";

      blackboard.addKnowledge(knowledge);

      expect(blackboard["knowledge"].slice(-1)[0]).toStrictEqual(knowledge);
    });
  });
});
