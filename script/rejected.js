function addToRejected(id, status) {
    const getCard = document.getElementById(id);
    const info = document.getElementById(status);

    const statusInfo = info.innerText;

    if (statusInfo === "Not Applied") {
        const forAdd = document.getElementById("rejectedTab");

        
        forAdd.appendChild(getCard);

        info.innerText = "Rejected";
        const count=document.getElementById("rejectedCount");
        count.innerText=Number(count.innerText)+1;

        const container=document.getElementById("allCardContainer");
        const num=container.children.length;
        if(num==0){
            const addChild=document.getElementById("noJob");
            addChild.classList.remove("hidden");
            
        }
    }

    else if(statusInfo=="Interview"){
 const forAdd = document.getElementById("rejectedTab");

        
        forAdd.appendChild(getCard);

        info.innerText = "Rejected";
        const count=document.getElementById("interviewCount");
        count.innerText=Number(count.innerText)-1;
        const Newcount=document.getElementById("rejectedCount");
        const forRejection=Number(Newcount.innerText)+1;
         
         Newcount.innerText=forRejection;


        const container=document.getElementById("interviewTab");
        const num=container.children.length; 
        
if(num==0){
            const addChild=document.getElementById("noJob");
             addChild.classList.remove("hidden");
        }
        
const updateNum=document.getElementById("updateNum3");
    updateNum.innerText=document.getElementById("interviewCount").innerText+ " of";

    }
}