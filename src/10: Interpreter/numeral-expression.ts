import { AbstractExpression } from "./abstract-expression";
import { Context } from "./context";

export class NumeralExpression implements AbstractExpression {
  private readonly value: number;

  constructor(value: number) {
    this.value = value;
  }

  interpret(): number {
    return this.value;
  }
}
