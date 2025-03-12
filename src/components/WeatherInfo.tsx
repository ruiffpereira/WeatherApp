import { WeatherInfoProps } from "../types";
import './WeatherInfo.css';

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weatherData, unit }) => {
  return (
    <div className='weather-info'>
        <p className="weather-metric">
      {weatherData && weatherData.main.temp !== undefined ? (
          `${Math.floor(weatherData.main.temp)}${unit === 'metric' ? 'ºC' : 'ºF'}`
        ) : "--"}
        </p>
            <div className="weather-logo">
        {weatherData && weatherData.weather[0] && (
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />
        )}
      </div>
    </div>
  );
};

export default WeatherInfo;