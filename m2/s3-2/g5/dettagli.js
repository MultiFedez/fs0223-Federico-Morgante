const product_URL = "https://striveschool-api.herokuapp.com/api/product/";

let barContent = new URLSearchParams(window.location.search);
let productId = barContent.get("productId");

const finalProduct = function(){

fetch(product_URL + productId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMGYxNjg4Zjc0MDAwMTQyODc1MzIiLCJpYXQiOjE2ODM4ODYyMzUsImV4cCI6MTY4NTA5NTgzNX0.xqdFPWQoqQQJASYDZHBhII1wDVUWsdpYdNs3UW3evVc",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Prodotto non trovato");
      }
    })
    .then((data)=>{
        showProduct(data)
    })
    .catch((err) => {
      console.log(err);
    });
}

const showProduct = function(image){
    let rowTarget = document.getElementById("target")
    rowTarget.innerHTML = `<img src="${image.imageUrl}" class="card-img-top" alt="Foto Prodotto">
    <div class="card-body">
        <h5 class="card-title text-primary">${image.name}</h5>
        <p class="textdescription card-text text-light">${image.description}</p>
        <p class="card-text fw-bold text-light">${image.price} €</p>
        <p class="card-text text-light">${image.brand}</p>
        <a href="#" class="btn btn-outline-danger">BUY ME</a>
        <a href="backoffice.html?productId=${image._id}" target="_blanck" class="btn btn-outline-success">MODIFICA</a>
        <a href="dettagli.html?productId=${image._id}" target="_blanck" class="btn btn-outline-primary">DETTAGLI</a>
     </div>`;
}

window.onload = () => {
    finalProduct()
}