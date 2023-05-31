import { NumeralExpression } from "../numeral-expression";

describe("NumeralExpression", () => {
  describe("interpret", () => {
    it("should return correct value", async () => {
      const value = 112;
      const numExp = new NumeralExpression(value);

      const result = numExp.interpret();

      expect(result).toStrictEqual(value);
    });
  });
});
