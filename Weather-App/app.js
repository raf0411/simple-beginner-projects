const apiKey = "bd0460a0534ce6e73f28ee44f198eab0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const weatherImg = document.querySelector(".weather-img-elm");
const degreesText = document.querySelector(".degrees-text-elm")
const cityText = document.querySelector(".city-text-elm");
const weatherInfo1 = document.querySelector(".weather-info-1-elm");
const weatherInfo2 = document.querySelector(".weather-info-2-elm");
const infoNumber1 = document.querySelector(".info-number-1-elm");
const infoNumber2 = document.querySelector(".info-number-2-elm")
const infoText1 = document.querySelector(".info-text-1-elm");
const infoText2 = document.querySelector(".info-text-2-elm");

const weather = document.querySelector(".weather-elm")
const errorMessage = document.querySelector(".error-elm")
const searchBar = document.querySelector(".search-bar-elm")
const searchBtn = document.querySelector(".search-btn-elm");
 
searchBtn.addEventListener('click', () => {
  checkWeather(searchBar.value);
});

async function checkWeather(city) {
  const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${city}`);

  console.log(response.status);

  // checking error
  if (response.status === 404 || searchBar.value === '') {
    errorMessage.style.display = "block";
    weather.style.display = "none";
  }
  else {
    let data = await response.json();

    cityText.innerHTML = data.name;
    degreesText.innerHTML = Math.round(data.main.temp) + '&#8451;';
    infoNumber1.innerHTML = data.main.humidity + ' &percnt;';
    infoNumber2.innerHTML = data.wind.speed + ' km/h';

    if (data.weather[0].main === "Clouds") {
      weatherImg.src = `weather-app-img/images/clouds.png`
    }
    else if (data.weather[0].main === "Clear") {
      weatherImg.src = `weather-app-img/images/clear.png`
    }
    else if (data.weather[0].main === "Drizzle") {
      weatherImg.src = `weather-app-img/images/drizzle.png`
    }
    else if (data.weather[0].main === "Mist") {
      weatherImg.src = `weather-app-img/images/mist.png`
    }
    else if (data.weather[0].main === "Snow") {
      weatherImg.src = `weather-app-img/images/snow.png`
    }

    weather.style.display = "block";
    errorMessage.style.display = "none";

    console.log(data);
  }
}