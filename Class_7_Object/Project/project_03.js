// send a welcome message to everyone over the age of 18 based on the age of the data array of the members of a club and send a greeting message to the person over the age of 40 , of course , send the message through a function and to those who are under 18 years of age. give the message to be attentive.

function ageCal() {
  const ages = [
    { name: "Asraf", age: 9 },
    { name: "Jillur", age: 10 },
    { name: "Rahim", age: 17 },
    { name: "Karina", age: 18 },
    { name: "Mobarok", age: 22 },
    { name: "Mehedi", age: 26 },
    { name: "Rakib", age: 28 },
    { name: "Kamal", age: 31 },
    { name: "Rasel", age: 35 },
    { name: "Hasan", age: 65 },
    { name: "Jobbar", age: 67 },
    { name: "Asif", age: 70 },
  ];

  let message = "";
  for (let i = 0; i < ages.length; i++) {
    const person = ages[i];
    let categories = "";
    let personName = person.name;
    let personAge = person.age;

    if (personAge >= 0 && personAge < 12) {
      categories = "children";
      message = `Hi ${personName}, you are ${personAge} years old and your category is ${categories}. Welcome to our fantastic club, where incredible opportunities await! As we embark on this journey together, we kindly remind you to prioritize safety and be attentive to the guidelines provided by our responsible team. Let's create amazing memories while ensuring everyone's well-being! `;
    } else if (personAge >= 12 && personAge < 18) {
      categories = "teenagers";
      message = `Hi ${personName}, you are ${personAge} years old and your category is ${categories}. Welcome to our fantastic club, where incredible opportunities await! As we embark on this journey together, we kindly remind you to prioritize safety and be attentive to the guidelines provided by our responsible team. Let's create amazing memories while ensuring everyone's well-being!`;
    } else if (personAge >= 18 && personAge < 30) {
      categories = "younger";
      message = `Hi ${personName}, you are ${personAge} years old and your category is ${categories}. Welcome to our vibrant club, where energy and ambition converge! Dive into a world of networking, skill-building, and memorable social events. Let's embrace new challenges and forge lasting connections together!`;
    } else if (personAge >= 30 && personAge < 65) {
      categories = "adults";
      message = `Hi ${personName}, you are ${personAge} years old and your category is ${categories}. Welcome to our inclusive club, where like-minded individuals come together to share experiences, knowledge, and laughter! Engage in stimulating conversations, enriching workshops, and enjoyable social gatherings. Let's create a supportive community where everyone feels at home!`;
    } else if (personAge >= 65) {
      categories = "older";
      message = `Hi ${personName}, you are ${personAge} years old and your category is ${categories}. Welcome to our warm and welcoming club, where wisdom and experience are celebrated! Embrace a fulfilling journey of lifelong learning, engaging discussions, and meaningful connections. Let's embark on new adventures and create cherished moments together!`;
    }

    console.log(message);
  }
}
ageCal()
// const newLocal = ageCal();
// console.log(newLocal);