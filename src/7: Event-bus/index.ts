import { EventBus } from "./event-bus";
import { EventListener } from "./event-listener";
import { EventSource } from "./event-source";

const eventBus = new EventBus();

const eventSource = new EventSource(eventBus);

const [eventType1, eventType2] = ["event 1", "event 2"];

const [eventListener1, eventListener2] = [
  new EventListener(
    "Listener 1",
    (data) => console.log(`Listener 1 processing data: "${data}"`),
    eventBus,
    eventType1
  ),
  new EventListener(
    "Listener 2",
    (data) => console.log(`Listener 2 processing data: "${data}"`),
    eventBus,
    eventType2
  ),
];

eventListener1.startListening();
eventListener2.startListening();

eventSource.generateEvent(eventType1, "Data for event type 1");
eventSource.generateEvent(eventType2, "Data for event type 2");

eventListener1.stopListening();
eventListener2.stopListening();

eventSource.generateEvent(eventType1, "New data for event type 1");
