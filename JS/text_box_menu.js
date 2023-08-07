const textDelete = document.querySelectorAll(".text_delete");
const textBox = document.querySelectorAll(".text_box");
const parentContainer = document.querySelector("#text_list_container");

for (let i = 0; i < textDelete.length; i++) {
  textDelete[i].addEventListener("click", () => {
    parentContainer.removeChild(textBox[i]);
  });
}
