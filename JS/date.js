const time = document.querySelector("#now_time");
const date = document.querySelector("#now_date");

function getNowTime() {
  const now = new Date();
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  date.innerText = `${year}-${month}-${day}`;
  time.innerText = `${hours}:${minutes}:${seconds}`;
}

getNowTime();
setInterval(getNowTime, 1000);
