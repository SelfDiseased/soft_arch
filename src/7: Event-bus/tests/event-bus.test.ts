import { EventBus } from "../event-bus";

describe("EventBus", () => {
  const eventBus = new EventBus();
  const listenerName = "Test Listener";
  const eventType = "Test Event Type";
  const eventData = "Test Event Data";

  describe("subscribe", () => {
    it("should subscribe", async () => {
      const eventHandler = (data: string) => data;

      eventBus.subscribe(listenerName, eventType, eventHandler);

      expect(eventBus["eventHandlers"][eventType][listenerName]).toStrictEqual(
        eventHandler
      );
    });
  });

  describe("unsubscribe", () => {
    it("should unsubscribe", async () => {
      eventBus.subscribe(listenerName, eventType, (data) => data);
      eventBus.unsubscribe(listenerName, eventType);

      expect(
        eventBus["eventHandlers"][eventType][listenerName]
      ).toBeUndefined();
    });
  });

  describe("publish", () => {
    it("should publish for subscribers", async () => {
      const eventHandler = jest.fn((data) => data);

      eventBus.subscribe(listenerName, eventType, eventHandler);
      eventBus.publish(eventType, eventData);

      expect(eventHandler).toHaveBeenCalledTimes(1);
      expect(eventHandler).toHaveBeenCalledWith(eventData);
    });
  });
});
