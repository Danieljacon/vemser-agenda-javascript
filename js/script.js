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
    mensagem: "asdfdfsdfgdsasdf",
    hora: "asdfasdfas",
  },
  {
    id: 1,
    data: 9,
    mensagem: "aaaaaaaaaaa",
    hora: "sssssssssss",
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

const messageInnerHtml = () => {
  message.forEach((item) => {
    if (item.data == parseInt(displayData.innerText)) {
      cardReminders.innerHTML = `
            <h2 class="h5 m-0">${item.mensagem}</h2>
            <p class="m-0">${item.hora}</p>
        `;
    } else {
        cardReminders.innerHTML = `
        <p class="text-center m-0">Nenhum lembrete cadastrado ainda</p>`;
    }
  });
};

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

// innerText.split(",")[0]