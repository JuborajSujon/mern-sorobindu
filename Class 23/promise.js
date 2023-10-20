let marks = 20;

const result = new Promise((resolve, reject) => {
  if (marks > 32) {
    resolve("Your Pass");
  } else {
    reject("Your Fail");
  }
});

result.then((data) => console.log(data)).catch((error) => console.log(error));
