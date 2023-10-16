class Student extends Staff {
  constructor(type, company_name) {
    super(type, company_name);
  }
  ageCal(name, year) {
    let date = new Date();
    let age = date.getFullYear() - year;

    return `Hi ${name}, You are ${age} years old`;
  }
}
