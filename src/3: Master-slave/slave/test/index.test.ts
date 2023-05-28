import { Slave } from "../index";

describe("Slave", () => {
  const slave = new Slave();

  describe("executeTask", () => {
    it("should execute correctly", async () => {
      const task = "Test task";
      const result = slave.executeTask(task);

      expect(result).toStrictEqual(`Task ${task} was executed by slave`);
    });
  });
});
