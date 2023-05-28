import { TrimFilter } from "../trim-filter";

describe("TrimFilter", () => {
  const filter = new TrimFilter();

  describe("process", () => {
    it("should trim data", async () => {
      const data = "  Test string  ";
      const result = filter.process(data);

      expect(result).toStrictEqual(data.trim());
    });
  });
});
