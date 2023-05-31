import { AbstractExpression } from "./abstract-expression";
import { AddExpression } from "./add-expression";
import { Context } from "./context";
import { NumeralExpression } from "./numeral-expression";
import { SubstractExpression } from "./substract-expression";

export class Client {
  process(input: string) {
    const arithmeticOperators = [
      { operation: "+", expression: AddExpression },
      { operation: "-", expression: SubstractExpression },
    ];
    const context = new Context(input);

    let tree: AbstractExpression[] = [];

    const tokens = input.split(" ");

    const operations = tokens.reduce((acc, token, idx) => {
      const operation = arithmeticOperators.find(
        (el) => el.operation === token
      );

      if (operation) {
        acc.push({ operation: token, idx, expression: operation.expression });
      }

      return acc;
    }, [] as { operation: string; idx: number; expression: typeof AddExpression | typeof SubstractExpression }[]);

    const numeralTokens = this.filterNumeralTokens(tokens);

    this.checkInput(operations, numeralTokens);

    for (const { operation, idx, expression } of operations) {
      const [leftStr, rightStr] = [tokens?.[idx - 1], tokens?.[idx + 1]];

      if (!leftStr || !rightStr || !parseInt(leftStr) || !parseInt(rightStr)) {
        throw new Error(`Invalid numerals near ${operation} operation`);
      }

      const leftExpression = !tree.length
        ? new NumeralExpression(+leftStr)
        : tree[tree.length - 1];

      tree.push(
        new expression(leftExpression, new NumeralExpression(+rightStr))
      );
    }

    const result = tree[tree.length - 1].interpret(context);

    console.log(`Result: ${result}`);

    return result;
  }

  private filterNumeralTokens(tokens: string[]): string[] {
    return tokens.filter((token) => parseInt(token));
  }

  private checkInput(
    operations: {
      operation: string;
      idx: number;
      expression: typeof AddExpression | typeof SubstractExpression;
    }[],
    numeralTokens: string[]
  ): void {
    if (operations.length + 1 !== numeralTokens.length) {
      throw new Error("Invalid input");
    }
  }
}
