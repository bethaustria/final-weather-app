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

// Main temperature

function displayMainTemp(response) {
  console.log(response.data);
  let location = document.querySelector("#location");  
  let mainTemp = document.querySelector("#number");
  let description = document.querySelector("#description");

  mainTemp.innerHTML = Math.round(response.data.main.temp);
  location.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].description;

}

  let urlKey = "f84459d8b368cc9cea9d316305ee8ff2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=${urlKey}&units=metric`;

  axios.get(apiUrl).then(displayMainTemp);

// Search Engine & Weather API

// function clickSub(event) {

  

//   event.preventDefault();
//   let searchInput = document.querySelector("#inline-form-input");
//   console.log("hello", searchInput);

//   let city = document.querySelector("#inline-form-input");
//   let urlKey = "f84459d8b368cc9cea9d316305ee8ff2";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${urlKey}&units=metric`;

//   axios.get(apiUrl).then(cityTemp);

//   let h1 = document.querySelector("h1");
//   h1.innerHTML = `${searchInput.value.toUpperCase()}`;
// }

// let form = document.querySelector("#form-search");
// form.addEventListener("submit", clickSub);

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
