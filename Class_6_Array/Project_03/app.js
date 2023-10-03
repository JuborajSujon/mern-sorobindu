// # Send a wellcome message to everyone over the age of 18 based on the age of the data array of all the members of a club and send a greeting message to the person over the age of 40, of course, send the message through a function and to those who are under 18 years of age. Give the message to be attentive

function ageCal() {
  const ages = [9, 10, 17, 18, 22, 26, 28, 31, 35, 65, 67, 70];

  let personAge = 0;
  let categories = "";
  let message = "";
  ages.map((age) => {
    if (age >= 0 && age < 12) {
      categories = "children";
      personAge = age;
      message = `Hi ${categories} , you are ${personAge} years old. Welcome to our lively club, where imaginations run wild and laughter fills the air! Get ready for exciting adventures, fun games, and new friends. Let's create magical moments together! `;
    } else if (age >= 12 && age < 18) {
      categories = "teenagers";
      personAge = age;
      message = `Hi ${categories} , you are ${personAge} years old. Welcome to our dynamic club, where creativity thrives and friendships blossom! Join us for engaging activities, thought-provoking discussions, and opportunities to express yourself. Let's make unforgettable memories together!`;
    } else if (age >= 18 && age < 30) {
      categories = "younger";
      personAge = age;
      message = `Hi ${categories} , you are ${personAge} years old. Welcome to our vibrant club, where energy and ambition converge! Dive into a world of networking, skill-building, and memorable social events. Let's embrace new challenges and forge lasting connections together!`;
    } else if (age >= 30 && age < 65) {
      categories = "adults";
      personAge = age;
      message = `Hi ${categories} , you are ${personAge} years old. Welcome to our inclusive club, where like-minded individuals come together to share experiences, knowledge, and laughter! Engage in stimulating conversations, enriching workshops, and enjoyable social gatherings. Let's create a supportive community where everyone feels at home!`;
    } else if (age >= 65) {
      categories = "older";
      personAge = age;
      message = `Hi ${categories} , you are ${personAge} years old. Welcome to our warm and welcoming club, where wisdom and experience are celebrated! Embrace a fulfilling journey of lifelong learning, engaging discussions, and meaningful connections. Let's embark on new adventures and create cherished moments together!`;
    }
    // console.log(message);
  });
  return message;
}

const newLocal = ageCal();
console.log(newLocal);
