import { Model } from "../model";
import { Controller } from "../controller";

describe("Model", () => {
  const model = new Model();

  describe("getData", () => {
    it("should return data", async () => {
      const result = model.getData();

      expect(result).toStrictEqual(model["data"]);
    });
  });

  describe("insert", () => {
    it("should insert data", async () => {
      const newElement = { name: "test new " };

      const lengthBefore = [...model["data"]].length;

      model.insert(newElement);

      const data = model.getData();

      expect(data.length).toStrictEqual(lengthBefore + 1);
      expect(data.slice(-1)[0]).toStrictEqual(newElement);
    });
  });
});
