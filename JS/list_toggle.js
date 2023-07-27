const button = document.querySelectorAll(".note_list_button");
const openButton = document.querySelectorAll(".list_open_button");
const closeButton = document.querySelectorAll(".list_close_button");
const noteList = document.querySelectorAll(".division_note_list");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    openButton[i].classList.toggle("hidden");
    closeButton[i].classList.toggle("hidden");
    noteList[i].classList.toggle("hidden");
  });
}
