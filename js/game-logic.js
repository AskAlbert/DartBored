const plus="plus"
const maxNumber=20;
let answer=0;
export function level1(){
    answer=Math.floor(Math.random() * maxNumber) + 1;
    addOperationToSegment("inner-single",answer,plus);
}
export function level2(){
    const answerMin=2;
    
    answer=Math.floor(Math.random() * (maxNumber-answerMin+1)) + answerMin;
    const firstNumberMax=answer-1
    const firstNumberMin=1
    const firstNumber=Math.floor(Math.random() * (firstNumberMax-firstNumberMin+1)) + firstNumberMin;
    const secondNumber=answer-firstNumber;
    addOperationToSegment("inner-single",firstNumber,plus);
    addOperationToSegment("triple-ring",secondNumber,plus);

}
export function checkAnswer(number){
    if(number==answer){
        alert("Correct!");
        resetOperation(plus);
        level2();
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
