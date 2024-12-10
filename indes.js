function updateWeather(response){
let temperatureElement = document.querySelector(`#temperature`);
let temperature = response.data.temperature.current;
  let cityElement = document.querySelector(`#city`);

    cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(temperature);

getForecast(response.data.city);
}

function searchCity (city){
let apiKey = `01f1e3c8846fa60fce9eodfad5fbt6b4`;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
axios.get(apiUrl).then(updateWeather);
}


function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector(`#search-form-input`);
    let cityElement = document.querySelector(`#city`);
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}

function formatDay(timestamp){
  let date = new Date (timestamp * 1000);
  let days = [`Sun` , `Mon` ,  `Tue` , `Wed` , `Thu` , `Fri` , `Sat`];

  return days[date.getDay()];
}


function getForecast (city) {
  let apiKey = "01f1e3c8846fa60fce9eodfad5fbt6b4";
  let apiUrl =`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric` ;
 axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  let forecastHtml = " ";

  response.data.daily.forEach ( function (day , index) {
    if (index < 5 ) {
forecastHtml = forecastHtml +
` 
     <div class="weather-forecast-day">
                    <div class="forecast-date">${formatDay(day.time)}</div>

                    <img src="${day.condition.icon_url}" class="forecast-emoji" />
                    <div class="forecast-temperatures">
                        <div class="forecast-temperature">
                        <strong>${Math.round(day.temperature.maximum)}°</strong>
                        </div>
                        <div class="forecast-temperature">${Math.round(
                          day.temperature.minimum)}°</div>
                    </div>
                </div> 
                `;
    }
});
let forecastElement = document.querySelector(`#forecast`);
forecastElement.innerHTML = forecastHtml;                
}
let searchFormElement = document.querySelector(`#search-form`);
searchFormElement,addEventListener(`submit`, handleSearchSubmit);
searchCity(`Paris`);
