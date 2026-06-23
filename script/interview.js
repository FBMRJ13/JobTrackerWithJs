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
    }
}