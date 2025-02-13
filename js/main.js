import fetchData from "./fetch.js";

// TODO - get API key from env (import.meta.env)
const apiKey = import.meta.env.VITE_API_KEY;

// IIFE for top level awaits
(async function loadWeather() { 
    // Get Location Data
    const zipCode = 83440; // Rexburg, Idaho
    const countryCode = 'US';
    const locationUrl = `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${apiKey}`;
    const locationData = await fetchData(locationUrl);

    // Get Weather Data
    const lat = locationData.lat;
    const long = locationData.lon;
    const temperatureUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`;
    const temperatureData = await fetchData(temperatureUrl);
    const date = new Date(temperatureData.list[0].dt * 1000);
    const temperature = ((parseFloat(temperatureData.list[0].main.temp) - 273.15) * 9/5 + 32).toFixed(1);

    const tempContainer = document.querySelector(".temperature-message");
    tempContainer.innerText = `The temperature will be ${temperature}℉ on soon at ${date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
})();