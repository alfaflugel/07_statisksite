/** https:/ / kea - alt - del.dk / t7 / api / products / 1525; */
fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((data) => showCategories(data));

function showCategories(categories) {
  categories.forEach(showCategory);
}

function showCategory(category) {
  console.log(category);
  // fang template
  const template = document.querySelector("#categoryList").content;
  //lav kopi
  const copy = template.cloneNode(true);

  copy.querySelector("a").textContent = category.category;
  copy.querySelector(".categoryLink").setAttribute("href", `produktliste.html?category=${category.category}`);
  document.querySelector("main section").appendChild(copy);
}
