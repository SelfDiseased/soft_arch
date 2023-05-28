import { IFilter } from "../filter.interface";
import { Pipe } from "../pipe";

describe("Pipe", () => {
  describe("applyFilters", () => {
    it("should execute each filter", async () => {
      const filterFn = (data: string) => data;
      const mockedFilterFn = jest.fn(filterFn);
      const filters: IFilter[] = Array(3).fill({
        process: mockedFilterFn,
      });

      const pipe = new Pipe(filters);

      const data = "test Data";
      const result = pipe.applyFilters(data);

      expect(result).toStrictEqual(filterFn(data));
      expect(mockedFilterFn).toHaveBeenCalledTimes(filters.length);
    });
  });

  it("no changes on no filters", async () => {
    const pipe = new Pipe([]);

    const data = "test Data";
    const result = pipe.applyFilters(data);

    expect(result).toStrictEqual(data);
  });
});
