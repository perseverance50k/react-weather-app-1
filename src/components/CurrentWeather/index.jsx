/* eslint-disable react/prop-types */
import "./index.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="current-weather">
      <div className="top">
        <div className="paragraphs">
          <p className="city-name">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>

        <img
          src="weather-icons/sunny.png"
          className="weather-icon"
          alt="weather"
        />
      </div>
      <div className="bottom">
        <p className="temperature">{data.main.temp} °C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{data.main.feels_like} °C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity} %</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
