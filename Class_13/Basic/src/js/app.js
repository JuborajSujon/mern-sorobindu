const sign_up_form = document.getElementById("sign_up_form");
const msg = document.querySelector(".msg");
// const button = document.querySelector("#test");

// button.onclick = () => {
//   setInterval(() => {
//     msg.innerHTML = `
//       <p id='myalert' class="alert alert-danger alert-dismissible fade show " role="alert">Thanks for Click <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></p>

//     `;
//   }, 5000);
// };

sign_up_form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = sign_up_form.querySelector('input[placeholder="Enter your name"]');
  let email = sign_up_form.querySelector(
    'input[placeholder="Enter your email"]'
  );
  let location = sign_up_form.querySelector("select");
  let gender = sign_up_form.querySelector("input[name='gender']:checked");
  let skill = sign_up_form.querySelectorAll("input[type='checkbox']:checked");
  for (let i = 0; i < skill.length; i++) {
    const element = skill[i];
    console.log(element.value);
  }
  if (name.value == "" || email.value == "" || location.value == "") {
    msg.innerHTML = validate("Please fill all the fields", `danger`);
  } else {
    msg.innerHTML = validate("Thanks for signing up", `success`);
  }

  setTimeout(() => {
    msg.innerHTML = "";
  }, 3000);
});
