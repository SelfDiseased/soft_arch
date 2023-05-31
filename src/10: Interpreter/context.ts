export class Context {
  private readonly input: string;
  private output = 0;

  constructor(input: string) {
    this.input = input;
  }
}
