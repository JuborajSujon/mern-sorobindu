const todo = document.getElementById("do");
const add = document.getElementById("add");
const list = document.getElementById("list");

// const todoList = ["alu", "potol", "lao", "kathal"];

// add.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(todo.value);
//   todoList.push(todo.value);

//   todoList.map((e) => {
//     list.innerHTML += `<li class="list-group-item">${e}</li>`;
//   });
// });

add.addEventListener("click", (e) => {
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerText = todo.value;
  list.appendChild(li);
  todo.value = "";
});
