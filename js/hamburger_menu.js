const button = document.getElementById("hamburgerButton");
const nav = document.getElementById("navigationTop");

const socialsBtn = document.getElementById("socialBtn");
const socials = document.getElementById("socials");
const arrow = document.querySelector(".fa-chevron-up");

button.addEventListener('click', () => {
  nav.classList.toggle('show');
});

socialsBtn.addEventListener('click', ()=>{
  socials.classList.toggle('showSocials');
  arrow.classList.toggle('fa-rotate-180');
});

/* replace Nav "Memes & Highlights with Memes" */
const memes = document.querySelectorAll("a")[1];

window.addEventListener("resize", ()=>{
  if(window.innerWidth <= 840){
    memes.textContent = "Memes";
  }
  else
  {
    memes.textContent = "Memes & Highlights";
  }
});


