const fiverr_order = document.getElementById("fiverr_order");
const counter = document.querySelector(".counter");

fiverr_order.addEventListener("submit", function (e) {
  e.preventDefault();

  let date = this.querySelector("input[type=date]").value;
  let time = this.querySelector("input[type=time]").value;

  setInterval(() => {
    let start_time = new Date();
    let end_time = new Date(date + " " + time);
    let time_diff = Math.floor(
      Math.abs(end_time.getTime() - start_time.getTime())
    );
    const total_sec = Math.floor(time_diff / 1000);
    const total_min = Math.floor(total_sec / 60);
    const total_hours = Math.floor(total_min / 60);
    const total_day = Math.floor(total_hours / 24);

    const sec = total_sec % 60;
    const min = total_min % 60;
    const hour = total_hours % 24;

    // let totalMin = total_day * 24 * 60;
    // let totalHours = total_hours * 60;
    // let totalDaySec = total_day * 24 * 60 * 60;
    // let totalHoursSec = total_hours * 60 * 60;
    // let totalMinSec = total_day * 24 * 60 * 60;

    // const hour = total_hours - total_day * 24;
    // const min = total_min - totalMin - totalHours;

    // const sec = total_sec - totalDaySec - totalHoursSec - totalMinSec;

    counter.innerHTML = `${total_day > 9 ? total_day : "0" + total_day} : ${
      hour > 9 ? hour : "0" + hour
    } : ${min > 9 ? min : "0" + min} :${sec > 9 ? sec : "0" + sec}`;
  }, 1000);
});
