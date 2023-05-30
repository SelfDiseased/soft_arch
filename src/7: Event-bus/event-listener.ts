import { EventBus } from "./event-bus";
import { EventHandlerType } from "./event-handler.type";

export class EventListener {
  private readonly eventHandler: EventHandlerType;
  private readonly eventBus: EventBus;
  private readonly eventType: string;
  private readonly name: string;

  constructor(
    name: string,
    eventHandler: EventHandlerType,
    eventBus: EventBus,
    eventType: string
  ) {
    this.name = name;
    this.eventHandler = eventHandler;
    this.eventBus = eventBus;
    this.eventType = eventType;
  }

  startListening(): void {
    this.eventBus.subscribe(this.name, this.eventType, this.eventHandler);
  }

  stopListening(): void {
    this.eventBus.unsubscribe(this.name, this.eventType);
  }
}
