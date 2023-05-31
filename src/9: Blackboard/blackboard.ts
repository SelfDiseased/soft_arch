export class Blackboard {
  private readonly knowledge = [] as string[];

  getKnowledge() {
    return this.knowledge;
  }

  addKnowledge(knowledge: string) {
    this.knowledge.push(knowledge);
  }
}
