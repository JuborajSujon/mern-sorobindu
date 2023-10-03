// get elements
const skills = document.querySelectorAll("input[name='skill']");
const skills_all = document.querySelector(".all-skill");

skills.forEach((skill) => {
  skill.addEventListener("change", function (e) {
    e.preventDefault();
    let all_data = document.querySelectorAll("input[name='skill']:checked");

    let skill_arr = [];

    all_data.forEach((data) => {
      skill_arr.push(data.value);
    });
    console.log(skill_arr);

    let list = "";
    skill_arr.map((dlist) => {
      list += `<li class="list-group-item">${dlist}</li>`;
    });
    skills_all.innerHTML = list;
  });
});
