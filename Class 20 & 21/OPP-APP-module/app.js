// import { Staff, data, ageCal } from "./src/Staff.js";
import Student, { data } from "./src/Student.js";

// let staff = new Staff("Asraf", "Apple");
// console.log(staff);

let student = new Student("Asraf", "Apple");

console.log(student);

// console.log(data);
// console.log(ageCal("Sujon", 1990));

import * as store from "./src/Staff.js";
// console.log(store);
let staff2 = new store.Staff("Sujon", "Orange");
// console.log(staff2);

console.log(data);
