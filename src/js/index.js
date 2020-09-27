
const sliders = document.querySelectorAll(".sliders");

for (let i = 0; i < sliders.length; i++) {
  sliders[i].addEventListener("click", function () {
    toogleClass(i);
  });
}

const toogleClass = (num) => {
  sliders[num].classList.remove("active");
  if (sliders.length - 1 === num) {
    sliders[0].classList.add("active");
    return;
  }
  sliders[num + 1].classList.add("active");
};
