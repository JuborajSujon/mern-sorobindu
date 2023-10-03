// const devs = [
//   {
//     id: 1,
//     name: "Asraful Haque",
//     location: "Mirpur",
//     age: 15,
//     gender: "male",
//     skill: "MERN Stack",
//   },
//   {
//     id: 2,
//     name: "Jillur Rahman",
//     location: "Mirpur",
//     age: 15,
//     gender: "male",
//     skill: "Python",
//   },
//   {
//     id: 3,
//     name: "Asraful Haque",
//     location: "Mirpur",
//     age: 15,
//     gender: "male",
//     skill: "DJango",
//   },
// ];

// // convert devs to JSON
// const json = JSON.stringify(devs);
// console.log(json);

// document.write(json);

// // convert JSON to devs
// const devs2 = JSON.parse(json);

// console.log(devs2);

let data =
  '[{"id":1,"name":"Asraful Haque","location":"Mirpur","age":15,"gender":"male","skill":"MERN Stack"},{"id":2,"name":"Jillur Rahman","location":"Mirpur","age":15,"gender":"male","skill":"Python"},{"id":3,"name":"Asraful Haque","location":"Mirpur","age":15,"gender":"male","skill":"DJango"}]';

// console.log(data);

let obj = JSON.parse(data);
console.log(obj);
