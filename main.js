fetchWeather = () => {
  const apiKey = "d8f1596f22ac7fc1b56c6a0e4b10bdd7";
  const inputLocation = document.getElementById("city");
  const locationName = inputLocation.value;
  const locationWeather = document.getElementById("location--weather");
  const Url = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${apiKey}&units=metric`;

  locationWeather.innerHTML = "";

  fetch(Url)
    .then((Response) => Response.json())
    .then((data) => {
      const weatherDetails = document.createElement("div");

      weatherDetails.innerHTML = `
      <div class="weather--heading">
      <h2 class="location--name">${data.name}</h2>
      </div>
      <div class="info--container">
      <p class="temp"><i class="fa-solid fa-temperature-high"></i> Temperature:  ${data.main.temp}°C
      <p class="desc"><i class="fa-solid fa-align-left"></i> Description:  ${data.weather[0].description}</p>
      <p class="humid"><i class="fa-solid fa-water"></i> Humidity : ${data.main.humidity}%
      <p class="windSpd"><i class="fa-solid fa-wind"></i> Wind Speed:  ${data.wind.speed} m/s</p>
      </div>`;

      locationWeather.appendChild(weatherDetails);
    })

    .catch((error) => {
      console.error("Error Fetching Weather Data:", error);
      const errorText = document.createElement("div");
      errorText.textContent =
        "Error getting Weather Data... Please Try Again Later";
      locationWeather.appendChild(errorText);
    });
};
