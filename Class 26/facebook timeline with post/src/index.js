import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

import team from "./images/team.jpg";
import axios from "axios";
import Post from "./components/Post";
import Alert from "./components/Alert";

// import teamMotivation from "./images/team-motivation.jpg";

const user_img = document.getElementById("user-img");
user_img.src = team;

// DOM loading Operation
document.addEventListener("DOMContentLoaded", getPosts);

// Get create_post_form element
document
  .getElementById("create_post_form")
  .addEventListener("submit", createPost);

// Get Alert element
const msg = document.querySelector(".msg");
function getPosts() {
  axios.get("http://localhost:5050/posts").then((res) => {
    let post = new Post();
    post.showPosts(res.data);
  });
}

function createPost(e) {
  e.preventDefault();

  // get form data by FormData object
  let formData = new FormData(e.target);
  let data = Object.fromEntries(formData.entries());

  //Form validation
  if (
    data.name === "" ||
    data.user_photo === "" ||
    data.content === "" ||
    data.post_photo === ""
  ) {
    msg.innerHTML = Alert.danger("All fields are required!");
  } else {
    //send post request
    axios
      .post("http://localhost:5050/posts", {
        name: data.name,
        user_photo: data.user_photo,
        content: data.content,
        post_photo: data.post_photo,
      })
      .then((res) => {
        getPosts();
        msg.innerHTML = Alert.success("Post created successfully!");
      });
  }
}
