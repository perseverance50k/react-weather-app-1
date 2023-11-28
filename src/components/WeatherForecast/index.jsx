/* eslint-disable react/prop-types */
import "./index.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thirsday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WeatherForecast = ({ data }) => {
  const dayOfWeek = new Date().getDay();
  const forecastDays = weekDays
    .slice(dayOfWeek, weekDays.length)
    .concat(weekDays.slice(0, dayOfWeek));

  console.log(forecastDays);

  return (
    <div className="weather-forecast">
      <label className="title">Daily forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => {
          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      src="weather-icons/sunny.png"
                      className="icon-small"
                      alt="weather"
                    />
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max-temp">
                      {item.main.temp_min} °C / {item.main.temp_max} °C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label className="daily-details-grid-item-label">
                      Pressure
                    </label>
                    <label className="daily-details-grid-item-value">
                      {item.main.pressure} hPa
                    </label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label className="daily-details-grid-item-label">
                      Humidity
                    </label>
                    <label className="daily-details-grid-item-value">
                      {item.main.humidity} %
                    </label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label className="daily-details-grid-item-label">
                      Feels like
                    </label>
                    <label className="daily-details-grid-item-value">
                      {item.main.feels_like} °C
                    </label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label className="daily-details-grid-item-label">
                      Clouds
                    </label>
                    <label className="daily-details-grid-item-value">
                      {item.clouds.all} %
                    </label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default WeatherForecast;
