import request from "supertest";

import { Master } from "../index";
import { Slave } from "../../slave";

describe("Master", () => {
  const master = new Master();

  describe("executeTasks", () => {
    it("should executeTasks correctly", async () => {
      const tasks = ["task1", "task2", "task3"];
      const result = master.executeTasks(tasks);

      const expectedResult = tasks.map(
        (task) => `Task ${task} was executed by slave`
      );

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
