const person = {
  id: 1,
  name: "Asraful Haque",
  location: "Mirpur",
  age: 15,
  gender: "male",
  skill: "MERN Stack",
};

const devs = JSON.stringify(person);
localStorage.setItem("devs", devs);

// let devs2 = localStorage.getItem("devs");
// console.log(JSON.parse(devs2));
// localStorage.removeItem("devs");
// console.log(localStorage.key(1));
// console.log(localStorage.length);
// localStorage.clear();
