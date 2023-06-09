const product_URL = "https://striveschool-api.herokuapp.com/api/product/";

const getProduct = function () {
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
      renderImage(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const renderImage = function (images) {
  let target = document.getElementById("target");
  images.forEach((image) => {
    let newCard = document.createElement("div");
    newCard.classList.add("card","col-12","col-sm-6","col-md-4","col-lg-3","col-xl-2","bg-dark","border-danger","my-3");
    newCard.innerHTML = `<img src="${image.imageUrl}" class="card-img-top" alt="Foto Prodotto">
        <div class="card-body">
            <h5 class="card-title text-primary">${image.name}</h5>
            <p class="textdescription w-100 card-text text-light">${image.description}</p>
            <p class="card-text fw-bold text-light">${image.price} €</p>
            <p class="card-text text-light">${image.brand}</p>
            <a href="#" class="btn btn-outline-danger">BUY ME</a>
            <a href="backoffice.html?productId=${image._id}" target="_blanck" class="btn btn-outline-success">MODIFICA</a>
            <a href="dettagli.html?productId=${image._id}" target="_blanck" class="btn btn-outline-primary">DETTAGLI</a>
         </div>`;
    target.appendChild(newCard);
  });
};

window.onload = () => {
  getProduct();
};
