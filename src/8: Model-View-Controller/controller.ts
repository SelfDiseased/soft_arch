import { Model } from "./model";

export class Controller {
  private readonly model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  getData() {
    return this.model.getData();
  }

  addNewAlterEgo(alterEgo: string): void {
    if (!alterEgo) {
      throw new Error(`Invalid input!`);
    }

    const data = this.model.getData();

    if (data.find(({ name }) => name === alterEgo)) {
      throw new Error(`Alter ego ${alterEgo} already exists!`);
    }

    this.model.insert({ name: alterEgo });
  }
}
