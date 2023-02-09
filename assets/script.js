const submit = document.querySelector("#submit");
const APIkey = "24ce9fa82a265157be2662144b0cf306";

//create a function that on a click of the submit button, it will get the value of the input field and use it to make a request to the API
submit.addEventListener("click", function (event) {
  event.preventDefault();
  const city = document.querySelector("#city").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIkey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const temp = data.main.temp;
      const weather = data.weather[0].main;
      const icon = data.weather.id;
      const humidity = data.main.humidity;

      const tempEl = document.querySelector("#temp");
      const weatherEl = document.querySelector("#weather");
      const humidityEl = document.querySelector("#humidity");
      console.log(temp, weather, humidity);
      tempEl.textContent = temp;
      weatherEl.textContent = weather;
      humidityEl.textContent = humidity;
    });
});

//create a function that will take the data the previous function returns and display it on the page
