function getWeather() {
    const locationInput = document.getElementById('location').value;

    // Fetch weather data from API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=YOUR_API_KEY&units=metric`)
    .then(response => response.json())
    .then(data => {
        // Display weather information
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}
