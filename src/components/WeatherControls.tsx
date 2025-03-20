import { WeatherControlsProps } from "../types";
import './WeatherControls.css';

const WeatherControls: React.FC<WeatherControlsProps> = ({ city, unit, loading,  handleCityChange, toggleUnit }) => {
  return (
    <div className='weather-controls mb-6'>
      <select className={`${loading && 'pointer-events-none'}`} value={city} onChange={handleCityChange}>
        <option value="Lisbon">Lisbon</option>
        <option value="New York">New York</option>
        <option value="Tokyo">Tokyo</option>
      </select>
      <div className='unit-switch text-white'>
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