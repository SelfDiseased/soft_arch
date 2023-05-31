import { NumeralExpression } from "../numeral-expression";
import { SubstractExpression } from "../substract-expression";
import { Context } from "../context";

describe("SubstractExpression", () => {
  const [num1, num2] = [1, 2];
  const [numExp1, numExp2] = [
    new NumeralExpression(num1),
    new NumeralExpression(num2),
  ];
  const substractExpression = new SubstractExpression(numExp1, numExp2);
  const context = new Context("test");

  describe("interpret", () => {
    it("main tests", async () => {
      jest.spyOn(numExp1, "interpret");
      jest.spyOn(numExp2, "interpret");

      const result = substractExpression.interpret(context);

      expect(numExp1.interpret).toHaveBeenCalledWith(context);
      expect(numExp2.interpret).toHaveBeenCalledWith(context);

      expect(result).toStrictEqual(num1 - num2);
    });
  });
});
