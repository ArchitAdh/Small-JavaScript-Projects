const value = document.getElementById("value");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

//initialize counter to zero
let count = 0;

//*original take
// decrease.addEventListener("click", () => {
//   count -= 1;
//   value.textContent = count;
//   console.log("decrease");
// });

// increase.addEventListener("click", () => {
//   count++;
//   value.textContent = count;
//   console.log("incr");
// });

// reset.addEventListener("click", () => {
//   count = 0;
//   value.textContent = count;
//   console.log("rst");
// });

//*refactor
const btns = document.querySelector(".button-container");

btns.addEventListener("click", (e) => {
  //?   console.log(e.currentTarget.classList);
  //   console.log(e.target.classList);

  const classlist = e.target.classList;
  if (classlist.contains("increase")) {
    count++;
  } else if (classlist.contains("decrease")) {
    count--;
  } else {
    count = 0;
  }

  //update value
  value.textContent = count;

  //color schema
  if (count < 0) {
    value.style.color = "red";
  }
  if (count > 0) {
    value.style.color = "green";
  }
  if (count === 0) {
    value.style.color = "#555";
  }
});

//*technique using querySelectorAll is shown in the pulled projects final folder. However, the method is discouraged due to memory management issue. The method used here uses event delegation which has many benefits over it
