const textListContainer = document.querySelector("#text_list_container");
const textInput = document.querySelector("#text_input_box");

const newTextButton = document.querySelector("#new_text_button");

newTextButton.addEventListener("click", (event) => {
  const newBox = document.querySelector(".text_box").cloneNode(false);
  const boxMenu = document.querySelector(".text_menu_box").cloneNode(true);
  const inputValue = textInput.value;
  if (inputValue == "") {
    alert("내용을 입력하세요.");
  } else {
    event.preventDefault();
    let inputTime = document.createElement("div");
    inputTime.innerHTML = new Date();
    inputTime.setAttribute("class", "text_time");
    let inputContents = document.createElement("div");
    inputContents.innerHTML = inputValue;
    inputContents.setAttribute("class", "text_contents");
    newBox.prepend(boxMenu, inputTime, inputContents);
    textListContainer.appendChild(newBox);
  }
});
