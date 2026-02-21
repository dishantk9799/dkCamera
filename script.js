const page3Img = document.querySelector(".page3-img");

const images = ["one.jpg","two.jpg","three.jpg","four.jpg","five.jpg","six.jpg"];
let currentIndex = 0;

page3Img.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  page3Img.style.backgroundImage = `url(./img/hero/${images[currentIndex]})`;
});