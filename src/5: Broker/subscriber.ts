export class Subscriber {
  private messages: string[] = [];

  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  sendNewMessage(message: string): void {
    this.messages.push(message);
  }

  getMessages(): string[] {
    return this.messages;
  }
}
