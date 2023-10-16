const devs = [
  {
    dev_name: "Asraful Haque",
    age: 120,
    skill: "MERN Strack",
  },
  {
    dev_name: "Jamal Haque",
    age: 80,
    skill: "Python Strack",
  },
  {
    dev_name: "Ananda",
    age: 70,
    skill: "Native Apps",
  },
];

// const { dev_name, age, skill } = devs;
devs.map((data, index) => {
  const { dev_name, age, skill } = data;
  console.log(`
    SL : ${index + 1}
    Name : ${dev_name}
    age : ${age}
    skill : ${skill}
  `);
});

console.log(devs);

import { student } from "./data.js";
import { ageCal as ageCalculator } from "./fata.js";
console.log(student);
console.log(ageCalculator());
