import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();


import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles


new Swiper('.swiper', {
  
  modules: [Navigation, Pagination],

  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});