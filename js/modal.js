let modal = document.querySelector(".modalForm");
let openM = document.querySelector("#modalBtn");
let close = document.querySelector("#close");

openM.addEventListener("click", ()=>{
    modal.style.display = "block";
});

window.addEventListener("click", (e)=>{
    if(e.target == modal){
        modal.style.display = "none";
    }
});

close.addEventListener("click", ()=>{
    modal.style.display = "none";
});

