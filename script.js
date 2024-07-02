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
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1180: {
      slidesPerView: 4,
    },
    887: {
      slidesPerView: 3,
    },
    625: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1,
    },
  },
});

const buyswiper = new Swiper(".buy-swiper", {
  // Optional parameters
  direction: "horizontal",
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1180: {
      slidesPerView: 4,
    },
    887: {
      slidesPerView: 3,
    },
    625: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1,
    },
  },
});
