class Staff {
  constructor(type, company_name) {
    this.shape = type;
    this.name = company_name;
    this.food = "Bereyani";
    this.age = 50;
    this.skill = "MERN Stack";

    this.game = () => "I play PUBG";
  }

  info() {
    return `This is info`;
  }

  auth(name, pass) {
    return `Your name is ${name}. Your password is ${pass}. ` + this.info();
  }

  area(lenth, width) {
    let area = lenth * width;

    return `Area is ${area}`;
  }

  companyName() {
    return `The name of company is ${this.name} and the type is ${this.shape}`;
  }
}
