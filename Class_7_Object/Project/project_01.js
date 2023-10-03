// Create a MERN stack, Laravel, Django, GoLan , WordPress, java deves students data structure and make their total income sheet with per developer data, Find specific students.

const dev = [
  {
    id: 1,
    name: "Asraf",
    age: 40,
    skill: "java",
    income: 1500,
    location: "Mirpur",
    gender: "Male",
  },

  {
    id: 2,
    name: "James",
    age: 30,
    skill: "javaScript",
    income: 1500,
    location: "Uttara",
    gender: "Male",
  },

  {
    id: 3,
    name: "Wadud Khan",
    age: 25,
    skill: "PHP",
    income: 1200,
    location: "Jatrabari",
    gender: "Male",
  },
  {
    id: 4,
    name: "Sarmin Khan",
    age: 30,
    skill: "Wordpress",
    income: 1000,
    location: "Mirpur",
    gender: "Female",
  },

  {
    id: 5,
    name: "Ruzan Khan",
    age: 27,
    skill: "java",
    income: 900,
    location: "Banani",
    gender: "Male",
  },
  {
    id: 6,
    name: "Rupa Roy",
    age: 20,
    skill: "PHP",
    income: 500,
    location: "Jatrabari",
    gender: "Female",
  },
];



function devIncome() {
  let total = 0;
  dev.map((data) => {
    console.log(`
  name: ${data.name} stack: ${data.skill} - income: ${data.income}
  `);

    total += data.income;
  });
  console.log(`Total income: ${total}`);
}
devIncome();

function specificStudent(name) {
  dev.map((data) => {
    if (data.name === name) {
      console.log(`name: ${data.name} stack: ${data.skill} - income: ${data.income}`);
    }
  });
}
// specificStudent("Asraf");