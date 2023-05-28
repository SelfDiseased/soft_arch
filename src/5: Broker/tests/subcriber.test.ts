import { Subscriber } from "../subscriber";

describe("Subscriber", () => {
  describe("sendNewMessage", () => {
    it("should save multiple messages", async () => {
      const subscriber = new Subscriber("name");

      const message = "test message";
      const message2 = "test message 2";

      subscriber.sendNewMessage(message);
      subscriber.sendNewMessage(message2);

      const result = subscriber.getMessages();

      const expectedResult = [message, message2];

      expect(result.length).toStrictEqual(expectedResult.length);
      expect(result).toStrictEqual(expectedResult);
    });
  });
});
