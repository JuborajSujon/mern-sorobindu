export class Staff {
  constructor(name, food) {
    this.name = name;
    this.food = food;
    this.age = 50;
    this.skill = "MERN Stack";

    this.game = () => "I play PUBG";
  }

  info() {
    return `This is info`;
  }

  area(lenth, width) {
    let area = lenth * width;

    return `Area is ${area}`;
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

export function ageCal(name, year) {
  let age = 2033 - year;
  return `Hi ${name}, Your are ${age} years old`;
}
