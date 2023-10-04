// get element

const button = document.querySelector(".apply");
const modal = document.querySelector(".haq-modal");
const mclose = document.querySelector(".haq-modal .close");
const aclose = document.querySelector(".haq-alert .close");
const alert = document.querySelector(".haq-alert");
const keep = document.getElementById("keep");
const discard = document.getElementById("discard");

// button.addEventListener("click", function (e) {
//   modal.style.display = "flex";
// });

button.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.add("active");
});

mclose.addEventListener("click", function (e) {
  // modal.classList.remove("active");
  alert.style.display = "flex";
});

aclose.addEventListener("click", function (e) {
  // modal.classList.remove("active");
  alert.style.display = "none";
});

keep.addEventListener("click", function (e) {
  // modal.classList.remove("active");
  alert.style.display = "none";
});

discard.addEventListener("click", function (e) {
  alert.style.display = "none";
  modal.classList.remove("active");
});

modal.addEventListener("click", function (e) {
  if (e.target === this) {
    modal.classList.remove("active");
  }
});
