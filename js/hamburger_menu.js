const button = document.getElementById("hamburgerButton");
const nav = document.getElementById("navigationTop");

button.addEventListener('click', () => {
  nav.classList.toggle('show');
});