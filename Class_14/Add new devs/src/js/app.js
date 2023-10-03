// get elements
const devs_form = document.getElementById("devs_form");
const devs_area = document.querySelector(".devs_area");

// Devs form submit
devs_form.addEventListener("submit", function (e) {
  // reload behavior control
  e.preventDefault();

  // get all inputs
  let name = this.querySelector('input[name="name"]');
  let age = this.querySelector('input[name="age"]');
  let gender = this.querySelector('input[name="gender"]:checked');
  let skill = this.querySelectorAll('input[name="skill"]:checked');
  let salary = this.querySelector('input[name="salary"]');
  let location = this.querySelector('input[name="location"]');
  let photo = this.querySelector('input[name="photo"]');

  // get skills into nodelist and make array
  let skills_arr = [];
  for (let i = 0; i < skill.length; i++) {
    skills_arr.push(skill[i].value);
  }

  // data check localStorage for devs
  let data_arr;
  if (dataGet("devs")) {
    data_arr = dataGet("devs");
  } else {
    data_arr = [];
  }

  // finaly push data to array
  data_arr.push({
    name: name.value,
    age: age.value,
    gender: gender.value,
    skill: skills_arr,
    salary: salary.value,
    location: location.value,
    photo: photo.value,
  });

  // send data to localStorage
  dataSend("devs", data_arr);
  allDevs();

  // reset form
  this.reset();
});

allDevs();
// show all devs from localStorage
function allDevs() {
  let all_devs = dataGet("devs");

  let data = "";
  all_devs.map((dev) => {
    let list = "";
    dev.skill.map((skill) => {
      list += `<li class="list-group-item">${skill}</li>`;
    });

    data += `<div class="col-md-4 my-3">
              <div class="card p-2" style="width: 18rem">
                <img
                  src="${dev.photo}"
                  alt=""
                  style="width: 100%; height: 250px; object-fit: cover"
                />
                <div class="card-body">
                  <h5 class="card-title">${dev.name}</h5>
                  <p class="mb-1">Age : <span>${dev.age}</span></p>
                  <p class="mb-1">Gender : <span>${dev.gender}</span></p>
                  <p class="mb-1">salaray : <span>${dev.salary} USD</span></p>
                  <p class="mb-1">Location : <span>${dev.location}</span></p>
                  <p class="h6 mb-1">Skill</p>
                  <ul class="list-group list-group-flush mb-2">
                  ${list}
                  </ul>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>`;
  });
  devs_area.innerHTML = data;
}
