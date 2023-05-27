import { data } from "../data";
import { DatabaseLayer } from "../database";

describe("DatabaseLayer", () => {
  const databaseLayer = new DatabaseLayer();

  describe("getData function", () => {
    it("returns valid data", async () => {
      const result = databaseLayer.getData();

      expect(result).toHaveLength(data.length);
      expect(result[0]).toMatchObject(data[0]);
    });
  });
});
