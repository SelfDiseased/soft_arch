import { EventHandlerType } from "./event-handler.type";

export class EventBus {
  private eventHandlers = {} as Record<
    string,
    Record<string, EventHandlerType>
  >;

  subscribe(
    listenerName: string,
    eventType: string,
    eventHandler: EventHandlerType
  ): void {
    if (!this.eventHandlers[eventType]) {
      this.eventHandlers[eventType] = {};
    }

    this.eventHandlers[eventType][listenerName] = eventHandler;
  }

  unsubscribe(listenerName: string, eventType: string): void {
    if (this.eventHandlers[eventType]) {
      this.eventHandlers[eventType][listenerName] = undefined;
    }
  }

  publish(eventType: string, eventData: string): void {
    Object.keys(this.eventHandlers[eventType])?.forEach((key) =>
      this.eventHandlers[eventType][key]?.(eventData)
    );
  }
}
