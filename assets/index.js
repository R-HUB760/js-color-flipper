let btn = document.querySelector("#btn");
let color = document.querySelector("#color");

let colors = ["red", "green", "yellow", "blue", "navy", "white", "orange"];
let simple;

btn.addEventListener("click", () => {
  for (i = 0; i < 2; i++) {
    simple = colors[getColor()];
  }

  color.textContent = simple;
  document.body.style.backgroundColor = simple;
});

function getColor() {
  return Math.floor(Math.random() * colors.length);
}
