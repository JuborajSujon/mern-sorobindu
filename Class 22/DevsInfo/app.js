import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";

//  get elements
const staff_add_form = document.getElementById("staff_add_form");
const staff_data_list = document.getElementById("staff_data_list");

// Staff form submit for data add
staff_add_form.addEventListener("submit", function (e) {
  e.preventDefault();

  const msg = document.getElementById("msg");

  let form_data = new FormData(e.target);
  let data = Object.fromEntries(form_data.entries());

  let { name, cell, location } = data;

  if (name == "" || cell == "" || location == "") {
    msg.innerHTML = Alert.danger("All fields are required");
  } else {
    Storage.set("staff", data);
    staff_add_form.reset();
    getAllStaff();
  }
});

getAllStaff();
function getAllStaff() {
  let data = Storage.get("staff");
  let list = "";
  data.map((data, index) => {
    const { name, cell, location, photo } = data;
    const defaultPhoto = "./assets/images/download.jpg"; // Set your default photo URL here

    // Check if photo is falsy, and use the default photo URL
    const photoURL = photo ? photo : defaultPhoto;

    list += `
    <tr>
      <td>${index + 1}</td>
      <td>${name}</td>
      <td>${cell}</td>
      <td>${location}</td>
      <td>
      <img style="width: 50px; height: 50px; object-fit: cover; " src="${photoURL}" alt="photo" /></td>
      <td>
        <button class="btn btn-info btn-sm">
          <i class="fas fa-eye"></i>
        </button>
        <button class="btn btn-warning btn-sm">
          <i class="fas fa-edit"></i>
        </button>
        <button class="btn btn-danger btn-sm" onclick="staffDelete(${index})">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    </tr>
    `;
  });
  staff_data_list.innerHTML = list;
}
