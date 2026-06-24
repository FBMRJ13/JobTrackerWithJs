function addToInterview(id, status) {
    const getCard = document.getElementById(id);
    const info = document.getElementById(status);

    const statusInfo = info.innerText;

    if (statusInfo === "Not Applied") {
        const forAdd = document.getElementById("interviewTab");

        
        forAdd.appendChild(getCard);

        info.innerText = "Interview";
        const count=document.getElementById("interviewCount");
        count.innerText=Number(count.innerText)+1;

        const container=document.getElementById("allCardContainer");
        const num=container.children.length;
        if(num==0){
            const addChild=document.getElementById("noJob");
            addChild.classList.remove("hidden");
           
        }
    }
    else if(statusInfo=="Rejected"){
 const forAdd = document.getElementById("interviewTab");

        
        forAdd.appendChild(getCard);

        info.innerText = "Interview";
        const count=document.getElementById("interviewCount");
        count.innerText=Number(count.innerText)+1;
     const Newcount=document.getElementById("rejectedCount");
        const forRejection=Number(Newcount.innerText)-1;
         
         Newcount.innerText=forRejection;


        const container=document.getElementById("rejectedTab");
        const num=container.children.length; 
        
if(num==0){
     const addChild=document.getElementById("noJob");
            addChild.classList.remove("hidden");
            

        }

        const updateNum=document.getElementById("updateNum3");
    updateNum.innerText=document.getElementById("rejectedCount").innerText+ " of";
        


    }
}