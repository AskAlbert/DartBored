const plus="plus";
const minus="minus";
const maxNumber=20;
const minNumber=1;
let answer=0;
let currentLevel="";
const boardName=document.getElementById("board-name");

const forwardButton=document.getElementById("forward-button");
const backButton=document.getElementById("back-button");
const unicodeBackArrow="&#8592";
const unicodeForwardArrow="&#8594";

let forwardValue=0;
let backValue=0;

const levelNames=["Introduction","Addition","Subtraction"];


export function introduction(){
    currentLevel=0;
    updateBoardName();
    updateNavButtons();
    answer=Math.floor(Math.random() * maxNumber) + minNumber;
    addOperationToSegment("inner-single",answer,plus);
}
export function addition(){
    currentLevel=1;
    updateBoardName();
    updateNavButtons();
    const answerMin=2;
    answer=Math.floor(Math.random() * (maxNumber-answerMin+1)) + answerMin;
    const firstNumberMax=answer-1
    const firstNumberMin=1
    const firstNumber=Math.floor(Math.random() * (firstNumberMax-firstNumberMin+1)) + firstNumberMin;
    const secondNumber=answer-firstNumber;
    addOperationToSegment("inner-single",firstNumber,plus);
    addOperationToSegment("triple-ring",secondNumber,plus);

}
export function subtraction(){
    currentLevel=2;
    updateBoardName();
    updateNavButtons();
    const firstAddition=Math.floor(Math.random() * maxNumber) + minNumber;
    const secondAddition=Math.floor(Math.random() * maxNumber) + minNumber;
    const firstAndSecondAddition=firstAddition+secondAddition;
    let minAnswer=firstAndSecondAddition-20;
    if(minAnswer<1){
        minAnswer=1;
    }
    let maxAnswer=firstAndSecondAddition-1;
    if(maxAnswer>20){
        maxAnswer=20;
    }
    answer=Math.floor(Math.random() * (maxAnswer-minAnswer+1)) + minAnswer;
    const subtraction=firstAndSecondAddition-answer;

    addOperationToSegment("inner-single",firstAddition,plus);
    addOperationToSegment("triple-ring",subtraction,minus);
    addOperationToSegment("outer-single",secondAddition,plus);

    
    

}
export function checkAnswer(number){
    if(number==answer){
        alert("Correct!");
        clearBoard(currentLevel);
        setBoard(currentLevel);
    }
    else{
        alert("Incorrect")
    }
}
function clearBoard(level){
    switch(level){
            case 0:
                resetOperation(plus);
                break;
            case 1:
                resetOperation(plus);
                break;
            case 2:
                resetOperation(plus);
                resetOperation(minus);
                break;
        }
}
function setBoard(level){
    switch(level){
        case 0:
            introduction();
            break;
        case 1:
            addition();
            break;
        case 2:
            subtraction();
            break;
    }
}


function addOperationToSegment(ring,number,operationCssClass){
    const classString=ring+" nbr-"+number;
    const segments=document.getElementsByClassName(classString);

    segments[0].classList.add(operationCssClass);
}
function resetOperation(operation){
    const segments=document.getElementsByClassName(operation);
    // To avoid changes to segments causing issues in the for loop
    const segmentsArray=Array.from(segments);
    for(const part of segmentsArray){
        part.classList.remove(operation);
    }
}

function updateBoardName(){
    boardName.textContent=levelNames[currentLevel];
}

function updateNavButtons(){
    if(currentLevel==0){
        backButton.disabled=true;
        backButton.style.visibility="hidden";
    }
    else{
        backButton.disabled=false;
        backButton.style.visibility="visible";
        backValue=currentLevel-1;
        backButton.innerHTML=unicodeBackArrow+" "+levelNames[backValue];
    }
    if(currentLevel==levelNames.length-1){
        forwardButton.disabled=true;
        forwardButton.style.visibility="hidden";
    }
    else{
        forwardButton.disabled=false;
        forwardButton.style.visibility="visible";
        forwardValue=currentLevel+1;
        forwardButton.innerHTML=levelNames[forwardValue]+" "+unicodeForwardArrow;
    }
}
export function forwardButtonClick(){
    clearBoard(currentLevel);
    setBoard(forwardValue);
}
export function backButtonClick(){
    clearBoard(currentLevel);
    setBoard(backValue);
}