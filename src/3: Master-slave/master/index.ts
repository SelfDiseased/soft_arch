import { Slave } from "../slave";

export class Master {
  executeTasks(tasks: string[]): string[] {
    return tasks.reduce((acc, task) => {
      const slave = new Slave();

      acc.push(slave.executeTask(task));

      return acc;
    }, [] as string[]);
  }
}
