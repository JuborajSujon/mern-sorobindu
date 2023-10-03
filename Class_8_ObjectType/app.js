let date = new Date();

// console.log(`
// Date: ${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}
// Month: ${date.getMonth() + 1}
// Year: ${date.getFullYear()}

// Time:
// Hours: ${date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`}
// Minutes: ${date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`}
// Seconds: ${date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`}

// `);

// function today(index) {
//   const dayName = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   // return dayName[index];
//   switch (index) {
//     case 0:
//       return dayName[0];
//     case 1:
//       return dayName[1];
//     case 2:
//       return dayName[2];
//     case 3:
//       return dayName[3];
//     case 4:
//       return dayName[4];
//     case 5:
//       return dayName[5];
//     case 6:
//       return dayName[6];
//     default:
//       return dayName[0];
//   }
// }

// console.log(today(date.getDay()));

console.log(date.getTime());
