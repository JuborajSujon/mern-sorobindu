import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";
import "./index.css";
import "./main.scss";
import axios from "axios";
// import team from "./team.jpg";
// import Student from "./components/Student";
// import Teacher from "./components/Teacher";

// const photo = document.getElementById("photo");
// photo.setAttribute("src", team);

// let student = new Student();
// let teacher = new Teacher();

getProduct();
function getProduct() {
  axios.get("http://localhost:5050/products").then((res) => {
    const plist = document.querySelector(".p-list");
    let list = "";
    res.data.map((item) => {
      let { title, price, descripttion, category, image } = item;

      list += `
        <div class="col-md-4">
          <div class="card shadow">
            <img
              style="height: 400px; object-fit: cover;"
              class="card-img"
              id="photo"
              src="${image}"
              alt="photo" />
            <div class="card-body">
              <h3>${title}</h3>
              <p>Price: $ ${price}</p>
              <p>${descripttion}</p>
              <p>${category}</p>
            </div>
          </div>
        </div>
      `;
    });
    plist.innerHTML = list;
  });
}
