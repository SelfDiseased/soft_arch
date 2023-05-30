import { EventBus } from "../event-bus";
import { EventSource } from "../event-source";

describe("EventSource", () => {
  const eventBus = new EventBus();

  jest.spyOn(eventBus, "publish").mockImplementation(() => {
    return () => undefined;
  });

  const eventSource = new EventSource(eventBus);

  const eventType = "Test Event Type";
  const eventData = "Test Event Data";

  describe("generateEvent", () => {
    it("should call eventBus.publish", async () => {
      eventSource.generateEvent(eventType, eventData);

      expect(eventBus.publish).toHaveBeenCalledTimes(1);
      expect(eventBus.publish).toHaveBeenCalledWith(eventType, eventData);
    });
  });
});
