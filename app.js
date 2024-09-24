async function getWeather() {
    const apiKey = '3dc50e1b6051b3b649b4bb6b700ad81d';  // استبدل YOUR_API_KEY بمفتاح OpenWeatherMap API الخاص بك
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('city-name').innerText = `Weather in ${data.name}`;
            document.getElementById('temp').innerText = `${data.main.temp}°C`;
            document.getElementById('description').innerText = data.weather[0].description;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} km/h`;
        } else {
            document.getElementById('city-name').innerText = 'City not found';
            document.getElementById('temp').innerText = '';
            document.getElementById('description').innerText = '';
            document.getElementById('humidity').innerText = '';
            document.getElementById('wind').innerText = '';
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
    }
}
