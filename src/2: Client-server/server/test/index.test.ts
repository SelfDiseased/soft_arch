import request from "supertest";

import { app, server } from "../index";

describe("server", () => {
  afterAll(() => {
    server.close();
  });

  describe("GET /", () => {
    it("should respond with correct message", async () => {
      const res = await request(app).get("/");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello there!");
    });
  });
});
