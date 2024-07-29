const weatherfetch = document.querySelector(".weatherheading");
const weatherfetch1 = document.querySelector(".weatherheading1");
const weatherfetch2 = document.querySelector(".humid");
const weatherfetch3 = document.querySelector(".wind");
const weatherfetch4 = document.querySelector(".search");
const weatherfetch5 = document.querySelector(".button");
const weatherfetch6 = document.querySelector(".weatherchange");

const apiKey = "72e21c660c5b0b58960e479486a4200e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkweather(city) {
   
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        const data = await response.json();
        console.log(data);
        weatherfetch.innerHTML = data.main.temp + "°C";
        weatherfetch1.innerHTML = data.name;
        weatherfetch2.innerHTML = data.main.humidity + "%";
        weatherfetch3.innerHTML = data.wind.speed + " Km/hr";

        const weatherType = data.weather[0].main.toLowerCase();
        if (weatherType === "clouds") {
            weatherfetch6.src = "images/clouds.png";
        } else if (weatherType === "clear") {
            weatherfetch6.src = "images/clear.png";
        } else if (weatherType === "drizzle") {
            weatherfetch6.src = "images/drizzle.png";
        } else if (weatherType === "rain") {
            weatherfetch6.src = "images/rain.png";
        } else if (weatherType === "mist") {
            weatherfetch6.src = "images/mist.png";
        } else {
            weatherfetch6.src = "images/default.png";
        }
}

weatherfetch5.addEventListener("click", () => {
    checkweather(weatherfetch4.value);
});
