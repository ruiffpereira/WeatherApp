import {WeatherDetailsProps} from '../types';
import './WeatherDetails.css';

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weatherData }: { weatherData: any }) => {
  
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}h ${minutes}min`;
  };
  
  return (
    <div className='weather-details'>
        <>
          <div className='weather-details__item bg-gray-800 rounded-lg p-4 max-w-[150px] w-full flex-grow'>
            <img className='weather-details__icon' src='./sunrise.png' alt='Weather Sunrise'/>
            <p className='flex flex-col text-center gap-2'>Sunrise <span className='h-[20px]'>{weatherData ? formatTime(weatherData.sys.sunrise) : "--" }</span> </p>
            </div>
          <div className='weather-details__item bg-gray-800 rounded-lg p-4 max-w-[150px] w-full'>
          <img className='weather-details__icon' src='./sunset.png' alt='Weather Sunset'/>
          <p className='flex flex-col text-center gap-2'>Sunset <span className='h-[20px]'>{weatherData ? formatTime(weatherData.sys.sunset) : "--" }</span> </p>
          </div>
        </>
    </div>
  );
};

export default WeatherDetails;