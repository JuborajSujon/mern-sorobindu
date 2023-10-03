const add_product = document.getElementById("add_product");
const add_box = document.querySelector(".product-add-box");
const plist = document.getElementById("plist");
const product_card_close = document.getElementById("product-card-close");

const product = document.getElementById("products");

add_product.addEventListener("click", function () {
  add_box.style.display = "block";
});

product_card_close.addEventListener("click", function () {
  add_box.style.display = "none";
});

product.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = this.querySelector('input[name="productName"]').value;
  let price = this.querySelector('input[name="productPrice"]').value;
  let sale = this.querySelector('input[name="salePrice"]').value;
  let desc = this.querySelector('textarea[name="productDesc"]').value;
  let photo = this.querySelector('input[name="photoLink"]').value;

  let product_arr;

  if (dataGet("products")) {
    product_arr = dataGet("products");
  } else {
    product_arr = [];
  }

  product_arr.push({
    name: name,
    price: price,
    sale: sale,
    desc: desc,
    photo: photo,
  });

  dataSend("products", product_arr);

  allProducts();
});
allProducts();
function allProducts() {
  let all_products = dataGet("products");
  let data = "";

  all_products.map((pdata) => {
    data += `<div class="col-md-4 my-3">
              <div class="card">
                <img
                  src="${pdata.photo}"
                  class="card-img-top p-3"
                  alt=""
                />
                <div class="card-body">
                  <h5 class="card-title">${pdata.name}</h5>
                  <div class="card-text d-flex justify-content-between">
                    <p class="w-50" style="font-size: 12px">
                      Regular Price: <span class="regular-price">${pdata.price}</span>
                    </p>
                    <p class="w-50 text-end" style="font-size: 12px">
                      Sale Price: <span class="sale-price">${pdata.sale}</span>
                    </p>
                  </div>
                  <p class="card-text">
                    ${pdata.desc}
                  </p>
                  <a href="#" class="btn btn-primary">Add to cart</a>
                </div>
              </div>
            </div>`;
  });
  plist.innerHTML = data;
}
