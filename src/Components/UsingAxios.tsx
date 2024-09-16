
import React, { useState } from 'react';
import { Sun, Cloud, CloudRain, Snowflake } from 'lucide-react'

interface City {
  value: string;
  label: string;
}

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
  wind: {
    speed: number;
  };
}


const cities: City[] = [
  { value: 'london', label: 'London' },
  { value: 'new york', label: 'New York' },
  { value: 'tokyo', label: 'Tokyo' },
  { value: 'paris', label: 'Paris' },
  { value: 'sydney', label: 'Sydney' },
];

const dummyWeatherData: { [key: string]: WeatherData } = {
  london: {
    name: 'London',
    main: { temp: 15, humidity: 70 },
    weather: [{ main: 'Clouds', description: 'scattered clouds' }],
    wind: { speed: 3.5 },
  },
  'new york': {
    name: 'New York',
    main: { temp: 22, humidity: 55 },
    weather: [{ main: 'Clear', description: 'clear sky' }],
    wind: { speed: 2.8 },
  },
  tokyo: {
    name: 'Tokyo',
    main: { temp: 28, humidity: 65 },
    weather: [{ main: 'Rain', description: 'light rain' }],
    wind: { speed: 4.2 },
  },
  paris: {
    name: 'Paris',
    main: { temp: 18, humidity: 60 },
    weather: [{ main: 'Clouds', description: 'broken clouds' }],
    wind: { speed: 3.1 },
  },
  sydney: {
    name: 'Sydney',
    main: { temp: 25, humidity: 50 },
    weather: [{ main: 'Clear', description: 'clear sky' }],
    wind: { speed: 5.7 },
  },
};

const WeatherIcon: React.FC<{ weatherMain: string }> = ({ weatherMain }) => {
  switch (weatherMain.toLowerCase()) {
    case 'clear':
      return <Sun className="h-12 w-12 text-yellow-400" />;
    case 'clouds':
      return <Cloud className="h-12 w-12 text-gray-400" />;
    case 'rain':
      return <CloudRain className="h-12 w-12 text-blue-400" />;
    case 'snow':
      return <Snowflake className="h-12 w-12 text-blue-200" />;
    default:
      return <Sun className="h-12 w-12 text-yellow-400" />;
  }
};


const UsingAxios: React.FC = () => {
    const [selectedCity, setSelectedCity] = useState<string>('london');
  
    const weatherData = dummyWeatherData[selectedCity];
  
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Weather App</h1>
          <div className="mb-4">
            <select
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {cities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>
          </div>
          {weatherData && (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{weatherData.name}</h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <div className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <div className="flex items-center">
                      <div>
                        <p className="text-3xl font-bold text-gray-900">{Math.round(weatherData.main.temp)}°C</p>
                        <p className="mt-1 text-sm text-gray-500">{weatherData.weather[0].description}</p>
                      </div>
                      <div className="ml-4">
                        <WeatherIcon weatherMain={weatherData.weather[0].main} />
                      </div>
                    </div>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Humidity</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{weatherData.main.humidity}%</dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Wind Speed</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{weatherData.wind.speed} m/s</dd>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };


export default UsingAxios