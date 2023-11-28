import { useState } from "react";
import "./App.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import { openWeatherMapApi } from "../api";
import WeatherForecast from "./WeatherForecast";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);

  const onSearchChangeHandler = async (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");
    const weather = await openWeatherMapApi.getCurrentWeather(
      latitude,
      longitude
    );

    setCurrentWeather({ city: searchData.label, ...weather });

    const forecast = await openWeatherMapApi.getWeatherForecast(
      latitude,
      longitude
    );

    setWeatherForecast({ city: searchData.lavel, ...forecast });
  };

  return (
    <div className="container">
      <Search onSearchChange={onSearchChangeHandler} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {weatherForecast && <WeatherForecast data={weatherForecast} />}
    </div>
  );
};

export default App;
