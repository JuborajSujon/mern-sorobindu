const students = [
  {
    id: 1,
    name: "Asraful Haque",
    age: 30,
    skill: "JavaScript",
  },
  {
    id: 2,
    name: "Jamal Haque",
    age: 40,
    skill: "PHP",
  },
  {
    id: 1,
    name: "kamla Haque",
    age: 20,
    skill: "MySQL",
  },
];

sessionStorage.setItem("students", JSON.stringify(students));
// sessionStorage.removeItem("students");
// let students2 = sessionStorage.getItem("students");
// console.log(JSON.parse(students2));
// console.log(sessionStorage.key(1));
// console.log(sessionStorage.length);
// sessionStorage.clear();
