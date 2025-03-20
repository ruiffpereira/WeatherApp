import { render, fireEvent, screen } from '@testing-library/react';
import WeatherControls from './WeatherControls';
import { WeatherControlsProps } from '../types';

const defaultProps: WeatherControlsProps = {
  city: 'Lisbon',
  unit: 'metric',
  loading: false,
  handleCityChange: jest.fn(),
  toggleUnit: jest.fn(),
};

test('renders WeatherControls component', () => {
  render(<WeatherControls {...defaultProps} />);
  expect(screen.getByText('Lisbon')).toBeInTheDocument();
  expect(screen.getByRole('checkbox')).toBeInTheDocument();
});

test('calls handleCityChange on city change', () => {
  const handleCityChange = jest.fn();
  render(<WeatherControls {...defaultProps} handleCityChange={handleCityChange} />);
  
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'New York' } });
  expect(handleCityChange).toHaveBeenCalled();

  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Lisbon' } });
  expect(handleCityChange).toHaveBeenCalled();

  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'London' } });
  expect(handleCityChange).toHaveBeenCalled();
});

test('calls toggleUnit on unit change', () => {
  const toggleUnit = jest.fn();
  render(<WeatherControls {...defaultProps} toggleUnit={toggleUnit} />);
  fireEvent.click(screen.getByRole('checkbox'));
  expect(toggleUnit).toHaveBeenCalled();
});