import { Controller } from "./controller";
import { Model } from "./model";
import { View } from "./view";

const model = new Model();
const controller = new Controller(model);
const view = new View(controller);

view.addNewAlterEgo("Stetsenko");

view.displayCurrentAlterEgos();
