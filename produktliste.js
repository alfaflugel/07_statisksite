fetch("https://kea-alt-del.dk/t7/api/products?limit=4").then((res) =>
  res.json().then((data) => {
    data.forEach(showProduct);
  })
);
