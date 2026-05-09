function showweatherDetails(event) {
    event.preventDefault();

    // 1. Get latitude and longitude from the new input fields
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const apiKey = 'baf09b60df6499cf58ec3b03572aa0aa'; 

    // 2. Use the new URL format required by the Practice Task
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            // Note: data.name might be empty for specific coordinates, 
            // but the weather data will still be in data.main and data.weather
            weatherInfo.innerHTML = `<h2>Weather at ${lat}, ${lon}</h2>
                                     <p>Temperature: ${data.main.temp} °C</p>
                                     <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please check coordinates.</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);