export interface WeatherData {
  name: string;
  wind: {
    speed: number;
  };
  main: {
    temp: number;
    
    humidity: number;
    pressure: number;
  };
  weather: {
    icon: string;
  }[];
  sys: {
    sunrise: number;
    sunset: number;
  };
}

export interface WeatherControlsProps {
  city: string;
  loading: boolean;
  unit: 'metric' | 'imperial';
  handleCityChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  toggleUnit: () => void;
}

export interface WeatherInfoProps {
  weatherData: WeatherData | null;
  unit: 'metric' | 'imperial';
}

export interface WeatherDetailsProps {
  weatherData: WeatherData | null;
}

