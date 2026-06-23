function addToRejected(id, status) {
    const getCard = document.getElementById(id);
    const info = document.getElementById(status);

    const statusInfo = info.innerText;

    if (statusInfo === "Not Applied") {
        const forAdd = document.getElementById("interviewTab");

        
        forAdd.appendChild(getCard);

        info.innerText = "Rejected";
        const count=document.getElementById("rejectedCount");
        count.innerText=Number(count.innerText)+1;
    }
}