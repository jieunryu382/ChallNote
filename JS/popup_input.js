const title = document.querySelector("#input_title");
const description = document.querySelector("#input_description");
const period = document.querySelector("#input_period");
const startDay = document.querySelector("#input_start");
const endDay = document.querySelector("#input_end");
const submit = document.querySelector("#popup_submit");

const today = new Date();
const endDate = new Date(today);

endDate.setDate(today.getDate() + 3);

startDay.value = today.toISOString().substring(0, 10);
endDay.value = endDate.toISOString().substring(0, 10);

startDay.addEventListener("change", intervalDay);
endDay.addEventListener("change", intervalDay);

function intervalDay() {
  const interval =
    new Date(endDay.value).getTime() - new Date(startDay.value).getTime();
  const intervalDay = interval / (1000 * 60 * 60 * 24);
  period.innerHTML = intervalDay.toString() + "일동안";
}
