const go = document.getElementById("go");
const stop = document.getElementById("stop");
const h1 = document.getElementById("output");
const reset = document.getElementById("reset");
const count = document.getElementById("count");
const loader = document.querySelector(".loader");

// go.addEventListener("click", function () {
//   h1.innerText = `Love comming`;
//   love = setTimeout(() => {
//     h1.innerText = `We Love MERN`;
//   }, 5000);
// });

// stop.addEventListener("click", function () {
//   clearTimeout(love);
//   h1.innerHTML = `New love comming`;
//   setTimeout(() => {
//     h1.innerText = `We Love Bangladesh`;
//   }, 2000);
// });

// let counter_value = 0;
// go.addEventListener("click", function () {
//   counter = setInterval(() => {
//     counter_value++;
//     h1.innerText = counter_value;
//   }, 1000);
// });

// stop.addEventListener("click", function () {
//   clearInterval(counter);
// });

// reset.addEventListener("click", function () {
//   clearInterval(counter);
//   counter_value = 0;
//   h1.innerText = counter_value;
// });

// get count value to count max value

let counter_value;
let counter;
go.addEventListener("click", function () {
  counter_value = count.value;

  counter = setInterval(() => {
    h1.innerText = counter_value;
    let width = discreaseLoader(count.value, counter_value);

    loader.style.width = `${width}%`;

    if (width >= 50 && width <= 100) {
      loader.style.backgroundColor = "green";
    } else if (width > 30 && width < 50) {
      loader.style.backgroundColor = "orange";
    } else if (width <= 30) {
      loader.style.backgroundColor = "red";
    }

    if (counter_value <= 0) {
      clearInterval(counter);
    }
    counter_value--;
  }, 1000);
});
