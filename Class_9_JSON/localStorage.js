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
