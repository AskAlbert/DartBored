import { createDartBoardSvg } from "./board-creation.js";
import { introduction,addition,checkAnswer, subtraction ,forwardButtonClick,backButtonClick} from "./game-logic.js";
import { hidePopUp } from "./pop-up.js";
const boardContainer=document.getElementById("board-container");

const forwardButton=document.getElementById("forward-button");
const backButton=document.getElementById("back-button");

const popUpButton=document.getElementById("pop-up-button");

createDartBoardSvg(boardContainer);




$(document).ready(function(){
    $("g.outer-ring").click(function(){
        checkAnswer($(this).attr("data-value"));
    })
    

})

forwardButton.addEventListener("click",function(){
    forwardButtonClick();
});
backButton.addEventListener("click",function(){
    backButtonClick();
});
popUpButton.addEventListener("click",function(){
    console.log("clicked");
    hidePopUp();

});

introduction();



