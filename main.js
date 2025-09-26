import TTTModel from "./Modell/TTTModel.js";
import TTTView from "./View/TTTView.js";
import TTTController from "./Controller/TTTController.js";

const model = new TTTModel();
const board = document.querySelector(".jatekter");
const view = new TTTView(model, board);
const controller = new TTTController(model, view);
view.megjelenit();
