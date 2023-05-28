import { Actions } from "../actions.enum";
import { Broker } from "../broker";
import { Subscriber } from "../subscriber";

describe("Broker", () => {
  describe("subscribe", () => {
    it("should save subscribers for action", async () => {
      const broker = new Broker();

      const [subscriber1, subscriber2] = [
        new Subscriber("Sub 1"),
        new Subscriber("Sub 2"),
      ];

      const action = Actions.BREAKING_NEWS;

      broker.subscribe(subscriber1, action);
      broker.subscribe(subscriber2, action);

      const result = broker.getSubscribers(action);

      const expectedResult = [subscriber1, subscriber2];

      expect(result.length).toStrictEqual(expectedResult.length);
      expect(result).toStrictEqual(expectedResult);
    });

    it("should remove subscribers from action", async () => {
      const broker = new Broker();

      const [subscriber1, subscriber2] = [
        new Subscriber("Sub 1"),
        new Subscriber("Sub 2"),
      ];

      const action = Actions.BREAKING_NEWS;

      broker.subscribe(subscriber1, action);
      broker.subscribe(subscriber2, action);

      broker.unsubscribe(subscriber1, action);

      const result = broker.getSubscribers(action);

      const expectedResult = [subscriber2];

      expect(result.length).toStrictEqual(expectedResult.length);
      expect(result).toStrictEqual(expectedResult);
    });

    it("should publish messages", async () => {
      const broker = new Broker();

      const subscriber1 = new Subscriber("Sub 1");

      const action = Actions.BREAKING_NEWS;

      broker.subscribe(subscriber1, action);

      const message = "test message";

      broker.publish(message, action);

      const result = subscriber1.getMessages();

      const expectedResult = [message];

      expect(result.length).toStrictEqual(expectedResult.length);
      expect(result).toStrictEqual(expectedResult);
    });
  });
});
