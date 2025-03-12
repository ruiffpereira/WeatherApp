import { WeatherControlsProps } from "../types";
import './WeatherControls.css';

const WeatherControls: React.FC<WeatherControlsProps> = ({ city, unit, loading,  handleCityChange, toggleUnit }) => {
  return (
    <div className='weather-controls'>
      <div className="weather-loader">
        {loading && <span className="loader"></span>}
      </div>
      <select value={city} onChange={handleCityChange}>
        <option value="Lisbon">Lisbon</option>
        <option value="New York">New York</option>
        <option value="London">Tokyo</option>
      </select>
      <div className='unit-switch'>
        <p>°C</p>
        <label className="switch">
          <input type="checkbox" checked={unit === 'imperial'} onChange={toggleUnit} />
          <span className="slider"></span>
        </label>
        <p>°F</p>
      </div>
    </div>
  );
};

export default WeatherControls;