// const navigationMenu = document.querySelector('.header__link');
// const openMenu = document.querySelector('.uil-bars');
// const closeMenu = document.querySelector('.uil-times');

// openMenu.addEventListener('click', () => {
//     navigationMenu.style.display = "flex";
//     openMenu.style.display = "none";
//     closeMenu.style.display = "block"
// })

// closeMenu.addEventListener('click', () => {
//     navigationMenu.style.display = "none"
//     closeMenu.style.display = "none"
//     openMenu.style.display = "block"
// })



// Swiper JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });