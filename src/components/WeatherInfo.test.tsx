import { render, screen } from '@testing-library/react';
import WeatherInfo from './WeatherInfo';
import { WeatherInfoProps } from '../types';

const defaultProps: WeatherInfoProps = {
  weatherData: {
    name: 'Lisbon',
    wind: { speed: 10 },
    main: { temp: 20, humidity: 50, pressure: 1013 },
    weather: [{ icon: '01d' }],
    sys: { sunrise: 1627898400, sunset: 1627948800 },
  },
  unit: 'metric',
};

test('renders WeatherInfo component', () => {
  render(<WeatherInfo {...defaultProps} />);
  expect(screen.getByText((content, element) => content.includes('20ºC'))).toBeInTheDocument();
  expect(screen.getByAltText('Weather Icon')).toBeInTheDocument();
});

test('renders WeatherInfo component with imperial units', () => {
  render(<WeatherInfo {...defaultProps} unit="imperial" />);
  expect(screen.getByText((content, element) => content.includes('20ºF'))).toBeInTheDocument();
});