function updateWeather(response){
let temperatureElement = document.querySelector(`#temperature`);
let temperature = response.data.temperature.current;
  let cityElement = document.querySelector(`#city`);

    cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(temperature);
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

let searchFormElement = document.querySelector(`#search-form`);
searchFormElement,addEventListener(`submit`, handleSearchSubmit);
searchCity(`Paris`);