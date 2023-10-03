const sec = document.querySelector(".s");
const min = document.querySelector(".m");
const hour = document.querySelector(".h");

setInterval(() => {
  let time = new Date();
  let current_sec = time.getSeconds();
  let current_min = time.getMinutes();
  let current_hour = time.getHours();
  sec.style.transform = `rotate(${timeHand(60, current_sec)}deg)`;
  min.style.transform = `rotate(${timeHand(60, current_min)}deg)`;
  hour.style.transform = `rotate(${
    timeHand(12, current_hour) + current_min / 5
  }deg)`;
}, 1000);

function timeHand(time, current) {
  return (360 * current) / time;
}
