const apiKey = "7e3c3e6fa5ca8d8ecd773ecb9dc64f98"
// let city = "virar"
// console.log(city)
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metri`

let searchBtn = document.querySelector("#btn");
// console.log(searchBtn);

async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) {
            throw new Error("❌ City not found. Please enter a valid city name.");
        }
        const data = await response.json();

        let msg = document.querySelector("#msg")
        msg.innerHTML = `<p>City 🏙️ : ${data.name}<p>
    <p>Temperature 🌡️: ${data.main.temp}°C</p>
    <p>Humidity 💧 : ${data.main.humidity}%</p>
    <p>Wind 💨 : ${data.wind.speed} km/h</p>`;
    } catch (error) {
        let msg = document.querySelector("#msg")
        msg.innerHTML = `Error : ${error.message}`;
    }
}
// getWeather("virar")


function updateInfo() {

    let city = document.querySelector("#city").value;
    console.log(city)
    getWeather(city)
};
searchBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateInfo()
})
