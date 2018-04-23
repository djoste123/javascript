const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");
CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e){
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

/*CTA.onclick = reveal; ovo je dobro samo za jedan eventhandler*/
CTA.addEventListener("click", reveal, false);
CTA.addEventListener("click", function(){alert("The button was clicked");}, false)