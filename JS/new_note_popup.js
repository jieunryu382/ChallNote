const newButton = document.querySelector("#new_note_button");
const newForm = document.querySelector("#popup_container");
const submit = document.querySelector("#popup_submit");
const cancle = document.querySelector("#popup_cancel");

newButton.addEventListener("click", () => {
  newForm.classList.toggle("hidden");
});

cancle.addEventListener("click", () => {
  newForm.classList.toggle("hidden");
});
