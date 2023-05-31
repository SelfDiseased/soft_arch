import { AbstractExpression } from "./abstract-expression";
import { Context } from "./context";

export class SubstractExpression implements AbstractExpression {
  private readonly left: AbstractExpression;
  private readonly right: AbstractExpression;

  constructor(left: AbstractExpression, right: AbstractExpression) {
    this.left = left;
    this.right = right;
  }

  interpret(context: Context): number {
    return this.left.interpret(context) - this.right.interpret(context);
  }
}
