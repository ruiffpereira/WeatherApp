import logo from './logo.png';
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
  
  useEffect(() => {
    setLoading(true);
    setWeatherData(null);
    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_APIKEY; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data)
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      });
  }, [city, unit]);

  const toggleUnit = () => {
    setUnit(prevUnit => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value);
  };

  return (
    
    <div className="weather-app">
      <header className="weather-header">
        <img className='icon-logo' src={logo} alt="Logo" />
        <h1 className='weather-title'>Weather App</h1>
      </header>
      <div className='weather-content'>
        <div className='weather-container'>
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
      </div>
    </div>
  );
}


export default App;
