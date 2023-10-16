function Staff() {
  this.name = "Asraf";
  this.age = 10;
  this.skill = "MERN Stack";

  this.ageCal = function () {
    return `My name is ${this.name}`;
  };
}

export default Staff;
