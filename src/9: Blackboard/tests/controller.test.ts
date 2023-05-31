import { Blackboard } from "../blackboard";
import { Controller } from "../controller";

describe("Controller", () => {
  const blackboard = new Blackboard();
  const controller = new Controller(blackboard);

  describe("displayKnowledge", () => {
    it("should call blackboard.getKnowledge", async () => {
      jest.spyOn(blackboard, "getKnowledge").mockImplementation(() => []);

      const result = controller.displayKnowledge();

      expect(blackboard.getKnowledge).toHaveBeenCalled();
      expect(result).toStrictEqual(blackboard["knowledge"]);
    });
  });
});
