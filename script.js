const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountainsBehind = document.getElementById("mountains_behind");
const mountainsFront = document.getElementById("mountains_front");
const text = document.getElementById("text");
const button = document.getElementById("btn");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  stars.style.left = value * 0.5 + "px";
  moon.style.top = value * 1.1 + "px";
  mountainsBehind.style.top = value * 0.33 + "px";
  //   mountainsFront.style.top = value * 0 + "px";
  text.style.marginRight = value * 3 + "px";
  text.style.marginTop = value * 1 + "px";
  button.style.marginTop = value * 1 + "px";
  header.style.top = value * 0.33 + "px";
});
