

const searchBtn = document.getElementById('searchbtn');
const inputBox = document.querySelector('input');
const h1 = document.querySelector('h1');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
  const apiKey = "c11842db44bc8ad6f4889b52c1fdd19a";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const weatherData = await fetch(apiUrl).then(response =>
    response.json());
  console.log(weatherData);
  const temp = Math.round(weatherData.main.temp);
  h1.textContent = `${temp}°C`;
  document.querySelector('h2').textContent = `${weatherData.weather[0].description}`;
  wind.textContent = `${weatherData.wind.speed}Km/h`;
  humidity.textContent = `${weatherData.main.humidity}`;

  switch (weatherData.weather[0].main) {
    case 'Clouds':
      weatherIcon.src = "images/clouds.png";
      break;
    case 'Clear':
      weatherIcon.src = "images/clear.png";
      break;
    case 'Snow':
      weatherIcon.src = "images/snow.png";
      break;
    case 'Rain':
      weatherIcon.src = "images/rain.png";
      break;
    case 'Mist':
      weatherIcon.src = "images/mist.png";
      break;
    default:
      weatherIcon.src = "images/clear.png";
      break;

  }


}

searchBtn.addEventListener("click", function () {
  if (inputBox.value) {
    const city = inputBox.value;
    checkWeather(city);
  }
  else {
    alert("Enter city name");
  }

});


