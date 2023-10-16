class Teacher {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  ageCal() {
    return `I am ${this.age} years old`;
  }
  teacherBMI() {
    return "I am from BMI";
  }
  teacherInfo(name, age) {
    return `Iam ${name} and ${age} years old`;
  }
}
