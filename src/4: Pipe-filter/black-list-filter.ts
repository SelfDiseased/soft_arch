import { IFilter } from "./filter.interface";

export class BlackListFilter implements IFilter {
  private readonly blackList = ["C++", "PHP"];

  process(data: string): string {
    let newData = data;

    this.blackList.forEach((word) => {
      newData = newData.split(word).join("*****");
    });

    return newData;
  }
}
