fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Errore nel contattare il server");
    }
  })
  .then((data) => {
    console.log(data);
    renderBooks(data);
  })
  .catch((err) => {
    console.log(err);
  });

const renderBooks = function (books) {
  let mainRow = document.getElementById("list");
  books.forEach((book) => {
    let col = document.createElement("div");
    col.classList.add("col-6", "col-md-4", "col-xl-3");
    col.innerHTML = `<div class="card mb-3" style="width: 18rem";>
        <img src="${book.img}" class="card-img-top" style="height: 350px" alt="...">
        <div class="card-body" style="height:250px" >
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text h6">${book.category}</p>
            <p class="card-text h6">${book.price}</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
            <a href="#" id="deleteButton" class="btn btn-danger">Delete</a>
            <a href="#" class="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg></a>
        </div>
    </div`;

    let deleteButton = col.querySelector("#deleteButton");
    deleteButton.addEventListener("click", () => {
      col.remove();
    });
    mainRow.appendChild(col);
  });
};
