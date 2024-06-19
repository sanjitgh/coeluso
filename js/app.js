$(document).ready(function () {
  $(".person_carousel").owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1700,
  });
});

document.querySelector(".ham").addEventListener("click",changeIcon);

function changeIcon(event){
  let ham = event.currentTarget;
  ham.classList.toggle("clicked");
    ham.children[0].classList.toggle('rotate-left');
    ham.children[1].classList.toggle('vanish');
    ham.children[2].classList.toggle('rotate-right');
    document.querySelector(".drawer-items").classList.toggle("visible");
}