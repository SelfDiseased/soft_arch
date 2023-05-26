import readline from "readline";

import { BusinessLogicLayer } from "../domain/business-logic";

export class PresentationLayer {
  private readonly businessLogicLayer;
  private readonly rl;

  constructor() {
    this.businessLogicLayer = new BusinessLogicLayer();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async getById() {
    const id: string = await new Promise((resolve) => {
      this.rl.question("Please enter entity id:\n", resolve);
    });

    const idNumber = parseInt(id);

    if (!idNumber) {
      throw new Error("Invalid id was provided");
    }

    const entity = this.businessLogicLayer.getById(idNumber);

    console.log("Entity was found:");
    console.log(entity);
  }
}
