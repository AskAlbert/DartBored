const plus="plus";
const minus="minus";
const maxNumber=20;
const minNumber=1;
let answer=0;
export function introduction(){
    answer=Math.floor(Math.random() * maxNumber) + minNumber;
    addOperationToSegment("inner-single",answer,plus);
}
export function addition(){
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
        resetOperation(plus);
        resetOperation(minus);
        subtraction();
    }
    else{
        alert("Incorrect")
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
