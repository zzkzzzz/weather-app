console.log("Client side js file is loaded");

const weatherForm = document.querySelector("form");
const input = document.querySelector("input");
const messageOne = document.querySelector(".message-1");
const messageTwo = document.querySelector(".message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = input.value;

  messageOne.textContent = "Loading...";
  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = `${data.forecast.description},  ${data.forecast.temperature} degree`;
        }
      });
    }
  );
});