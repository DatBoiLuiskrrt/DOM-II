import "./less/index.less";

// Your code goes here!
const logo = document.querySelector(".logo-heading");
logo.addEventListener(
  "mouseover",
  (evt) => {
    evt.target.style.color = "red";

    setTimeout(() => {
      evt.target.style.color = "";
    }, 500);
  },
  false
);

window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
  if (key.keyCode == "65") {
    alert(`The 'a' letter key has been pressed!`);
  }
}

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  console.log(scrolled);
});

window.addEventListener("load", (evt) => {
  console.log("page is fully loaded");
});

const image = document.querySelector(".intro img");
image.onclick = function () {
  image.style.display = "none";
};

const secondImage = document.querySelector(".img-content img");
secondImage.ondblclick = () => {
  secondImage.style.border = "1px solid red";
};
