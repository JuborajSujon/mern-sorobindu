const clock = document.querySelector(".clock");

setInterval(() => {
  let date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let ampm = "";
  h > 12 ? (ampm = "PM") : (ampm = "AM");

  h = h > 12 ? h - 12 : h;

  clock.innerHTML = `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${
    s < 10 ? "0" + s : s
  }  ${ampm}`;
}, 1000);
