// get element

/**
 * PHP, MySQL, OOP with Laravel , CI
 * Python Django
 * Node JS with Express + MongoDB
 * JSON SERVER
 */

const shop_list = document.querySelector(".shop-list");

fetch("http://localhost:1010/devs")
  .then((data) => data.json())
  .then((data) => {
    let products = "";
    data.map((item) => {
      products += `
        <div class="col-md-4 my-3">
          <div class="card shadow p-item">
            <a href="#" onclick="singleProductLoad(${item.id})" data-bs-toggle="modal" data-bs-target="#single-product"><img
              src="${item.photo}"
              alt="photo" /></a>
            <div class="card-body">
              <h2>${item.name}</h2>
              <p>Age :  ${item.age} </p>
              <p>Skill :  ${item.skill} </p>
              <p>Location :  ${item.location} </p>
            </div>
          </div>
        </div>
      `;
    });
    shop_list.innerHTML = products;
  });

function singleProductLoad(id) {
  const single_p = document.querySelector(".product-single");
  single_p.innerHTML = "";
  fetch("http://localhost:1010/devs/" + id)
    .then((data) => data.json())
    .then((data) => {
      single_p.innerHTML = `
        <div class="row">
          <div class="col-md-6">
            <img
              src="${data.photo}"
              alt="photo"
              class="w-100" />
          </div>
          <div class="col-md-6">
            <h1>${data.name}</h1>
            <p>Age :  ${data.age} </p>
            <p>Skill :  ${data.skill} </p>
            <p>Location :  ${data.location} </p>
            <p>Description :  ${data.description} </p>

            <a class="btn btn-lg btn-info" href="#"> Add to cart</a>
          </div>
        </div>
      `;
    });
}
