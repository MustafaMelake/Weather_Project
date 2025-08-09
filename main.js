const apiKey = "7943a03a1eb60ecc168b1febc080fdd9"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInp = document.getElementById("searchInp")
const searchBtn = document.getElementById("searchBtn")
const weatherImg = document.querySelector(".weather-img") 


async function getWeather(city) {
  let response = await fetch(apiUrl + city +`&appid=${apiKey}`);
  let data = await response.json();
  console.log(data)

    if (data.cod === "404") {
    alert("City not found. Please check your spelling.");
    return;
  }

  if (data.weather[0].main === "Rain") {
    weatherImg.src = "Images/rain.png"
  }  else if (data.weather[0].main === "Clear") {
    weatherImg.src = "Images/clear.png"
  } else if (data.weather[0].main === "Drizzle") {
    weatherImg.src = "Images/drizzle.png"
  } else if (data.weather[0].main === "Mist") {
    weatherImg.src = "Images/mist.png"
  } else if (data.weather[0].main === "Snow") {
    weatherImg.src = "Images/snow.png"
  }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) +`°C`;
  document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
  document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`;
  document.querySelector(".weather").style.display = "block"
}
  searchBtn.addEventListener("click", () => {
    getWeather(searchInp.value);
  })