import { BlackListFilter } from "../black-list-filter";

describe("BlackListFilter", () => {
  const filter = new BlackListFilter();

  describe("process", () => {
    it("should replace words from black list", async () => {
      const data = "C++, Node, PHP";
      const expectedResult = "*****, Node, *****";
      const result = filter.process(data);

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
