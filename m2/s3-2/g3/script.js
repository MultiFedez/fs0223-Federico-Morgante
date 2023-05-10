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
    col.classList.add("col-12", "col-lg-3");
    col.innerHTML = `<div class="card mb-3" style="width: 18rem";>
        <img src="${book.img}" class="card-img-top" style="height: 350px" alt="...">
        <div class="card-body" style="height:250px" >
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text h6">${book.category}</p>
            <p class="card-text h6">${book.price}</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
            <a href="#" id="deleteButton" class="btn btn-primary">Delete</a>
        </div>
    </div`;
    mainRow.appendChild(col);
  });
};
