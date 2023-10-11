// get element

/**
 * PHP, MySQL, OOP with Laravel , CI
 * Python Django
 * Node JS with Express + MongoDB
 * JSON SERVER
 */

const shop_list = document.querySelector(".shop-list");

fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .then((data) => {
    let products = "";
    data.map((item) => {
      products += `
        <div class="col-md-4 my-3">
          <div class="card shadow p-item">
            <a href="#" onclick="singleProductLoad(${item.id})" data-bs-toggle="modal" data-bs-target="#single-product"><img
              src="${item.image}"
              alt="photo" /></a>
            <div class="card-body">
              <h2>${item.title}</h2>
              <p>Price : $ ${item.price} </p>
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
  fetch("https://fakestoreapi.com/products/" + id)
    .then((data) => data.json())
    .then((data) => {
      single_p.innerHTML = `
        <div class="row">
          <div class="col-md-6">
            <img
              src="${data.image}"
              alt="photo"
              class="w-100" />
          </div>
          <div class="col-md-6">
            <h1>${data.title}</h1>
            <h2>Price : $${data.price}</h2>
            <p>
              ${data.description}
            </p>

            <a class="btn btn-lg btn-info" href="#"> Add to cart</a>
          </div>
        </div>
      `;
    });
}
