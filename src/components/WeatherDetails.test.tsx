import { render, screen } from '@testing-library/react';
import WeatherDetails from './WeatherDetails';
import { WeatherDetailsProps } from '../types';

const defaultProps: WeatherDetailsProps = {
  weatherData: {
    name: 'Lisbon',
    wind: { speed: 10 },
    main: { temp: 20, humidity: 50, pressure: 1013 },
    weather: [{ icon: '01d' }],
    sys: { sunrise: 1627898400, sunset: 1627948800 },
  },
};

test('renders WeatherDetails component', () => {
  render(<WeatherDetails {...defaultProps} />);
  expect(screen.getByText('Sunrise:')).toBeInTheDocument();
  expect(screen.getByText('11h 0min')).toBeInTheDocument();
  expect(screen.getByText('Sunset:')).toBeInTheDocument();
  expect(screen.getByText('1h 0min')).toBeInTheDocument();
});