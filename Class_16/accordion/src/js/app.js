// get element
const acc_header = document.querySelectorAll(".accordion-header");
const acc_body = document.querySelectorAll(".accordion-body");

acc_header.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("active");
    if (item.classList.contains("active")) {
      // item.nextElementSibling.style.display = "block";
      item.nextElementSibling.style.height =
        item.nextElementSibling.scrollHeight + "px";
    } else {
      // item.nextElementSibling.style.display = "none";
      item.nextElementSibling.style.height = "0px";
    }
  });
});
