const svgNS = "http://www.w3.org/2000/svg";
const boardSegements=document.getElementById("board-segments");

const outerRingCss="outer-ring";
const doubleRingCssClass="double-ring";
const tripleRingCssClass="triple-ring"

const outerSingleCssClass="outer-single"
const innerSingleCssClass="inner-single"

const numberCssClass="numbers"
const boardNumbers=[6,10,15,2,17,3,19,7,16,8,11,14,9,12,5,20,1,18,4,13];
const numbersOfset=12;

numberOfSegments=20;
angle=(Math.PI*2)/numberOfSegments;
angleDegrees=360/numberOfSegments;
createRing(99,outerRingCss,true)
createRing(75,doubleRingCssClass);
createRing(65,outerSingleCssClass);
createRing(45,tripleRingCssClass);
createRing(35,innerSingleCssClass);
createBullseye();
boardSegements.setAttribute("transform", "translate(100, 100)");


function createRing(radius,extraCssClass="",numbers=false){
    let cssClass;
    let boardNbrIndex=0;
    number="";
    for(let angle=0;angle<360;angle+=angleDegrees){
        
        if(numbers==true){
            number=boardNumbers[boardNbrIndex];
         
        }
        if(angle%36){
              cssClass="dark-segment"  
        }
        else{
            cssClass="light-segment"
        }
        segment=createBoardSegment(radius,angle,number);
        
        segment.classList.add(cssClass);


        if(extraCssClass!=""){
         segment.classList.add(extraCssClass);   
        }
        
        segment.classList.add(`nbr-${boardNumbers[boardNbrIndex]}`)
        boardNbrIndex++;
        boardSegements.appendChild(segment);
        
    }
}

function createBoardSegment(radius,rotation,number=""){

    

    cos= Math.cos(angle);
    sin= Math.sin(angle);
    
    
   
    
    xCordinate=cos*radius;
    yCordinate=sin*radius;
   
    
    
    const segmentGroup = document.createElementNS(svgNS, "g");
    
    degreeOfset=angleDegrees/2;
    //segmentGroup.setAttribute("transform", `rotate(${rotation-(degreeOfset)})`);
    
    // Create the <path> element
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", `M0 0 L${radius} 0 A${radius} ${radius} 0 0 1  ${xCordinate} ${yCordinate}Z`);
    path.setAttribute("transform", `rotate(${rotation-(degreeOfset)})`);

    
    
    // Append elements to the <g> group

    segmentGroup.appendChild(path);

    if(number!=""){
        rotationRadian=rotation*(Math.PI/180);
        
        cosRotation=Math.cos(rotationRadian);
        sinRotation=Math.sin(rotationRadian);

        numberX=cosRotation*(radius-numbersOfset);
        numberY=sinRotation*(radius-numbersOfset);

        number=createNumber(numberX,numberY,number);
        segmentGroup.appendChild(number);
    }
    return segmentGroup;
};
function createBullseye(){
    outerCircle=createCircle(8,"outer-bull");
    innerCircle=createCircle(3.5,"bull");
    boardSegements.appendChild(outerCircle);
    boardSegements.appendChild(innerCircle);
}

function createCircle(radius,cssClass){
    const circle= document.createElementNS(svgNS,"circle");
    circle.setAttribute("r",radius);
    circle.classList.add(cssClass);
    
    return circle;

}

// tried doing it without generating the cordinates did not get that to work in a good way so should probably just use sin and cos
function createNumber(xPosistion=0,yPosistion=0,number){
    const numberElement= document.createElementNS(svgNS,"text");
    numberElement.textContent=number;
    numberElement.setAttribute("x",xPosistion);
    numberElement.setAttribute("y",yPosistion);
    numberElement.classList.add(numberCssClass);
    return numberElement;
}