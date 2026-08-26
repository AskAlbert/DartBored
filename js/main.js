import { createDartBoardSvg } from "./board-creation.js";
import { introduction,checkAnswer ,forwardButtonClick,backButtonClick} from "./game-logic.js";
import { hidePopUp } from "./pop-up.js";

const boardContainer=document.getElementById("board-container");
const forwardButton=document.getElementById("forward-button");
const backButton=document.getElementById("back-button");
const popUpButton=document.getElementById("pop-up-button");

createDartBoardSvg(boardContainer);

boardContainer.querySelectorAll("g.outer-ring").forEach((ring) => {
  ring.addEventListener("click", () => {
    checkAnswer(ring.dataset.value);
  });
});

forwardButton.addEventListener("click",forwardButtonClick);    
backButton.addEventListener("click",backButtonClick);
popUpButton.addEventListener("click",hidePopUp);

introduction();
