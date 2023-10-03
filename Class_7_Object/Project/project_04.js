//Arrang a data sheet for a family phone book and publish it with specific name.

// const newLocal = ["Asraf", "Jillur", "Rahim", "Karina", "Mobarok", "Mehedi", "Rakib", "Kamal", "Rasel", "Hasan", "Jobbar", "Asif", "Jannat", "Sufia", "Kakoli", "Samiya", "Akter", "Islam", "Khatun", "Hossain", "Rahman", "Ahmed", "Begum", "Khan", "Uddin", "Ali", "Alam", "Mia", "Sultana", "Hossen", "Chowdhury", "Haque", "Rana", "Mahmud", "Jahan", "Kabir", "Nahar", "Parvin", "Amin", "Rashid", "Zaman", "Al-mamun", "Reza", "Mamun", "Billah", "Khanom", "Faruk", "Yeasmin", "Mina", "Habib", "Alom", "Afrin", "Kazi", "Abdullah", "Azad", "Rahim", "Sharmin", "Al-amin", "Siddique", "Fatema", "Iqbal", "Babu", "Sharif", "Aziz", "Tasnim", "Sumon", "Arafat", "Tabassum", "Rabbi", "Araj", "Salma",]


const phoneBookList = [
  {
    name: "Asraf",
    phone: "01711111111",
  },
  {
    name: "Jillur",
    phone: "01722222222",
  },
  {
    name: "Rahim",
    phone: "01733333333",
  },
  {
    name: "Karina",
    phone: "01744444444",
  },
  {
    name: "Mobarok",
    phone: "01755555555",
  },
  {
    name: "Mehedi",
    phone: "01766666666",
  },
  {
    name: "Rakib",
    phone: "01777777777",
  },
  {
    name: "Kamal",
    phone: "01788888888",
  },
  {
    name: "Rasel",
    phone: "01799999999",
  },
  {
    name: "Hasan",
    phone: "01800000000",
  },
  {
    name: "Jobbar",
    phone: "01811111111",
  },
  {
    name: "Asif",
    phone: "01822222222",
  },
  {
    name: "Jannat",
    phone: "01833333333",
  },
  {
    name: "Sufia",
    phone: "01844444444",
  },
  {
    name: "Kakoli",
    phone: "01855555555",
  },
  {
    name: "Samiya",
    phone: "01866666666",
  },
  {
    name: "Akhter",
    phone: "01877777777",
  },
  {
    name: "Islam",
    phone: "01888888888",
  },
  {
    name: "Khatun",
    phone: "01899999999",
  },
  {
    name: "Hossain",
    phone: "01900000000",
  },
  {
    name: "Rahman",
    phone: "01911111111",
  },
  {
    name: "Ahmed",
    phone: "01922222222",
  },
  {
    name: "Begum",
    phone: "01933333333",
  },
  {
    name: "Khan",
    phone: "01944444444",
  },
  {
    name: "Uddin",
    phone: "01955555555",
  },
  {
    name: "Ali",
    phone: "01966666666",
  },
  {
    name: "Alam",
    phone: "01977777777",
  },
  {
    name: "Mia",
    phone: "01988888888",
  },
  {
    name: "Sultana",
    phone: "01999999999",
  },
  {
    name: "Hossen",
    phone: "02000000000",
  },
  {
    name: "Chowdhury",
    phone: "02011111111",
  },
  {
    name: "Haque",
    phone: "02022222222",
  },
  {
    name: "Rana",
    phone: "02033333333",
  },
  {
    name: "Mahmud",
    phone: "02044444444",
  },
  {
    name: "Jahan",
    phone: "02055555555",
  },
  {
    name: "kabir",
    phone: "02066666666",
  },
  {
    name: "Nahar",
    phone: "02077777777",
  },
  {
    name: "Parvin",
    phone: "02088888888",
  },
  {
    name: "Amin",
    phone: "02099999999",
  },
  {
    name: "Rashid",
    phone: "02100000000",
  },
  {
    name: "Zaman",
    phone: "02111111111",
  },
  {
    name: "Al-mamun",
    phone: "02122222222",
  },
  {
    name: "Reza",
    phone: "02133333333",
  },
  {
    name: "Mamun",
    phone: "02144444444",
  },
  {
    name: "Billah",
    phone: "02155555555",
  },
  {
    name: "Khanom",
    phone: "02166666666",
  },
  {
    name: "Faruk",
    phone: "02177777777",
  },
  {
    name: "Yeasmin",
    phone: "02188888888",
  },
  {
    name: "Mina",
    phone: "02199999999",
  },
  {
    name: "Habib",
    phone: "02200000000",
  },
  {
    name: "Alom",
    phone: "02211111111",
  },
  {
    name: "Afrin",
    phone: "02222222222",
  },
  {
    name: "Kazi",
    phone: "02233333333",
  },
  {
    name: "Abdullah",
    phone: "02244444444",
  },
  {
    name: "Azad",
    phone: "02255555555",
  },
  {
    name: "Rahim",
    phone: "02266666666",
  },
  {
    name: "Sharmin",
    phone: "02277777777",
  },
  {
    name: "Al-amin",
    phone: "02288888888",
  },
  {
    name: "Siddique",
    phone: "02299999999",
  },
  {
    name: "Fatema",
    phone: "02300000000",
  },
  {
    name: "Iqbal",
    phone: "02311111111",
  },
  {
    name: "Babu",
    phone: "02322222222",
  },
  {
    name: "Sharif",
    phone: "02333333333",
  },
  {
    name: "Aziz",
    phone: "02344444444",
  },
  {
    name: "Tasnim",
    phone: "02355555555",
  },
  {
    name: "Sumon",
    phone: "02366666666",
  },
  {
    name: "Arafat",
    phone: "02377777777",
  },
  {
    name: "Tabassum",
    phone: "02388888888",
  },
  {
    name: "Rabbi",
    phone: "02399999999",
  },
  {
    name: "Araj",
    phone: "02400000000",
  },
  {
    name: "Salma",
    phone: "02411111111",
  },
];

function getPhoneNumber (name) {
  phoneBookList.forEach((data) => {
    if (data.name === name) {
    console.log(`Name: ${data.name} and Phone: ${data.phone}`);
    };
  });
};

getPhoneNumber("Salma");