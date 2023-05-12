const product_URL = "https://striveschool-api.herokuapp.com/api/product/";

let barContent = new URLSearchParams(window.location.search);
let productId = barContent.get("productId");
console.log(productId);

if (productId) {
  document.getElementById("mainTitle").innerText =
    "Backoffice page - Modifica PRODOTTO";
  document.getElementById("save-button").innerText = "MODIFICA PRODOTTO";

  let deleteButton = document.getElementById("delete-button");
  deleteButton.classList.remove("d-none");
  deleteButton.addEventListener("click", () => {
    fetch(product_URL + productId, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGYxNjg4Zjc0MDAwMTQyODc1MzIiLCJpYXQiOjE2ODM4ODYyMzUsImV4cCI6MTY4NTA5NTgzNX0.xqdFPWQoqQQJASYDZHBhII1wDVUWsdpYdNs3UW3evVc",
      },
    })
      .then((res) => {
        if (res.ok) {
          alert("Scheda prodotto cancellata");
          location.assign("homepage.html");
        } else {
          throw new Error("Prodotto non eliminato");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

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

  fetch(productId ? product_URL + productId : product_URL, {
    method: productId ? "PUT" : "POST",
    body: JSON.stringify(newProduct),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGYxNjg4Zjc0MDAwMTQyODc1MzIiLCJpYXQiOjE2ODM4ODYyMzUsImV4cCI6MTY4NTA5NTgzNX0.xqdFPWQoqQQJASYDZHBhII1wDVUWsdpYdNs3UW3evVc",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        alert(
          productId ? "SCHEDA PRODOTTO MODIFICATA" : "SCHEDA PRODOTTO CREATA"
        );
        location.assign("homepage.html");
      } else {
        throw new Error("Errore nel salvataggio");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

fetch(product_URL + productId, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGYxNjg4Zjc0MDAwMTQyODc1MzIiLCJpYXQiOjE2ODM4ODYyMzUsImV4cCI6MTY4NTA5NTgzNX0.xqdFPWQoqQQJASYDZHBhII1wDVUWsdpYdNs3UW3evVc",
    "Content-Type": "application/json",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Prodotto non trovato");
    }
  })
  .then((data) => {
    document.getElementById("name").value = data.name;
    document.getElementById("description").value = data.description;
    document.getElementById("brand").value = data.brand;
    document.getElementById("image").value = data.imageUrl;
    document.getElementById("price").value = data.price;
  })
  .catch((err) => {
    console.log(err);
  });
