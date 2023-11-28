const url = "https://api.openweathermap.org/data/2.5/";
const apiKey = "b260a3cb88636e94f10f7250295b4b20";

const getCurrentWeather = async (lat, lon) => {
  const targetUrl =
    url + `weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(targetUrl);
    const result = await response.json();
    console.log("Open Weather Map API: " + JSON.stringify(result));

    return result;
  } catch (error) {
    console.error(error);

    throw new Error(error);
  }
};

const getWeatherForecast = async (lat, lon) => {
  const targetUrl =
    url + `forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(targetUrl);
    const result = await response.json();
    console.log("Open Weather Map API: " + JSON.stringify(result));

    return result;
  } catch (error) {
    console.error(error);

    throw new Error(error);
  }
};

export { getCurrentWeather, getWeatherForecast };
