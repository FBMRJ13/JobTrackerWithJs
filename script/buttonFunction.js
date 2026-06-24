function actionButtons(tabName,btnName){

const allCardContainer=document.getElementById("allCardContainer");
const interviewTab=document.getElementById("interviewTab");
const rejectedTab=document.getElementById("rejectedTab");
const noJobTab=document.getElementById("noJob");


// make all section hidden

allCardContainer.classList.add("hidden");
interviewTab.classList.add("hidden");
rejectedTab.classList.add("hidden");
noJobTab.classList.add("hidden");



// for btn bg color

document.getElementById("alButton").classList.remove("bg-blue-500");
document.getElementById("intButton").classList.remove("bg-blue-500");
document.getElementById("rejButton").classList.remove("bg-blue-500");


document.getElementById(btnName).classList.add("bg-blue-500");



const forView=document.getElementById(tabName);
const num12=forView.children.length;
if(num12===0){
    
    noJobTab.classList.remove("hidden");
    
}
else{
    

forView.classList.remove("hidden");
}
}