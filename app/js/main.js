const viewLine = document.querySelector(".view-mod__btn--line");
const viewGrid = document.querySelector(".view-mod__btn--grid");
const viewContainer = document.querySelector(".view-mod__container");

viewGrid.addEventListener("click", () => {
  viewContainer.classList.add("view-mod__container--grid");
  viewContainer.classList.remove("view-mod__container--line");
});

viewLine.addEventListener("click", () => {
  viewContainer.classList.add("view-mod__container--line");
  viewContainer.classList.remove("view-mod__container--grid");
});

const swiper = new Swiper(".accessories__slider", {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: ".arrow-next",
    prevEl: ".arrow-prev",
  },
});

const swiperReviews = new Swiper(".reviews-slider", {
  slidesPerView: 8,
  spaceBetween: 16,
  loop: true,
  navigation: {
    nextEl: ".reviews-slider-next",
    prevEl: ".reviews-slider-prev",
  },
  pagination: {
    el: ".reviews-slider-pagination",
    type: "fraction",
  },
});

const rangeSlider = document.querySelector(".range__slider");
const inputMin = document.querySelector(".range__min");
const inputMax = document.querySelector(".range__max");
noUiSlider.create(rangeSlider, {
  start: [300, 3000],
  step: 100,
  range: {
    min: 300,
    max: 3000,
  },
  format: {
    to: (value) => Math.round(value),
    from: (value) => Number(value),
  },
});

rangeSlider.noUiSlider.on("update", (values, handle) => {
  if (handle === 0) {
    inputMin.value = vulues[0];
  } else {
    inputMax.value = vulues[1];
  }
});

inputMin.addEventListener("change", () => {
  rangeSlider.noUiSlider.set([inputMin.value, null]);
});
inputMax.addEventListener("change", () => {
  rangeSlider.noUiSlider.set([null, inputMax.value]);
});
