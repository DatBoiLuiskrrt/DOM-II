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

window.addEventListener("load", () => {
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

const foot = document.querySelector(".footer");
foot.onclick = () => {
  foot.style.display = "none";
};

const thirdImg = document.querySelector(".inverse-content .img-content img");
thirdImg.ondblclick = () => {
  thirdImg.style.border = "2px solid blue";
};

const link = document.querySelectorAll(".nav-link");
link.onclick = () => {
  link.preventDefault();
};

const container = document.querySelector("body");
container.onclick = () => {
  container.classList.add(".newClass");
};
