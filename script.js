const swiper = new Swiper(".promo-swiper", {
  // Optional parameters
  direction: "horizontal",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const popularswiper = new Swiper(".popular-swiper", {
  // Optional parameters
  direction: "horizontal",
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidePerView: 4,
  spaceBetween: 30,
});

const buyswiper = new Swiper(".buy-swiper", {
  // Optional parameters
  direction: "horizontal",
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidePerView: 4,
  spaceBetween: 30,
});
