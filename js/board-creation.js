const svgNS = "http://www.w3.org/2000/svg";

const darkSegmentCss="dark-segment";
const lightSegmentCss="light-segment";

const outerRingCss="outer-ring";
const doubleRingCssClass="double-ring";
const tripleRingCssClass="triple-ring";

const outerSingleCssClass="outer-single";
const innerSingleCssClass="inner-single";

const numberCssClass="numbers";

const outerBullCss="outer-bull";
const bullCss="bull";

const svgCss="svg-box";


const bullRadius=6.35;
const outerBullRadius=15.9;

const boardNumbers=[6,10,15,2,17,3,19,7,16,8,11,14,9,12,5,20,1,18,4,13];
const numbersOffset=24;

const svgBoxSize=500;


const numberOfSegments=20;
const angle=(Math.PI*2)/numberOfSegments;
const angleDegrees=360/numberOfSegments;

let boardSegments;

export function createDartBoardSvg(containerElement){

    if(!(containerElement instanceof Element)){
        console.warn("createDartBoardSvg: "+containerElement+" is not a DOM element");
        return null;
    }
    const svgElement=document.createElementNS(svgNS,"svg");
    svgElement.setAttribute("viewBox",`0 0  ${svgBoxSize} ${svgBoxSize}`);
    svgElement.classList.add(svgCss);
    boardSegments=document.createElementNS(svgNS, "g");
    svgElement.appendChild(boardSegments);
    containerElement.appendChild(svgElement);
    createDartBoard();

}


function createDartBoard(widerTriple=false){
    let doubleTripleIncrease=0;
    if(widerTriple==true){
        doubleTripleIncrease=10;
    }

    
    const innerSingleRadius=103-doubleTripleIncrease;
    const tripleRingRadius=111;
    const outerSingleRadius=166-doubleTripleIncrease;
    const doubleRingRadius=174;
    const outerRingRadius=225.5;

    createRing(outerRingRadius,outerRingCss,true);
    createRing(doubleRingRadius,doubleRingCssClass);
    createRing(outerSingleRadius,outerSingleCssClass);
    createRing(tripleRingRadius,tripleRingCssClass);
    createRing(innerSingleRadius,innerSingleCssClass);
    createBullseye();
    boardSegments.setAttribute("transform", `translate(${svgBoxSize/2}, ${svgBoxSize/2})`);
}


function createRing(radius,extraCssClass="",numbers=false){
    let cssClass;
    let boardNbrIndex=0;
    let number="";
    for(let rotationAngle=0;rotationAngle<360;rotationAngle+=angleDegrees){
        
        if(numbers==true){
            number=boardNumbers[boardNbrIndex];
         
        }
        if(rotationAngle%36){
              cssClass=darkSegmentCss;  
        }
        else{
            cssClass=lightSegmentCss;
        }
        const segment=createBoardSegment(radius,rotationAngle,number);
        
        segment.classList.add(cssClass);


        if(extraCssClass!=""){
         segment.classList.add(extraCssClass);   
        }
        
        segment.classList.add(`nbr-${boardNumbers[boardNbrIndex]}`)
        boardNbrIndex++;
        boardSegments.appendChild(segment);
        
    }
}

function createBoardSegment(radius,rotation,number=""){

    

    const cos= Math.cos(angle);
    const sin= Math.sin(angle);
    
    const xCoordinate=cos*radius;
    const yCoordinate=sin*radius;
   
    
    
    const segmentGroup = document.createElementNS(svgNS, "g");
    
    const degreeOffset=angleDegrees/2;
    
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", `M0 0 L${radius} 0 A${radius} ${radius} 0 0 1  ${xCoordinate} ${yCoordinate}Z`);
    path.setAttribute("transform", `rotate(${rotation-(degreeOffset)})`);


    segmentGroup.appendChild(path);

    if(number!=""){
        const rotationRadian=rotation*(Math.PI/180);
        
        const cosRotation=Math.cos(rotationRadian);
        const sinRotation=Math.sin(rotationRadian);

        const numberX=cosRotation*(radius-numbersOffset);
        const numberY=sinRotation*(radius-numbersOffset);

        const numberElement=createNumber(numberX,numberY,number);
        segmentGroup.appendChild(numberElement);
    }
    return segmentGroup;
};
function createBullseye(){
    const outerCircle=createCircle(outerBullRadius,outerBullCss);
    const innerCircle=createCircle(bullRadius,bullCss);
    boardSegments.appendChild(outerCircle);
    boardSegments.appendChild(innerCircle);
}

function createCircle(radius,cssClass){
    const circle= document.createElementNS(svgNS,"circle");
    circle.setAttribute("r",radius);
    circle.classList.add(cssClass);
    
    return circle;

}

function createNumber(xPosition=0,yPosition=0,number){
    const numberElement= document.createElementNS(svgNS,"text");
    numberElement.textContent=number;
    numberElement.setAttribute("x",xPosition);
    numberElement.setAttribute("y",yPosition);
    numberElement.classList.add(numberCssClass);
    return numberElement;
}
