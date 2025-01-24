async function getWeather() {
  document.getElementById('weatherInfo').innerText = 'Ждите';

  //получаем полное значение из инпута
  const cityValue = document.getElementById('city').value;

  //убираем пробелы (на мобилке часто в конец добавляется пробел)
  const city = cityValue.replace(/\s/g, "");

  const API_KEY = 'f521b8ecf5054c1bdc877cb11fdc6e68';

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${API_KEY}&units=metric`);

  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById('weatherInfo').innerHTML = `
    <h2>${data.name}</h2>
    <p>Температура: <span>${data.main.temp}°C</span></p>
    <p>Влажность: <span>${data.main.humidity}%</span></p>
    <p>Состояние: <span>${data.weather[0].description}</span></p>
    `;
  } else document.getElementById('weatherInfo').innerText = 'Такого города нет или допущена ошибка при вводе.';
}






document.getElementById('city').addEventListener('keydown', async(event) => {
  if(event.key === 'Enter') {
    event.preventDefault();
    await getWeather();
  }
})


document.getElementById('theme-switcher').addEventListener('change', (event) => {
    document.body.classList.toggle('dark-theme', event.target.checked);
});