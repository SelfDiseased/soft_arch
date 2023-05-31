import { Client } from "../client";

describe("Client", () => {
  const client = new Client();

  describe("process", () => {
    it("test case 1", async () => {
      const result = client.process("1 + 3 - 1 + 4");

      expect(result).toStrictEqual(1 + 3 - 1 + 4);
    });

    it("test case 2", async () => {
      const result = client.process("4 - 1 - 1 + 12 - 11");

      expect(result).toStrictEqual(4 - 1 - 1 + 12 - 11);
    });

    it("validation check test case 1", async () => {
      expect(() => client.process("- 4 - 1 - 1 + 12 - 11")).toThrow(
        `Invalid input`
      );
    });

    it("validation check test case 2", async () => {
      expect(() => client.process("4- 1 - 1 + 12 - 11")).toThrow(
        `Invalid input`
      );
    });
  });
});
