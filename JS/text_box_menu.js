const textDelete = document.querySelectorAll(".text_delete");
const textUpdate = document.querySelectorAll(".text_update");
const textBox = document.querySelectorAll(".text_box");
const textContents = document.querySelectorAll(".text_contents");
const parentContainer = document.querySelector("#text_list_container");

for (let i = 0; i < textDelete.length; i++) {
  textDelete[i].addEventListener("click", () => {
    let removeConfirm = confirm("삭제하시겠습니까?");
    if (removeConfirm) {
      parentContainer.removeChild(textBox[i]);
    } else {
      console.log("no");
    }
  });
}

const updatePopup = document.querySelector("#text_update_popup_container");
const updateForm = document.querySelector("#text_update_popup_form");
const updateContents = document.querySelector("#text_update_contents");
const updateCancle = document.querySelector("#text_update_cancle");

for (let i = 0; i < textUpdate.length; i++) {
  textUpdate[i].addEventListener("click", () => {
    updatePopup.classList.remove("hidden");
    let originalText = textContents[i].innerText;
    updateContents.value = originalText;
  });
}

updateCancle.addEventListener("click", () => {
  updatePopup.classList.add("hidden");
});
