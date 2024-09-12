var timelineSwiper = new Swiper ('.timeline .swiper-container', {
  direction: 'vertical',
  loop: false,
  speed: 1600,
  pagination: '.swiper-pagination',
  paginationBulletRender: function (swiper, index, className) {
    var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
    return '<span class="' + className + '">' + year + '</span>';
  },
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  breakpoints: {
    768: {
      direction: 'horizontal',
    }
  }
});
window.onscroll = function() {handleScroll()};

var navbar = document.querySelector('.navbar');
var sticky = navbar.offsetTop;

function handleScroll() {
  if (window.pageYOffset > 100) { // A navbar muda após 100px de rolagem
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

/* Alternar o ícone do menu mobile */
document.querySelector('.navbar-toggler').addEventListener('click', function() {
  this.classList.toggle('collapsed');
});