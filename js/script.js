const btnPrevious = document.getElementById("btn-previous");
const displayData = document.getElementById("display-data");
const btnNext = document.getElementById("btn-next");

const formAddReminder = document.getElementById("form-add-reminder");
const inputMessage = document.getElementById("input-message");
const inputTime = document.getElementById("input-time");

const cardReminders = document.getElementById("card-reminders");

const message = [];

formAddReminder.addEventListener("submit", (e) => {
  const id = message.length + 1;

  const values = {
    id: id,
    data: displayData.innerText,
    mensagem: inputMessage.value,
    hora: inputTime.value,
  };

  message.push(values);
  messageInnerHtml();
  e.preventDefault();
});

const data = new Date();
let month = data.getMonth() + 1;
let year = data.getFullYear();
let newDate = `${month}, ${year}`;
displayData.innerText = newDate;

const messageInnerHtml = () => {
  cardReminders.innerHTML = "";

  message.forEach((item) => {
    if (item.data.split(", ")[0] == parseInt(displayData.innerText)) {
      cardReminders.innerHTML += `
        <div class="bg-white rounded-3 p-3 px-5 mt-2 text-dark w-100 d-flex justify-content-between">
            <h2 class="h5 m-0">${item.mensagem}</h2>
            <p class="m-0">${item.hora}</p>
        </div>
        `;
    }
  });

  cardReminders.innerText == "" &&
    (cardReminders.innerHTML = `
        <div class="bg-white rounded-3 p-3 px-5 mt-2 text-dark w-100 d-flex justify-content-center">
            <p class="m-0">Nenhum cadastrado ainda</p>
        </div>
  `);
};

messageInnerHtml();
btnNext.addEventListener("click", () => {
  month++;
  if (month > 12) {
    year++;
    month = 1;
  }
  displayData.innerText = `${month}, ${year}`;
  messageInnerHtml();
});

btnPrevious.addEventListener("click", () => {
  month--;
  if (month < 1) {
    year--;
    month = 12;
  }
  displayData.innerText = `${month}, ${year}`;
  messageInnerHtml();
});
