import { Blackboard } from "./blackboard";
import { Controller } from "./controller";
import { KnowledgeSource } from "./knowledge-source";

const blackboard = new Blackboard();
const [knowledgeSource, controller] = [
  new KnowledgeSource(blackboard),
  new Controller(blackboard),
];

knowledgeSource.updateKnowledge("Knowledge 1");
controller.displayKnowledge();

knowledgeSource.updateKnowledge("Knowledge 2");
controller.displayKnowledge();
