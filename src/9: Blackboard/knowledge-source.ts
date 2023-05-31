import { Blackboard } from "./blackboard";

export class KnowledgeSource {
  private readonly blackboard: Blackboard;

  constructor(blackboard: Blackboard) {
    this.blackboard = blackboard;
  }

  updateKnowledge(knowledge: string) {
    this.blackboard.addKnowledge(knowledge);
  }
}
