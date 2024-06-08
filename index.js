var langauge = document.querySelector('.lang');
var option = document.querySelector('.lang-option');

langauge.addEventListener("mouseover",function(){
    option.classList.toggle('down')
})

var signin = document.querySelector('.return-hello');
var links = document.querySelector('.sign');

signin.addEventListener("mouseover",function(){
    links.classList.toggle('down1');
})

var swp = new Swiper(".ms", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay:true,
    navigation: {
      nextEl: ".next",
      prevEl: ".previous",
    },
  });

  