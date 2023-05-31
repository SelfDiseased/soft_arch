import { Blackboard } from "../blackboard";
import { KnowledgeSource } from "../knowledge-source";

describe("KnowledgeSource", () => {
  const blackboard = new Blackboard();
  const knowledgeSource = new KnowledgeSource(blackboard);

  describe("updateKnowledge", () => {
    it("should call blackboard.addKnowledge", async () => {
      jest.spyOn(blackboard, "addKnowledge").mockImplementation(() => []);

      const knowledge = "test";

      knowledgeSource.updateKnowledge(knowledge);

      expect(blackboard.addKnowledge).toHaveBeenCalledWith(knowledge);
    });
  });
});
