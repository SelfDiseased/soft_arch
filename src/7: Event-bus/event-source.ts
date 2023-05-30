import { EventBus } from "./event-bus";

export class EventSource {
  private readonly eventBus: EventBus;

  constructor(eventBus: EventBus) {
    this.eventBus = eventBus;
  }

  generateEvent(eventType: string, data: string): void {
    this.eventBus.publish(eventType, data);
  }
}
