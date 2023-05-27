import { data } from "../../database/data";
import { BusinessLogicLayer } from "../business-logic";

describe("BusinessLogicLayer", () => {
  const businessLogicLayer = new BusinessLogicLayer();

  describe("getById function", () => {
    it("finds existing entity", async () => {
      const id = data[0].id;
      const result = businessLogicLayer.getById(id);

      expect(result).toMatchObject(data[0]);
    });

    it("throws error on not found", async () => {
      const id = -1;

      const err = new Error(`Entity with id ${id} was not found!`);

      expect(() => businessLogicLayer.getById(id)).toThrow(err);
    });
  });
});
