const student = [
  {
    roll: 1,
    name: "Asraf",
    age: 12,
    location: "Mirpur",
    gender: "Male",
  },
  {
    roll: 2,
    name: "Jillur",
    age: 20,
    location: "Uttara",
    gender: "Male",
  },
  {
    roll: 3,
    name: "Rahim",
    age: 15,
    location: "Banani",
    gender: "Male",
  },
  {
    roll: 4,
    name: "Karina",
    age: 13,
    location: "Uttara",
    gender: "Female",
  },
];

// console.log(student[1].location)

// for (let i = 0; i < student.length; i++) {
//   console.log(`
//   name: ${student[i].name}
//   roll: ${student[i].roll}
//   age: ${student[i].age}
//   location: ${student[i].location}`);
// }

// student.forEach(data => {
//   console.log(`
//    name: ${data.name}
//    roll: ${data.roll}
//    age: ${data.age}
//    location: ${data.location}`);
// });

// student.map(data => {
//     if (data.location === "Mirpur" && data.gender === "Male") {
//       console.log(`
//        name: ${data.name}
//        roll: ${data.roll}
//        age: ${data.age}
//        gender: ${data.gender}
//        location: ${data.location}`);
//   };
// });

// for (let i = 0; i < student.length; i++) {
//   const data = student[i];
//   if (data.location === "Mirpur" && data.gender === "Female") {
//     console.log(`
//      name: ${data.name}
//      roll: ${data.roll}
//      age: ${data.age}
//      gender: ${data.gender}
//      location: ${data.location}`);
//     break;
//   } else {
//     console.log("not found");
//   }
// }


// for (const data of student) {
//   if (data.location === "Mirpur" && data.gender === "Male") {
//     console.log(`
//      name: ${data.name}
//      roll: ${data.roll}
//      age: ${data.age}
//      gender: ${data.gender}
//      location: ${data.location}`);
//     break;
//   }
// }

// for (let data in student) {
//   if (student[data].location === "Mirpur" && student[data].gender === "Male") {
//     console.log(`
//      name: ${student[data].name}
//      roll: ${student[data].roll}
//      age: ${student[data].age}
//      gender: ${student[data].gender}
//      location: ${student[data].location}`);
//     break;
//   }
// }

  b