const submit = document.querySelector("#submit");
const APIkey = "24ce9fa82a265157be2662144b0cf306";

//function that on a click of the submit button, it will get the value of the input field and use it to make a request to the API
submit.addEventListener("click", function (event) {
  event.preventDefault();
  saveCity();
  if (getCity() === null) {
    getCity() = document.querySelector("#city").value;
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIkey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const temp = data.main.temp;
      const weather = data.weather[0].main;
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

//function that saves the city to local storage
function saveCity() {
  const city = document.querySelector("#city").value;
  // get city Storage from local storage use empty array if null
  const cityStorage = JSON.parse(localStorage.getItem("city")) || [];
  cityStorage.push(city);
  localStorage.setItem("city", JSON.stringify(city));
  // console.log(JSON.parse(localStorage.getItem("city")))
}

//function that gets the city from local storage if false return default city input
function getCity() {
  city = JSON.parse(localStorage.getItem("city"));
  console.log(city);
}

//display cities from local storage on the page
function displayCity() {
  const cityEl = document.querySelector("#city");
  cityEl.textContent = getCity;
}
