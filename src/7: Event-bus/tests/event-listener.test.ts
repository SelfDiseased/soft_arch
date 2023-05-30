import { EventBus } from "../event-bus";
import { EventHandlerType } from "../event-handler.type";
import { EventListener } from "../event-listener";

describe("EventListener", () => {
  const eventBus = new EventBus();

  const listenerName = "Test Listener";
  const eventType = "Test Event Type";
  const eventHandler = (data: string) => data;

  describe("startListening", () => {
    it("should call eventBus.subscribe", async () => {
      jest.spyOn(eventBus, "subscribe").mockImplementation(() => {
        return () => undefined;
      });

      const eventListener = new EventListener(
        listenerName,
        eventHandler,
        eventBus,
        eventType
      );

      eventListener.startListening();

      expect(eventBus.subscribe).toHaveBeenCalledTimes(1);
      expect(eventBus.subscribe).toHaveBeenCalledWith(
        listenerName,
        eventType,
        eventHandler
      );
    });
  });

  describe("stopListening", () => {
    it("should call eventBus.unsubscribe", async () => {
      jest.spyOn(eventBus, "unsubscribe").mockImplementation(() => {
        return () => undefined;
      });

      const eventListener = new EventListener(
        listenerName,
        eventHandler,
        eventBus,
        eventType
      );

      eventListener.stopListening();

      expect(eventBus.unsubscribe).toHaveBeenCalledTimes(1);
      expect(eventBus.unsubscribe).toHaveBeenCalledWith(
        listenerName,
        eventType
      );
    });
  });
});
