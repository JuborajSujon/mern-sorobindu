class Post {
  constructor() {
    this.post_timeline = document.getElementById("post-content-loader");
  }

  /**
   * show all post
   */

  showPosts(posts) {
    let post = "";
    posts.reverse().map((data, index) => {
      let { name, user_photo, content, post_photo } = data;
      post += `
           <div class="card shadow-sm my-3">
              <div class="card-body">
                <div class="user-post-info d-flex justify-content-between">
                  <div class="user-info d-flex align-items-center">
                    <img
                      class="card-img"
                      id="user-timeline-photo"
                      src="${user_photo}"
                      alt="" />
                    <h5 class="ms-2">${name}</h5>
                  </div>
                  <button>...</button>
                </div>
                <div class="user-post-content">
                  <p>
                    ${content}
                  </p>
                  <img
                    class="w-100"
                    src="${post_photo}"
                    alt="" />
                </div>
              </div>
            </div>
      `;
    });
    this.post_timeline.innerHTML = post;
  }
}

// let post = new Post();
export default Post;
