var nav = document.getElementById('nav');
var open = document.getElementById('open');
var links = document.querySelectorAll("a")

open.addEventListener('click', function() {
  nav.classList.toggle('is-open');
});
links.forEach(link => {
  link.addEventListener("click", function() {
    nav.classList.remove("is-open");
  });
});

// Gestion de la sticky navbar
var header = document.querySelector('header');
var sticky = header.offsetTop;
window.onscroll = function (){
  if(window.pageYOffset >= sticky){
    header.classList.add('sticky');
  }
  else {
    header.classList.remove('sticky');
  }
};

