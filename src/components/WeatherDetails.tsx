import {WeatherDetailsProps} from '../types';
import './WeatherDetails.css';

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weatherData }) => {
  
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}h ${minutes}min`;
  };
  
  return (
    <div className='weather-details'>
        <>
          <div className='weather-details__item'>
            <img className='weather-details__icon' src='./sunrise.png' alt='Weather Sunrise'/>
            <p>Sunrise: {weatherData ? <span>{formatTime(weatherData.sys.sunrise)}</span> : "--" }</p>
          </div>
          <div className='weather-details__item'>
          <img className='weather-details__icon' src='./sunset.png' alt='Weather Sunset'/>
          <p>Sunset: {weatherData ? <span>{formatTime(weatherData.sys.sunset)}</span> : "--" }</p>
          </div>
        </>
    </div>
  );
};

export default WeatherDetails;