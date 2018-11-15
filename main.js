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


var waypoint = new Waypoint({
  element: document.getElementsByid('logo_id'),
  handler: function(direction) {
    document.getElementsByid('logo_id').classList.add('is-reached')
  }
})