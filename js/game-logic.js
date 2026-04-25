const plus="plus"
let answer=0;
export function level1(){
    answer=Math.floor(Math.random() * 20) + 1;
    addOperationToSegment("inner-single",answer,plus);
}
export function checkAnswer(number){
    if(number==answer){
        alert("Correct!");
        resetOperation(plus);
        level1();
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
    for(const part of segments){
        part.classList.remove(operation);
    }
}
