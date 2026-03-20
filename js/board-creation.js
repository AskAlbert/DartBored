const svgNS = "http://www.w3.org/2000/svg";
const boardSegements=document.getElementById("board-segments");

numberOfSegments=20;
angle=(Math.PI*2)/numberOfSegments;
angleDegrees=360/numberOfSegments;
createRing(90);

function createRing(radius){
    let color="rgb(0, 0, 0)";
    for(let angle=0;angle<360;angle+=angleDegrees){
        if(angle%36){
              color="rgb(0, 0, 0)";  
        }
        else{
            color="rgb(255, 255, 255)";
        }
        segment=createBoardSegment(radius,angle);
        segment.setAttribute("fill", `${color}`);
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