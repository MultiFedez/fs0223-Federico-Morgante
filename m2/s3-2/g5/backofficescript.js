const product_URL = "https://striveschool-api.herokuapp.com/api/product/";

fetch(product_URL, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGYxNjg4Zjc0MDAwMTQyODc1MzIiLCJpYXQiOjE2ODM4ODYyMzUsImV4cCI6MTY4NTA5NTgzNX0.xqdFPWQoqQQJASYDZHBhII1wDVUWsdpYdNs3UW3evVc",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Problema nell'eliminazione dell'evento");
    }
  })
  .then((data) => {
    console.log(data);
  })

  .catch((err) => {
    console.log(err);
  });

const eventForm = document.getElementById("event-form");
eventForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let productName = document.getElementById("name");
  let productDescription = document.getElementById("description");
  let productBrand = document.getElementById("brand");
  let productImage = document.getElementById("image");
  let productPrice = document.getElementById("price");

  let newProduct = {
    name: productName.value,
    description: productDescription.value,
    brand: productBrand.value,
    imageUrl: productImage.value,
    price: productPrice.value,
  };
  console.log(newProduct);

  fetch(product_URL, {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGYxNjg4Zjc0MDAwMTQyODc1MzIiLCJpYXQiOjE2ODM4ODYyMzUsImV4cCI6MTY4NTA5NTgzNX0.xqdFPWQoqQQJASYDZHBhII1wDVUWsdpYdNs3UW3evVc",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        alert("Salvataggio avvenuto");
        location.assign("/index.html");
      } else {
        alert("Errore nel salvataggio");
        throw new Error("Problema nell'eliminazione dell'evento");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
