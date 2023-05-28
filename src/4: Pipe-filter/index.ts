import { BlackListFilter } from "./black-list-filter";
import { Pipe } from "./pipe";
import { TrimFilter } from "./trim-filter";

export function main() {
  const [trimFilter, blackListFilter] = [
    new TrimFilter(),
    new BlackListFilter(),
  ];

  const pipe = new Pipe([trimFilter, blackListFilter]);

  const data = "  I really like C++ ";

  const result = pipe.applyFilters(data);

  console.log(result);

  return result;
}

main();
