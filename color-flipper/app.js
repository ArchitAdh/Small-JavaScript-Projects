const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  //random no. between 0 to 3
  const rand = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[rand];
  color.innerText = colors[rand];
});
