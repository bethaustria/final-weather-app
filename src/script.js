let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};

// let city = prompt("Enter a city");

// let area = weather[city];

// if (area) {
//   alert(
//     `It is currently ${area.temp} in ${city} with a humidity of ${area.humidity}%`
//   );
// } else {
//   alert(
//     `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//   );
// }

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

// Search Engine & Weather API

function clickSub(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#inline-form-input");
  console.log("hello", searchInput);

  let city = document.querySelector("#inline-form-input");
  let urlKey = "f84459d8b368cc9cea9d316305ee8ff2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${urlKey}&units=metric`;

  axios.get(apiUrl).then(cityTemp);

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value.toUpperCase()}`;
}

let form = document.querySelector("#form-search");
form.addEventListener("submit", clickSub);

function cityTemp(response) {
  let roundedTemp = Math.round(response.data.main.temp);
  let number = document.querySelector("#number");
  number.innerHTML = `${roundedTemp}`;
}

// Celsius to Fahrenheit

function changeF(event) {
  event.preventDefault();
  let numberTemp = document.querySelector("#number");
  let varInt = parseInt(numberTemp.textContent);

  let fahrenheitTemperature = Math.round((varInt * 9) / 5 + 32);
  numberTemp.innerHTML = `${fahrenheitTemperature}`;

  let unit = document.querySelector("#unit");
  unit.innerHTML = "F";
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

  let unit = document.querySelector("#unit");
  unit.innerHTML = "C";
}

// let celsius = document.querySelector("#celsius");
// celsius.addEventListener("click", changeC);
