// Date

let now = new Date();
let h3 = document.querySelector("#date-header");

let date = now.getDate();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];

h3.innerHTML = `${day}, ${month} ${date} ${year}`;



// Main date & temperature

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${hours}:${minutes}`;
}

function displayMainInfo(response) {
  let location = document.querySelector("#location");  
  let mainTemp = document.querySelector("#number");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let time = document.querySelector("#time");
  let icon = document.querySelector("#icon");

  mainTemp.innerHTML = Math.round(response.data.main.temp);
  location.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = `${response.data.main.humidity}%`;
  wind.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
  time.innerHTML = formatDate(response.data.dt * 1000);
  icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#showForecast");
  let forecast = response.data.list[0];

  forecastElement.innerHTML = `
    <div class="col-2-days">
    <h5>12:00</h5>                        
    <p class="icons">
    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" />
    </p>
    <p class="temp-2"><strong>${Math.round(forecast.main.temp_max)}°</strong> &nbsp ${Math.round(forecast.main.temp_min)}°</p>
    </div>`;
  console.log(response.data);
}

function search(city) {
  let urlKey = "f84459d8b368cc9cea9d316305ee8ff2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${urlKey}&units=metric`;

  axios.get(apiUrl).then(displayMainInfo);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${urlKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function clickSub(event) { 
  event.preventDefault();
  let searchInput = document.querySelector("#inline-form-input");
  search(searchInput.value);
  console.log("hello", searchInput.value);
}

search("Montreal");

// Search Engine & Weather API
 
let form = document.querySelector("#form-search");
form.addEventListener("submit", clickSub);











//   let h1 = document.querySelector("h1");
//   h1.innerHTML = `${searchInput.value.toUpperCase()}`;
// }



// function cityTemp(response) {
//   let roundedTemp = Math.round(response.data.main.temp);
//   let number = document.querySelector("#number");
//   number.innerHTML = `${roundedTemp}`;



// }

// Celsius to Fahrenheit

function changeF(event) {
  event.preventDefault();
  let numberTemp = document.querySelector("#number");
  let varInt = parseInt(numberTemp.textContent);

  let fahrenheitTemperature = Math.round((varInt * 9) / 5 + 32);
  numberTemp.innerHTML = `${fahrenheitTemperature}`;

}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", changeF);

// Fahrenheit to Celsius

function changeC(event) {
  event.preventDefault();
  let numberTemp = document.querySelector("#number");
  let varInt = parseInt(numberTemp.textContent);

  let celsiusTemperature = Math.round(((varInt - 32) * 5) / 9);
  numberTemp.innerHTML = `${celsiusTemperature}`;

}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", changeC);
