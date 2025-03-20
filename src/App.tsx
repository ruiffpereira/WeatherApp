import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { WeatherData } from './types';
import WeatherControls from './components/WeatherControls';
import WeatherDetails from './components/WeatherDetails';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [city, setCity] = useState<string>('Lisbon');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    setLoading(true);
    setWeatherData(null);
    setError(null);
    const apiKey = import.meta.env.VITE_OPENWEATHERMAP_APIKEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    console.log('apiKey: ', apiKey);

    fetch(url)
      .then(response => {
        if (!response.ok) {
          setError("Couldn't fetch weather data. Please try again.");
        }
        return response.json();
      })
      .then(data => {
        setWeatherData(data)
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [city, unit]);

  const toggleUnit = () => {
    setUnit(prevUnit => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value);
  };
  
  console.log('error: ', error);
  return (
    <div className="weather-app grid place-items-center h-full bg-gray-800 p-4 overflow-auto">
        {error ? (
        <div className=" text-white text-2xl font-bold text-center p-4">{error}</div>
      ) : (
        <div className='weather-container max-w-xl w-full p-8 shadow-lg rounded-lg bg-gray-900'>
          <WeatherControls
            city={city}
            unit={unit}
            loading={loading}
            handleCityChange={handleCityChange}
            toggleUnit={toggleUnit}
          />
          <WeatherInfo weatherData={weatherData} unit={unit} />
          <WeatherDetails weatherData={weatherData} />
        </div>
      )}
    </div>
  );
}


export default App;
