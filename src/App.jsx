import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] = useState("Ankara");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&APPID=fc3938bd900b0a913f13e3d97962a5e1`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [selectedCity]);

  const iconSrc = weather.weather?.[0]?.icon
    ? `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    : "";

  return (
    <>
      <div className="top-bar">
        <input
          type="text"
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
          }}
          placeholder="Şehir Giriniz"
        />
        <i className={`bi bi-search`}></i>
      </div>

      <h1>{selectedCity}</h1>
      <img
        src={
          (iconSrc === "http://openweathermap.org/img/w/50d.png" &&
            "https://www.clipartmax.com/png/full/59-593346_wind-clipart-weather-symbol-windy-weather-icon.png") ||
          (iconSrc === "http://openweathermap.org/img/w/01d.png" &&
            "https://www.pinclipart.com/picdir/big/5-51451_rising-sun-clipart-portable-network-graphics-png-download.png") ||
          (iconSrc === "http://openweathermap.org/img/w/02d.png" &&
            "https://cdn1.iconfinder.com/data/icons/weather-filled-outline-7/64/Sunny-1024.png") ||
          (iconSrc === "http://openweathermap.org/img/w/03d.png" &&
            "https://cdn1.iconfinder.com/data/icons/weather-filled-outline-7/64/Sunny-1024.png") ||
          (iconSrc === "http://openweathermap.org/img/w/04d.png" &&
            "https://cdn1.iconfinder.com/data/icons/weather-filled-outline-7/64/Sunny-1024.png") ||
          (iconSrc === "http://openweathermap.org/img/w/09d.png" &&
            "https://freepngimg.com/thumb/rain/72581-forecasting-rain-forecast-vector-weather-icon.png") ||
          (iconSrc === "http://openweathermap.org/img/w/10d.png" &&
            "https://cdn1.iconfinder.com/data/icons/weather-filled-outline-7/64/Sunny-1024.png") ||
          (iconSrc === "http://openweathermap.org/img/w/11d.png" &&
            "https://cdn3.iconfinder.com/data/icons/weather-icons-8/512/weather-thunder-rainy-h-1024.png") ||
          (iconSrc === "http://openweathermap.org/img/w/13d.png" &&
            "https://cdn0.iconfinder.com/data/icons/cloudy-2/425/snow-1024.png") ||
          (iconSrc === "http://openweathermap.org/img/w/50n.png" &&
            "https://www.clipartmax.com/png/full/59-593346_wind-clipart-weather-symbol-windy-weather-icon.png") ||
          (iconSrc === "http://openweathermap.org/img/w/01n.png" &&
            "https://www.pinclipart.com/picdir/big/5-51451_rising-sun-clipart-portable-network-graphics-png-download.png") ||
          (iconSrc === "http://openweathermap.org/img/w/02n.png" &&
            "https://cdn1.iconfinder.com/data/icons/weather-filled-outline-7/64/Sunny-1024.png") ||
          (iconSrc === "http://openweathermap.org/img/w/03n.png" &&
            "https://cdn1.iconfinder.com/data/icons/weather-filled-outline-7/64/Sunny-1024.png") ||
          (iconSrc === "http://openweathermap.org/img/w/04n.png" &&
            "https://cdn1.iconfinder.com/data/icons/weather-filled-outline-7/64/Sunny-1024.png") ||
          (iconSrc === "http://openweathermap.org/img/w/09n.png" &&
            "https://freepngimg.com/thumb/rain/72581-forecasting-rain-forecast-vector-weather-icon.png") ||
          (iconSrc === "http://openweathermap.org/img/w/10n.png" &&
            "https://cdn1.iconfinder.com/data/icons/weather-filled-outline-7/64/Sunny-1024.png") ||
          (iconSrc === "http://openweathermap.org/img/w/11n.png" &&
            "https://cdn3.iconfinder.com/data/icons/weather-icons-8/512/weather-thunder-rainy-h-1024.png") ||
          (iconSrc === "http://openweathermap.org/img/w/13n.png" &&
            "https://cdn0.iconfinder.com/data/icons/cloudy-2/425/snow-1024.png")
        }
        alt="Weather Icon"
        style={{ height: "150px", marginTop: "40px" }}
      />

      <h3>{weather.main?.temp.toFixed(0)}°</h3>
      <div className="part-area">
        <div>
          <h2>
            <i className="bi bi-brightness-high-fill"></i>UV İndeks
          </h2>
          <p>0°</p>
        </div>
        <div>
          <h2>
            <i className="bi bi-wind"></i>Rüzgar
          </h2>
          <p>{weather.wind?.speed.toFixed(0)} m/s</p>
        </div>
        <div>
          <h2>
            <i className="bi bi-droplet-half"></i>Nem
          </h2>
          <p>{weather.main?.humidity} %</p>
        </div>
      </div>
    </>
  );
}

export default App;
