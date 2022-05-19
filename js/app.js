/* #Hamburger
  ======================================================= */
const header = document.querySelector('.header');
const headerBtn = document.querySelector('.header-hamburger');
const headerBtn2 = document.querySelector('.mobile-menu .close');

headerBtn.addEventListener('click', (e) => {
  e.preventDefault();

  header.classList.toggle('show');
  body.classList.toggle('no-scroll');
});

headerBtn2.addEventListener('click', (e) => {
  e.preventDefault();

  header.classList.toggle('show');
  body.classList.toggle('no-scroll');
});

/* #Header
  ======================================================= */

// Color Change
if (document.querySelector('.header')) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
}

if (document.querySelector('.header')) {
  if (window.scrollY > 0) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
}

/* #Gallery Slider
======================================================= */
if (document.querySelector('.gallery .swiper')) {
  new Swiper('.gallery .swiper', {
    loop: true,
    pagination: {
      el: '.gallery .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.gallery .next',
      prevEl: '.gallery .prev',
    },
  });
}