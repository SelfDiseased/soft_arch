import { DatabaseLayer } from "../database/database";

export class BusinessLogicLayer {
  private readonly databaseLayer: DatabaseLayer;

  constructor() {
    this.databaseLayer = new DatabaseLayer();
  }

  getById(id: number) {
    const res = this.databaseLayer.getData().find((el) => el.id === id);

    if (!res) {
      throw new Error(`Entity with id ${id} was not found!`);
    }

    return res;
  }
}
