const popUp=document.getElementById("pop-up");
const blur=document.getElementById("blur");
const textElement=document.getElementById("pop-up-text");
const titleElement=document.getElementById("pop-up-title");
const popUpButton=document.getElementById("pop-up-button");
export function hidePopUp(){
    popUp.style.display="none";
    blur.style.display="none";
}
export function showPopUp(title,text="",buttonText=""){
    popUp.style.display="block";
    blur.style.display="block";
    setPopupContent(title,text,buttonText);
}
function setPopupContent(title,text="",buttonText=""){
    
    titleElement.textContent=title;
    if(text===""){
        textElement.style.display="none";
    }else{
        textElement.style.display="block";
        textElement.textContent=text;
    }
    if(buttonText!=""){
        popUpButton.innerText=buttonText;
    }
}