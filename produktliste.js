const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".subtle").textContent = product.brandname;
  copy.querySelector(".price span").textContent = product.price;
  /*
  copy.querySelector(".udsalg span").textContent = product.discount;
  */

  const productid = product.id;
  const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`;
  copy.querySelector("img").src = imagePath;

  if (product.discount) {
    /*
    copy.querySelector("article").classList.add("udsalg");
    */
    copy.querySelector(".udsalg span").textContent = product.discount;
  }

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  copy.querySelector(".read_more").setAttribute("href", `produkt.html?id=${product.id}`);

  /**
  if (product.discount) {
    copy.querySelector("article").classList.add("udsalg");
  } */
  //appende
  document.querySelector("main section").appendChild(copy);
}
