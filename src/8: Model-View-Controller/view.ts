import { Controller } from "./controller";

export class View {
  private readonly controller: Controller;

  constructor(controller: Controller) {
    this.controller = controller;
  }

  displayCurrentAlterEgos() {
    const data = this.controller.getData();

    console.log(`Current alter egos: ${data.map((el) => el.name).join(", ")}`);

    return data;
  }

  addNewAlterEgo(alterEgo: string) {
    console.log("BBB...");

    this.controller.addNewAlterEgo(alterEgo);
  }
}
