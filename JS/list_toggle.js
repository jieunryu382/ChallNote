// 노트 리스트 분류 토글
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

// 텍스트 박스 메뉴 토글
const textMenuBut = document.querySelectorAll(".text_menu_box");
const textMenuList = document.querySelectorAll(".text_menu_toggle");
for (let i = 0; i < textMenuBut.length; i++) {
  textMenuBut[i].addEventListener("click", () => {
    textMenuList[i].classList.toggle("hidden");
  });
}
