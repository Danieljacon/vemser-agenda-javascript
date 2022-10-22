const btnPrevious = document.getElementById("btn-previous");
const displayData = document.getElementById("display-data");
const btnNext = document.getElementById("btn-next");

const formAddReminder = document.getElementById("form-add-reminder");
const inputMessage = document.getElementById("input-message");
const inputTime = document.getElementById("input-time");

const cardReminders = document.getElementById("card-reminders");

const message = [
  {
    id: 1,
    data: 10,
    mensagem: "",
    hora: "",
  },
];

formAddReminder.addEventListener("submit", (e) => {
  const id = message.length++;

  const values = {
    id: id,
    data: displayData.innerText,
    mensagem: inputMessage.value,
    hora: inputMessage.value,
  };

  console.log(values);
  e.preventDefault();
});

const data = new Date();
let month = data.getMonth() + 1;
let year = data.getFullYear();
let newDate = `${month}, ${year}`;
displayData.innerText = newDate;

btnNext.addEventListener("click", () => {
  month++;
  if (month > 12) {
    year++;
    month = 1;
  }
  displayData.innerText = `${month}, ${year}`;
});

btnPrevious.addEventListener("click", () => {
  month--;
  if (month < 1) {
    year--;
    month = 12;
  }
  displayData.innerText = `${month}, ${year}`;
});

// innerText.split(",")[0]
