const do_form = document.getElementById("do_form");
const list = document.getElementById("list");

do_form.addEventListener("submit", function (e) {
  e.preventDefault();
  let do_name = this.querySelector('input[name="do-name"]').value;
  let opt = this.querySelector('select[name="opt"]').value;

  if (do_name === "" || opt === "") {
    alert("Please Fill All The Fields");
  } else {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";

    let doText = document.createTextNode(do_name);

    const closebtn = document.createElement("button");
    closebtn.className = "btn-close";
    closebtn.type = "button";
    closebtn.setAttribute("aria-label", "Close");
    closebtn.setAttribute("style", "position: absolute; right:0;");
    // closebtn.setAttribute("onclick", "this.parentElement.remove();");
    closebtn.addEventListener("click", function () {
      this.parentElement.remove();
    });

    li.appendChild(closebtn);
    li.insertBefore(doText, closebtn);
    list.appendChild(li);

    this.querySelector('input[name="do-name"]').value = "";
    this.querySelector('select[name="opt"]').value = "";
  }
});
