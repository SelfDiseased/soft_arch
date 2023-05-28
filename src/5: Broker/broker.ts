import { Actions } from "./actions.enum";
import { Subscriber } from "./subscriber";

export class Broker {
  private actionsSubscribers = Object.values(Actions).reduce((acc, curr) => {
    acc[curr] = [];

    return acc;
  }, {} as Record<Actions, Subscriber[]>);

  getSubscribers(action: Actions): Subscriber[] {
    return this.actionsSubscribers[action];
  }

  subscribe(subscriber: Subscriber, action: Actions): void {
    this.actionsSubscribers[action] = (
      this.actionsSubscribers[action] || []
    ).concat(subscriber);
  }

  unsubscribe(subscriber: Subscriber, action: Actions): void {
    const afterUnsub = this.actionsSubscribers[action].filter(
      (sub) => sub.name !== subscriber.name
    );

    if (afterUnsub.length === this.actionsSubscribers[action].length) {
      throw new Error(`Subscriber was not found`);
    }

    this.actionsSubscribers[action] = afterUnsub;
  }

  publish(message: string, action: Actions): void {
    const subscribers = this.actionsSubscribers[action];

    subscribers.forEach((subscriber) => subscriber.sendNewMessage(message));
  }
}
