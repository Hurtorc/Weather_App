var input = document.querySelector("#name_field");

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    createWeatherdisplay(event.target.value);
  }
});

var APIkey = "24ce9fa82a265157be2662144b0cf306";

function getGeoLocate(query) {
  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=${query},&limit=${limit}&appid=${APIkey}"
      .then((response) => response.json())
      .then((data) => {
        console.log = JSON.stringify(data);
      })
  );
}

function getWeather({ lat, lon, units }) {
  return fetch(
    "http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}"
  );
}

function createWeatherdisplay(location) {
  return getGeoLocate(location)
    .then((response) => response.json())
    .then((data) => {
      getWeather({ lat: data[0].lon, lon: data[0].lat })
        .then((weatherResponse) => weatherResponse.json())
        .then((weatherData) => {
          var weatherIcon = document.createElement("img");
          weatherIcon.src =
            "http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png";
          var currentWeather = document.createElement("p");
          currentWeather.textContent =
            "${weatherData.weather[0].main}: ${weatherData.weather[0].description}";
          document.body.textContent = JSON.stringify(weatherData);
          document.body.appendChild(weatherIcon);
          document.body.appendChild(currentWeather);
        })
        .catch((error) => {
          document.body.textContent = "Error: " + error;
        });
    });
}
