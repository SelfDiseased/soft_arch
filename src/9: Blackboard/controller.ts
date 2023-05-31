import { Blackboard } from "./blackboard";

export class Controller {
  private readonly blackboard: Blackboard;

  constructor(blackboard: Blackboard) {
    this.blackboard = blackboard;
  }

  displayKnowledge() {
    const knowledge = this.blackboard.getKnowledge();

    console.log(`Knowledge: ${knowledge.join(", ")}`);

    return knowledge;
  }
}
