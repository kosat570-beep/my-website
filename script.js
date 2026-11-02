const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const statusText = document.getElementById("status");

let searchResults = null;

function getWeather(code) {
    if (code === 0) return ["Clear Sky", "☀️"];
    if (code === 1 || code === 2) return ["Partly Cloudy", "🌤️"];
    if (code === 3) return ["Cloudy", "☁️"];
    if (code === 45 || code === 48) return ["Foggy", "🌫️"];
    if (code >= 51 && code <= 67) return ["Drizzle / Rain", "🌧️"];
    if (code >= 71 && code <= 77) return ["Snow", "❄️"];
    if (code >= 80 && code <= 82) return ["Rain Showers", "🌦️"];
    if (code >= 95) return ["Thunderstorm", "⛈️"];

    return ["Unknown Weather", "🌡️"];
}


// SEARCH ALL CITIES

async function searchCity(city) {
    try {
        statusText.textContent = "Searching cities...";

        const geoURL =
        "https://geocoding-api.open-meteo.com/v1/search?name="
        + encodeURIComponent(city)
        + "&count=100&language=en&format=json";

        const response = await fetch(geoURL);

        if (!response.ok) {
            throw new Error("City search failed");
        }

        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            statusText.textContent = "No cities found!";
            return;
        }

        showCityResults(data.results);

    } catch (error) {
        statusText.textContent = "Search error: " + error.message;
    }
}


// SHOW CITY LIST

function showCityResults(results) {

    let oldList = document.getElementById("cityResults");

    if (oldList) {
        oldList.remove();
    }

    const list = document.createElement("div");

    list.id = "cityResults";

    list.style.marginBottom = "20px";
    list.style.padding = "15px";
    list.style.borderRadius = "18px";
    list.style.background = "rgba(255,255,255,0.10)";
    list.style.border = "1px solid rgba(255,255,255,0.2)";
    list.style.backdropFilter = "blur(20px)";

    results.forEach(function(place) {

        const item = document.createElement("button");

        item.textContent =
        place.name + ", " + place.country
        + (place.admin1 ? " - " + place.admin1 : "");

        item.style.display = "block";
        item.style.width = "100%";
        item.style.padding = "13px";
        item.style.marginBottom = "8px";
        item.style.textAlign = "left";
        item.style.color = "white";
        item.style.background = "rgba(255,255,255,0.08)";
        item.style.border = "1px solid rgba(255,255,255,0.12)";
        item.style.borderRadius = "12px";
        item.style.cursor = "pointer";
        item.style.fontSize = "14px";

        item.addEventListener("click", function() {

            list.remove();

            cityInput.value = place.name;

            getWeatherData(
                place.latitude,
                place.longitude,
                place.name,
                place.country
            );

        });

        list.appendChild(item);
    });

    document.querySelector(".search-box").after(list);

    statusText.textContent =
    results.length + " matching locations found.";
}


// GET WEATHER DATA

async function getWeatherData(lat, lon, city, country) {

    try {

        statusText.textContent = "Loading weather...";

        const url =
        "https://api.open-meteo.com/v1/forecast?latitude="
        + lat
        + "&longitude="
        + lon
        + "&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m"
        + "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset"
        + "&timezone=auto&forecast_days=7";

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather data request failed");
        }

        const data = await response.json();

        const current = data.current;
        const daily = data.daily;
        const weather = getWeather(current.weather_code);document.getElementById("cityName").textContent =
        city + ", " + country;

        document.getElementById("date").textContent =
        new Date().toDateString();

        document.getElementById("temperature").textContent =
        Math.round(current.temperature_2m) + "°C";

        document.getElementById("weatherIcon").textContent =
        weather[1];

        document.getElementById("description").textContent =
        weather[0];

        document.getElementById("feelsLike").textContent =
        Math.round(current.apparent_temperature) + "°C";

        document.getElementById("humidity").textContent =
        current.relative_humidity_2m + "%";

        document.getElementById("wind").textContent =
        current.wind_speed_10m + " km/h";

        document.getElementById("rain").textContent =
        daily.precipitation_probability_max[0] + "%";

        document.getElementById("feels").textContent =
        Math.round(current.apparent_temperature) + "°C";

        document.getElementById("sunrise").textContent =
        daily.sunrise[0].split("T")[1];

        document.getElementById("sunset").textContent =
        daily.sunset[0].split("T")[1];

        const forecast = document.getElementById("forecast");

        forecast.innerHTML = "";

        for (let i = 0; i < 7; i++) {

            const dayWeather = getWeather(daily.weather_code[i]);

            const day = new Date(daily.time[i]);

            const dayName = day.toLocaleDateString("en-US", {
                weekday: "short"
            });

            const card = document.createElement("div");

            card.className = "forecast-card";

            card.innerHTML =
                "<h3>" + dayName + "</h3>"
                + "<div class='icon'>" + dayWeather[1] + "</div>"
                + "<p>" + dayWeather[0] + "</p>"
                + "<p>Max: " + Math.round(daily.temperature_2m_max[i]) + "°C</p>"
                + "<p>Min: " + Math.round(daily.temperature_2m_min[i]) + "°C</p>";

            forecast.appendChild(card);
        }

        statusText.textContent = "Weather loaded successfully!";

    } catch (error) {

        statusText.textContent =
        "Unable to load weather: " + error.message;

    }
}


// SEARCH BUTTON

searchBtn.addEventListener("click", function() {

    const city = cityInput.value.trim();

    if (city.length >= 2) {
        searchCity(city);
    } else {
        statusText.textContent = "Enter at least 2 letters.";
    }

});


// ENTER KEY

cityInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchBtn.click();
    }

});


// DEFAULT CITY

searchCity("Naypyidaw");