// FORM
let nameField = document.getElementsByTagName("input");

// BUTTON
const buttonSave = document.getElementById("save");
const buttonDelete = document.getElementById("delete");

// NEW ARRAY con i nomi dentro
let savedName = [];

const lastName = document.getElementById("target");

// BUTTON SAVE
buttonSave.addEventListener("click", save);
function save(e) {
  e.preventDefault();
  localStorage.setItem("Names", JSON.stringify(savedName));
  savedName.push(nameField.value);
  localStorage.setItem("Names", JSON.stringify(savedName));
  lastName.textContent = savedName[savedName.lenght - 1];
  document.getElementById("form").reset();
}
