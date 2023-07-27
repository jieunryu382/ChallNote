const sOpen = document.querySelectorAll(".section_open");
const sClose = document.querySelectorAll(".section_close");

const sButton = document.querySelectorAll(".section_casement");
const sContents = document.querySelectorAll(".section_contents");
const sWidth = document.querySelectorAll(".section_width");

for (let i = 0; i < sButton.length; i++) {
  sButton[i].addEventListener("click", () => {
    sContents[i].classList.toggle("hidden");
    sOpen[i].classList.toggle("hidden");
    sClose[i].classList.toggle("hidden");
    if (sWidth[i].clientWidth == 300) {
      sWidth[i].style.minWidth = "70px";
    } else {
      sWidth[i].style.minWidth = "300px";
    }
  });
}
