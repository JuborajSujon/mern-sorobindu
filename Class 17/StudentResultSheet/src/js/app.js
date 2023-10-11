// get element

const student_form = document.getElementById("student_form");
const data_list = document.getElementById("data_list");

student_form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = student_form.querySelector("input[placeholder='Name']");
  let roll = student_form.querySelector("input[placeholder='Roll Number']");
  let student_class = student_form.querySelector("input[placeholder='Class']");
  let photo = student_form.querySelector("input[placeholder='Photo']");
  let gender = student_form.querySelector("input[name='gender']:checked");

  let bangla = student_form.querySelector("input[placeholder='Bangla']");
  let english = student_form.querySelector("input[placeholder='English']");
  let math = student_form.querySelector("input[placeholder='Math']");
  let science = student_form.querySelector("input[placeholder='Science']");
  let social_science = student_form.querySelector(
    "input[placeholder='Social Science']"
  );
  let religion = student_form.querySelector("input[placeholder='Religion']");

  if (name.value == "" || roll.value == "" || student_class.value == "") {
    alert("All fields are required");
  } else {
    let storage_data = [];
    if (dataGet("result_apps")) {
      storage_data = dataGet("result_apps");
    }

    storage_data.push({
      name: name.value,
      roll: roll.value,
      className: student_class.value,
      gender: gender.value,
      photo: photo.value,
      bangla: bangla.value,
      english: english.value,
      math: math.value,
      science: science.value,
      social_science: social_science.value,
      religion: religion.value,
    });

    dataSend("result_apps", storage_data);

    student_form.querySelector("input[placeholder='Name']").value = "";
    student_form.querySelector("input[placeholder='Roll Number']").value = "";
    student_form.querySelector("input[placeholder='Class']").value = "";
    student_form.querySelector("input[placeholder='Photo']").value = "";
    student_form.querySelector("input[name='gender']").checked = false;

    student_form.querySelector("input[placeholder='Bangla']").value = "";
    student_form.querySelector("input[placeholder='English']").value = "";
    student_form.querySelector("input[placeholder='Math']").value = "";
    student_form.querySelector("input[placeholder='Science']").value = "";
    student_form.querySelector("input[placeholder='Social Science']").value =
      "";
    student_form.querySelector("input[placeholder='Religion']").value = "";
  }
});
allStudentData();
function allStudentData() {
  let all_data = dataGet("result_apps");
  let data = "";
  let result = new Result();

  all_data.map((student, index) => {
    data += `
    <tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.className}</td>
        <td>${student.gender}</td>
        <td>${
          result.finalCgpa(
            all_data[index].bangla,
            all_data[index].english,
            all_data[index].math,
            all_data[index].science,
            all_data[index].social_science,
            all_data[index].religion
          ).rescgpa
        }</td>
        <td>${
          result.finalCgpa(
            all_data[index].bangla,
            all_data[index].english,
            all_data[index].math,
            all_data[index].science,
            all_data[index].social_science,
            all_data[index].religion
          ).resgrade
        }</td>
        <td><img style="width: 50px; height: 50px; object-fit: cover" src="${
          student.photo
        }"/></td>
        <td>
          <button class="btn btn-info btn-sm" onclick="getSingleResult(${index})" data-bs-toggle="modal" data-bs-target="#student_single_modal" >View</button>
          <button onclick="deleteStudent(${index})" class="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    `;
  });
  data_list.innerHTML = data;
}

/**
 * Delect Student Data
 */

function deleteStudent(id) {
  let conf = confirm("Are you sure?");

  if (conf) {
    let storage_data = dataGet("result_apps");
    storage_data.splice(id, 1);

    dataSend("result_apps", storage_data);
    allStudentData();
  } else {
    return false;
  }
}

const student_result_data = document.querySelector(".student-result-data");

function getSingleResult(index) {
  let result = new Result();
  let storage_data = dataGet("result_apps");
  student_result_data.innerHTML = `
              <img
                src="${storage_data[index].photo}"
                class="shadow rounded"
                alt="photo" />
              <h2>${storage_data[index].name}</h2>
              <hr />
              <table class="table">
                <thead>
                  <tr>
                    <td>Subject</td>
                    <td>Marks</td>
                    <td>GPA</td>
                    <td>Grade</td>
                    <td>CGPA</td>
                    <td>Result</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bangla</td>
                    <td>${storage_data[index].bangla}</td>
                    <td>${result.result(storage_data[index].bangla).gpacal}</td>
                    <td>${
                      result.result(storage_data[index].bangla).gradecal
                    }</td>
                    <td rowspan="6">${
                      result.finalCgpa(
                        storage_data[index].bangla,
                        storage_data[index].english,
                        storage_data[index].math,
                        storage_data[index].science,
                        storage_data[index].social_science,
                        storage_data[index].religion
                      ).rescgpa
                    }</td>
                    <td rowspan="6">${
                      result.finalCgpa(
                        storage_data[index].bangla,
                        storage_data[index].english,
                        storage_data[index].math,
                        storage_data[index].science,
                        storage_data[index].social_science,
                        storage_data[index].religion
                      ).resgrade
                    }</td>
                  </tr>
                  <tr>
                    <td>English</td>
                    <td>${storage_data[index].english}</td>
                    <td>${
                      result.result(storage_data[index].english).gpacal
                    }</td>
                    <td>${
                      result.result(storage_data[index].english).gradecal
                    }</td>
                  </tr>
                  <tr>
                    <td>Math</td>
                    <td>${storage_data[index].math}</td>
                    <td>${result.result(storage_data[index].math).gpacal}</td>
                    <td>${result.result(storage_data[index].math).gradecal}</td>
                  </tr>
                  <tr>
                    <td>Science</td>
                    <td>${storage_data[index].science}</td>
                    <td>${
                      result.result(storage_data[index].science).gpacal
                    }</td>
                    <td>${
                      result.result(storage_data[index].science).gradecal
                    }</td>
                  </tr>
                  <tr>
                    <td>Social Science</td>
                    <td>${storage_data[index].social_science}</td>
                    <td>${
                      result.result(storage_data[index].social_science).gpacal
                    }</td>
                    <td>${
                      result.result(storage_data[index].social_science).gradecal
                    }</td>
                  </tr>
                  <tr>
                    <td>Religion</td>
                    <td>${storage_data[index].religion}</td>
                    <td>${
                      result.result(storage_data[index].religion).gpacal
                    }</td>
                    <td>${
                      result.result(storage_data[index].religion).gradecal
                    }</td>
                  </tr>
                </tbody>
              </table>`;
}

const search_box = document.getElementById("search_box");

search_box.addEventListener("keyup", function () {
  let all_data = dataGet("result_apps");
  let data = "";
  let result = new Result();

  all_data.map((student, index) => {
    if (student.name == search_box.value) {
      data += `
    <tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.className}</td>
        <td>${student.gender}</td>
        <td>${
          result.finalCgpa(
            all_data[index].bangla,
            all_data[index].english,
            all_data[index].math,
            all_data[index].science,
            all_data[index].social_science,
            all_data[index].religion
          ).rescgpa
        }</td>
        <td>${
          result.finalCgpa(
            all_data[index].bangla,
            all_data[index].english,
            all_data[index].math,
            all_data[index].science,
            all_data[index].social_science,
            all_data[index].religion
          ).resgrade
        }</td>
        <td><img style="width: 50px; height: 50px; object-fit: cover" src="${
          student.photo
        }"/></td>
        <td>
          <button class="btn btn-info btn-sm" onclick="getSingleResult(${index})" data-bs-toggle="modal" data-bs-target="#student_single_modal" >View</button>
          <button onclick="deleteStudent(${index})" class="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    `;
    }
  });
  data_list.innerHTML = data;
});
