import { Model } from "../model";
import { Controller } from "../controller";
import { View } from "../view";

describe("View", () => {
  const model = new Model();
  const controller = new Controller(model);
  const view = new View(controller);

  describe("displayCurrentAlterEgos", () => {
    it("should call controller.getData", async () => {
      const returnData = [1, 2, 3];
      jest
        .spyOn(controller, "getData")
        .mockImplementation(() => returnData as any);

      const result = view.displayCurrentAlterEgos();

      expect(controller.getData).toHaveBeenCalled();
      expect(result).toStrictEqual(returnData);
    });
  });

  describe("addNewAlterEgo", () => {
    it("should call controller.addNewAlterEgo", async () => {
      jest
        .spyOn(controller, "addNewAlterEgo")
        .mockImplementation(() => undefined);

      const input = "test";

      view.addNewAlterEgo(input);

      expect(controller.addNewAlterEgo).toHaveBeenCalled();
      expect(controller.addNewAlterEgo).toHaveBeenCalledWith(input);
    });
  });
});
