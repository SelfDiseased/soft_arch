import { Context } from "./context";

export abstract class AbstractExpression {
  abstract interpret(context?: Context): number;
}
