const svgNS = "http://www.w3.org/2000/svg";
const boardSegements=document.getElementById("board-segments");

const multiplierClass="multiplier-ring";
const outerRingCss="outer-ring";


numberOfSegments=20;
angle=(Math.PI*2)/numberOfSegments;
angleDegrees=360/numberOfSegments;
createRing(99,outerRingCss)
createRing(75,multiplierClass);
createRing(65);
createRing(45,multiplierClass);
createRing(35);
createBullseye();



function createRing(radius,extraCssClass=""){
    let cssClass;
    
    for(let angle=0;angle<360;angle+=angleDegrees){
        
        
        if(angle%36){
              cssClass="dark-segment"  
        }
        else{
            cssClass="light-segment"
        }
        segment=createBoardSegment(radius,angle);
        
        segment.classList.add(cssClass);

        if(extraCssClass!=""){
         segment.classList.add(extraCssClass);   
        }
        
        
        boardSegements.appendChild(segment);
        
    }
}

function createBoardSegment(radius,rotation){

    

    cos= Math.cos(angle);
    sin= Math.sin(angle);
    
    xCordinate=cos*radius;
    yCordinate=sin*radius;
   
    
    const segmentGroup = document.createElementNS(svgNS, "g");
    
    degreeOfset=angleDegrees/2;
    segmentGroup.setAttribute("transform", `translate(100, 100) rotate(${rotation-(degreeOfset)})`);
    segmentGroup.setAttribute("stroke", "#000");
    segmentGroup.setAttribute("stroke-width", "1");

    // Create the <path> element
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", `M0 0 L ${radius} 0  A${radius} ${radius} 0 0 1  ${xCordinate} ${yCordinate}Z`);
    

    // Append elements to the <g> group
    segmentGroup.appendChild(path);
    return segmentGroup;
};
function createBullseye(){
    outerCircle=createCircle(8,"dark-segment");
    innerCircle=createCircle(3.5,"light-segment");
    innerCircle.classList.add(multiplierClass)
    boardSegements.appendChild(outerCircle);
    boardSegements.appendChild(innerCircle);
}

function createCircle(radius,cssClass){
    const circle= document.createElementNS(svgNS,"circle");
    circle.setAttribute("transform", "translate(100, 100)");
    circle.setAttribute("r",radius);
    circle.classList.add(cssClass);
    
    return circle;

}