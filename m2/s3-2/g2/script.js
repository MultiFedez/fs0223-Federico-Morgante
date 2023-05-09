// FORM
let nameField = document.getElementsByTagName("input")[0];

// BUTTON
const buttonSave = document.getElementById("save");
const buttonDelete = document.getElementById("delete");

// PARAGRAFO in cui inserire il nome stampato
const lastName = document.getElementById("target");

// BUTTON SAVE
buttonSave.addEventListener("click", save);
function save(e) {
  e.preventDefault();
  localStorage.setItem("Names", nameField.value);

  lastName.textContent = localStorage.getItem("Names");
  document.getElementById("container").reset();
}
