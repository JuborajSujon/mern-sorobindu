//Create fees array and object data for a picnic where everyone will provide free basic information for everyone and total fees

// const newLocal = ["Asraf", "Jillur", "Rahim", "Karina", "Mobarok", "Mehedi", "Rakib", "Kamal", "Rasel", "Hasan", "Jobbar", "Asif", "Jannat", "Sufia", "Kakoli", "Samiya", "Akter", "Islam", "Khatun", "Hossain", "Rahman", "Ahmed", "Begum", "Khan", "Uddin"]

const phoneBookList = [
  {
    name: "Asraf",
    position: "Sr. Executive",
    location: "Mirpur",
    gender: "Male",
    age: 30,
    fees: 2000,
    phone: "01711111111",
  },
  {
    name: "Jillur",
    position: "Sr. Executive",
    location: "Uttara",
    gender: "Male",
    age: 25,
    fees: 2000,
    phone: "01722222222",
  },
  {
    name: "Rahim",
    position: "Sr. Executive",
    location: "Banani",
    gender: "Male",
    age: 25,
    fees: 2000,
    phone: "01733333333",
  },
  {
    name: "Karina",
    position: "Sr. Executive",
    location: "Uttara",
    gender: "Female",
    age: 25,
    fees: 2000,
    phone: "01744444444",
  },
  {
    name: "Mobarok",
    position: "Executive",
    location: "Uttara",
    gender: "Male",
    age: 25,
    fees: 1000,
    phone: "01755555555",
  },
  {
    name: "Mehedi",
    position: "Executive",
    location: "Banani",
    gender: "Male",
    age: 25,
    fees: 1000,
    phone: "01766666666",
  },
  {
    name: "Rakib",
    position: "Executive",
    location: "Uttara",
    gender: "Male",
    age: 25,
    fees: 1000,
    phone: "01777777777",
  },
  {
    name: "Kamal",
    position: "Executive",
    location: "Jatrabari",
    gender: "Male",
    age: 28,
    fees: 1000,
    phone: "01788888888",
  },
  {
    name: "Rasel",
    position: "Executive",
    location: "Mirpur",
    gender: "Male",
    age: 20,
    fees: 1000,
    phone: "01799999999",
  },
  {
    name: "Hasan",
    position: "Officer",
    location: "Uttara",
    gender: "Male",
    age: 20,
    fees: 700,
    phone: "01800000000",
  },
  {
    name: "Jobbar",
    position: "Officer",
    location: "Mirpur",
    gender: "Male",
    age: 20,
    fees: 700,
    phone: "01811111111",
  },
  {
    name: "Asif",
    position: "Officer",
    location: "Uttara",
    gender: "Male",
    age: 22,
    fees: 700,
    phone: "01822222222",
  },
  {
    name: "Jannat",
    position: "Officer",
    location: "Farmgate",
    gender: "Female",
    age: 22,
    fees: 700,
    phone: "01833333333",
  },
  {
    name: "Sufia",
    position: "Officer",
    location: "Farmgate",
    gender: "Female",
    age: 18,
    fees: 700,
    phone: "01844444444",
  },
  {
    name: "Kakoli",
    position: "Officer",
    location: "Bashundha",
    gender: "Female",
    age: 18,
    fees: 700,
    phone: "01855555555",
  },
  {
    name: "Samiya",
    position: "Officer",
    location: "Jatrabari",
    gender: "Female",
    age: 20,
    fees: 700,
    phone: "01866666666",
  },
  {
    name: "Akhter",
    position: "Manager",
    location: "Farmgate",
    gender: "Male",
    age: 30,
    fees: 2500,
    phone: "01877777777",
  },
  {
    name: "Islam",
    position: "Manager",
    location: "Uttara",
    gender: "Male",
    age: 34,
    fees: 2500,
    phone: "01888888888",
  },
  {
    name: "Khatun",
    position: "Manager",
    location: "Uttara",
    gender: "Female",
    age: 28,
    fees: 2500,
    phone: "01899999999",
  },
  {
    name: "Hossain",
    position: "Manager",
    location: "Mirpur",
    gender: "Male",
    age: 34,
    fees: 2500,
    phone: "01900000000",
  },
  {
    name: "Rahman",
    position: "Manager",
    location: "Farmgate",
    gender: "Male",
    age: 30,
    fees: 2500,
    phone: "01911111111",
  },
  {
    name: "Ahmed",
    position: "Sr. Manager",
    location: "Farmgate",
    gender: "Male",
    age: 38,
    fees: 3000,
    phone: "01922222222",
  },
  {
    name: "Begum",
    position: "Sr. Manager",
    location: "Uttara",
    gender: "Female",
    age: 35,
    fees: 3000,
    phone: "01933333333",
  },
  {
    name: "Khan",
    position: "Deputy Manager",
    location: "Banani",
    gender: "Male",
    age: 45,
    fees: 4000,
    phone: "01944444444",
  },
  {
    name: "Uddin",
    position: "General Manager",
    location: "Jatrabari",
    gender: "Male",
    age: 50,
    fees: 5000,
    phone: "01955555555",
  },
];

/**@Title : Get Total Fees */

let totalFees = 0;
function getTotalFees() {
  const totalFees = phoneBookList.reduce((acc, curr) => acc + curr.fees, 0);
  return totalFees;
}



/**
 * Get specific element from phoneBookList by name
 *
 * @param {string} name - The name of the element to retrieve
 */
function getSpecificElement(name) {
  for (let i = 0; i < phoneBookList.length; i++) {
    const data = phoneBookList[i];
    if (data.name === name) {
      console.log(`
        Name: ${data.name}
        Position: ${data.position}
        Location: ${data.location}
        Gender: ${data.gender}
        Age: ${data.age}
        Fees: ${data.fees}
        Phone: ${data.phone}
      `);
    }
  }
}
getSpecificElement("Asraf")