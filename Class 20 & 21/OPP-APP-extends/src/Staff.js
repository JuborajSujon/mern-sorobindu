class Staff {
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
