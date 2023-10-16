class Student extends Staff {
  constructor(name, food) {
    super(name, food);
  }
  ageCal(name, year) {
    let date = new Date();
    let age = date.getFullYear() - year;

    return `Hi ${name}, You are ${age} years old`;
  }
}
