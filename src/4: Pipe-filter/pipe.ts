import { IFilter } from "./filter.interface";

export class Pipe {
  private readonly filters: IFilter[] = [];

  constructor(filters: IFilter[]) {
    this.filters = filters;
  }

  applyFilters(data: string): string {
    let filteredData = data;

    this.filters.forEach((filter) => {
      filteredData = filter.process(filteredData);
    });

    return filteredData;
  }
}
