import { Model } from "../model";
import { Controller } from "../controller";

describe("Controller", () => {
  const model = new Model();
  const controller = new Controller(model);

  describe("getData", () => {
    it("should call model.getData", async () => {
      jest.spyOn(model, "getData").mockImplementation(() => [{ name: "test" }]);
      controller.getData();

      expect(model.getData).toHaveBeenCalled();
    });
  });

  describe("addNewAlterEgo", () => {
    it("should check input", async () => {
      expect(() => controller.addNewAlterEgo("")).toThrow("Invalid input!");
    });

    it("should check duplicates", async () => {
      const name = "test";
      jest.spyOn(model, "getData").mockImplementation(() => [{ name }]);

      expect(model.getData).toHaveBeenCalled();
      expect(() => controller.addNewAlterEgo(name)).toThrow(
        `Alter ego ${name} already exists!`
      );
    });

    it("should add new", async () => {
      const name = "test";
      jest.spyOn(model, "getData").mockImplementation(() => [{ name }]);

      const newName = "new test";

      // JS getting rid of array's link
      const dataBefore = [...controller["model"]["data"]];

      controller.addNewAlterEgo(newName);

      const data = controller["model"]["data"];

      expect(data.length).toBe(dataBefore.length + 1);
      expect(data.slice(-1)[0].name).toStrictEqual(newName);
    });
  });
});
