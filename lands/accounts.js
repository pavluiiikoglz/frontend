const sliderItems = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex--;
  updateSlider();
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  updateSlider();
});

function updateSlider() {
  sliderItems.forEach((item, index) => {
    item.classList.remove('active');
    if (index == currentIndex) {
      item.classList.add('active');
    }
  });
}