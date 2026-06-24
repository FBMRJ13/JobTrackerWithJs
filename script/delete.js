function deleteBtn(card,status){

const forAll=document.getElementById("totalCount");
const forInt=document.getElementById("interviewCount");
const forRej=document.getElementById("rejectedCount");


 
 forAll.innerText=Number(forAll.innerText)-1;

 const inText=(document.getElementById(status)).innerText;
 if(inText=="Interview"){

     forInt.innerText=Number(forInt.innerText)-1;
     document.getElementById(card).remove();
     const num=document.getElementById("interviewTab").children.length;
     if(num==0){
        const addChild=document.getElementById("noJob");
            addChild.classList.remove("hidden");
     }
     const updateNum=document.getElementById("updateNum3");
    updateNum.innerText=document.getElementById("interviewCount").innerText;

 }
 else if(inText=="Rejected"){
      forRej.innerText=Number(forRej.innerText)-1;
      document.getElementById(card).remove();
      const num=document.getElementById("rejectedTab").children.length;
     if(num==0){
        const addChild=document.getElementById("noJob");
            addChild.classList.remove("hidden");
     }
     const updateNum=document.getElementById("updateNum3");
    updateNum.innerText=document.getElementById("rejectedCount").innerText;

 }

 else if(inText=="Not Applied"){
      
      document.getElementById(card).remove();
      const num=document.getElementById("allCardContainer").children.length;
     if(num==0){
        const addChild=document.getElementById("noJob");
            addChild.classList.remove("hidden");
     }

 }

 const updateNum=document.getElementById("updateNum");
 updateNum.innerText=Number(updateNum.innerText)-1;
 




}