import { createDartBoardSvg } from "./board-creation.js";
const boardContainer=document.getElementById("board-container");
createDartBoardSvg(boardContainer);

const outerRingSegments=document.getElementsByClassName("outer-ring");

$(document).ready(function(){
    $("g.outer-ring").click(function(){
        
        alert($(this).attr("data-value"));
    })
})

