import { IFilter } from "./filter.interface";

export class TrimFilter implements IFilter {
  process(data: string): string {
    return data.trim();
  }
}
