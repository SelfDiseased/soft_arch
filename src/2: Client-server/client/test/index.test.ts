import axios from "axios";

import { Client } from "../index";

describe("server", () => {
  const mockedTextFromServer = "text from server";

  jest.spyOn(axios, "get").mockImplementation(() => {
    return new Promise((resolve) =>
      resolve({
        data: mockedTextFromServer,
      } as any)
    );
  });

  const client = new Client();

  describe("connectToServer", () => {
    it("should connect to server", async () => {
      const data = await client.connectToServer();

      expect(axios.get).toHaveBeenCalled();
      expect(data).toBe(mockedTextFromServer);
    });
  });
});
