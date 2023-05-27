import { data } from "./data";

export class DatabaseLayer {
  private readonly data = data;

  getData() {
    return this.data;
  }
}
