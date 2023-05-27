import readline from "readline";

import { PresentationLayer } from "../presentation";
import { data } from "../../database/data";

describe("PresentationLayer", () => {
  jest.spyOn(readline, "createInterface").mockImplementation(() => {
    return {
      question: (text: string, callback: any) => callback(1),
    } as any;
  });

  const presentationLayer = new PresentationLayer();

  describe("getById function", () => {
    it("finds existing entity", async () => {
      jest.spyOn(readline, "createInterface").mockImplementation(() => {
        return {
          question: (text: string, callback: any) => callback(1),
        } as any;
      });
      const result = await presentationLayer.getById();

      expect(result).toMatchObject(data[0]);
    });

    it("throws error on string input", async () => {
      const id = "invalid id";

      jest.spyOn(readline, "createInterface").mockImplementation(() => {
        return {
          question: (text: string, callback: any) => callback(id),
        } as any;
      });

      const presentationLayer = new PresentationLayer();

      const err = new Error(`Invalid id was provided`);

      expect(() => presentationLayer.getById()).rejects.toThrow(err);
    });
  });
});
