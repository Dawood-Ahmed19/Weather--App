fetchWeather = () => {
  const apiKey = "d8f1596f22ac7fc1b56c6a0e4b10bdd7";
  const inputLocation = document.getElementById("city");
  const locationName = inputLocation.value;
  const locationWeather = document.getElementById("location--weather");
  const Url =
    "https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric";

  locationWeather.innerHTML = "";

  fetch(Url)
    .then((Response) => Response.json())
    .then((data) => {
      const weatherDetails = document.createElement("div");

      weatherDetails.innerHTML = `<h2> Weather in ${data.name} </h2>
      <p> Temperature: ${data.main.temp}°C
      <p>Description: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%
      <p>Wind Speed: ${data.wind.speed} m/s</p>`;
    });
};
