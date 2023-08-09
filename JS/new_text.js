const textListContainer = document.querySelector("#text_list_container");
const textInput = document.querySelector("#new_text_input");
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
    let nowDate = new Date();
    let nowHour = nowDate.getHours();
    let meridium = nowHour > 12 ? "오후" : "오전";
    let nowMinute = String(nowDate.getMinutes()).padStart(2, "0");
    let nowformat = `${meridium} ${
      nowHour > 12 ? nowHour - 12 : nowHour
    }:${nowMinute}`;
    inputTime.innerHTML = nowformat;
    inputTime.setAttribute("class", "text_time");

    let inputContents = document.createElement("div");
    inputContents.innerHTML = inputValue;
    inputContents.setAttribute("class", "text_contents");

    newBox.prepend(boxMenu, inputTime, inputContents);
    textListContainer.appendChild(newBox);
  }
});
