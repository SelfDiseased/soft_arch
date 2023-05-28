import { Actions } from "./actions.enum";
import { Broker } from "./broker";
import { Subscriber } from "./subscriber";

const broker = new Broker();

const [subscriber1, subscriber2] = [
  new Subscriber("Sub 1"),
  new Subscriber("Sub 2"),
];

const publishActions = (actions: Record<Actions, string>) => {
  broker.publish(actions[Actions.WEEKLY_NEWS], Actions.WEEKLY_NEWS);
  broker.publish(actions[Actions.NEW_ARTICLE], Actions.NEW_ARTICLE);
  broker.publish(actions[Actions.BREAKING_NEWS], Actions.BREAKING_NEWS);
};

broker.subscribe(subscriber1, Actions.WEEKLY_NEWS);
broker.subscribe(subscriber1, Actions.BREAKING_NEWS);
broker.subscribe(subscriber2, Actions.WEEKLY_NEWS);

publishActions({
  [Actions.WEEKLY_NEWS]: "weekly news 1",
  [Actions.NEW_ARTICLE]: "news article 1",
  [Actions.BREAKING_NEWS]: "breaking news 1",
});

console.log("Sub1 messages: ", subscriber1.getMessages());
console.log("Sub2 messages: ", subscriber2.getMessages());

broker.unsubscribe(subscriber1, Actions.BREAKING_NEWS);

publishActions({
  [Actions.WEEKLY_NEWS]: "weekly news 2",
  [Actions.NEW_ARTICLE]: "news article 2",
  [Actions.BREAKING_NEWS]: "breaking news 2",
});

console.log("Sub1 messages: ", subscriber1.getMessages());
console.log("Sub2 messages: ", subscriber2.getMessages());
