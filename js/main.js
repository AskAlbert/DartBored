import { createDartBoardSvg } from "./board-creation.js";
import { introduction,addition,checkAnswer, subtraction } from "./game-logic.js";
const boardContainer=document.getElementById("board-container");
createDartBoardSvg(boardContainer);

const outerRingSegments=document.getElementsByClassName("outer-ring");


$(document).ready(function(){
    $("g.outer-ring").click(function(){
        checkAnswer($(this).attr("data-value"));
    })
    

})

introduction();
//addition();
//subtraction();

