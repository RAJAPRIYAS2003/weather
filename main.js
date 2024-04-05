//toggle-sTART
let toggle = document.getElementById("darkmode-toggle");
toggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
})


function getWeather() {
    const apiKey = '7c6e5d344de060b110c8a21e781b300a';
    const city = document.getElementById('city-input').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weather-info');
        const cityName = document.getElementById('city-name');
        const weatherDescription = document.getElementById('weather-description');
        const temperature = document.getElementById('temperature');
        const humidity = document.getElementById('humidity');
        const windSpeed = document.getElementById('wind-speed');
        const weatherIcon = document.getElementById('weather-icon');
  
        cityName.textContent = data.name;
        weatherDescription.textContent = data.weather[0].description;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
  
        const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherIcon.innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;
  
        weatherInfo.classList.remove('hidden');
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
      });

  }
  

   