import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] = useState("Ankara");
  const [weather, setWeather] = useState({});
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&APPID=fc3938bd900b0a913f13e3d97962a5e1`
      )
      .then((response) => {
        setWeather(response.data);
        console.log(response.data.weather?.[0].main); // Kontrol amaçlı
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [selectedCity]);

  const handleSearchClick = () => {
    setIsActive(!isActive);
  };
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
          className={isActive ? "active" : ""}
        />
        <i
          className={`bi bi-search ${isActive ? "active" : ""}`}
          onClick={handleSearchClick}
        ></i>
      </div>

      <h1>{selectedCity}</h1>
      <img src={iconSrc} alt="Weather Icon" />

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
