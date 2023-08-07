const title = document.querySelector("#input_title");
const description = document.querySelector("#input_description");
const periodNumber = document.querySelector("#input_period");
const startDay = document.querySelector("#input_start");
const endDay = document.querySelector("#input_end");
const submit = document.querySelector("#popup_submit");
const form = document.querySelector("#new_note_popup");

const today = new Date();
const endDate = new Date(today);

endDate.setDate(today.getDate() + 2);

startDay.value = today.toISOString().substring(0, 10);
endDay.value = endDate.toISOString().substring(0, 10);
startDay.setAttribute("max", endDay.value);
endDay.setAttribute("min", startDay.value);

startDay.addEventListener("change", intervalDay);
endDay.addEventListener("change", intervalDay);

function intervalDay() {
  const interval =
    new Date(endDay.value).getTime() - new Date(startDay.value).getTime();
  const intervalDay = interval / (1000 * 60 * 60 * 24);
  if (intervalDay == 0) {
    periodNumber.innerHTML = "당일치기";
  } else {
    periodNumber.innerHTML = (intervalDay + 1).toString() + "일동안";
  }
  startDay.setAttribute("max", endDay.value);
  endDay.setAttribute("min", startDay.value);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const noteTitle = title.value;
  const noteDes = description.value;
  const period = [startDay.value, endDay.value, periodNumber.innerHTML];
  if (noteTitle == "" || noteDes == "") {
    alert("내용을 입력하세요.");
  } else {
    console.log("제목:", noteTitle);
    console.log("설명:", noteDes);
    console.log("기간:", period);
  }
});
