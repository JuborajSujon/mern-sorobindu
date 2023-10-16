import { Staff } from "./Staff.js";
export default class Student extends Staff {
  constructor(name, food) {
    super(name, food);
  }
  ageCal(name, year) {
    let date = new Date();
    let age = date.getFullYear() - year;

    return `Hi ${name}, You are ${age} years old`;
  }
}

export const data = [
  {
    name: "Asraf",
    age: 40,
  },
  {
    name: "Kasem",
    age: 30,
  },
  {
    name: "Bokul",
    age: 29,
  },
];
