//Require libray

//get elements

const devs_ops = document.getElementById("devs-ops");

// Load all skills form API using fetch
/** 
 const loadskills = () => {
  fetch("http://localhost:1010/skill")
    .then((data) => data.json())
    .then((data) => {
      let skill_list = "";
      data.map((skill) => {
        skill_list += `
      <option value="${skill.id}">${skill.name}</option>
      `;
      });
      devs_ops.insertAdjacentHTML("beforeend", skill_list);
    });
};
loadskills();
*/

//Load all skill form API using axios
const loadskills = () => {
  axios.get("http://localhost:1010/skill").then((data) => {
    let skill_list = "";
    data.data.map((skill) => {
      skill_list += `
      <option value="${skill.id}">${skill.name}</option>
      `;
    });
    devs_ops.insertAdjacentHTML("beforeend", skill_list);
  });
};
loadskills();

/**
 * All devs Load
 */
const devs_data_list = document.querySelector("#devs-data-list");

const getDevelopers = () => {
  axios.get("http://localhost:1010/developers").then((res) => {
    let dev_data = "";
    res.data.map((dev, index) => {
      dev_data += `
              <tr>
                <td>${index + 1}</td>
                <td>${dev.name}</td>
                <td>${dev.email}</td>
                <td>${dev.cell}</td>
                <td>${dev.skillId}</td>
                <td><img style="object-fit:cover; width: 50px; height: 50px;" src="${
                  dev.photo
                }" alt="" /></td>
                <td>
                  <a
                    data-bs-toggle="modal"
                    class="btn btn-info btn-sm"
                    href="#modal-view"
                    onclick="modalSingleData(${dev.id})"
                    ><i class="fa fa-eye"></i
                  ></a>
                  <a
                    data-bs-toggle="modal"
                    class="btn btn-warning btn-sm"
                    href="#modal-edit"
                    onclick="editDeveloper(${dev.id})"
                    ><i class="fa fa-edit"></i
                  ></a>
                  <a
                    data-bs-toggle="modal"
                    class="btn btn-danger btn-sm"
                    href="#modal-delete"
                    onclick="modalDeleteData(${dev.id})"
                    ><i class="fa fa-trash"></i
                  ></a>
                </td>
              </tr>
      `;
    });
    devs_data_list.innerHTML = dev_data;
  });
};
getDevelopers();

/**
 * Add new devs
 */

const devs_add_form = document.querySelector("#devs-add-form");

devs_add_form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = this.querySelector("#devs-name");
  let email = this.querySelector("#devs-email");
  let cell = this.querySelector("#devs-cell");
  let photo = this.querySelector("#devs-photo");
  let skill = this.querySelector("#devs-ops");

  if (
    name.value == "" ||
    email.value == "" ||
    cell.value == "" ||
    photo.value == "" ||
    skill.value == ""
  ) {
    alert("All fields are required !");
  } else {
    axios
      .post("http://localhost:1010/developers", {
        id: "",
        name: name.value,
        email: email.value,
        cell: cell.value,
        photo: photo.value,
        skillId: skill.value,
      })
      .then((res) => {
        name.value == "";
        email.value == "";
        cell.value == "";
        photo.value == "";
        skill.value == "";

        getDevelopers();
      });
  }
});

/**
 * Edit devs data
 */

const devs_edit_btns = document.querySelectorAll(".devs-edit-btn");

function editDeveloper(id) {
  let name = document.getElementById("edevs-name");
  let email = document.getElementById("edevs-email");
  let cell = document.getElementById("edevs-cell");
  let photo = document.getElementById("edevs-photo");
  let preview = document.getElementById("epreview");
  let skill = document.getElementById("edevs-ops");
  let edit_id = document.getElementById("edevs-edit-id");

  axios.get(`http://localhost:1010/developers/${id}`).then((res) => {
    name.value = res.data.name;
    email.value = res.data.email;
    cell.value = res.data.cell;
    photo.value = res.data.photo;
    skill.value = res.data.skillId;
    edit_id.value = id;
    preview.setAttribute("src", res.data.photo);
  });
}

const devs_edit_form = document.querySelector("#devs-edit-form");

devs_edit_form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = this.querySelector("#edevs-name");
  let email = this.querySelector("#edevs-email");
  let cell = this.querySelector("#edevs-cell");
  let photo = this.querySelector("#edevs-photo");
  let skill = this.querySelector("#edevs-ops");
  let edit_id = this.querySelector("#edevs-edit-id");

  axios
    .patch(`http://localhost:1010/developers/${edit_id.value}`, {
      id: "",
      name: name.value,
      email: email.value,
      cell: cell.value,
      photo: photo.value,
      skillId: skill.value,
    })
    .then((res) => {
      name.value == "";
      email.value == "";
      cell.value == "";
      photo.value == "";
      skill.value == "";

      getDevelopers();
    });
});

/**
 * Delete data
 */
const modal_delete = document.getElementById("deldata");
function modalDeleteData(id) {
  modal_delete.setAttribute("delId", id);
}
modal_delete.addEventListener("click", function () {
  let del_id = this.getAttribute("delId");
  axios.delete(`http://localhost:1010/developers/${del_id}`).then((res) => {
    getDevelopers();
  });
});

/**
 * Single Devs data
 */

function modalSingleData(id) {
  let modal_view = document.getElementById("modal-view");
  axios.get(`http://localhost:1010/developers/${id}`).then((res) => {
    /**
     * Get Skill Name
     */

    function getSkillName(id) {
      return axios.get(`http://localhost:1010/skill/${id}`).then((skill) => {
        return skill.data.name;
      });
    }
    getSkillName(res.data.id).then((skillName) => {
      modal_view.querySelector(".modal-body").innerHTML = `
            <div class="card">
              <img
                src="${res.data.photo}"
                alt="photo" />
              <div class="card-body">
                <h2>Name: ${res.data.name}</h2>
                <h5>Email: ${res.data.email}</h5>
                <h5>Cell: ${res.data.cell}</h5>
                <h5>Skill: ${skillName}</h5>
              </div>
            </div>
    `;
      getDevelopers();
    });
  });
}
